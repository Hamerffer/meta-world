import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType, CandlestickSeries } from "lightweight-charts";
import { getmockadata } from "./api/chart-api";

interface CandleData {
  time: string |number ;
  open: number;
  high: number;
  low: number;
  close: number;
}
interface nezoCandle {
  time: number;  
  open: number;
  high: number;
  low: number;
  close: number;
}


const StockChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<CandleData[]>([]);


  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
       const rawData= await getmockadata()
       

       
        const formatted: nezoCandle[] = rawData.map((item: [number, string, string, string, string]) => ({
          time: Math.floor(item[0] / 1000),
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
        }));

        if (isMounted) setData(formatted);
      } catch (error) {
        console.error("Failed to fetch Binance data:", error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#0d1117" },
        textColor: "#d1d5db",
        attributionLogo: false,
      },
      grid: {
        vertLines: { color: "#1e293b" },
        horzLines: { color: "#1e293b" },
      },
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      borderUpColor: "#22c55e",
      wickUpColor: "#22c55e",
      downColor: "#ef4444",
      borderDownColor: "#ef4444",
      wickDownColor: "#ef4444",
    });

    candleSeries.setData(data);

    const handleResize = () => {
      const width = containerRef.current?.clientWidth || 0;
      chart.applyOptions({ width, height: 500 });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={containerRef}    className="w-full h-[68vh] sm:h-[85vh] md:h-[80vh] lg:h-[80vh]"  />;
};

export default StockChart;
