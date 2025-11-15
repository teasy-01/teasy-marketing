import { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
  id?: string;
}

export function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.text = JSON.stringify(data);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data, id]);

  return null;
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TEASY Marketing",
    "description": "Premium marketing agency specializing in adult industry SEO, social media, content marketing, and digital strategy.",
    "url": "https://teasymarketing.com",
    "logo": "https://teasymarketing.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/teasy",
      "https://linkedin.com/company/teasy"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return <StructuredData data={schema} id="organization" />;
}

// Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": "TEASY"
    },
    "description": description,
    "areaServed": "Worldwide",
    "url": url
  };

  return <StructuredData data={schema} id={`service-${name.toLowerCase().replace(/\s+/g, '-')}`} />;
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredData data={schema} id="faq" />;
}

// Article Schema
interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

export function ArticleSchema({ 
  headline, 
  description, 
  image, 
  datePublished, 
  dateModified, 
  author,
  url 
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "TEASY",
      "logo": {
        "@type": "ImageObject",
        "url": "https://teasymarketing.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return <StructuredData data={schema} id="article" />;
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <StructuredData data={schema} id="breadcrumb" />;
}

// Review/Testimonial Schema
interface Review {
  author: string;
  reviewBody: string;
  reviewRating: number;
}

interface ReviewSchemaProps {
  reviews: Review[];
}

export function AggregateReviewSchema({ reviews }: ReviewSchemaProps) {
  const totalRating = reviews.reduce((sum, review) => sum + review.reviewRating, 0);
  const averageRating = totalRating / reviews.length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TEASY",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return <StructuredData data={schema} id="reviews" />;
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TEASY Marketing",
    "url": "https://teasymarketing.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://teasymarketing.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return <StructuredData data={schema} id="website" />;
}