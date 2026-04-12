export type LumaEvent = {
  title: string;
  date: string;       // e.g. "Saturday, April 26, 2026"
  time: string;       // e.g. "3:00 PM – 5:00 PM EDT"
  locationName: string;
  address: string;
  description: string;
  url: string;
};

// Real event details — used as fallback when API key is absent or fetch fails
export const FALLBACK_EVENT: LumaEvent = {
  title: "Columbia, SC Bitcoin Meetup",
  date: "Saturday, April 25, 2026",
  time: "3:00 PM – 5:00 PM EDT",
  locationName: "Savage Craft Ale Works",
  address: "430 Center St, West Columbia, SC 29169",
  description:
    "A casual monthly meetup focused on Bitcoin as a store of value, medium of exchange, and the separation of money and state. We meet on the rooftop. Come build community, grow a circular economy, and make safe peer-to-peer trades.",
  url: "https://lu.ma/iquvfaa5",
};

const LUMA_EVENT_SLUG = "iquvfaa5";

function formatLumaDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
}

function formatLumaTime(startIso: string, endIso: string): string {
  const opts: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  };
  const start = new Date(startIso).toLocaleTimeString("en-US", opts);
  const end = new Date(endIso).toLocaleTimeString("en-US", opts);
  // Only show timezone once, on the end time
  return `${start.replace(/ [A-Z]+$/, "")} – ${end}`;
}

export async function fetchLumaEvent(): Promise<LumaEvent> {
  const apiKey = process.env.LUMA_API_KEY;
  if (!apiKey) {
    return FALLBACK_EVENT;
  }

  try {
    const res = await fetch(
      `https://api.lu.ma/public/v1/event/get?event_slug=${LUMA_EVENT_SLUG}`,
      {
        headers: { "x-luma-api-key": apiKey },
        next: { revalidate: 3600 }, // refresh every hour
      }
    );

    if (!res.ok) {
      console.warn(`[luma] API returned ${res.status} — using fallback`);
      return FALLBACK_EVENT;
    }

    type LumaGeoAddress = {
      address?: string;
      city?: string;
      region?: string;
      postal_code?: string;
      place_id?: string;
      name?: string;
    };
    type LumaApiEvent = {
      name?: string;
      start_at?: string;
      end_at?: string;
      description?: string;
      url?: string;
      geo_address_json?: LumaGeoAddress;
    };
    type LumaApiResponse = { event?: LumaApiEvent };

    const json = await res.json() as LumaApiResponse;
    const ev = json?.event;

    if (!ev) return FALLBACK_EVENT;

    const geo = ev.geo_address_json ?? {};
    const addressParts = [
      geo.address,
      geo.city,
      geo.region,
      geo.postal_code,
    ].filter(Boolean);

    return {
      title: ev.name ?? FALLBACK_EVENT.title,
      date: ev.start_at ? formatLumaDate(ev.start_at) : FALLBACK_EVENT.date,
      time:
        ev.start_at && ev.end_at
          ? formatLumaTime(ev.start_at, ev.end_at)
          : FALLBACK_EVENT.time,
      locationName: ev.geo_address_json?.place_id
        ? (geo.name ?? FALLBACK_EVENT.locationName)
        : FALLBACK_EVENT.locationName,
      address:
        addressParts.length > 0
          ? addressParts.join(", ")
          : FALLBACK_EVENT.address,
      description: ev.description ?? FALLBACK_EVENT.description,
      url: ev.url ?? FALLBACK_EVENT.url,
    };
  } catch (err) {
    console.warn("[luma] fetch failed — using fallback:", err);
    return FALLBACK_EVENT;
  }
}
