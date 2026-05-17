import type { Metadata } from "next";
import { VT323 } from "next/font/google"; // 8-bit retro font
import "./globals.css";
import Link from "next/link";
import { Home, LineChart, Cpu, FilePieChart, BookOpen } from "lucide-react";

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
        <nav className="glass sticky top-0 z-50 px-6 py-4 mb-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-white flex items-center gap-2 uppercase tracking-widest">
              <span>Exchange Rate Report</span>
            </Link>
            
            <div className="flex gap-6 items-center uppercase tracking-widest text-xl">
              <NavLink href="/" icon={<Home size={20} />} text="Home" />
              <NavLink href="/data" icon={<LineChart size={20} />} text="Data" />
              <NavLink href="/algorithm" icon={<Cpu size={20} />} text="Algorithm" />
              <NavLink href="/analyze" icon={<FilePieChart size={20} />} text="Analyze" />
              <NavLink href="/report" icon={<BookOpen size={20} />} text="Report" />
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-6 pb-12 animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-none transition-colors font-medium border border-transparent hover:border-gray-500">
      {icon}
      <span>{text}</span>
    </Link>
  );
}
