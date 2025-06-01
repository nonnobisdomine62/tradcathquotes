import { NextResponse } from 'next/server';
import { siteConfig } from '../../utils/config';

export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${siteConfig.url}/sitemap.xml

# Optimize crawling
Crawl-delay: 1
`.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 