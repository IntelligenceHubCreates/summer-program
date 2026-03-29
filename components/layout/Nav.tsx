"use client";
import { useTab } from "./TabContext";
import { TabId } from "@/types";
import { cn } from "@/lib/utils";

const tabs: { id: TabId; label: string; short: string }[] = [
  { id: "overview",  label: "🏠 Overview",        short: "🏠" },
  { id: "schedule",  label: "📅 Daily Schedule",   short: "📅" },
  { id: "days",      label: "📖 Day Scripts",      short: "📖" },
  { id: "rotation",  label: "🔄 Weekly Rotation",  short: "🔄" },
  { id: "tracker",   label: "✅ Tracker",           short: "✅" },
  { id: "prep",      label: "🌅 Parent Prep",       short: "🌅" },
  { id: "tips",      label: "💡 Parent Tips",       short: "💡" },
];

export default function Nav() {
  const { active, setActive } = useTab();
  return (
    <nav className="no-print sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-4xl">
        <div className="hide-scrollbar flex overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "shrink-0 whitespace-nowrap border-b-[3px] px-3 py-3 font-nunito text-xs font-bold transition-all sm:px-5 sm:py-4 sm:text-sm",
                active === t.id
                  ? "border-violet text-violet"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              )}
            >
              {/* Show short label on very small screens, full label on sm+ */}
              <span className="sm:hidden">{t.short}<span className="sr-only"> {t.label}</span></span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
