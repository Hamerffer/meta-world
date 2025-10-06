import { Menu, MessageCircle, ThumbsUp } from "lucide-react"

interface TradersCommunityScreenProps {
  onMenuClick: () => void
}

export default function TradersCommunityScreen({ onMenuClick }: TradersCommunityScreenProps) {
  const posts = [
    {
      author: "TradeMaster",
      time: "2h ago",
      content: "Just closed a profitable EURUSD trade! The trend is your friend. 📈",
      likes: 24,
      comments: 8,
    },
    {
      author: "ForexPro",
      time: "4h ago",
      content: "Anyone else watching the USD/JPY breakout? Looks like a good opportunity.",
      likes: 15,
      comments: 12,
    },
    {
      author: "ChartWizard",
      time: "6h ago",
      content: "My analysis on gold for next week. Expecting bullish momentum to continue.",
      likes: 42,
      comments: 19,
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
          <h1 className="text-xl font-semibold">Traders Community</h1>
        </div>
      </div>

      {/* Posts */}
      <div className="p-4 space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-card border border-border/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                {post.author[0]}
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-xs text-muted-foreground">{post.time}</div>
              </div>
            </div>
            <p className="mb-3">{post.content}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-primary">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
