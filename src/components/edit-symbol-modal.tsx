"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Home,
  DeleteIcon,
  PlusIcon,
  MenuIcon,
  Plus,
} from "lucide-react";
import AddSymbolModal from "./add-symbol-modal";

interface Category {
  symbol: string;
  name: string;
}

interface AddSymbolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoriesData: Category[] = [
  { symbol: "EURUSD", name: "Euro Vs US Dollar" },
  { symbol: "GBPUSD", name: "Pound Sterling Vs US Dollar" },
  { symbol: "US30", name: "Dow Jones Index" },
  { symbol: "XAUUSD", name: "Gold Vs US Dollar" },
  { symbol: "NASDAQ", name: "Nasdaq Composite" },
];

export default function EditSymbolOpen({
  isOpen,
  onClose,
}: AddSymbolModalProps) {
 const [isAddSymbolOpen, setIsAddSymbolOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>(categoriesData);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleBackClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      onClose();
    }
  };

  const handleDeleteClick = () => {
    if (deleteMode && selectedToDelete.length > 0) {
      // Delete all selected symbols
      setCategories(categories.filter(cat => !selectedToDelete.includes(cat.symbol)));
      setSelectedToDelete([]);
      setDeleteMode(false);
    } else {
      setDeleteMode(!deleteMode);
      if (!deleteMode) setSelectedToDelete([]); // Reset selections when entering delete mode
    }
  };

  const toggleSelect = (symbol: string) => {
    if (selectedToDelete.includes(symbol)) {
      setSelectedToDelete(selectedToDelete.filter(s => s !== symbol));
    } else {
      setSelectedToDelete([...selectedToDelete, symbol]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-scroll">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBackClick}
            className="hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-medium">Selected symbol</h1>
          {deleteMode && <span>{selectedToDelete.length}</span>}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setIsAddSymbolOpen(true)} className="hover:opacity-70 transition-opacity">
              <Plus className="w-6 h-6" />
            </button>
          <DeleteIcon
            className="cursor-pointer hover:text-red-500"
            onClick={handleDeleteClick}
          />
        </div>
      </div>

      {/* Breadcrumb */}
      {selectedCategory && (
        <div className="flex items-center gap-2 px-4 py-3 text-sm">
          <Home className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">→</span>
          <span className="text-primary">{selectedCategory}</span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {!selectedCategory && (
          <div>
            {categories.map((category, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between px-4 py-3 border-b border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm text-start">
                    <span className="block font-semibold">{category.symbol}</span>
                    <span className="block text-gray-400 text-xs">{category.name}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  {deleteMode ? (
                    <input
                      type="checkbox"
                      checked={selectedToDelete.includes(category.symbol)}
                      onChange={() => toggleSelect(category.symbol)}
                      className="w-4 h-4"
                    />
                  ) : (
                    <MenuIcon className="text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
            {!categories.length && (
              <div className="flex items-center justify-center h-full ">
                <span className="text-muted-foreground">No symbols found</span>
              </div>
            )}
          </div>
        )}
      </div>
           <AddSymbolModal isOpen={isAddSymbolOpen} onClose={() => setIsAddSymbolOpen(false)} />
    </div>
  );
}
