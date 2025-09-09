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
  title: "POLAAAAND",
  description: "Psychedelic Poland trip slideshow.",
  keywords: "poland trip, slideshow, travel, psychedelic",
  authors: [{ name: "POLAAAAND" }],
  creator: "POLAAAAND",
  openGraph: {
    title: "POLAAAAND",
    description: "Psychedelic Poland trip slideshow.",
    url: "https://example.com",
    siteName: "POLAAAAND",
    images: [
      {
        url: "/images/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "POLAAAAND",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POLAAAAND",
    description: "Psychedelic Poland trip slideshow.",
    creator: "@polaaaand",
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

        {/* Hidden static form (single) for Netlify detection at build time */}
        <div hidden aria-hidden="true">
          <form name="trip" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="trip" />
            <input name="bot-field" />
            {/* Payment */}
            <input name="method" />
            <input name="paypal_email" />
            <input name="account_name" />
            <input name="iban" />
            <input name="bic" />
            <input name="revolut_phone" />
            {/* Spa */}
            <input name="spa_ok" />
            <textarea name="notes" />
          </form>
        </div>
      </body>
    </html>
  );
}
