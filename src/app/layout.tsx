/**
 * ============================================================================
 * File: layout.tsx
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Root Layout
 * Description: Defines the HTML structure, global fonts, and metadata for the application.
 * ============================================================================
 */
import type { Metadata } from "next";
import "@/index.css";

export const metadata = {
  title: "Engage Capital Cambodia | Premier Digital Lending & Financial Advisory",
  description: "Engage Capital Cambodia Co., Ltd. provides fast, secure digital micro-loans, agricultural financing, and premium financial advisory services designed to empower people, farms, and businesses across Cambodia.",
  keywords: [
    "Engage Capital Cambodia",
    "Digital Lending Cambodia",
    "Microfinance Cambodia",
    "Business Loans Cambodia",
    "Agricultural Finance Cambodia",
    "Investment Advisory Phnom Penh",
    "Fast Secure Loans Cambodia",
    "Fintech Cambodia"
  ],
  authors: [{ name: "Engage Capital Cambodia Co., Ltd." }],
  metadataBase: new URL("https://engagecapital.com.kh"), // Placeholder domain for valid relative links configuration
  openGraph: {
    title: "Engage Capital Cambodia | Premier Digital Lending & Financial Advisory",
    description: "Empower your dreams with seamless onboarding and instant disbursements. Premium financial advisory, micro-loans, and agricultural investment tools in Cambodia.",
    url: "https://engagecapital.com.kh",
    siteName: "Engage Capital Cambodia",
    images: [
      {
        url: "https://picsum.photos/seed/engagecapital/1200/630",
        width: 1200,
        height: 630,
        alt: "Engage Capital Cambodia - Premier Digital Lending"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engage Capital Cambodia | Premier Digital Lending & Financial Advisory",
    description: "Empower your projects with fast, compliant, and secure micro-loans, crop financing, and professional investment advisory services in Cambodia.",
    images: ["https://picsum.photos/seed/engagecapital/1200/630"],
    creator: "@EngageCapitalKH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
