import { NextRequest, NextResponse } from 'next/server';
import { generateSitemapIndexGenerator, generateSitemapGenerator } from 'utils/generateSitemap';
import { pages } from 'lib/defaultData/pages';
import { siteConfig, baseUrl } from 'lib/defaultData/siteConfig';

export async function GET(req: NextRequest) {
  // Sitemap Configurations
  const sitemapConfigurations = siteConfig.sitemaps;

  // Generate sitemap entries for each type in sitemapConfigurations
  const sitemaps = sitemapConfigurations.map((config) => {
    // Filter pages or routes based on the sitemap type
    let entries: { path: string; changefreq: string; priority: string }[];

    if (config.type === 'page') {
      entries = pages.map(page => ({
        path: page.path,
        changefreq: 'weekly', // or dynamically set this value based on your logic
        priority: '0.8', // or dynamically set this value based on your logic
      }));
    } else if (config.type === 'blog') {
      // Assuming you have a way to get blog entries
      // Replace this with actual blog fetching logic
      const blogEntries = [
        { path: '/blog/post-1', changefreq: 'daily', priority: '0.9' },
        { path: '/blog/post-2', changefreq: 'daily', priority: '0.9' },
        // Add more blog entries here
      ];
      entries = blogEntries;
    } else {
      entries = [];
    }

    // Generate the sitemap XML content for the current type
    const sitemapContent = generateSitemapGenerator(baseUrl, entries);

    // Save or handle the generated sitemapContent as needed
    // For example, you might save it to a file or serve it through an API
    console.log(`Generated sitemap for type ${config.type}:`, sitemapContent);

    return { fileName: `${config.fileName}-en-1.xml` }; // Adjust locale and numbering as needed
  });

  // Generate sitemap index XML content
  const sitemapIndexContent = generateSitemapIndexGenerator(baseUrl, sitemaps);

  // Return the sitemap index content as XML response
  return new NextResponse(sitemapIndexContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
