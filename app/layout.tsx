import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PWARegister from "./pwa-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ Metadata = SEO + manifest only */
export const metadata: Metadata = {
  title: "Pure Next PWA",
  description: "Next.js Progressive Web App",
  manifest: "/manifest.json",
};

/* ✅ Viewport = screen + theme */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Modern PWA meta */}
        {/* <meta name="mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" /> */}

        {/* <link rel="apple-touch-icon" href="/icons/icon-192.png" /> */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
