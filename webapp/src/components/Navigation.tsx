"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, LineChart, Cpu, FilePieChart, BookOpen, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 px-4 md:px-6 py-4 mb-4 md:mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2 uppercase tracking-widest text-center" onClick={() => setIsOpen(false)}>
          <span>Exchange Rate Report</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6 items-center uppercase tracking-widest text-xl">
          <NavLink href="/" icon={<Home size={20} />} text="Home" />
          <NavLink href="/data" icon={<LineChart size={20} />} text="Data" />
          <NavLink href="/algorithm" icon={<Cpu size={20} />} text="Algorithm" />
          <NavLink href="/analyze" icon={<FilePieChart size={20} />} text="Analyze" />
          <NavLink href="/report" icon={<BookOpen size={20} />} text="Report" />
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-white hover:text-gray-300 transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-2 mt-4 uppercase tracking-widest text-xl animate-fade-in border-t-2 border-white/20 pt-4 pb-2">
          <MobileNavLink href="/" icon={<Home size={24} />} text="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/data" icon={<LineChart size={24} />} text="Data" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/algorithm" icon={<Cpu size={24} />} text="Algorithm" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/analyze" icon={<FilePieChart size={24} />} text="Analyze" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/report" icon={<BookOpen size={24} />} text="Report" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
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

function MobileNavLink({ href, icon, text, onClick }: { href: string; icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-4 text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-none transition-colors font-medium border border-transparent hover:border-gray-500 w-full">
      {icon}
      <span>{text}</span>
    </Link>
  );
}
