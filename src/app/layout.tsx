import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Raghav S | Aerospace Portfolio",
  description: "Founder & CEO, Ragas Aerospace. Aerospace Systems Engineer, UAV Developer, and Defense Technology Researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-white relative`}>
        <GlobalBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
