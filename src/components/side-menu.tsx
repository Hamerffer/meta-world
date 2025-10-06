"use client"

import { TrendingUp, Newspaper, Mail, BookOpen, Settings, Calendar, Users, Code, HelpCircle, Info } from "lucide-react"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (screen: string) => void
}

export default function SideMenu({ isOpen, onClose, onNavigate }: SideMenuProps) {
  const menuItems = [
    { icon: TrendingUp, label: "Trade", badge: null, screen: "trade" },
    { icon: Newspaper, label: "News", badge: null, screen: "news" },
    { icon: Mail, label: "Mailbox", badge: 8, screen: "mailbox" },
    { icon: BookOpen, label: "Journal", badge: null, screen: "journal" },
    { icon: Settings, label: "Settings", badge: null, screen: "settings" },
    { icon: Calendar, label: "Economic calendar", badge: "Ads", screen: "economic-calendar" },
    { icon: Users, label: "Traders Community", badge: null, screen: "traders-community" },
    { icon: Code, label: "MQL5 Algo Trading", badge: null, screen: "mql5" },
    { icon: HelpCircle, label: "User guide", badge: null, screen: "user-guide" },
    { icon: Info, label: "About", badge: null, screen: "about" },
  ]

  const handleMenuClick = (screen: string) => {
    onNavigate(screen)
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 bg-[#111822] z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative px-4 py-3 border-b border-border/40">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
              QA
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold">Qwerty Asdf</div>
              <div className="text-xs text-muted-foreground">10007787036 - MetaQuotes-Demo</div>
            </div>
           
          </div>
          <button className="text-primary text-sm mt-2 hover:underline">Manage accounts</button>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.screen)}
              className="w-full flex items-center gap-4 px-4 py-2 hover:bg-white/5 transition-colors relative"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-base">{item.label}</span>
              {item.badge && (
                <span
                  className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded ${
                    item.badge === "Ads" ? "bg-primary/20 text-primary" : "bg-destructive text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

         
      </div>
    </>
  )
}
