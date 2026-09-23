import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.caribbeanadventurerd.com";
const TITLE = "Caribbean Adventure RD | Puerto Plata, Dominican Republic";
const DESCRIPTION =
  "Discover curated adventure experiences in Puerto Plata, Dominican Republic. Book snorkeling, hiking, cultural tours, and more with local operators.";

export const metadata: Metadata = {
  // Required for opengraph-image and canonical URLs to resolve absolutely.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Puerto Plata, Dominican Republic, adventures, tours, snorkeling, hiking, travel, Caribbean",
  applicationName: "Caribbean Adventure RD",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Caribbean Adventure RD",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <TopBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
