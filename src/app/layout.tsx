import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import "./globals.css";

const fontDisplay = Plus_Jakarta_Sans({
  variable: "--font-display-custom",
  subsets: ["latin"],
});

const fontBody = Inter({
  variable: "--font-body-custom",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aetharix.com"),
  title: "AETHARIX | Infrastruktur Bisnis. Ditenagai AI.",
  description: "Aetharix menghadirkan ekosistem SaaS modular dengan skalabilitas tanpa batas untuk Enterprise dan Startup modern. We build what's next.",
  openGraph: {
    title: "AETHARIX | Infrastruktur Bisnis Modern",
    description: "Ekosistem SaaS modular terpercaya dengan keamanan tingkat bank. Skala infrastruktur Anda tanpa batasan buatan.",
    url: "https://aetharix.com",
    siteName: "Aetharix",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aetharix Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AETHARIX | We Build What's Next",
    description: "Transformasi digital bukan lagi tentang sekadar aplikasi. Skala infrastruktur Anda tanpa batas bersama Aetharix.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
      <body className="antialiased min-h-screen selection:bg-tosca/30 flex flex-col bg-void">
        <CustomCursor />
        <div className="noise-overlay" />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 mt-[82px]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
