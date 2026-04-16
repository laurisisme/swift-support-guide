import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export const StreakTracker = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const completed = [true, true, true, true, true, true, false];

  return (
    <div className="rounded-[2rem] bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-status-risk-soft flex items-center justify-center">
            <Flame className="w-5 h-5 text-status-risk" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Check-in streak</p>
            <p className="font-semibold text-foreground">6 days</p>
          </div>
        </div>
        <span className="text-xs font-medium text-status-stable bg-status-stable-soft px-2.5 py-1 rounded-full">
          On track
        </span>
      </div>

      <div className="flex items-center justify-between gap-1.5">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
            <div
              className={cn(
                "w-full aspect-square rounded-xl flex items-center justify-center text-xs font-semibold transition-smooth",
                completed[i]
                  ? "bg-status-stable text-white"
                  : "bg-muted text-muted-foreground border-2 border-dashed border-border"
              )}
            >
              {completed[i] ? "✓" : d}
            </div>
            <span className="text-[10px] text-muted-foreground">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
