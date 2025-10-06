import { Menu, Plus, Edit } from "lucide-react";
import { useState } from "react";
import AddSymbolModal from "./add-symbol-modal";
import EditSymbolOpen from "./edit-symbol-modal";
const quotes = [
  {
    pair: "EURUSD",
    change: "+98",
    percent: "0.08%",
    buy: "1.17251",
    sell: "1.17252",
    low: "1.17115",
    high: "1.17295",
    time: "10:24:03",
    bars: 1,
    positive: true,
  },
  {
    pair: "GBPUSD",
    change: "+10",
    percent: "0.01%",
    buy: "1.34416",
    sell: "1.34418",
    low: "1.34251",
    high: "1.34540",
    time: "10:24:03",
    bars: 2,
    positive: true,
  },
  {
    pair: "USDCHF",
    change: "-12",
    percent: "-0.02%",
    buy: "0.79772",
    sell: "0.79783",
    low: "0.79661",
    high: "0.79797",
    time: "10:24:03",
    bars: 11,
    positive: false,
  },
  {
    pair: "USDJPY",
    change: "+331",
    percent: "0.22%",
    buy: "147.585",
    sell: "147.589",
    low: "147.093",
    high: "147.813",
    time: "10:24:04",
    bars: 4,
    positive: true,
  },
  {
    pair: "USDCNH",
    change: "+343",
    percent: "0.05%",
    buy: "7.13549",
    sell: "7.13601",
    low: "7.12742",
    high: "7.13898",
    time: "10:24:04",
    bars: 55,
    positive: true,
  },
  {
    pair: "USDRUB",
    change: "+213",
    percent: "0.26%",
    buy: "81.078",
    sell: "82.407",
    low: "80.750",
    high: "81.078",
    time: "10:14:26",
    bars: 1329,
    positive: true,
  },
  {
    pair: "AUDUSD",
    change: "+94",
    percent: "0.14%",
    buy: "0.66044",
    sell: "0.66048",
    low: "0.65887",
    high: "0.66045",
    time: "10:24:03",
    bars: 4,
    positive: true,
  },
  {
    pair: "NZDUSD",
    change: "+100",
    percent: "0.17%",
    buy: "0.58262",
    sell: "0.58273",
    low: "0.57950",
    high: "0.58271",
    time: "10:24:00",
    bars: 11,
    positive: true,
  },
  {
    pair: "USDCAD",
    change: "-72",
    percent: "-0.05%",
    buy: "1.39616",
    sell: "1.39620",
    low: "1.39588",
    high: "1.39691",
    time: "10:24:00",
    bars: 4,
    positive: false,
  },
  {
    pair: "USDSEK",
    change: "-507",
    percent: "-0.05%",
    buy: "9.39901",
    sell: "9.40325",
    low: "9.37246",
    high: "9.41204",
    time: "10:24:05",
    bars: 424,
    positive: false,
  },
];
interface QuotesScreenProps {
  onMenuClick: () => void
}

export default function QuotesScreen({ onMenuClick }: QuotesScreenProps) {
   const [isAddSymbolOpen, setIsAddSymbolOpen] = useState(false)
      const [isEditSymbolOpen, setEditSymbolOpen] = useState(false)
  return (
    <>
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3  h-[65px]">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="hover:opacity-70 transition-opacity">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Quotes</h1>
        </div>
        <div className="flex items-center gap-3">
         <button onClick={() => setIsAddSymbolOpen(true)} className="hover:opacity-70 transition-opacity">
              <Plus className="w-6 h-6" />
            </button>
         
            <button onClick={() => setEditSymbolOpen(true)} className="hover:opacity-70 transition-opacity">
             <Edit className="w-6 h-6" />
            </button>
        </div>
      </div>

      {/* Quotes List */}
      <div className="flex-1 overflow-auto">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3   relative"
          >
            {/* Left indicator */}
            {!quote.positive && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-destructive" />
            )}

            {/* Left side - Pair info */}
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span
                  className={`text-sm ${
                    quote.positive ? "text-success" : "text-destructive"
                  }`}
                >
                  {quote.change}
                </span>
                <span
                  className={`text-sm ${
                    quote.positive ? "text-success" : "text-destructive"
                  }`}
                >
                  {quote.percent}
                </span>
              </div>
              <div className="text-base font-semibold mt-0.5">{quote.pair}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                <span>{quote.time}</span>
                <span>⬜ {quote.bars}</span>
              </div>
            </div>

            {/* Right side - Prices */}
            <div className="text-right">
              <div className="flex  items-center gap-2">
                <div className="flex items-baseline justify-end gap-1">
                <span
                  className={`text-lg font-mono ${
                    quote.positive ? "text-destructive" : "text-destructive"
                  }`}
                >
                  {quote.buy.split(".")[0]}.
                  {quote.buy.split(".")[1].slice(0, -1)}
                </span>
                <span
                  className={`text-xs font-mono ${
                    quote.positive ? "text-destructive" : "text-destructive"
                  }`}
                >
                  {quote.buy.split(".")[1].slice(-1)}
                </span>
                <span
                  className={`text-xs font-mono ${
                    quote.positive ? "text-destructive" : "text-destructive"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <div className="flex items-baseline justify-end gap-1 mt-1">
                <span
                  className={`text-lg font-mono ${
                    quote.positive ? "text-primary" : "text-primary"
                  }`}
                >
                  {quote.sell.split(".")[0]}.
                  {quote.sell.split(".")[1].slice(0, -1)}
                </span>
                <span
                  className={`text-xs font-mono ${
                    quote.positive ? "text-primary" : "text-primary"
                  }`}
                >
                  {quote.sell.split(".")[1].slice(-1)}
                </span>
                <span
                  className={`text-xs font-mono ${
                    quote.positive ? "text-primary" : "text-primary"
                  }`}
                >
                  {index + 2}
                </span>
              </div>
              </div>
              
              <div className="text-xs text-muted-foreground mt-1">
                L: {quote.low}  &nbsp;H: {quote.high}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <AddSymbolModal isOpen={isAddSymbolOpen} onClose={() => setIsAddSymbolOpen(false)} />
        <EditSymbolOpen isOpen={isEditSymbolOpen} onClose={() => setEditSymbolOpen(false)} />
    </>
  );
}
