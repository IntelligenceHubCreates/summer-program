import { weeklyRotation } from "@/lib/data";

export default function WeeklyRotation() {
  return (
    <div className="animate-slide-up space-y-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-1 text-lg text-gray-800 sm:text-xl">🔄 Weekly Rotation System</h2>
        <p className="mb-4 text-xs text-gray-500 sm:mb-5 sm:text-sm">
          Use this rotation every week for 4 weeks. Same theme, different content each week.
        </p>

        <div className="grid grid-cols-1 gap-2.5 sm:gap-3 sm:grid-cols-2">
          {weeklyRotation.map((r) => (
            <div
              key={r.day}
              className="relative overflow-hidden rounded-2xl p-4 sm:p-5"
              style={{ background: r.color }}
            >
              {/* Ghost day label */}
              <span
                className="pointer-events-none absolute -right-3 -top-4 font-fredoka text-7xl opacity-[0.06]"
                style={{ color: r.textColor }}
              >
                {r.day.slice(0, 3)}
              </span>

              <div className="font-fredoka text-base mb-1 sm:text-lg" style={{ color: r.textColor }}>
                {r.emoji} {r.day}
              </div>
              <div
                className="mb-2 text-[10px] font-extrabold uppercase tracking-wider opacity-70 sm:mb-3 sm:text-xs"
                style={{ color: r.textColor }}
              >
                {r.theme}
              </div>
              <ul className="space-y-1">
                {r.items.map((item, i) => (
                  <li key={i} className="flex gap-1.5 text-[10px] text-gray-700 sm:text-xs">
                    <span className="opacity-40">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
