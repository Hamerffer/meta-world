import { Menu } from "lucide-react"

interface EconomicCalendarScreenProps {
  onMenuClick: () => void
}

export default function EconomicCalendarScreen({ onMenuClick }: EconomicCalendarScreenProps) {
  const events = [
    { time: "08:30", currency: "USD", impact: "high", event: "Non-Farm Payrolls", forecast: "185K", previous: "180K" },
    { time: "10:00", currency: "EUR", impact: "medium", event: "GDP Growth Rate", forecast: "0.3%", previous: "0.2%" },
    {
      time: "12:30",
      currency: "GBP",
      impact: "high",
      event: "Interest Rate Decision",
      forecast: "5.25%",
      previous: "5.25%",
    },
    { time: "14:00", currency: "JPY", impact: "low", event: "Consumer Confidence", forecast: "35.2", previous: "35.0" },
    { time: "15:30", currency: "CAD", impact: "medium", event: "Employment Change", forecast: "25K", previous: "22K" },
  ]

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Economic Calendar</h1>
        </div>
        <div className="bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded">Ads</div>
      </div>

      {/* Date */}
      <div className="px-4 py-3 border-b border-border/50">
        <div className="text-sm font-semibold">Today, October 3, 2025</div>
      </div>

      {/* Events */}
      <div>
        {events.map((event, index) => (
          <div key={index} className="px-4 py-3 border-b border-border/50 hover:bg-white/5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-muted-foreground">{event.time}</span>
              <span className="font-mono text-sm font-semibold">{event.currency}</span>
              <span
                className={`w-2 h-2 rounded-full ${
                  event.impact === "high"
                    ? "bg-destructive"
                    : event.impact === "medium"
                      ? "bg-yellow-500"
                      : "bg-muted-foreground"
                }`}
              />
            </div>
            <div className="font-semibold mb-1">{event.event}</div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>Forecast: {event.forecast}</span>
              <span>Previous: {event.previous}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
