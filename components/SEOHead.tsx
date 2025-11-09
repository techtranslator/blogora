import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEOHead({
  title,
  description,
  url,
  image = "/default-og-image.jpg",
  type = "website",
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOHeadProps) {
  const fullTitle = title.includes("| Blogora") ? title : `${title} | Blogora`;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={[...keywords, "blog", "premium content", "expert articles"].join(", ")} />
      {author && <meta name="author" content={author} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {section && <meta property="article:section" content={section} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6366f1" />
      
      {/* Canonical and hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="es" href={url.replace('blogora.example.com', 'es.blogora.example.com')} />
      <link rel="alternate" hrefLang="fr" href={url.replace('blogora.example.com', 'fr.blogora.example.com')} />
      <link rel="alternate" hrefLang="de" href={url.replace('blogora.example.com', 'de.blogora.example.com')} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Verification */}
      <meta name="google-site-verification" content="google1234567890123456" />
    </Head>
  );
}