import AboutScreen from '@/components/about-screen'
import BottomNav from '@/components/bottom-nav' 
import ChartsScreen from '@/components/charts-screen'
import ManageAccount from '@/components/manage-account'
import EconomicCalendarScreen from '@/components/economic-calendar-screen'
import HistoryScreen from '@/components/history-screen'
import JournalScreen from '@/components/journal-screen'
import MailboxScreen from '@/components/mailbox-screen'
import Messages from '@/components/messages'
import MQL5Screen from '@/components/mql5-screen'
import NewsScreen from '@/components/news-screen'
import QuotesScreen from '@/components/quotes-screen'
import SettingsScreen from '@/components/settings-screen'
import SideMenu from '@/components/side-menu'
import TradeScreen from '@/components/trade-screen'
import TradersCommunityScreen from '@/components/traders-community-screen'
import UserGuideScreen from '@/components/user-guide-screen'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react"
 
type Screen =
  | "quotes"
  | "charts"
  | "trade"
  | "history"
  | "messages"
  | "news"
  | "mailbox"
  | "journal"
  | "settings"
  | "economic-calendar"
  | "traders-community"
  | "mql5"
  | "user-guide"
  | "about"
  | "manage-account"


export const Route = createFileRoute('/')({
  component: App,
})
 
function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("quotes")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen as Screen)
  }

  const handleTabChange = (tab: "quotes" | "charts" | "trade" | "history" | "messages") => {
    setActiveScreen(tab)
  }
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
     <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={handleNavigate} />

        <div className="flex-1 overflow-auto pb-20">
        {activeScreen === "quotes" && <QuotesScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "charts" && <ChartsScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "trade" && <TradeScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "history" && <HistoryScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "news" && <NewsScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "mailbox" && <MailboxScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "journal" && <JournalScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "settings" && <SettingsScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "economic-calendar" && <EconomicCalendarScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "traders-community" && <TradersCommunityScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "mql5" && <MQL5Screen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "user-guide" && <UserGuideScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "about" && <AboutScreen onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "messages" && <Messages onMenuClick={() => setIsMenuOpen(true)} />}
        {activeScreen === "manage-account" && <ManageAccount onMenuClick={() => setIsMenuOpen(true)} />}
      </div>
     <BottomNav
        activeTab={
          activeScreen === "quotes" ||
          activeScreen === "charts" ||
          activeScreen === "trade"  ||
          activeScreen === "history" ||
          activeScreen === "messages"
            ? activeScreen
            : "quotes"
        }
        onTabChange={handleTabChange}
      />
    </div>
  )
}
