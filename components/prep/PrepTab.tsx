"use client";
import { useState } from "react";
import { weeks } from "@/lib/data";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { cn } from "@/lib/utils";

export default function PrepTab() {
  const [weekIdx, setWeekIdx] = useState(0);
  const [checks, setChecks] = useLocalStorage<Record<string, boolean>>("manvay-prep", {});

  const toggle = (dayNum: number, itemIdx: number) => {
    const key = `${dayNum}-${itemIdx}`;
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const week = weeks[weekIdx];

  return (
    <div className="animate-slide-up space-y-4 sm:space-y-5">
      {/* How-to */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:text-xl">🌅 Parent Prep Guide</h2>
        <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-3">
          {[
            { icon: "🌙", title: "Night Before", desc: "Read the next day's prep list. Gather all materials. Takes only 5–10 minutes." },
            { icon: "☀️", title: "Morning Of",   desc: "Set up the space before he wakes. A ready environment creates instant excitement." },
            { icon: "💭", title: "Mindset Check", desc: "Read the mindset note for each day. Your energy shapes his entire session." },
          ].map((c) => (
            <div key={c.title} className="prep-dashed rounded-xl bg-[#FFF8F0] p-3 flex gap-3 sm:block sm:p-4">
              <div className="text-xl sm:text-2xl sm:mb-2 shrink-0">{c.icon}</div>
              <div>
                <div className="font-extrabold text-xs mb-0.5 sm:text-sm sm:mb-1">{c.title}</div>
                <div className="text-[10px] text-gray-500 sm:text-xs">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Week selector */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {weeks.map((w, i) => (
          <button
            key={i}
            onClick={() => setWeekIdx(i)}
            className={cn(
              "rounded-xl border-2 px-3 py-1.5 font-nunito text-xs font-extrabold transition-all sm:px-4 sm:py-2 sm:text-sm",
              weekIdx === i
                ? "border-violet bg-violet text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            )}
          >
            {i < 4 ? `Week ${i + 1}` : "Final Days"}
          </button>
        ))}
      </div>

      {/* Week heading */}
      <div className="font-fredoka text-lg flex items-center gap-2 sm:text-xl" style={{ color: week.color }}>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-sm text-white sm:h-9 sm:w-9 sm:text-base" style={{ background: week.color }}>W</span>
        {week.label}
      </div>

      {/* Day prep cards */}
      <div className="space-y-3 sm:space-y-4">
        {week.days.map((day) => {
          const total = day.prep.items.length;
          const doneCount = day.prep.items.filter((_, i) => checks[`${day.num}-${i}`]).length;
          const pct = Math.round((doneCount / total) * 100);

          return (
            <div key={day.num} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
              {/* Card header */}
              <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-fredoka text-base text-white sm:h-11 sm:w-11 sm:text-lg"
                  style={{ background: week.color }}
                >
                  D{day.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-nunito font-extrabold text-xs text-gray-800 sm:text-sm">{day.title}</div>
                  <div className="text-[10px] text-gray-400 sm:text-xs">{day.theme}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-fredoka text-base sm:text-lg" style={{ color: pct === 100 ? "#16A34A" : week.color }}>
                    {doneCount}/{total}
                  </div>
                  <div className="text-[9px] text-gray-400 sm:text-[10px]">prepped</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-gray-100 sm:mb-4">
                <div
                  className="progress-fill h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, background: pct === 100 ? "#16A34A" : week.color }}
                />
              </div>

              {/* Checklist */}
              <div className="mb-3 space-y-2 sm:mb-4 sm:space-y-2.5">
                {day.prep.items.map((item, i) => {
                  const key = `${day.num}-${i}`;
                  const done = !!checks[key];
                  return (
                    <div key={i} className="flex items-start gap-2">
                      <button
                        onClick={() => toggle(day.num, i)}
                        className={cn(
                          "mt-0.5 h-[18px] w-[18px] shrink-0 rounded-[5px] border-2 flex items-center justify-center text-[10px] font-bold transition-all",
                          done ? "border-amber-400 bg-amber-400 text-white" : "border-amber-400 bg-white"
                        )}
                      >
                        {done ? "✓" : ""}
                      </button>
                      <span className={cn("text-xs leading-snug sm:text-sm", done ? "text-gray-400 line-through" : "text-gray-700")}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Mindset */}
              <div className="border-l-[3px] border-amber-400 bg-amber-50 px-2.5 py-2 rounded-r-lg text-[10px] italic text-amber-900 sm:px-3 sm:text-xs">
                💭 <strong>Parent Mindset:</strong> {day.prep.mindset}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
