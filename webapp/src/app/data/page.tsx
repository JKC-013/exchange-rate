"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const DATASETS = ["AUD_USD", "EUR_USD", "GBP_USD", "USD_JPY"];

export default function DataPage() {
  const [selectedDataset, setSelectedDataset] = useState("AUD_USD");
  const [data, setData] = useState<{ date: string; rate: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`/data/${selectedDataset}_1990_2019.csv`);
        const text = await response.text();
        
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedData: { date: string; rate: number }[] = [];
            let currentDate = new Date("1990-01-01");
            
            const dataRows = results.data as Record<string, string>[];
            const rateKey = results.meta.fields ? results.meta.fields[0] : "Exchange rate";

            dataRows.forEach((row) => {
              while (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                currentDate.setDate(currentDate.getDate() + 1);
              }
              const rateVal = parseFloat(row[rateKey]);
              
              if (!isNaN(rateVal)) {
                parsedData.push({
                  date: currentDate.toISOString().split("T")[0],
                  rate: rateVal,
                });
                currentDate.setDate(currentDate.getDate() + 1);
              }
            });
            setData(parsedData);
            setLoading(false);
          }
        });
      } catch (err) {
        console.error("Failed to load dataset", err);
        setLoading(false);
      }
    }
    fetchData();
  }, [selectedDataset]);

  return (
    <div className="space-y-8 animate-fade-in uppercase">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest">Interactive Dataset</h1>
          <p className="text-gray-400 mt-2 text-lg md:text-2xl">1990 to 2019 Historic Exchange Rates</p>
        </div>
        
        <div className="glass-panel px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border-2 border-white w-full md:w-auto">
          <label className="font-bold text-white text-lg md:text-xl">SELECT DATASET:</label>
          <select 
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
            className="bg-black border-2 border-white rounded-none px-3 py-1.5 text-white outline-none cursor-pointer text-xl"
          >
            {DATASETS.map(d => (
              <option key={d} value={d}>{d.replace("_", "/")}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="glass-panel p-2 md:p-6 w-full h-[400px] md:h-[600px] flex items-center justify-center relative border-4 border-white">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-white border-t-transparent animate-spin mb-6"></div>
            <p className="text-gray-400 font-bold text-lg md:text-2xl uppercase tracking-widest text-center">LOADING DATASET...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#ffffff" 
                tick={{fill: '#ffffff', fontSize: 16, fontFamily: 'monospace'}}
                tickMargin={10}
                minTickGap={50}
              />
              <YAxis 
                domain={['auto', 'auto']} 
                stroke="#ffffff" 
                tick={{fill: '#ffffff', fontSize: 16, fontFamily: 'monospace'}}
                tickMargin={10}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000000', borderColor: '#ffffff', borderWidth: '2px', borderRadius: '0', color: 'white', fontFamily: 'monospace', fontSize: '18px' }}
                itemStyle={{ color: '#ffffff' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '20px' }} />
              <Line 
                type="monotone" 
                name={`${selectedDataset.replace("_", "/")} Rate`}
                dataKey="rate" 
                stroke="#ffffff" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 8, fill: "#000000", stroke: "#ffffff", strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
