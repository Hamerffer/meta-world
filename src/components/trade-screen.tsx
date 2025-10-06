import { Menu, ArrowDownUp, Plus } from "lucide-react";

const positions = [
  {
    pair: "USDCNH",
    type: "buy",
    volume: "0.01",
    openPrice: "7.13665",
    currentPrice: "7.13549",
    profit: "-0.16",
    positive: false,
  },
  {
    pair: "USDJPY",
    type: "buy",
    volume: "0.01",
    openPrice: "147.652",
    currentPrice: "147.586",
    profit: "-0.45",
    positive: false,
  },
  {
    pair: "NZDUSD",
    type: "buy",
    volume: "0.01",
    openPrice: "0.58272",
    currentPrice: "0.58260",
    profit: "-0.12",
    positive: false,
  },
  {
    pair: "USDCHF",
    type: "buy",
    volume: "1.00",
    openPrice: "0.79784",
    currentPrice: "0.79772",
    profit: "-15.04",
    positive: false,
  },
];
interface TradeScreenProps {
  onMenuClick: () => void
}
export default function TradeScreen({ onMenuClick }: TradeScreenProps) {
  const totalProfit = positions.reduce(
    (sum, pos) => sum + Number.parseFloat(pos.profit),
    0
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3  h-[65px]">
        <div className="flex items-center gap-3">
           <button onClick={onMenuClick} className="hover:opacity-70 transition-opacity">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-md font-semibold">Trade</h1>
            <p className="text-xs text-destructive font-mono">
              {totalProfit.toFixed(2)} USD
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ArrowDownUp className="w-6 h-6" />
          <Plus className="w-6 h-6" />
        </div>
      </div>

      {/* Account Summary */}
      <div className="px-4 py-4 space-y-2 border-b border-border">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Balance:</span>
          <span className="text-sm font-mono">3 000.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Equity:</span>
          <span className="text-sm font-mono">2 984.23</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Margin:</span>
          <span className="text-sm font-mono">1 025.83</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Free margin:</span>
          <span className="text-sm font-mono">1 958.40</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Margin Level (%):</span>
          <span className="text-sm font-mono">290.91</span>
        </div>
      </div>

      {/* Positions Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-base font-semibold">Positions</h2>
        <button className="text-muted-foreground">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>

      {/* Positions List */}
      <div className="flex-1 overflow-auto">
        {positions.map((position, index) => (
          <div key={index} className="px-4 py-3 border-b border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-semibold">
                    {position.pair}
                  </span>
                  <span className="text-sm text-primary">{position.type}</span>
                  <span className="text-sm text-muted-foreground">
                    {position.volume}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-mono">
                  {position.openPrice} → {position.currentPrice}
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-base font-mono ${
                    position.positive ? "text-success" : "text-destructive"
                  }`}
                >
                  {position.profit}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
