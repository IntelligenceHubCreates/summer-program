const schedule = [
  { time: "7:00 AM", title: "Wake Up + Morning Routine", desc: "Fresh, ready for the day", bg: "bg-gray-50" },
  { time: "8:00 AM", title: "🏃 Active Learning Session", desc: "Build, experiment, role play — 30 mins", bg: "bg-red-50" },
  { time: "8:30 AM", title: "🧩 Brain Challenge", desc: "Chess / Puzzle / Logic game — 25 mins", bg: "bg-violet-50" },
  { time: "9:00 AM", title: "📚 Reading Aloud", desc: "Story or knowledge book — 20 mins", bg: "bg-blue-50" },
  { time: "9:20 AM", title: "🗣️ Speaking Time", desc: "He explains the activity or story — 15 mins", bg: "bg-green-50" },
  { time: "9:35 AM", title: "🥣 Breakfast + Rest", desc: "No screen time during break", bg: "bg-gray-50" },
  { time: "10:30 AM", title: "🌳 Outdoor Play", desc: "Running, cycling, nature walk — 45-60 mins", bg: "bg-orange-50" },
  { time: "12:00 PM", title: "🍽️ Lunch + Rest", desc: "Free, relaxed time", bg: "bg-gray-50" },
  { time: "3:00 PM", title: "🎨 Creative / Project Time", desc: "Drawing, building, crafts — 30-45 mins", bg: "bg-purple-50" },
  { time: "5:30 PM", title: "🌅 Evening Talk", desc: '"Tell me about your day" — 10-15 mins', bg: "bg-green-50" },
];

export default function Schedule() {
  return (
    <div className="animate-slide-up space-y-4 sm:space-y-5">
      <button
        onClick={() => window.print()}
        className="no-print flex items-center gap-2 rounded-xl bg-violet px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-dark transition-colors sm:px-6 sm:py-3"
      >
        🖨️ Print Schedule
      </button>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:mb-4 sm:text-xl">⏰ Suggested Daily Timetable</h2>
        <div className="space-y-2">
          {schedule.map((s) => (
            <div key={s.time} className={`flex gap-2 rounded-xl p-2.5 sm:grid sm:grid-cols-[90px_1fr] sm:gap-3 sm:p-3 ${s.bg}`}>
              <div className="font-fredoka text-sm text-violet shrink-0 w-[72px] sm:w-auto sm:text-base">{s.time}</div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-xs sm:text-sm">{s.title}</div>
                <div className="text-[10px] text-gray-500 mt-0.5 sm:text-xs">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-3 sm:mt-5 sm:p-4">
          <div className="font-bold text-xs text-orange-800 mb-1.5 sm:text-sm sm:mb-2">⚠️ Screen Time Rules</div>
          <div className="text-[10px] text-gray-600 space-y-1 sm:text-xs">
            <div>✅ Learning videos okay — max 20 min/day (National Geographic Kids, TED-Ed)</div>
            <div>❌ No passive cartoons during learning hours</div>
            <div>❌ No mobile during meals</div>
            <div>✅ Reward screen time ONLY after outdoor play is done</div>
          </div>
        </div>
      </div>
    </div>
  );
}
