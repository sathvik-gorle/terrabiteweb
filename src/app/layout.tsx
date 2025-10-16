import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Terrabite | Biochar Concrete from Food Waste (CO₂-Locking Mix)",
    description: "Terrabite turns food waste into biochar concrete that reduces emissions without sacrificing performance. View our numbers, methodology, and case studies.",
    keywords: [
        "biochar concrete",
        "carbon sequestration",
        "food waste",
        "sustainable construction",
        "carbon-negative concrete",
        "CO2 reduction",
        "green building materials",
        "carbon credits",
        "pyrolysis",
        "circular economy"
    ],
    authors: [{ name: "Terrabite Materials, LLC" }],
    creator: "Terrabite Materials, LLC",
    publisher: "Terrabite Materials, LLC",
    metadataBase: new URL("https://terrabitenc.com"),
    alternates: {
        canonical: "https://terrabitenc.com",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://terrabitenc.com",
        title: "Terrabite | Biochar Concrete from Food Waste",
        description: "We transform food waste into high-performance concrete that locks CO₂ in every pour. 10,138 lbs CO₂ sequestered. 31,000 lb concrete placed. Launch Chapel Hill accelerator.",
        siteName: "Terrabite",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Terrabite - Biochar Concrete from Food Waste",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terrabite | Biochar Concrete from Food Waste",
        description: "Carbon-negative concrete that locks CO₂ in every pour. From food waste to carbon sink.",
        images: ["/twitter-image.jpg"],
        creator: "@terrabitenc",
    },
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
    verification: {
        google: "your-google-site-verification-code",
        // Add verification codes when available
    },
};

// Schema.org structured data
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://terrabitenc.com/#organization",
            "name": "Terrabite Materials, LLC",
            "legalName": "Terrabite Materials, LLC",
            "url": "https://terrabitenc.com",
            "logo": "https://terrabitenc.com/assets/images/logo.png",
            "description": "Biochar concrete from food waste. Locking CO₂ in every pour.",
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "NC",
                "addressCountry": "US",
                "addressLocality": "Triangle Area"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-980-899-4291",
                "email": "info@terrabitenc.com",
                "contactType": "Customer Service"
            },
            "sameAs": [
                "https://twitter.com/terrabitenc",
                "https://linkedin.com/company/terrabite"
            ]
        },
        {
            "@type": "Product",
            "@id": "https://terrabitenc.com/#product",
            "name": "Biochar Concrete",
            "description": "High-performance concrete that incorporates biochar from food waste, sequestering CO₂ while maintaining structural integrity.",
            "brand": {
                "@id": "https://terrabitenc.com/#organization"
            },
            "manufacturer": {
                "@id": "https://terrabitenc.com/#organization"
            },
            "category": "Building Materials",
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/PreOrder",
                "url": "https://terrabitenc.com/#contact"
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "CO₂ Sequestration",
                    "value": "10,138 lbs CO₂ sequestered from 31,000 lb concrete"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Food Waste Diverted",
                    "value": "12,110 lbs diverted from landfills"
                }
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://terrabitenc.com/#website",
            "url": "https://terrabitenc.com",
            "name": "Terrabite",
            "description": "Biochar concrete from food waste",
            "publisher": {
                "@id": "https://terrabitenc.com/#organization"
            },
            "inLanguage": "en-US"
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Schema.org JSON-LD */}
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
