import { Menu, RefreshCw, ArrowDownUp, Calendar } from "lucide-react";
import { useState } from "react";

interface HistoryScreenProps {
  onMenuClick: () => void;
}
export default function HistoryScreen({ onMenuClick }: HistoryScreenProps) {
  const [activeTab, setActiveTab] = useState<"positions" | "orders" | "deals">(
    "positions"
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3  h-[65px]">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="hover:opacity-70 transition-opacity"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-md font-semibold">History</h1>
            <p className="text-xs text-muted-foreground">All symbols</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5" />
          <ArrowDownUp className="w-5 h-5" />
          <Calendar className="w-5 h-5" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("positions")}
          className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "positions" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          POSITIONS
          {activeTab === "positions" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "orders" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          ORDERS
          {activeTab === "orders" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("deals")}
          className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "deals" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          DEALS
          {activeTab === "deals" && (
            <>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            </>
          )}
        </button>
      </div>

      {activeTab === "positions" && (
        <>
          {/* Account Summary */}
          <div className="px-4 py-4 space-y-2 border-b border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Profit:</span>
              <span className="text-sm font-mono text-primary">0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Deposit:</span>
              <span className="text-sm font-mono">3 000.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Swap:</span>
              <span className="text-sm font-mono">0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Commission:</span>
              <span className="text-sm font-mono">0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Balance:</span>
              <span className="text-sm font-mono">3 000.00</span>
            </div>
          </div>
          {/* //history */}
          <div className="flex-1 overflow-auto">
            <div className="px-4 py-3 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Balance</span>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">
                    2025.10.03 08:26:01
                  </div>
                  <div className="text-sm font-mono text-primary">3 000.00</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {activeTab === "orders" && (
        <>
          <div className="flex flex-col justify-center items-center h-[90vh]">
            <img src="/no-history.png" alt="" className="w-22 h-22 mb-3" />
            <p className="text-gray-400 text-sm">No Order</p>
          </div>
        </>
      )}
        {activeTab === "deals" && (
        <>
           <div className="px-4 py-4 space-y-2 border-b border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Profit:</span>
              <span className="text-sm font-mono text-primary">0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Deposit:</span>
              <span className="text-sm font-mono">3 000.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Swap:</span>
              <span className="text-sm font-mono">0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Commission:</span>
              <span className="text-sm font-mono">0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Balance:</span>
              <span className="text-sm font-mono">3 000.00</span>
            </div>
          </div>
            {/* //history */}
          <div className="flex-1 overflow-auto">
            <div className="px-4 py-3 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Balance</span>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">
                    2025.10.03 08:26:01
                  </div>
                  <div className="text-sm font-mono text-primary">3 000.00</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
