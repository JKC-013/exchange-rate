"use client";
import { useState } from "react";

const DATASETS = ["AUD_USD", "EUR_USD", "GBP_USD", "USD_JPY"];

export default function AlgorithmPage() {
  const [selectedDataset, setSelectedDataset] = useState("AUD_USD");

  const annPath = `/notebooks/${selectedDataset}/${selectedDataset}_ann.html`;
  const lstmPath = `/notebooks/${selectedDataset}/${selectedDataset}_lstm.html`;

  return (
    <div className="space-y-6 animate-fade-in h-auto md:h-[calc(100vh-140px)] flex flex-col uppercase">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest">Algorithm Comparison</h1>
          <p className="text-gray-400 mt-2 text-lg md:text-2xl">Side-by-side architecture layout</p>
        </div>
        
        <div className="glass-panel px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border-2 border-white w-full md:w-auto">
          <label className="font-bold text-white text-lg md:text-xl">DATASET:</label>
          <select 
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
            className="bg-black border-2 border-white rounded-none px-3 py-1.5 text-white outline-none cursor-pointer text-xl"
          >
            {DATASETS.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-grow min-h-0">
        <div className="flex-1 flex flex-col glass-panel overflow-hidden border-4 border-white">
          <div className="bg-black border-b-4 border-white py-3 px-6 shadow-sm shrink-0">
            <h2 className="font-bold text-white tracking-widest text-xl md:text-2xl">ANN Notebook</h2>
          </div>
          <iframe 
            src={annPath} 
            className="notebook-iframe flex-grow min-h-[400px] md:min-h-0"
            title="ANN Model"
          ></iframe>
        </div>

        <div className="flex-1 flex flex-col glass-panel overflow-hidden border-4 border-white">
          <div className="bg-black border-b-4 border-white py-3 px-6 shadow-sm shrink-0">
            <h2 className="font-bold text-white tracking-widest text-xl md:text-2xl">LSTM Notebook</h2>
          </div>
          <iframe 
            src={lstmPath} 
            className="notebook-iframe flex-grow min-h-[400px] md:min-h-0"
            title="LSTM Model"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
