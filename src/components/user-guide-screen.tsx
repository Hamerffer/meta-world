import { Menu, ChevronRight } from "lucide-react"

interface UserGuideScreenProps {
  onMenuClick: () => void
}

export default function UserGuideScreen({ onMenuClick }: UserGuideScreenProps) {
  const guides = [
    { title: "Getting Started", topics: 5 },
    { title: "Trading Basics", topics: 8 },
    { title: "Chart Analysis", topics: 12 },
    { title: "Risk Management", topics: 6 },
    { title: "Expert Advisors", topics: 10 },
    { title: "Account Management", topics: 4 },
  ]

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">User Guide</h1>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="p-4 space-y-3">
        {guides.map((guide, index) => (
          <button
            key={index}
            className="w-full bg-card border border-border/50 rounded-lg p-4 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="font-semibold mb-1">{guide.title}</div>
                <div className="text-xs text-muted-foreground">{guide.topics} topics</div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
