"use client"

import { TrendingUp, BarChart3, Activity, Clock, MessageSquare } from "lucide-react"

interface BottomNavProps {
  activeTab: "quotes" | "charts" | "trade" | "history" | "messages"
  onTabChange: (tab: "quotes" | "charts" | "trade" | "history" | "messages") => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card ">
      <div className="flex items-center justify-around py-2">
        <button
          onClick={() => onTabChange("quotes")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            activeTab === "quotes" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-xs">Quotes</span>
        </button>

        <button
          onClick={() => onTabChange("charts")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            activeTab === "charts" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-xs">Charts</span>
        </button>

        <button
          onClick={() => onTabChange("trade")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            activeTab === "trade" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Activity className="w-5 h-5" />
          <span className="text-xs">Trade</span>
        </button>

        <button
          onClick={() => onTabChange("history")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            activeTab === "history" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-xs">History</span>
        </button>

        <button
          onClick={() => onTabChange("messages")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
            activeTab === "messages" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs">Messages</span>
        </button>
      </div>
    </div>
  )
}
