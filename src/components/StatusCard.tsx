import { CheckCircle2, AlertTriangle, AlertOctagon, Pill } from "lucide-react";
import { cn } from "@/lib/utils";

export type PatientStatus = "stable" | "risk" | "off";

interface StatusCardProps {
  status: PatientStatus;
  patientName: string;
  lastMedication: string;
}

const config = {
  stable: {
    label: "Stable",
    description: "Patient is doing well",
    icon: CheckCircle2,
    gradient: "bg-gradient-stable",
    pulse: false,
  },
  risk: {
    label: "At Risk",
    description: "Monitor closely",
    icon: AlertTriangle,
    gradient: "bg-gradient-risk",
    pulse: false,
  },
  off: {
    label: "Likely OFF",
    description: "Symptoms detected",
    icon: AlertOctagon,
    gradient: "bg-gradient-off",
    pulse: true,
  },
};

export const StatusCard = ({ status, patientName, lastMedication }: StatusCardProps) => {
  const c = config[status];
  const Icon = c.icon;

  return (
    <div className={cn("rounded-[2rem] p-6 text-white shadow-status relative overflow-hidden", c.gradient)}>
      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute -right-4 -bottom-12 w-32 h-32 rounded-full bg-white/5" />

      <div className="relative">
        <p className="text-sm font-medium opacity-90">{patientName}</p>
        <div className="flex items-center gap-3 mt-3">
          <div
            className={cn(
              "w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center",
              c.pulse && "animate-pulse-ring"
            )}
          >
            <Icon className="w-7 h-7" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{c.label}</h2>
            <p className="text-sm opacity-90">{c.description}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3">
          <Pill className="w-5 h-5 shrink-0" />
          <div className="flex-1">
            <p className="text-xs opacity-80">Last medication</p>
            <p className="text-sm font-semibold">{lastMedication}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
