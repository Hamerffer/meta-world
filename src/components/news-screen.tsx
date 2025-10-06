import { Menu } from "lucide-react"

interface NewsScreenProps {
  onMenuClick: () => void
}

export default function NewsScreen({ onMenuClick }: NewsScreenProps) {
  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">News</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="bg-card border border-border/50 rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-1">2025.10.03 08:30</div>
          <h3 className="font-semibold mb-2">Fed Announces Interest Rate Decision</h3>
          <p className="text-sm text-muted-foreground">
            The Federal Reserve has announced its latest interest rate decision, maintaining rates at current levels...
          </p>
        </div>
        <div className="bg-card border border-border/50 rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-1">2025.10.03 06:15</div>
          <h3 className="font-semibold mb-2">EUR/USD Reaches New High</h3>
          <p className="text-sm text-muted-foreground">
            The EUR/USD pair has reached a new monthly high following positive economic data from the Eurozone...
          </p>
        </div>
        <div className="bg-card border border-border/50 rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-1">2025.10.02 14:20</div>
          <h3 className="font-semibold mb-2">Oil Prices Surge on Supply Concerns</h3>
          <p className="text-sm text-muted-foreground">
            Crude oil prices have surged by 3% amid concerns about supply disruptions in major producing regions...
          </p>
        </div>
      </div>
    </div>
  )
}
