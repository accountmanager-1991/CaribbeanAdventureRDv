import type { MetadataRoute } from "next";

const SITE_URL = "https://www.caribbeanadventurerd.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The booking endpoint accepts POST only; nothing for a crawler to index.
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
