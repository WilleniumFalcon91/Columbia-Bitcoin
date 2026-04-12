# CLAUDE.md — Next.js Landing Site Template

## Project Type

Single-page or multi-section community/event landing site built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Deployed on Vercel.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 App Router | ISR for external data, server components by default, built-in OG image, sitemap, robots |
| Language | TypeScript (strict) | Type safety for API responses; always define types, never use `any` |
| Styling | Tailwind CSS v3 + CSS custom properties | Design tokens in `:root` / `.dark`, extended in `tailwind.config.ts` |
| Fonts | `next/font/google` | Zero CLS, self-hosted, no external network request at runtime |
| Icons | `lucide-react` | Consistent, tree-shakeable icon set |
| Analytics | `@vercel/analytics` + Google Analytics | Vercel Analytics for real user metrics; GA via `next/script afterInteractive` |
| OG Image | `next/og` (`ImageResponse`) | Edge-rendered — keep styles inline, no Tailwind classes or external CSS |
| Deployment | Vercel | ISR, edge OG image, analytics integration, automatic CI from GitHub push |

---

## Architecture

### Rendering Strategy

- **Pages with external data**: ISR with `export const revalidate = 3600` (or appropriate interval). Fetch server-side at build/revalidation time — users never wait.
- **Components**: Server Components by default. Add `"use client"` only when interactivity is required (state, effects, browser APIs, event listeners).
- **Theme**: Applied via `document.documentElement.classList` toggle. A blocking inline `<script>` in `layout.tsx` reads `localStorage` and sets the `dark` class before React hydrates — eliminates flash of wrong theme.

### Design Token System

All colors are CSS custom properties in `globals.css`:

```css
:root { --primary: #...; --background: ...; --foreground: ...; /* etc */ }
.dark { /* overrides */ }
```

Tailwind reads these via `tailwind.config.ts` using `var(--token-name)`. Do **not** hardcode colors in components — use Tailwind semantic classes (`text-primary`, `bg-card`, `border-border`).

Do not copy unused tokens from shadcn or other templates (e.g. `--chart-*`, `--sidebar-*`). Only keep what is actually used.

---

## Key Patterns

### External API with Typed Response and Fallback

Always define types for API responses. Always export a `FALLBACK_*` constant with real hardcoded data so the site works without API keys or when the API is down.

```ts
type ApiItem = { name?: string; date?: string; /* ... */ };
type ApiResponse = { item?: ApiItem };

const FALLBACK_ITEM: SiteData = {
  title: "Hardcoded fallback",
  // ...real values...
};

export async function fetchData(): Promise<SiteData> {
  if (!process.env.API_KEY) return FALLBACK_ITEM;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_ITEM;
    const json = await res.json() as ApiResponse;
    return mapToSiteData(json.item) ?? FALLBACK_ITEM;
  } catch {
    return FALLBACK_ITEM;
  }
}
```

### Client-Side Polling Hook

```ts
const API_URL = "https://api.example.com/..."; // named constant, never inline

function usePolledData() {
  const [data, setData] = useState<DataType | null>(null);
  useEffect(() => {
    const fetch = async () => { /* fetch, setData */ };
    fetch();
    const interval = setInterval(fetch, 60_000);
    return () => clearInterval(interval);
  }, []);
  return data;
}
```

### Memoized Event Listeners

```ts
const onScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
useEffect(() => {
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [onScroll]);
```

### Form with Error State

```ts
const [sending, setSending] = useState(false);
const [sent, setSent] = useState(false);
const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);
  setError(null);
  try {
    await submitForm(form);
    setSent(true);
  } catch {
    setError("Something went wrong. Please try again.");
  } finally {
    setSending(false);
  }
};
```

---

## Layout Setup (`layout.tsx`)

```tsx
import { SomeFont } from "next/font/google";

const font = SomeFont({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={font.variable}>
      <head>
        {/* Blocking: apply saved theme before React hydrates to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html:
          `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&d)){document.documentElement.classList.add('dark');}})();`
        }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Environment Variables

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical URL for OG metadata, sitemap, robots |
| `API_KEY` (project-specific) | Server-only | External data API authentication |

Site should work without any API keys by falling back to hardcoded data.

---

## Performance Standards

- First Load JS: target under 120 kB; verify after each significant dependency addition
- No `.babelrc` — SWC compiler must stay enabled
- Fonts via `next/font/google` only — no `@import url(...)` in CSS
- `next/image` for all external images
- ISR revalidation on all server-fetched external data
- Security headers in `next.config.mjs`:

```js
async headers() {
  return [{
    source: "/(.*)",
    headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-XSS-Protection", value: "1; mode=block" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ],
  }];
}
```

---

## Accessibility Checklist

- `aria-live="polite"` on any dynamically updating content (live prices, counters)
- `aria-label` on icon-only buttons
- `suppressHydrationWarning` on `<html>` when theme class is toggled server/client
- External links: `target="_blank" rel="noopener noreferrer"`

---

## What NOT to Do

- Do not add `.babelrc` — it disables SWC and inflates bundle size
- Do not use `@import url(...)` in CSS for fonts — use `next/font/google`
- Do not hardcode colors as hex in components — use Tailwind design tokens
- Do not use `any` in TypeScript — define API response types inline or at module level
- Do not copy unused CSS variables from templates (shadcn `--chart-*`, `--sidebar-*`, etc.)
- Do not use `dangerouslySetInnerHTML` except for: JSON-LD script tags (server-only data) and the theme blocking script (no user data)
- Do not add Suspense boundaries to ISR pages — the fetch runs at build/revalidation time, not per-request

---

## Useful Claude Code Skills for This Stack

- **`vercel-plugin:nextjs`** — App Router patterns, rendering strategy, `next/font` migration
- **`vercel-plugin:react-best-practices`** — `useCallback`, client component hygiene
- **`vercel-plugin:deploy`** — Vercel deployment status and logs
- **`vercel-plugin:env-vars`** — Managing environment variables
- **`commit-commands:commit`** — Structured commit workflow
- **`frontend-design:frontend-design`** — UI component design patterns
