import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "65lanta - Grammy-Nominated Producer & Audio Engineer",
  description: "Precision. Passion. Innovation. 65lanta is Boyan '65' Stanchev - Grammy-winning producer and engineer who redefines sound. High-energy records with unmistakable depth.",
  keywords: "65lanta, audio engineer, music producer, mix and mastering, sound designer, Grammy nominated, Atlanta, hip hop, trap, OctoGvng",
  authors: [{ name: "65lanta" }],
  creator: "65lanta",
  openGraph: {
    title: "65lanta - Grammy-Nominated Producer & Audio Engineer",
    description: "Precision. Passion. Innovation. Grammy-winning producer and engineer who redefines sound.",
    url: "https://65lanta.com",
    siteName: "65lanta",
    images: [
      {
        url: "/images/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "65lanta - Audio Engineer & Producer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "65lanta - Grammy-Nominated Producer & Audio Engineer",
    description: "Precision. Passion. Innovation. Grammy-winning producer and engineer who redefines sound.",
    creator: "@65lanta",
    images: ["/images/banner.jpeg"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-off-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
