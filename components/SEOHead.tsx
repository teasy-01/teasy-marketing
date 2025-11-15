import { useEffect } from 'react';

const faviconImage = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect fill="%2300A5DF" width="32" height="32" rx="4"/><text x="50%" y="50%" font-size="18" font-weight="bold" fill="white" text-anchor="middle" dy=".3em">T</text></svg>';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string;
}

export function SEOHead({
  title,
  description,
  canonical = 'https://teasymarketing.com',
  ogImage = 'https://teasymarketing.com/og-image.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords
}: SEOHeadProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Set favicon
    const setFavicon = (href: string, sizes?: string, type?: string) => {
      const rel = sizes ? 'icon' : 'shortcut icon';
      let linkElement = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`) as HTMLLinkElement;
      
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = rel;
        if (sizes) linkElement.setAttribute('sizes', sizes);
        if (type) linkElement.type = type;
        document.head.appendChild(linkElement);
      }
      linkElement.href = href;
    };

    // Set favicons
    setFavicon(faviconImage);
    setFavicon(faviconImage, '32x32', 'image/png');
    setFavicon(faviconImage, '16x16', 'image/png');

    // Set Apple Touch Icon
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = faviconImage;

    // Set theme color
    setMetaTag('theme-color', '#00A5DF');

    // Basic Meta Tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    setMetaTag('author', author || 'TEASY - Adult Industry Marketing Agency');

    // Open Graph Tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'TEASY', true);

    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Article specific tags
    if (ogType === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true);
      }
      if (author) {
        setMetaTag('article:author', author, true);
      }
    }

    // Set canonical link
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.rel = 'canonical';
      document.head.appendChild(linkElement);
    }
    linkElement.href = canonical;

  }, [title, description, canonical, ogImage, ogType, publishedTime, modifiedTime, author, keywords]);

  return null;
}