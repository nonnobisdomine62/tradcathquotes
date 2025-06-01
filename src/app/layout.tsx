import type { Metadata } from "next";
import "./globals.css";
import { getAllQuotes } from "../utils/quotes";
import { siteConfig } from "../utils/config";

export const metadata: Metadata = {
  title: "Traditional Catholic Quotes | Sacred Wisdom Through the Ages",
  description: "Discover a curated collection of traditional Catholic quotes from saints, doctors of the Church, and Church Fathers. Featuring medieval-inspired design and easy sharing.",
  keywords: "Catholic quotes, traditional Catholicism, Church Fathers, Catholic saints, Doctor of the Church, Catholic wisdom, Catholic teachings",
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Traditional Catholic Quotes | Sacred Wisdom Through the Ages",
    description: "Discover a curated collection of traditional Catholic quotes from saints, doctors of the Church, and Church Fathers.",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Traditional Catholic Quotes | Sacred Wisdom Through the Ages",
    description: "Discover a curated collection of traditional Catholic quotes from saints, doctors of the Church, and Church Fathers.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get all quotes for structured data
  const quotes = getAllQuotes();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": quotes.slice(0, 10).map((quote, index) => ({
        "@type": "Quotation",
        "position": index + 1,
        "text": quote.text,
        "author": {
          "@type": "Person",
          "name": quote.author
        }
      }))
    }
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="theme-color" content="#8B0000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full bg-medieval-light dark:bg-medieval-dark text-medieval-ink dark:text-medieval-light transition-colors duration-200">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
