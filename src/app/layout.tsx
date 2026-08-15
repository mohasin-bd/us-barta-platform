import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "US BARTA — খবর, জীবন ও প্রয়োজন",
  description:
    "বাংলাদেশি-আমেরিকানদের জন্য বিশ্বস্ত বাংলা প্ল্যাটফর্ম। খবর, ইমিগ্রেশন, শিক্ষা, স্বাস্থ্য, চাকরি, ইভেন্টস ও কমিউনিটি তথ্য।",
  keywords: [
    "US BARTA",
    "বাংলা খবর",
    "Bangladeshi American",
    "immigration",
    "বাংলাদেশি আমেরিকান",
    "New York Bangla",
    "Bangla news USA",
  ],
  openGraph: {
    title: "US BARTA — খবর, জীবন ও প্রয়োজন",
    description:
      "বাংলাদেশি-আমেরিকানদের জন্য বিশ্বস্ত বাংলা প্ল্যাটফর্ম",
    type: "website",
    siteName: "US BARTA",
    images: ["/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${hindSiliguri.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-hind-siliguri), var(--font-inter), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
