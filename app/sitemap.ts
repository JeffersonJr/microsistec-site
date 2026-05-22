import { MetadataRoute } from "next";

export const revalidate = 3600; // revalida a cada hora

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://microsistec.com.br";

  const routes = [
    "",
    "/sobre",
    "/blog",
    "/contato",
    "/produtos/crm",
    "/produtos/app",
    "/produtos/sites-v8",
    "/produtos/filial",
    "/produtos/integracao",
    "/produtos/albert",
    "/teste-gratis",
    "/agendar-demo",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogPosts = [
    { slug: "/blog/reducir-cac", lastModified: "2024-09-10" },
    { slug: "/blog/automacao-followup", lastModified: "2024-08-25" },
    { slug: "/blog/seo-imobiliario", lastModified: "2024-08-12" },
  ].map((p) => ({
    url: `${baseUrl}${p.slug}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
