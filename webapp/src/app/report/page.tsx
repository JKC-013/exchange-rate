"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import flipbook to prevent SSR window is not defined error
const Flipbook = dynamic(() => import("@/components/Flipbook"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="w-16 h-16 border-4 border-white border-t-transparent animate-spin mb-6"></div>
      <span className="text-2xl uppercase tracking-widest font-bold">LOADING PDF PAGES...</span>
    </div>
  )
});

export default function ReportPage() {
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    // In our python script we generated exactly 70 pages
    setNumPages(70);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in flex flex-col items-center uppercase">
      <div className="w-full max-w-5xl text-center space-y-4 mb-8">
        <h1 className="text-5xl font-bold tracking-widest">Project Report</h1>
        <p className="text-gray-400 text-2xl">Interactive Flipbook of the 2024 Final Report</p>
        <p className="text-lg text-white font-bold border border-white inline-block px-4 py-2 bg-white/5">CLICK ON THE CORNERS OR DRAG TO TURN PAGES.</p>
      </div>

      <div className="glass-panel p-6 w-full max-w-5xl flex justify-center shadow-2xl relative border-4 border-white">
        {numPages > 0 ? (
          <Flipbook numPages={numPages} />
        ) : null}
      </div>
    </div>
  );
}
