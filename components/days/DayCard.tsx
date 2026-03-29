"use client";
import { useState } from "react";
import { DayData } from "@/types";
import { cn } from "@/lib/utils";
import StepCard from "./StepCard";
import PrepBox from "./PrepBox";
import { ChevronDown } from "lucide-react";

export default function DayCard({ day, color }: { day: DayData; color: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all duration-200",
        open && "shadow-lg"
      )}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2.5 px-3 py-3 text-left hover:bg-gray-50 transition-colors sm:gap-3 sm:px-5 sm:py-4"
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] font-fredoka text-lg text-white sm:h-12 sm:w-12 sm:text-xl"
          style={{ background: color }}
        >
          D{day.num}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-nunito font-extrabold text-sm text-gray-800 leading-tight">{day.title}</div>
          <div className="text-[10px] text-gray-500 mt-0.5 sm:text-xs">{day.theme}</div>
          <div className="mt-1 flex flex-wrap gap-1">
            {day.tags.map((t) => (
              <span key={t} className="rounded-lg bg-gray-100 px-1.5 py-0.5 text-[9px] font-semibold text-gray-500 sm:px-2 sm:text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={18}
          className={cn("shrink-0 text-gray-400 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      {/* Expandable content */}
      <div className={cn("day-content border-t border-gray-100", open && "open")}>
        <div className="space-y-3 px-3 py-3 sm:space-y-4 sm:px-5 sm:py-4">
          {/* Objective */}
          <div className="rounded-xl bg-violet/10 px-3 py-2 text-xs font-bold text-violet sm:px-4 sm:py-2.5 sm:text-sm">
            🎯 Objective: {day.objective}
          </div>

          {/* Prep */}
          <PrepBox dayNum={day.num} prep={day.prep} />

          {/* Tools */}
          <div className="rounded-xl bg-green-50 p-3 sm:p-4">
            <div className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-green-700 sm:text-xs">
              🛠️ Today&apos;s Tools Needed
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {day.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-green-100 bg-white px-2 py-1 text-[10px] font-semibold text-green-800 sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3 sm:space-y-4">
            {day.steps.map((step, i) => (
              <StepCard key={i} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
