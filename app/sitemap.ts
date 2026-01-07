import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zyraxe.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      priority: 0.8,
    },
  ];
}
