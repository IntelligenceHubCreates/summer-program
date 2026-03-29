import { weeks } from "@/lib/data";

const principles = [
  { icon: "🔍", title: "Curiosity", desc: "Ask WHY, observe, explore the world around him" },
  { icon: "🧩", title: "Problem Solving", desc: "Figure things out, try & improve, think logically" },
  { icon: "🗣️", title: "Communication", desc: "Explain ideas clearly, storytell, debate" },
  { icon: "🎨", title: "Creativity", desc: "Build, design, invent, express imagination" },
  { icon: "❤️", title: "Emotional IQ", desc: "Understand feelings, empathy, social thinking" },
  { icon: "🌍", title: "Real World", desc: "Money, cooking, planning, life skills" },
];

const routine = [
  { time: "30 min", activity: "🏃 Active Learning", goal: "Build, Experiment, Role Play", bg: "from-[#FF6B6B] to-[#FF8E53]" },
  { time: "25 min", activity: "🧩 Brain Challenge", goal: "Chess, Puzzle, Logic", bg: "from-[#845EC2] to-[#D65DB1]" },
  { time: "20 min", activity: "📚 Reading", goal: "Aloud + Discussion", bg: "from-[#2196F3] to-[#00BCD4]" },
  { time: "15 min", activity: "🗣️ Speaking Time", goal: "Explain Something Daily", bg: "from-[#43A047] to-[#00BFA5]" },
  { time: "45–60 min", activity: "🌳 Outdoor Play", goal: "Run, Cycle, Explore", bg: "from-[#FF8C42] to-[#FFB800]" },
];

const allTools = [
  "♟️ Chess Board (basic)", "🧩 Jigsaw Puzzles (100–200 pcs)", "🧱 LEGO / Building Blocks",
  "📖 Panchatantra Stories", "📖 365 Why Questions Book", "🌱 Seed + Pot + Soil",
  "🧪 Baking Soda + Vinegar", "🎨 Drawing Book + Colors", "📏 Ruler + Paper + Tape",
  "♻️ Waste Materials Box", "💰 ₹50 coins (for Day 22)", "🔬 Magnets (small)",
];

export default function Overview() {
  return (
    <div className="animate-slide-up space-y-4 sm:space-y-5">
      {/* Principles */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 flex items-center gap-2 text-lg text-gray-800 sm:mb-4 sm:text-xl">🎯 What We&apos;re Building</h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-100 bg-[#FFF9F0] p-3 text-center sm:p-4">
              <div className="mb-1.5 text-2xl sm:text-3xl">{p.icon}</div>
              <h3 className="font-nunito text-xs font-extrabold sm:text-sm">{p.title}</h3>
              <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Routine */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 flex items-center gap-2 text-lg text-gray-800 sm:mb-4 sm:text-xl">⏰ Daily Routine Template</h2>
        <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-3">
          {routine.map((r) => (
            <div key={r.activity} className={`rounded-2xl bg-gradient-to-br ${r.bg} flex items-center gap-3 p-3 text-white sm:block sm:p-4`}>
              <div className="text-xs font-bold uppercase tracking-wide opacity-80 shrink-0 sm:block">{r.time}</div>
              <div className="flex-1 sm:mt-1">
                <div className="font-fredoka text-sm sm:text-base">{r.activity}</div>
                <div className="text-[10px] opacity-80 sm:mt-1 sm:text-xs">{r.goal}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Master Rule */}
      <div className="rounded-2xl border-2 border-[#FFB800] bg-gradient-to-br from-[#FFF7ED] to-[#FFFBEB] p-4 sm:p-5">
        <h3 className="font-fredoka mb-2 text-base text-amber-800 sm:mb-3 sm:text-lg">🌟 The Master Rule — Ask After EVERY Activity</h3>
        <div className="space-y-1.5 sm:space-y-2">
          {["What did you do?", "Why did you do it that way?", "What did you learn from this?"].map((q) => (
            <div key={q} className="flex items-start gap-2 text-xs font-bold text-amber-900 sm:text-sm">
              <span>⭐</span><span>{q}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[10px] text-amber-700 sm:mt-3 sm:text-xs">This converts activity → intelligence. Never skip this step.</p>
      </div>

      {/* Tools */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:mb-4 sm:text-xl">🛠️ Tools to Collect Before Day 1</h2>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {allTools.map((t) => (
            <span key={t} className="rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 sm:px-3 sm:py-2">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Week summary */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:mb-4 sm:text-xl">📅 30-Day Program at a Glance</h2>
        <div className="space-y-2 sm:space-y-3">
          {weeks.map((w) => (
            <div key={w.label} className="flex items-start gap-3 rounded-xl p-2.5 sm:p-3" style={{ background: `${w.color}12` }}>
              <div className="h-3 w-3 mt-1.5 rounded-full flex-shrink-0" style={{ background: w.color }} />
              <div>
                <div className="font-nunito font-extrabold text-xs sm:text-sm" style={{ color: w.color }}>{w.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5 sm:text-xs">{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
