export default function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] px-4 pt-8 pb-12 text-center sm:px-6 sm:pt-10 sm:pb-14">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(78,205,196,0.12),transparent_70%)]" />

      <div className="relative z-10">
        <span className="mb-3 block text-4xl sm:text-5xl animate-float">🧠</span>
        <h1 className="font-fredoka text-[clamp(20px,5vw,46px)] leading-tight text-[#FFB800]">
          Manvay&apos;s Summer Intelligence Program
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-white/60 px-2">
          30 Days · Age 7 · Type A (Energetic) + Type C (Curious &amp; Talkative)
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:gap-2 px-2">
          {["📅 30 Days", "🧠 6 Intelligence Types", "🗣️ Daily Scripts", "🛠️ Daily Tools", "✅ Progress Tracker"].map((b) => (
            <span key={b} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-semibold text-white">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
