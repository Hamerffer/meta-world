
import { Menu, Plus, TrendingUp, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import StockChart from "./chart/chart";

interface ChartsScreenProps {
  onMenuClick: () => void
}
export default function ChartsScreen({ onMenuClick }: ChartsScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = window.innerHeight * 2;
    ctx.scale(2, 2);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Generate candlestick data
    const candles = generateCandlestickData(50);

    // Draw grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 10; i++) {
      const y = (height / 10) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw candlesticks
    const candleWidth = width / candles.length;
    candles.forEach((candle, i) => {
      const x = i * candleWidth + candleWidth / 2;
      const isGreen = candle.close > candle.open;

      // Draw wick
      ctx.strokeStyle = isGreen ? "#4ade80" : "#ef4444";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, candle.high * height);
      ctx.lineTo(x, candle.low * height);
      ctx.stroke();

      // Draw body
      ctx.fillStyle = isGreen ? "#4ade80" : "#ef4444";
      const bodyTop = Math.min(candle.open, candle.close) * height;
      const bodyHeight = Math.abs(candle.close - candle.open) * height;
      ctx.fillRect(
        x - candleWidth / 4,
        bodyTop,
        candleWidth / 2,
        bodyHeight || 1
      );
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 h-[65px]">
         <button onClick={onMenuClick} className="hover:opacity-70 transition-opacity">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <TrendingUp className="w-5 h-5" />
          <button className="px-3 py-1 text-sm bg-muted rounded">M15</button>
          <Clock className="w-5 h-5" />
          
        </div>
      </div>

      {/* Chart Info */}
      <div className="px-4 py-2 border-b border-border">
        <div className="text-xs text-primary font-mono">AUDUSD - M15</div>
        <div className="text-xs text-muted-foreground">
          Australian Dollar vs US Dollar
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 relative bg-[#0a0e1a] ">
       
<StockChart/>
       
      </div>
    </div>
  );
}

function generateCandlestickData(count: number) {
  const data = [];
  let price = 0.5;

  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.48) * 0.02;
    const open = price;
    const close = price + change;
    const high = Math.max(open, close) + Math.random() * 0.01;
    const low = Math.min(open, close) - Math.random() * 0.01;

    data.push({
      open: 1 - open,
      close: 1 - close,
      high: 1 - high,
      low: 1 - low,
    });

    price = close;
  }

  return data;
}
