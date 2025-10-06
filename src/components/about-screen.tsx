import { Menu } from "lucide-react"

interface AboutScreenProps {
  onMenuClick: () => void
}

export default function AboutScreen({ onMenuClick }: AboutScreenProps) {
  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">About</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">MT</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">MetaTrader 5</h2>
        <div className="text-muted-foreground mb-6">Version 5.0.3850</div>

        <div className="space-y-4 text-sm">
          <div className="bg-card border border-border/50 rounded-lg p-4">
            <div className="font-semibold mb-1">Build</div>
            <div className="text-muted-foreground">3850 (10 Oct 2025)</div>
          </div>

          <div className="bg-card border border-border/50 rounded-lg p-4">
            <div className="font-semibold mb-1">Copyright</div>
            <div className="text-muted-foreground">© 2000-2025 MetaQuotes Ltd.</div>
          </div>

          <div className="bg-card border border-border/50 rounded-lg p-4">
            <div className="font-semibold mb-1">License</div>
            <div className="text-muted-foreground">Demo Account</div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <button className="text-primary text-sm hover:underline">Terms of Service</button>
          <span className="text-muted-foreground mx-2">•</span>
          <button className="text-primary text-sm hover:underline">Privacy Policy</button>
        </div>
      </div>
    </div>
  )
}
