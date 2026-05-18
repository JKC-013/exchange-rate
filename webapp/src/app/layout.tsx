import type { Metadata } from "next";
import { VT323 } from "next/font/google"; // 8-bit retro font
import "./globals.css";
import Navigation from "@/components/Navigation";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange Rate Report 2024",
  description: "ANN vs LSTM performance comparison on Exchange Rates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.className} text-xl tracking-wider`}>
        <Navigation />
        <main className="max-w-7xl mx-auto px-6 pb-12 animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
