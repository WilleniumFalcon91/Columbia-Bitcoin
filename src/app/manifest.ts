import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Columbia, SC Bitcoin",
    short_name: "Columbia Bitcoin",
    description: "Free monthly Bitcoin meetup in Columbia, SC",
    start_url: "/",
    display: "standalone",
    background_color: "#131820",
    theme_color: "#f7931a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
