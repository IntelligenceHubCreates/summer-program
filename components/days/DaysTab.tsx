"use client";
import { useState } from "react";
import { weeks } from "@/lib/data";
import DayCard from "./DayCard";
import { cn } from "@/lib/utils";

export default function DaysTab() {
  const [weekIdx, setWeekIdx] = useState(0);
  const week = weeks[weekIdx];

  return (
    <div className="animate-slide-up space-y-4">
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

      {/* Week header */}
      <div>
        <div className="font-fredoka text-lg flex items-center gap-2 sm:text-xl" style={{ color: week.color }}>
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-sm text-white sm:h-9 sm:w-9 sm:text-base"
            style={{ background: week.color }}
          >
            W
          </span>
          {week.label}
        </div>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">{week.desc}</p>
      </div>

      {/* Day cards */}
      <div className="space-y-2.5 sm:space-y-3">
        {week.days.map((day) => (
          <DayCard key={day.num} day={day} color={week.color} />
        ))}
      </div>
    </div>
  );
}
