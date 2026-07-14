import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  League_Spartan,
} from "next/font/google";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league",
});


export const metadata = {
  title: "Kanna Web Studio | Modern Websites for Businesses",

  description:
    "Professional website design and development services for restaurants, startups, and local businesses.",

  keywords: [
    "Website Development",
    "Web Design",
    "Next.js Developer",
    "Restaurant Website",
    "Business Website",
    "Portfolio Website",
    "Hyderabad Web Developer",
    "Kanna Web Studio",
  ],

  authors: [
    {
      name: "Kanna Web Studio",
    },
  ],

  creator: "Kanna Web Studio",

  metadataBase: new URL("https://kanna-web-studio.vercel.app"),

  openGraph: {
    title: "Kanna Web Studio",

    description:
      "Modern, responsive and SEO-friendly websites for businesses.",

    url: "https://kanna-web-studio.vercel.app",

    siteName: "Kanna Web Studio",

    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Kanna Web Studio",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Kanna Web Studio",

    description:
      "Professional websites that help businesses grow online.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
  className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} h-full antialiased
        scroll-smooth
      `}
    >
<body className="min-h-full flex flex-col">

  {children}

  <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
    }}
  />

</body>

    </html>
  );
}