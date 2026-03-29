"use client";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { cn } from "@/lib/utils";
import { weeks } from "@/lib/data";

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const milestones = [
  { day: 7,  icon: "🌟", title: "Day 7 Complete — First Week Hero!", reward: "Special snack or small sticker reward" },
  { day: 14, icon: "🎯", title: "Day 14 Complete — Halfway Champion!", reward: "A special outing or trip to a park" },
  { day: 21, icon: "🚀", title: "Day 21 Complete — Three Week Warrior!", reward: "A toy or book he chooses himself" },
  { day: 30, icon: "🏆", title: "Day 30 Complete — Summer Intelligence Champion!", reward: "Big celebration — certificate, dinner out, or his choice!" },
];

export default function Tracker() {
  const [completed, setCompleted] = useLocalStorage<number[]>("manvay-tracker", []);
  const completedSet = new Set(completed);

  const toggle = (day: number) => {
    setCompleted((prev) =>
      completedSet.has(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const count = completed.length;
  const pct = Math.round((count / 30) * 100);

  const dayTitles: Record<number, string> = {};
  weeks.forEach((w) => w.days.forEach((d) => { dayTitles[d.num] = d.title; }));

  return (
    <div className="animate-slide-up space-y-4 sm:space-y-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:mb-4 sm:text-xl">✅ 30-Day Progress Tracker</h2>
        <p className="mb-3 text-xs text-gray-500 sm:mb-4 sm:text-sm">Tap a day to mark it complete! Celebrate every milestone with Manvay.</p>

        {/* Progress bar */}
        <div className="mb-2 flex justify-between text-xs font-semibold text-gray-500 sm:text-sm">
          <span>Days Completed: <span className="text-violet font-bold">{count}</span> / 30</span>
          <span className="text-violet font-bold">{pct}%</span>
        </div>
        <div className="mb-4 h-3 overflow-hidden rounded-full bg-gray-100 sm:mb-5 sm:h-3.5">
          <div
            className="progress-fill h-full rounded-full bg-gradient-to-r from-mint to-violet"
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Grid — 6 cols on mobile, 6 on sm */}
        <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const done = completedSet.has(day);
            return (
              <button
                key={day}
                onClick={() => toggle(day)}
                title={dayTitles[day]}
                className={cn(
                  "relative aspect-square rounded-xl border-2 flex flex-col items-center justify-center transition-all active:scale-95 hover:scale-105",
                  done
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
                    : "border-gray-200 bg-white hover:border-violet"
                )}
              >
                <span className={cn("font-fredoka text-base sm:text-xl", done ? "text-white" : "text-gray-800")}>
                  {day}
                </span>
                <span className={cn("text-[7px] font-bold sm:text-[9px]", done ? "text-white/80" : "text-gray-400")}>
                  {dayNames[(day - 1) % 7]}
                </span>
                {done && (
                  <span className="absolute right-1 top-0.5 text-[9px] sm:text-xs">✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-3 flex gap-4 text-[10px] font-semibold text-gray-500 sm:mt-4 sm:text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-3.5 w-3.5 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-600 sm:h-4 sm:w-4" />
            Completed
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3.5 w-3.5 rounded-md border-2 border-gray-200 bg-white sm:h-4 sm:w-4" />
            Pending
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:mb-4 sm:text-xl">🏆 Milestone Rewards</h2>
        <div className="space-y-2 sm:space-y-3">
          {milestones.map((m) => {
            const reached = completedSet.has(m.day);
            return (
              <div
                key={m.day}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3 transition-all sm:gap-4 sm:p-4",
                  reached
                    ? m.day === 30
                      ? "border-2 border-[#FFB800] bg-gradient-to-br from-[#FFF9F0] to-[#FFFBEB]"
                      : "border-emerald-200 bg-emerald-50"
                    : "border-gray-100 bg-gray-50"
                )}
              >
                <div className={cn("text-2xl sm:text-3xl", !reached && "grayscale opacity-40")}>{m.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className={cn("font-bold text-xs sm:text-sm", reached ? "text-gray-800" : "text-gray-400")}>
                    {m.title}
                  </div>
                  <div className={cn("text-[10px] mt-0.5 sm:text-xs", reached ? "text-gray-500" : "text-gray-300")}>
                    {m.reward}
                  </div>
                </div>
                {reached && (
                  <div className="ml-auto shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 sm:px-2.5 sm:py-1 sm:text-xs">
                    ✓ Done
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
