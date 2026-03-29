"use client";
import { useTab } from "./TabContext";
import { TabId } from "@/types";
import { cn } from "@/lib/utils";

const tabs: { id: TabId; emoji: string; label: string }[] = [
  { id: "overview",  emoji: "🏠", label: "Home" },
  { id: "schedule",  emoji: "📅", label: "Schedule" },
  { id: "days",      emoji: "📖", label: "Scripts" },
  { id: "rotation",  emoji: "🔄", label: "Rotation" },
  { id: "tracker",   emoji: "✅", label: "Tracker" },
  { id: "prep",      emoji: "🌅", label: "Prep" },
  { id: "tips",      emoji: "💡", label: "Tips" },
];

export default function Nav() {
  const { active, setActive } = useTab();
  return (
    <nav className="no-print sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="hide-scrollbar flex overflow-x-auto px-1 py-2 gap-1 sm:justify-center sm:px-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "flex shrink-0 flex-col items-center justify-center rounded-xl px-3 py-1.5 transition-all min-w-[52px] sm:min-w-[60px]",
              active === t.id
                ? "bg-violet text-white shadow-sm"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            )}
          >
            <span className="text-lg leading-none sm:text-xl">{t.emoji}</span>
            <span className={cn(
              "mt-0.5 text-[9px] font-bold leading-none sm:text-[10px]",
              active === t.id ? "text-white" : "text-gray-500"
            )}>
              {t.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
