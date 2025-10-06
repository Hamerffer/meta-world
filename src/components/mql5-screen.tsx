import { Menu, Play } from "lucide-react"

interface MQL5ScreenProps {
  onMenuClick: () => void
}

export default function MQL5Screen({ onMenuClick }: MQL5ScreenProps) {
  const scripts = [
    { name: "Moving Average EA", status: "Running", profit: "+125.50" },
    { name: "RSI Strategy", status: "Stopped", profit: "-15.20" },
    { name: "Breakout Bot", status: "Running", profit: "+89.30" },
  ]

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">MQL5 Algo Trading</h1>
        </div>
      </div>

      {/* Expert Advisors */}
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">EXPERT ADVISORS</h2>
          {scripts.map((script, index) => (
            <div key={index} className="bg-card border border-border/50 rounded-lg p-4 mb-3">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{script.name}</div>
                <button className="p-2 hover:bg-white/5 rounded">
                  <Play className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    script.status === "Running" ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {script.status}
                </span>
                <span className={script.profit.startsWith("+") ? "text-success" : "text-destructive"}>
                  {script.profit} USD
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90">
          Browse Market
        </button>
      </div>
    </div>
  )
}
