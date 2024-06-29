export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.rsrichsoul.com/"
    : "https://localhost:6307/";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://rsrichsoul.com/"
    : "http://localhost:3000/";

export const siteConfig = {
  headerLinks: [
    { path: "/", label: "Ana Sayfa" },
    { path: "/dashboard", label: "Dashboard" },
  ],
  footerLinks: [
    { path: "/about", label: "Hakkımızda" },
    { path: "/contact", label: "İletişim" },
  ],
  sitemapBasePath: "/sitemap/",
  sitemaps: [
    {
      type: "blog",
      fileName: "blog-sitemap",
      pathRule: "{fileName}-{locale}-{number}.xml",
      maxEntries: 10000,
    },
    {
      type: "page",
      fileName: "pages-sitemap",
      pathRule: "{fileName}-{locale}-{number}.xml",
      maxEntries: 10000,
    },
    {
      type: "product",
      fileName: "products-sitemap",
      pathRule: "{fileName}-{locale}-{number}.xml",
      maxEntries: 10000,
    },
    {
      type: "topic",
      fileName: "topics-sitemap",
      pathRule: "{fileName}-{locale}-{number}.xml",
      maxEntries: 10000,
    },
  ],
};
