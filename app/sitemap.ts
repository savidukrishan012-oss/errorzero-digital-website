import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zyraxe.com";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/services`, lastModified },
    { url: `${baseUrl}/work`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
  ];
}
