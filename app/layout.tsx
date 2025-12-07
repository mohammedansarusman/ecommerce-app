import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";
import Providers from "@/components/Helper/Providers";
import { Toaster } from "@/components/ui/sonner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noon shop | Next JS",
  description: "Noon Minutes Food Electronis ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <Providers>
            <Nav />
            {children}
            <Toaster/>
            <Footer />
          </Providers>
        </body>
      </html>
  );
}
