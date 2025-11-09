"use client";

import { BlogPost } from "@/lib/blogData";

interface WebsiteStructuredDataProps {
  url: string;
  name: string;
  description: string;
}

interface BlogPostingStructuredDataProps {
  post: BlogPost;
  url: string;
}

interface BreadcrumbStructuredDataProps {
  items: { name: string; url: string }[];
}

export function WebsiteStructuredData({ url, name, description }: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": name,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": name,
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/logo.png`,
        "width": 600,
        "height": 60
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BlogPostingStructuredData({ post, url }: BlogPostingStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${url}/blog/${post.id}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": `${url}/authors/${post.author.id}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Blogora",
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/logo.png`,
        "width": 600,
        "height": 60
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "articleSection": post.category,
    "keywords": post.tags.join(", ")
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData({ url, name }: { url: string; name: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": `${url}/logo.png`,
      "width": 600,
      "height": 60
    },
    "sameAs": [
      `${url}/twitter`,
      `${url}/facebook`,
      `${url}/linkedin`,
      `${url}/instagram`
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}