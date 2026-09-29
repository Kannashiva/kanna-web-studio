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
  title: {
    default: "Kanna Web Studio",
    template: "%s | Kanna Web Studio",
  },
  description:
    "Kanna Web Studio designs and develops modern, responsive and performance-focused websites for businesses, brands and entrepreneurs.",
  icons: {
  icon: "/images/logo/kanna-favicon.png",
  shortcut: "/images/logo/kanna-favicon.png",
  apple: "/images/logo/kanna-favicon.png",
},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
