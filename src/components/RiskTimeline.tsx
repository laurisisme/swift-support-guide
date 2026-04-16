import { Pill, AlertOctagon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type EventType = "medication" | "off" | "confirmation";
interface TimelineEvent {
  time: string;
  type: EventType;
  label: string;
}

const events: TimelineEvent[] = [
  { time: "08:00", type: "medication", label: "Levodopa" },
  { time: "10:15", type: "off", label: "OFF detected" },
  { time: "10:18", type: "confirmation", label: "Confirmed" },
  { time: "12:00", type: "medication", label: "Levodopa" },
  { time: "14:30", type: "off", label: "OFF detected" },
  { time: "16:00", type: "medication", label: "Levodopa" },
  { time: "18:30", type: "confirmation", label: "Stable" },
];

const eventConfig = {
  medication: { icon: Pill, color: "bg-primary text-primary-foreground", ring: "ring-primary-soft" },
  off: { icon: AlertOctagon, color: "bg-status-off text-white", ring: "ring-status-off-soft" },
  confirmation: { icon: CheckCircle2, color: "bg-status-stable text-white", ring: "ring-status-stable-soft" },
};

export const RiskTimeline = () => {
  return (
    <div className="rounded-[2rem] bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Today's Timeline</h3>
        <span className="text-xs text-muted-foreground">Tap to expand</span>
      </div>

      <div className="relative -mx-5 px-5 overflow-x-auto scrollbar-none">
        <div className="absolute left-5 right-5 top-[42px] h-0.5 bg-border" />
        <div className="flex gap-5 pb-2 min-w-max relative">
          {events.map((event, i) => {
            const c = eventConfig[event.type];
            const Icon = c.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2 w-16">
                <span className="text-[11px] font-medium text-muted-foreground">{event.time}</span>
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-card relative z-10",
                    c.color
                  )}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] text-foreground text-center leading-tight">{event.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Meds</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-status-off" />
          <span className="text-xs text-muted-foreground">OFF</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-status-stable" />
          <span className="text-xs text-muted-foreground">Confirmed</span>
        </div>
      </div>
    </div>
  );
};
