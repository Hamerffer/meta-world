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

// Sortable Item Component
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

  // No "touchAction: none" here, to allow scrolling from anywhere except drag handle

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: deleteMode ? "default" : "default", // cursor grab only on handle
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-full flex items-center justify-between px-4 py-3 border-b border-border"
    >
      <div className="flex items-center gap-3">
        <div className="text-sm text-start">
          <span className="block font-semibold">{category.symbol}</span>
          <span className="block text-gray-400 text-xs">{category.name}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {deleteMode ? (
          <input
            type="checkbox"
            checked={selectedToDelete.includes(category.symbol)}
            onChange={() => toggleSelect(category.symbol)}
            className="w-4 h-4"
            aria-label={`Select ${category.symbol} for deletion`}
          />
        ) : (
          <MenuIcon
            className="text-muted-foreground cursor-grab"
            {...listeners}
            {...attributes}
            style={{ touchAction: "none" }} // drag handle disables scroll only here
            aria-label={`Drag handle for ${category.symbol}`}
          />
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
      activationConstraint: { delay: 250, tolerance: 5 },
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
    if (deleteMode) {
      if (selectedToDelete.length > 0) {
        setCategories(categories.filter(cat => !selectedToDelete.includes(cat.symbol)));
        setSelectedToDelete([]);
      }
      setDeleteMode(false);
    } else {
      setDeleteMode(true);
      setSelectedToDelete([]);
    }
  };

  const toggleSelect = (symbol: string) => {
    if (selectedToDelete.includes(symbol)) {
      // Remove symbol from selectedToDelete (deselect)
      setSelectedToDelete(selectedToDelete.filter(s => s !== symbol));
    } else {
      // Add symbol to selectedToDelete (select)
      setSelectedToDelete([...selectedToDelete, symbol]);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      setCategories(items => {
        const oldIndex = items.findIndex(item => item.symbol === active.id);
        const newIndex = items.findIndex(item => item.symbol === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
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
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-medium">Selected symbol</h1>
          {deleteMode && selectedToDelete.length > 0 && (
            <span className="ml-2 text-sm text-red-500" aria-live="polite">
              {selectedToDelete.length} selected
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAddSymbolOpen(true)}
            className="hover:opacity-70 transition-opacity"
            aria-label="Add new symbol"
          >
            <Plus className="w-6 h-6" />
          </button>
          <DeleteIcon
            className={`cursor-pointer hover:text-red-500 ${
              deleteMode ? "text-red-500" : ""
            }`}
            onClick={handleDeleteClick}
            aria-label={deleteMode ? "Delete selected symbols" : "Enter delete mode"}
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
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={categories.map(cat => cat.symbol)}
              strategy={verticalListSortingStrategy}
            >
              {categories.map(category => (
                <SortableItem
                  key={category.symbol}
                  category={category}
                  deleteMode={deleteMode}
                  selectedToDelete={selectedToDelete}
                  toggleSelect={toggleSelect}
                />
              ))}
            </SortableContext>
            {!categories.length && (
              <div className="flex items-center justify-center h-full">
                <span className="text-muted-foreground">No symbols found</span>
              </div>
            )}
          </DndContext>
        )}
      </div>

      <AddSymbolModal
        isOpen={isAddSymbolOpen}
        onClose={() => setIsAddSymbolOpen(false)}
      />
    </div>
  );
}
