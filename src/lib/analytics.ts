import { track } from "@vercel/analytics";

// ─── GA4 gtag type augmentation ───────────────────────────────────────────────
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js" | "set",
      targetOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// ─── Event Name Constants ─────────────────────────────────────────────────────
export const EVENTS = {
  CTA_CLICK:           "cta_click",
  DONATION_ACTION:     "donation_action",
  FORM_START:          "form_start",
  FORM_SUBMIT:         "form_submit",
  FORM_SUCCESS:        "form_success",
  FORM_ERROR:          "form_error",
  OUTBOUND_LINK:       "outbound_link",
  RESOURCE_ENGAGE:     "resource_engage",
  SEARCH_QUERY:        "search_query",
  SEARCH_RESULT_CLICK: "search_result_click",
  SCROLL_DEPTH:        "scroll_depth",
  NAV_SEARCH_OPEN:     "nav_search_open",
  NAV_MENU_OPEN:       "nav_menu_open",
  NAV_LINK_CLICK:      "nav_link_click",
} as const;

// ─── Parameter Interfaces ─────────────────────────────────────────────────────

export interface CtaClickParams {
  label: string;
  section: string;
  url: string;
}

export interface DonationActionParams {
  action: "amount_select" | "open_wallet" | "copy_address" | "copy_bip47";
  value?: number;
  label?: string;
}

export interface FormParams {
  form_id: "contact";
  error_message?: string;
}

export interface OutboundLinkParams {
  url: string;
  label: string;
  section: string;
}

export interface ResourceEngageParams {
  title: string;
  category: string;
  url: string;
}

export interface SearchQueryParams {
  query: string;
  result_count: number;
}

export interface SearchResultClickParams {
  title: string;
  href: string;
  category: string;
  position: number;
}

export interface ScrollDepthParams {
  milestone: 25 | 50 | 75 | 90;
  page_path: string;
}

export interface NavSearchOpenParams {
  source: "keyboard" | "click";
}

export interface NavLinkClickParams {
  label: string;
  href: string;
  section: string;
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

type SerializableParams = Record<string, string | number | boolean | null | undefined>;

function sendGA4<T extends object>(eventName: string, params: T): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params as unknown as SerializableParams);
}

function sendVercel<T extends object>(eventName: string, params: T): void {
  track(eventName, params as unknown as SerializableParams);
}

// ─── Public tracking functions ────────────────────────────────────────────────

export function trackCtaClick(params: CtaClickParams): void {
  sendGA4(EVENTS.CTA_CLICK, params);
  if (params.label === "RSVP on Luma" || params.label === "Donate ⚡") {
    sendVercel(EVENTS.CTA_CLICK, params);
  }
}

export function trackDonationAction(params: DonationActionParams): void {
  sendGA4(EVENTS.DONATION_ACTION, params);
  if (params.action === "open_wallet" || params.action === "copy_address") {
    sendVercel(EVENTS.DONATION_ACTION, params);
  }
}

export function trackFormStart(params: FormParams): void {
  sendGA4(EVENTS.FORM_START, params);
}

export function trackFormSubmit(params: FormParams): void {
  sendGA4(EVENTS.FORM_SUBMIT, params);
}

export function trackFormSuccess(params: FormParams): void {
  sendGA4(EVENTS.FORM_SUCCESS, params);
  sendVercel(EVENTS.FORM_SUCCESS, params);
}

export function trackFormError(params: FormParams): void {
  sendGA4(EVENTS.FORM_ERROR, params);
}

export function trackOutboundLink(params: OutboundLinkParams): void {
  sendGA4(EVENTS.OUTBOUND_LINK, params);
  if (params.section === "resource_card" || params.section === "contact_channels") {
    sendVercel(EVENTS.OUTBOUND_LINK, params);
  }
}

export function trackResourceEngage(params: ResourceEngageParams): void {
  sendGA4(EVENTS.RESOURCE_ENGAGE, params);
}

export function trackSearchQuery(params: SearchQueryParams): void {
  sendGA4(EVENTS.SEARCH_QUERY, params);
}

export function trackSearchResultClick(params: SearchResultClickParams): void {
  sendGA4(EVENTS.SEARCH_RESULT_CLICK, params);
}

export function trackScrollDepth(params: ScrollDepthParams): void {
  sendGA4(EVENTS.SCROLL_DEPTH, params);
}

export function trackNavSearchOpen(params: NavSearchOpenParams): void {
  sendGA4(EVENTS.NAV_SEARCH_OPEN, params);
}

export function trackNavMenuOpen(): void {
  sendGA4(EVENTS.NAV_MENU_OPEN, {});
}

export function trackNavLinkClick(params: NavLinkClickParams): void {
  sendGA4(EVENTS.NAV_LINK_CLICK, params);
}
