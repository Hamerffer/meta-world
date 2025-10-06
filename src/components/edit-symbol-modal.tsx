"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Home,
  DeleteIcon,
  MenuIcon,
  Plus,
} from "lucide-react";
import AddSymbolModal from "./add-symbol-modal";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

// Sortable item component
function SortableItem({
  category,
  deleteMode,
  selectedToDelete,
  toggleSelect,
}: {
  category: Category;
  deleteMode: boolean;
  selectedToDelete: string[];
  toggleSelect: (symbol: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: category.symbol });

  const style = {
    touchAction: "none",
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: deleteMode ? "default" : "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
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
  );
}

export default function EditSymbolOpen({
  isOpen,
  onClose,
}: AddSymbolModalProps) {
  const [isAddSymbolOpen, setIsAddSymbolOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>(categoriesData);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor)
  );

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
      setCategories(categories.filter((cat) => !selectedToDelete.includes(cat.symbol)));
      setSelectedToDelete([]);
      setDeleteMode(false);
    } else {
      setDeleteMode(!deleteMode);
      if (!deleteMode) setSelectedToDelete([]);
    }
  };

  const toggleSelect = (symbol: string) => {
    if (selectedToDelete.includes(symbol)) {
      setSelectedToDelete(selectedToDelete.filter((s) => s !== symbol));
    } else {
      setSelectedToDelete([...selectedToDelete, symbol]);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCategories((items) => {
        const oldIndex = items.findIndex((item) => item.symbol === active.id);
        const newIndex = items.findIndex((item) => item.symbol === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-scroll">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          <button onClick={handleBackClick} className="hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-medium">Selected symbol</h1>
          {deleteMode && <span>{selectedToDelete.length}</span>}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setIsAddSymbolOpen(true)} className="hover:opacity-70 transition-opacity">
            <Plus className="w-6 h-6" />
          </button>
          <DeleteIcon className="cursor-pointer hover:text-red-500" onClick={handleDeleteClick} />
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
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={categories.map((cat) => cat.symbol)} strategy={verticalListSortingStrategy}>
              {categories.map((category) => (
                <SortableItem
                  key={category.symbol}
                  category={category}
                  deleteMode={deleteMode}
                  selectedToDelete={selectedToDelete}
                  toggleSelect={toggleSelect}
                />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>

      <AddSymbolModal isOpen={isAddSymbolOpen} onClose={() => setIsAddSymbolOpen(false)} />
    </div>
  );
}
