# Sitemap & Robots.txt Configuration Guide

## When Converting to Next.js

### 1. XML Sitemap (public/sitemap.xml)

Create a sitemap.xml file in your public directory or use Next.js dynamic sitemap generation.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://teasymarketing.com</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Service Pages -->
  <url>
    <loc>https://teasymarketing.com/adult-seo</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/adult-social-media</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/adult-website-design</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/adult-email-marketing</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/adult-content-marketing</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/adult-pr</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Case Studies -->
  <url>
    <loc>https://teasymarketing.com/case-study-1</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/case-study-2</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/case-study-3</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- About & Contact -->
  <url>
    <loc>https://teasymarketing.com/about</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/contact</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog -->
  <url>
    <loc>https://teasymarketing.com/blog</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://teasymarketing.com/blog/adult-seo-guide-2025</loc>
    <lastmod>2025-11-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

### 2. Robots.txt (public/robots.txt)

```txt
# Robots.txt for TEASY Adult Marketing Agency

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://teasymarketing.com/sitemap.xml
```

### 3. Next.js Dynamic Sitemap Generation

If you convert to Next.js 13+, create an API route for dynamic sitemap:

**app/sitemap.ts** (Next.js App Router):

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://teasymarketing.com'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Service pages
    {
      url: `${baseUrl}/adult-seo`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adult-social-media`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adult-website-design`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adult-email-marketing`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adult-content-marketing`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adult-pr`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Case studies
    {
      url: `${baseUrl}/case-study-1`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-study-2`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-study-3`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Other pages
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/adult-seo-guide-2025`,
      lastModified: new Date('2025-11-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

## Submitting Your Sitemap

1. **Google Search Console**: Submit your sitemap at https://search.google.com/search-console
2. **Bing Webmaster Tools**: Submit at https://www.bing.com/webmasters
3. Verify sitemap access by visiting: https://teasymarketing.com/sitemap.xml

## Important Notes for Adult Content

- Adult websites may face stricter crawling and indexing policies
- Ensure SafeSearch labeling is properly configured
- Consider age verification implementation
- Monitor Google Search Console for any manual actions or warnings
- Some search engines may filter adult content from SafeSearch results automatically