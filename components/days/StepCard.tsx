import { ScriptStep } from "@/types";
import { cn } from "@/lib/utils";

const stepConfig = {
  HOOK:     { bg: "bg-blue-50",   border: "border-blue-200",   icon: "🎣", labelColor: "text-blue-700",   label: "HOOK" },
  ACTIVITY: { bg: "bg-green-50",  border: "border-green-200",  icon: "🏃", labelColor: "text-green-700",  label: "ACTIVITY" },
  THINK:    { bg: "bg-orange-50", border: "border-orange-200", icon: "🧠", labelColor: "text-orange-700", label: "THINK" },
  EXPRESS:  { bg: "bg-purple-50", border: "border-purple-200", icon: "🗣️", labelColor: "text-purple-700", label: "EXPRESS" },
  CLOSE:    { bg: "bg-green-50",  border: "border-green-200",  icon: "✅", labelColor: "text-green-700",  label: "CLOSE" },
};

export default function StepCard({ step }: { step: ScriptStep }) {
  const cfg = stepConfig[step.type];
  return (
    <div className="flex gap-2.5 sm:gap-3">
      <div className={cn("mt-0.5 h-8 w-8 shrink-0 rounded-xl border flex items-center justify-center text-base sm:h-9 sm:w-9 sm:text-lg", cfg.bg, cfg.border)}>
        {cfg.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className={cn("text-[9px] font-extrabold uppercase tracking-widest mb-0.5 sm:text-[10px]", cfg.labelColor)}>
          {step.label}
        </div>
        <div className="font-nunito font-extrabold text-xs text-gray-800 mb-1 sm:text-sm">{step.title}</div>

        {step.content && (
          <p className="text-xs text-gray-600 leading-relaxed sm:text-sm">{step.content}</p>
        )}

        {step.say && (
          <div className="mt-2 border-l-[3px] border-blue-400 bg-blue-50 px-2.5 py-2 rounded-r-lg text-xs italic text-blue-800 sm:px-3 sm:text-sm">
            💬 &ldquo;{step.say}&rdquo;
          </div>
        )}

        {step.content2 && (
          <p className="mt-1 text-[10px] text-gray-500 italic sm:text-xs">{step.content2}</p>
        )}

        {step.qs && step.qs.length > 0 && (
          <div className="mt-2 border-l-[3px] border-orange-400 bg-orange-50 px-2.5 py-2 rounded-r-lg sm:px-3">
            <div className="font-bold text-[10px] text-orange-800 mb-1 sm:text-xs">Ask these questions:</div>
            <ul className="space-y-1">
              {step.qs.map((q, i) => (
                <li key={i} className="text-[10px] text-orange-900 flex gap-1.5 sm:text-xs">
                  <span className="shrink-0">•</span><span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step.hint && (
          <div className="mt-2 rounded-lg bg-amber-50 px-2.5 py-2 text-[10px] text-amber-800 sm:px-3 sm:text-xs">
            💡 {step.hint}
          </div>
        )}
      </div>
    </div>
  );
}
