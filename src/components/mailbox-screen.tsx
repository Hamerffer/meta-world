import { Menu, Mail } from "lucide-react"

interface MailboxScreenProps {
  onMenuClick: () => void
}

export default function MailboxScreen({ onMenuClick }: MailboxScreenProps) {
  const messages = [
    {
      id: 1,
      subject: "Welcome to MetaTrader",
      preview: "Thank you for choosing our platform...",
      time: "10:24",
      unread: true,
    },
    { id: 2, subject: "Market Update", preview: "Daily market analysis and insights...", time: "09:15", unread: true },
    {
      id: 3,
      subject: "Account Verification",
      preview: "Your account has been verified...",
      time: "Yesterday",
      unread: true,
    },
    { id: 4, subject: "Trading Tips", preview: "Learn advanced trading strategies...", time: "Oct 2", unread: false },
    {
      id: 5,
      subject: "System Maintenance",
      preview: "Scheduled maintenance notification...",
      time: "Oct 1",
      unread: false,
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
          <h1 className="text-xl font-semibold">Mailbox</h1>
        </div>
        <div className="bg-destructive text-white text-xs font-semibold px-2 py-1 rounded-full">8</div>
      </div>

      {/* Messages List */}
      <div>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 px-4 py-3 border-b border-border/50 hover:bg-white/5 cursor-pointer ${
              message.unread ? "bg-white/5" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3
                  className={`font-semibold truncate ${message.unread ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {message.subject}
                </h3>
                <span className="text-xs text-muted-foreground ml-2">{message.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
