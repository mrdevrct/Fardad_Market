import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "پروژه Next.js",
  description: "یک پروژه با Next.js و Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={inter.className}>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <div className="flex-1 overflow-x-hidden">
          <main className="py-10 container">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
