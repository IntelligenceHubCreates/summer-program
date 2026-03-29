"use client";
import { PrepData } from "@/types";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { cn } from "@/lib/utils";

export default function PrepBox({ dayNum, prep }: { dayNum: number; prep: PrepData }) {
  const [checks, setChecks] = useLocalStorage<Record<string, boolean>>("manvay-prep", {});

  const toggle = (idx: number) => {
    const key = `${dayNum}-${idx}`;
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="prep-dashed rounded-xl bg-[#FFF8F0] p-3 sm:p-4">
      <div className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-amber-700 sm:mb-3 sm:text-xs">
        <span>🌅</span> Parent Prep — Do This the Night Before
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        {prep.items.map((item, i) => {
          const key = `${dayNum}-${i}`;
          const done = !!checks[key];
          return (
            <div key={i} className="flex items-start gap-2">
              {/* Larger tap target wrapper */}
              <button
                onClick={() => toggle(i)}
                className="group mt-0.5 flex shrink-0 items-center justify-center p-0.5"
                aria-label={done ? "Uncheck item" : "Check item"}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-[5px] border-2 text-[10px] font-bold transition-all sm:h-[18px] sm:w-[18px]",
                    done
                      ? "border-amber-400 bg-amber-400 text-white"
                      : "border-amber-400 bg-white group-active:bg-amber-50"
                  )}
                >
                  {done ? "✓" : ""}
                </span>
              </button>
              <span
                className={cn(
                  "text-xs leading-snug sm:text-sm",
                  done ? "line-through text-gray-400" : "text-gray-700"
                )}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-2.5 border-l-[3px] border-amber-400 bg-amber-50 px-2.5 py-2 rounded-r-lg text-[10px] italic text-amber-900 sm:mt-3 sm:px-3 sm:text-xs">
        💭 <strong>Parent Mindset:</strong> {prep.mindset}
      </div>
    </div>
  );
}
