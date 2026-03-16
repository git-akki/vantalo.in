import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vantalo.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/services`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/services/social-media`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/services/web-development`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/services/ai-automation`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/industries/coaches`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/industries/educators`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/work`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-15") },
    { url: `${baseUrl}/about/akash-yadav`, lastModified: new Date("2026-03-15") },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-03-15") },
    { url: `${baseUrl}/faq`, lastModified: new Date("2026-03-16") },
    { url: `${baseUrl}/tools/website-grader`, lastModified: new Date("2026-03-15") },
    { url: `${baseUrl}/terms`, lastModified: new Date("2026-03-15") },
    { url: `${baseUrl}/privacy`, lastModified: new Date("2026-03-15") },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date("2026-03-16"),
  }));

  return [...staticRoutes, ...projectRoutes];
}
