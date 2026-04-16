import { ArrowLeft, TrendingDown, Clock, Activity, Sparkles } from "lucide-react";

interface DoctorViewProps {
  onBack: () => void;
}

const trendData = [42, 38, 45, 35, 30, 28, 25];
const max = Math.max(...trendData);

export const DoctorView = ({ onBack }: DoctorViewProps) => {
  return (
    <div className="min-h-full bg-gradient-calm pb-8 animate-fade-in">
      {/* Header */}
      <header className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-2xl bg-card shadow-soft flex items-center justify-center"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-foreground">Weekly Report</h1>
          <p className="text-xs text-muted-foreground">For Dr. Hartmann · Apr 9 – 15</p>
        </div>
      </header>

      <main className="px-5 space-y-4">
        {/* Snapshot cards */}
        <div className="grid grid-cols-2 gap-3">
          <SnapshotCard
            icon={Clock}
            label="Total OFF time"
            value="3h 42m"
            change="-18%"
            positive
          />
          <SnapshotCard
            icon={Activity}
            label="Avg time-to-OFF"
            value="2h 15m"
            change="-45m"
          />
          <SnapshotCard
            icon={TrendingDown}
            label="Variability"
            value="Low"
            change="Stable"
            positive
          />
          <SnapshotCard
            icon={Sparkles}
            label="Med adherence"
            value="98%"
            change="+4%"
            positive
          />
        </div>

        {/* Trend graph */}
        <div className="rounded-[2rem] bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground">OFF frequency</h3>
              <p className="text-xs text-muted-foreground">Last 7 days · minutes/day</p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 h-32">
            {trendData.map((v, i) => {
              const days = ["M", "T", "W", "T", "F", "S", "S"];
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex-1 flex items-end">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/60 transition-smooth"
                      style={{ height: `${(v / max) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">{days[i]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Smart insight */}
        <div className="rounded-[2rem] bg-gradient-to-br from-primary-soft to-status-stable-soft p-5 border border-primary/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Smart Insight
            </span>
          </div>
          <p className="text-foreground font-medium leading-snug">
            OFF states are occurring{" "}
            <span className="text-primary font-bold">45 minutes earlier</span> compared to last week.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Consider discussing dose timing with the patient's neurologist.
          </p>
        </div>

        <button className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-soft hover:bg-primary/90 transition-smooth">
          Share with doctor
        </button>
      </main>
    </div>
  );
};

interface SnapshotCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}

const SnapshotCard = ({ icon: Icon, label, value, change, positive }: SnapshotCardProps) => (
  <div className="rounded-[1.5rem] bg-card p-4 shadow-soft">
    <div className="w-9 h-9 rounded-xl bg-primary-soft flex items-center justify-center mb-3">
      <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={2.5} />
    </div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-xl font-bold text-foreground mt-0.5">{value}</p>
    <p
      className={`text-[11px] font-medium mt-1 ${
        positive ? "text-status-stable" : "text-muted-foreground"
      }`}
    >
      {change} vs last week
    </p>
  </div>
);
