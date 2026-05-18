"use client";

export default function AnalyzePage() {
  return (
    <div className="space-y-6 animate-fade-in h-auto md:h-[calc(100vh-140px)] flex flex-col uppercase mt-4 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center shrink-0">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest">Data Analyze</h1>
          <p className="text-gray-400 mt-2 text-lg md:text-2xl">Exploratory Data Analysis Notebook</p>
        </div>
      </div>

      <div className="flex-grow min-h-0 glass-panel overflow-hidden flex flex-col border-4 border-white">
          <div className="bg-black border-b-4 border-white py-3 px-6 shadow-sm shrink-0">
            <h2 className="font-bold text-white tracking-widest text-xl md:text-2xl">DataAnalyze.ipynb</h2>
          </div>
          <iframe 
            src="/notebooks/DataAnalyze.html" 
            className="notebook-iframe flex-grow min-h-[500px] md:min-h-0"
            title="Data Analyze Model"
          ></iframe>
      </div>
    </div>
  );
}
