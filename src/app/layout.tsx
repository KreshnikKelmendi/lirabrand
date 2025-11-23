import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoadingProvider from "./components/loading/LoadingProvider";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lira Brand",
  description: "Lira Brand - Premium Tea Products",
  icons: {
    icon: "/assets/lirabrand-logo-removebg-preview.png",
    shortcut: "/assets/lirabrand-logo-removebg-preview.png",
    apple: "/assets/lirabrand-logo-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased flex flex-col min-h-screen`}
      >
        <LoadingProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </LoadingProvider>
      </body>
    </html>
  );
}
