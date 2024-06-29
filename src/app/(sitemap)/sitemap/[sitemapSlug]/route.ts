import { NextRequest, NextResponse } from 'next/server';
import { siteConfig, baseUrl } from 'lib/defaultData/siteConfig';
import { generateSitemapGenerator } from 'utils/generateSitemap';

export async function GET(req: NextRequest, { params }: { params: { sitemapSlug: string } }) {
  const sitemapConfig = siteConfig.sitemaps.find(s => s.fileName.includes(params.sitemapSlug));
  if (!sitemapConfig) {
    return new NextResponse('Sitemap not found', { status: 404 });
  }

  let entries: { path: string; changefreq: string; priority: string; lastmod?: string }[] = [];

  if (sitemapConfig.type === 'blog') {
    // Fetch blog entries from your database or API
    entries = [
      { path: '/blog/post-1', changefreq: 'daily', priority: '0.9' },
      { path: '/blog/post-2', changefreq: 'daily', priority: '0.9' },
      // Add more blog entries here
    ];
  } else if (sitemapConfig.type === 'page') {
    // Fetch page entries from your database or API
    entries = [
      { path: '/', changefreq: 'weekly', priority: '0.8' },
      { path: '/dashboard', changefreq: 'weekly', priority: '0.8' },
      // Add more page entries here
    ];
  } else if (sitemapConfig.type === 'product') {
    // Fetch product entries from your database or API
    entries = [
      { path: '/product/1', changefreq: 'daily', priority: '0.9' },
      { path: '/product/2', changefreq: 'daily', priority: '0.9' },
      // Add more product entries here
    ];
  } else if (sitemapConfig.type === 'topic') {
    // Fetch topic entries from your database or API
    entries = [
      { path: '/topic/1', changefreq: 'daily', priority: '0.9' },
      { path: '/topic/2', changefreq: 'daily', priority: '0.9' },
      // Add more topic entries here
    ];
  }

  const sitemapContent = generateSitemapGenerator(baseUrl, entries);

  return new NextResponse(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
