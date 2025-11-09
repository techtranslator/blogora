import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WebsiteStructuredData, OrganizationStructuredData } from "@/components/StructuredData";
import { SEOHead } from "@/components/SEOHead";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blogora - World's Largest Premium Blogging Platform",
    template: "%s | Blogora"
  },
  description: "Discover the world's most beautiful blog content with 10,000+ premium articles from 1,000+ expert authors. Join 1M+ readers who trust our curated content.",
  keywords: ["blog", "premium content", "expert articles", "design", "development", "technology", "AI", "UX", "DevOps", "mobile", "SEO", "AdSense", "content marketing", "digital publishing", "online magazine"],
  authors: [{ name: "Blogora Team" }],
  creator: "Blogora",
  publisher: "Blogora",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://blogora.example.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blogora - World's Largest Premium Blogging Platform",
    description: "Discover the world's most beautiful blog content with 10,000+ premium articles from 1,000+ expert authors.",
    url: "https://blogora.example.com",
    siteName: "Blogora",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Blogora - World's Largest Premium Blogging Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogora - World's Largest Premium Blogging Platform",
    description: "Discover the world's most beautiful blog content with 10,000+ premium articles from 1,000+ expert authors.",
    creator: "@blogora",
    images: ["/twitter-image.jpg"], // Add your Twitter image
  },
  verification: {
    google: "google1234567890123456",
  },
  other: {
    "google-adsense-account": "ca-pub-1234567890123456",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Global engagement features */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <ThemeProvider>
          <SEOHead 
            title="Blogora - World's Largest Premium Blogging Platform" 
            description="Discover the world's most beautiful blog content with 10,000+ premium articles from 1,000+ expert authors. Join 1M+ readers who trust our curated content."
            url="https://blogora.example.com"
            keywords={["blog", "premium content", "expert articles", "design", "development", "technology", "AI", "UX", "DevOps", "mobile", "SEO", "AdSense", "content marketing", "digital publishing", "online magazine"]}
          />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        
        {/* Structured Data */}
        <WebsiteStructuredData 
          url="https://blogora.example.com" 
          name="Blogora" 
          description="World's Largest Premium Blogging Platform with 10,000+ premium articles from 1,000+ expert authors. Join 1M+ readers who trust our curated content."
        />
        <OrganizationStructuredData 
          url="https://blogora.example.com" 
          name="Blogora"
        />
        
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        {/* AdSense Auto Ads */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}