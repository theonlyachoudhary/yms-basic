import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youth Muslim Sports",
  description: "Empowering Muslim youth through sports while nurturing Islamic values, character, and community bonds in a safe, supportive environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/yms-favicon.svg" type="image/svg+xml" />
  <meta property="og:title" content="Youth Muslim Sports – Empowering Muslim Youth Through Sports & Islamic Values" />
  <meta property="og:description" content="Empowering Muslim youth through sports while nurturing Islamic values, character, and community bonds in a safe, supportive environment. Join our camps for skill, fun, and faith!" />
  <meta property="og:image" content="https://youthmuslimsports.org/logo.webp" />
  <meta property="og:image:type" content="image/webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://youthmuslimsports.org/logo.webp" />
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${oswald.variable}
          antialiased
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
