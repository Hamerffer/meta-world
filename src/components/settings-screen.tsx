import { Menu, ChevronRight } from "lucide-react"

interface SettingsScreenProps {
  onMenuClick: () => void
}

export default function SettingsScreen({ onMenuClick }: SettingsScreenProps) {
  const settingsSections = [
    {
      title: "Account",
      items: ["Profile", "Security", "Notifications", "Privacy"],
    },
    {
      title: "Trading",
      items: ["Default lot size", "One-click trading", "Expert advisors", "Alerts"],
    },
    {
      title: "Display",
      items: ["Theme", "Language", "Time zone", "Chart settings"],
    },
    {
      title: "About",
      items: ["Version", "Terms of service", "Privacy policy", "Support"],
    },
  ]

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-white/5 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </div>

      {/* Settings List */}
      <div className="py-2">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">{section.title}</div>
            {section.items.map((item, itemIndex) => (
              <button
                key={itemIndex}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors"
              >
                <span>{item}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
