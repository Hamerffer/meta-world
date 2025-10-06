import { Menu } from "lucide-react"

interface JournalScreenProps {
  onMenuClick: () => void
}

export default function JournalScreen({ onMenuClick }: JournalScreenProps) {
  const logs = [
    { time: "10:24:05", type: "info", message: "Connection established to trade server" },
    { time: "10:24:03", type: "success", message: "Account balance updated: 3000.00 USD" },
    { time: "10:23:58", type: "info", message: "Market data synchronized" },
    { time: "10:23:45", type: "warning", message: "High volatility detected on EURUSD" },
    { time: "10:23:30", type: "info", message: "Price feed updated for 10 symbols" },
    { time: "10:23:15", type: "error", message: "Failed to connect to news server" },
    { time: "10:23:00", type: "info", message: "Application started" },
  ]

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Journal</h1>
        </div>
      </div>

      {/* Logs */}
      <div className="p-4 font-mono text-xs space-y-2">
        {logs.map((log, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-muted-foreground">{log.time}</span>
            <span
              className={
                log.type === "error"
                  ? "text-destructive"
                  : log.type === "warning"
                    ? "text-yellow-500"
                    : log.type === "success"
                      ? "text-success"
                      : "text-primary"
              }
            >
              [{log.type.toUpperCase()}]
            </span>
            <span className="text-muted-foreground">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
