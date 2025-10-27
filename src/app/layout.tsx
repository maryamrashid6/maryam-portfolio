import type { Metadata } from "next";
import Navbar from "@/features/Navbar/navbar";
import { Sora } from 'next/font/google';
import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora', // optional custom CSS var
});

export const metadata: Metadata = {
  title: "Maryam Rashid",
  description: "Maryam's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="font-sora"><Navbar/>{children}</body>
    </html>
  );
}
