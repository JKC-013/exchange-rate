import Link from "next/link";
import { ArrowRight, BarChart2, Cpu, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-12">
      <div className="space-y-6 max-w-4xl border-4 border-white p-8 bg-black/50">
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-widest">
          Exchange Rate Prediction
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A COMPREHENSIVE 2024 FINAL REPORT ANALYZING AND COMPARING THE PERFORMANCE OF ARTIFICIAL NEURAL NETWORKS (ANN) AND LONG SHORT-TERM MEMORY (LSTM) MODELS ACROSS FOUR MAJOR CURRENCY INDEX DATASETS (1990-2019).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
        <FeatureCard 
          title="INTERACTIVE DATA" 
          description="EXPLORE HISTORICAL EXCHANGE RATES OF AUD/USD, EUR/USD, GBP/USD, AND USD/JPY FROM 1990 TO 2019."
          icon={<BarChart2 className="w-12 h-12 text-white" />}
          href="/data"
        />
        <FeatureCard 
          title="ALGORITHM COMPARISON" 
          description="DIRECTLY COMPARE ANN AND LSTM JUPYTER NOTEBOOKS SIDE BY SIDE TO UNDERSTAND MODEL ARCHITECTURE."
          icon={<Cpu className="w-12 h-12 text-white" />}
          href="/algorithm"
        />
        <FeatureCard 
          title="FINAL REPORT" 
          description="READ OUR COMPREHENSIVE FINAL RESEARCH PAPER WITH AN INTERACTIVE PDF FLIPBOOK."
          icon={<FileText className="w-12 h-12 text-white" />}
          href="/report"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="block group">
      <div className="glass-panel p-8 h-full flex flex-col items-start text-left">
        <div className="mb-6 border-2 border-white p-4">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{title}</h3>
        <p className="text-gray-400 mb-8 flex-grow text-lg md:text-xl">{description}</p>
        <div className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto text-xl md:text-2xl uppercase border-b-2 border-transparent group-hover:border-white pb-1">
          Explore <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </Link>
  );
}
