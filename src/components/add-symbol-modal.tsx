"use client"

import { useState } from "react"
import { ArrowLeft, Search, Folder, Home, CheckCircle2, Circle } from "lucide-react"

interface Category {
  name: string
  count: string
}

interface Symbol {
  pair: string
  description: string
  selected: boolean
}

interface AddSymbolModalProps {
  isOpen: boolean
  onClose: () => void
}

const categories: Category[] = [
  { name: "Forex", count: "20/29" },
  { name: "Indexes", count: "0/45" },
  { name: "Metals", count: "0/10" },
  { name: "Nasdaq", count: "0/9055" },
]

const forexSymbols: Symbol[] = [
  { pair: "AUDJPY", description: "Australian Dollar vs Hungarian Forint", selected: true },
  { pair: "AUDJPY", description: "Australian Dollar vs Japanese Yen", selected: true },
  { pair: "AUDMXN", description: "Australian Dollar vs New Zealand Dollar", selected: true },
  { pair: "AUDNZD", description: "Australian Dollar vs New Zealand Dollar", selected: true },
  { pair: "AUDSEK", description: "Australian Dollar vs Swedish Krona", selected: true },
  { pair: "AUDUSD", description: "Australian Dollar vs US Dollar", selected: true },
  { pair: "AUDTHB", description: "Australian Dollar vs Thai Baht", selected: false },
  { pair: "AUDUSD", description: "Australian Dollar vs US Dollar", selected: true },
  { pair: "AUDZAR", description: "Australian Dollar vs South African Rand", selected: false },
  { pair: "CADCHF", description: "Canadian Dollar vs Swiss Franc", selected: false },
  { pair: "CADCHF", description: "Canadian Dollar vs Swiss Franc", selected: false },
  { pair: "CADJPY", description: "Canadian Dollar vs Japanese Yen", selected: false },
  { pair: "CADMXN", description: "Canadian Dollar vs Mexican Peso", selected: false },
  { pair: "CADNOK", description: "Canadian Dollar vs Norwegian Krone", selected: false },
   { pair: "CADCHF", description: "Canadian Dollar vs Swiss Franc", selected: false },
  { pair: "CADCHF", description: "Canadian Dollar vs Swiss Franc", selected: false },
  { pair: "CADJPY", description: "Canadian Dollar vs Japanese Yen", selected: false },
  { pair: "CADMXN", description: "Canadian Dollar vs Mexican Peso", selected: false },
  { pair: "CADNOK", description: "Canadian Dollar vs Norwegian Krone", selected: false },
]

export default function AddSymbolModal({ isOpen, onClose }: AddSymbolModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [symbols, setSymbols] = useState<Symbol[]>(forexSymbols)
  const [searchQuery, setSearchQuery] = useState("")

  if (!isOpen) return null

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
  }

  const handleBackClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null)
    } else {
      onClose()
    }
  }

  const toggleSymbol = (index: number) => {
    setSymbols((prev) => prev.map((symbol, i) => (i === index ? { ...symbol, selected: !symbol.selected } : symbol)))
  }

  const filteredSymbols = symbols.filter(
    (symbol) =>
      symbol.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      symbol.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-scroll">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={handleBackClick} className="hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-medium">Add symbol</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find symbols"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Breadcrumb (only show when category is selected) */}
      {selectedCategory && (
        <div className="flex items-center gap-2 px-4 py-3 text-sm">
          <Home className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">→</span>
          <span className="text-primary">{selectedCategory}</span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {!selectedCategory ? (
          // Category List
          <div>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-card/50 transition-colors border-b border-border"
              >
                <div className="flex items-center gap-3">
                  <Folder className="w-5 h-5 text-yellow-500" />
                  <span className="text-base">{category.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{category.count}</span>
              </button>
            ))}
          </div>
        ) : (
          // Symbol List
          <div>
            {filteredSymbols.map((symbol, index) => (
              <button
                key={index}
                onClick={() => toggleSymbol(index)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-card/50 transition-colors border-b border-border"
              >
                <div className="flex-1 text-left">
                  <div className="text-base font-medium">{symbol.pair}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{symbol.description}</div>
                </div>
                {symbol.selected ? (
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 ml-3" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-3" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}