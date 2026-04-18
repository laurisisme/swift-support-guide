import { ArrowLeft, TrendingDown, Clock, Activity, Sparkles } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface DoctorViewProps {
  onBack: () => void;
}

const trendData = [
  { day: "Mon", minutes: 42 },
  { day: "Tue", minutes: 38 },
  { day: "Wed", minutes: 45 },
  { day: "Thu", minutes: 35 },
  { day: "Fri", minutes: 30 },
  { day: "Sat", minutes: 28 },
  { day: "Sun", minutes: 25 },
];

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

          <div className="h-40 -ml-2 -mr-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="offFreqFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  width={28}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                  formatter={(value: number) => [`${value} min`, "OFF time"]}
                />
                <Area
                  type="monotone"
                  dataKey="minutes"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2.5}
                  fill="url(#offFreqFill)"
                  dot={{ fill: "hsl(var(--primary))", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
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
