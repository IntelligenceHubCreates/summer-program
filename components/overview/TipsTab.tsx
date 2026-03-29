const tips = [
  { icon: "🤔", title: "Never Give the Answer Immediately", text: 'Let him struggle for 2-3 minutes first. This is called "productive struggle" — it\'s where the brain grows.' },
  { icon: "🎤", title: "Always Make Him Speak", text: "Every activity must end with him explaining what happened. Expression = understanding." },
  { icon: "🏆", title: "Reward Thinking, Not Correctness", text: 'Say "I love how you thought about that" not just "correct!" Wrong answers that show effort deserve praise.' },
  { icon: "🌊", title: "Keep Sessions Short & Active", text: "At 7, attention span = 15-25 min. Never force longer. End before he gets bored, not after." },
  { icon: "📵", title: "No Screen = More Brain", text: "Every hour of passive YouTube reduces deep thinking time. Replace with conversation and creation." },
  { icon: "🌿", title: "Outdoor Play is Non-Negotiable", text: "Physical movement grows the hippocampus — the memory center. Never skip outdoor time." },
  { icon: "😊", title: "Fun First, Learning Second", text: "If he's not having fun, change the approach. A happy 7-year-old learns 3x more than a forced one." },
  { icon: "📊", title: "Consistency Beats Perfection", text: "60-70% of this plan done consistently = massive results. Don't stress about missing a day." },
];

const parentScripts = [
  { situation: "When he gives up:", say: "I'm not asking you to get it right. I'm asking you to try. What's one small thing you can try?" },
  { situation: "When he gets it wrong:", say: "Interesting! Why do you think that happened? Let's explore together." },
  { situation: "When he explains well:", say: "That was a very clear explanation. You understood it deeply. That is real intelligence." },
  { situation: "When he doesn't want to:", say: "Okay, we'll do a shorter version. 5 minutes, then you decide. Deal?" },
];

export default function TipsTab() {
  return (
    <div className="animate-slide-up space-y-4 sm:space-y-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="font-fredoka mb-3 text-lg text-gray-800 sm:mb-4 sm:text-xl">💡 Professional Parenting Principles</h2>
        <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
          {tips.map((t) => (
            <div key={t.title} className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm flex gap-3 sm:block sm:p-4">
              <div className="text-2xl shrink-0 sm:mb-2 sm:text-3xl">{t.icon}</div>
              <div>
                <div className="font-nunito font-extrabold text-xs mb-0.5 sm:text-sm sm:mb-1">{t.title}</div>
                <div className="text-[10px] text-gray-500 leading-relaxed sm:text-xs">{t.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-2 border-[#FFB800] bg-gradient-to-br from-[#FFF7ED] to-[#FFFBEB] p-4 sm:p-5">
        <h3 className="font-fredoka text-base text-amber-800 mb-3 sm:text-lg sm:mb-4">🗣️ Parent Scripts for Common Situations</h3>
        <div className="space-y-3 sm:space-y-4">
          {parentScripts.map((s) => (
            <div key={s.situation}>
              <div className="font-bold text-xs text-amber-900 mb-1 sm:text-sm sm:mb-1.5">{s.situation}</div>
              <div className="border-l-[3px] border-blue-400 bg-blue-50 px-2.5 py-2 rounded-r-lg text-xs italic text-blue-800 sm:px-3 sm:text-sm">
                💬 &ldquo;{s.say}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <h3 className="font-fredoka text-base text-gray-800 mb-2 sm:text-lg sm:mb-3">🌟 The Golden Questions</h3>
        <p className="text-xs text-gray-500 mb-2 sm:text-sm sm:mb-3">Ask these after EVERY activity, every single day:</p>
        <div className="space-y-1.5 sm:space-y-2">
          {["What did you do?", "Why did you do it that way?", "What did you learn from this?"].map((q, i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-xl bg-amber-50 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
              <span className="text-amber-500 font-extrabold text-base sm:text-lg">{i + 1}</span>
              <span className="font-bold text-xs text-amber-900 sm:text-sm">{q}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
