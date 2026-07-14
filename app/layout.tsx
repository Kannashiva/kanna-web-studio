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

export const metadata = {
  title: "Kanna Web Studio | Modern Websites for Businesses",

  description:
    "Kanna Web Studio creates modern, responsive and SEO-friendly websites for restaurants, startups and local businesses.",

  keywords: [
    "website development",
    "business website",
    "restaurant website",
    "Next.js developer",
    "web design Hyderabad",
    "Kanna Web Studio",
  ],

  openGraph: {
    title:
      "Kanna Web Studio | Modern Websites That Help Businesses Grow",

    description:
      "Professional website design and development services for businesses.",

    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
  <html className="scroll-smooth">
  </html>
}
