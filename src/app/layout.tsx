import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keepers Being Spotless (KBS) - Professional Cleaning Services",
  description: "Professional cleaning and facility maintenance services for homes, offices, hospitals, hotels, and commercial spaces. Eco-friendly, reliable, and spotless results guaranteed.",
  keywords: "professional cleaning services, commercial cleaning, residential cleaning, hospital sanitization, office cleaning, hotel cleaning, eco-friendly cleaning, facility maintenance",
  authors: [{ name: "Keepers Being Spotless" }],
  openGraph: {
    title: "Keepers Being Spotless (KBS) - Professional Cleaning Services",
    description: "Professional cleaning and facility maintenance services with eco-friendly solutions and trained staff.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://keeperbeingspotless.com",
    "name": "Keepers Being Spotless (KBS)",
    "alternateName": "KBS",
    "description": "Professional cleaning and facility maintenance services for homes, offices, hospitals, hotels, and commercial spaces",
    "url": "https://keeperbeingspotless.com",
    "logo": "https://keeperbeingspotless.com/logo.png",
    "image": "https://keeperbeingspotless.com/hero-image.jpg",
    "telephone": "+91 99908 56558",
    "email": "admin@keepersbeingspotless.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 99908 56558",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "sameAs": [
      "https://www.instagram.com/keepersbeingspotless"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "openingHours": "Mo-Su 24:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "description": "Professional office and commercial space cleaning"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Cleaning",
            "description": "Home deep cleaning and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Hospital Sanitization",
            "description": "Medical facility cleaning and sanitization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel Cleaning",
            "description": "Hospitality industry cleaning services"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
