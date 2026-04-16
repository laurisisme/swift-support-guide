import { useState } from "react";
import { Bell, FileBarChart, Settings, User } from "lucide-react";
import { StatusCard, type PatientStatus } from "./StatusCard";
import { AlertCard } from "./AlertCard";
import { FeedbackCard } from "./FeedbackCard";
import { RiskTimeline } from "./RiskTimeline";
import { StreakTracker } from "./StreakTracker";
import { toast } from "sonner";

interface DashboardProps {
  onOpenDoctor: () => void;
}

type AlertStage = "alert" | "feedback" | "none";

export const Dashboard = ({ onOpenDoctor }: DashboardProps) => {
  const [status, setStatus] = useState<PatientStatus>("risk");
  const [alertStage, setAlertStage] = useState<AlertStage>("alert");

  const triggerHaptic = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(30);
    }
  };

  const handleConfirm = () => {
    triggerHaptic();
    setStatus("off");
    setAlertStage("feedback");
  };

  const handleDismiss = () => {
    triggerHaptic();
    setStatus("stable");
    setAlertStage("none");
    toast("Alert dismissed", { description: "We'll keep monitoring." });
  };

  const handleFeedback = (accurate: boolean) => {
    triggerHaptic();
    setAlertStage("none");
    toast(accurate ? "Thanks — model improved" : "Got it — we'll adjust", {
      description: accurate ? "Your feedback helps personalize alerts." : "Patterns will be re-evaluated.",
    });
  };

  return (
    <div className="min-h-full bg-gradient-calm pb-8">
      {/* Header */}
      <header className="px-5 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-semibold shadow-soft">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Good morning</p>
            <h1 className="font-semibold text-foreground -mt-0.5">Sarah</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-10 h-10 rounded-2xl bg-card shadow-soft flex items-center justify-center relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-status-off" />
          </button>
          <button
            className="w-10 h-10 rounded-2xl bg-card shadow-soft flex items-center justify-center"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <main className="px-5 space-y-4">
        {/* Status */}
        <StatusCard
          status={status}
          patientName="Robert · 72y"
          lastMedication="2h 45m ago · Levodopa 100mg"
        />

        {/* Alert flow */}
        {alertStage === "alert" && (
          <AlertCard onConfirm={handleConfirm} onDismiss={handleDismiss} />
        )}
        {alertStage === "feedback" && <FeedbackCard onFeedback={handleFeedback} />}

        {/* Timeline */}
        <RiskTimeline />

        {/* Streak */}
        <StreakTracker />

        {/* Doctor view CTA */}
        <button
          onClick={onOpenDoctor}
          className="w-full rounded-[2rem] bg-card p-5 shadow-soft flex items-center justify-between hover:shadow-card transition-smooth"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-primary-soft flex items-center justify-center">
              <FileBarChart className="w-5 h-5 text-primary" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Weekly Report</p>
              <p className="text-xs text-muted-foreground">Insights for the doctor</p>
            </div>
          </div>
          <span className="text-primary font-semibold text-sm">View →</span>
        </button>
      </main>
    </div>
  );
};
