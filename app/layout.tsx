import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radius of a Circle Calculator - Find Radius from Diameter, Circumference & Area",
  description: "Free radius of circle calculator. Find radius from diameter (r=d/2), circumference (r=C/2π), or area (r=√(A/π)). Instant calculations with formulas, examples, and step-by-step solutions.",
  keywords: "radius of a circle, radius calculator, find radius, circle radius formula, radius from diameter, radius from circumference, radius from area, circle calculator",
  authors: [{ name: "Circle Calculator Network" }],
  openGraph: {
    title: "Radius of a Circle Calculator - Free Online Tool",
    description: "Calculate radius from diameter, circumference, or area instantly with formulas and examples.",
    url: "https://radiusofacircle.com",
    siteName: "Radius of a Circle Calculator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radius of a Circle Calculator",
    description: "Find circle radius from diameter, circumference, or area with instant calculations.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q808G6DHYW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q808G6DHYW');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
