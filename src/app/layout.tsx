import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "ResearchSummaryAI",
  description: "Generate comprehensive research summaries on any topic using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <main className="container mx-auto px-4 py-6 max-w-6xl">
        {children}
        </main>
      </body>
    </html>
  );
}
