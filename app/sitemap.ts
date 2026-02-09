import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stanbros.in";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/mobile`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    {
      url: `${base}/lads-and-looms`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    { url: `${base}/shoe-shop`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
