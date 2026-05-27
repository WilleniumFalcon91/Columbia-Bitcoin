"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/react";

function beforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  return { ...event, url: event.url.replace(/[?&]email=[^&]*/g, "") };
}

export default function AnalyticsProvider() {
  return <Analytics beforeSend={beforeSend} />;
}
