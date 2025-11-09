import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const robots = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /*?*

Sitemap: https://blogora.example.com/sitemap.xml

# Host
Host: https://blogora.example.com

# Google AdSense
User-agent: Mediapartners-Google
Allow: /

# Googlebot
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Slurp
User-agent: Slurp
Allow: /
Crawl-delay: 1

# Ensure proper indexing for AdSense
User-agent: AdsBot-Google
Allow: /

# Mobile crawlers
User-agent: Googlebot-Mobile
Allow: /

User-agent: AdsBot-Google-Mobile
Allow: /

# Image crawling
User-agent: Googlebot-Image
Allow: /

# Video crawling
User-agent: Googlebot-Video
Allow: /

# Clean URLs
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term

# Crawl budget optimization
Visit-time: 02:00-06:00`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}