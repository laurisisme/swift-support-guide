import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Dashboard } from "@/components/Dashboard";
import { DoctorView } from "@/components/DoctorView";

const Index = () => {
  const [view, setView] = useState<"dashboard" | "doctor">("dashboard");

  return (
    <>
      <header className="sr-only">
        <h1>ParkinSense — Parkinson's Caregiver App</h1>
        <p>Calm, mobile-first caregiver dashboard for monitoring Parkinson's OFF states, medications, and weekly insights.</p>
      </header>
      <PhoneFrame>
        {view === "dashboard" ? (
          <Dashboard onOpenDoctor={() => setView("doctor")} />
        ) : (
          <DoctorView onBack={() => setView("dashboard")} />
        )}
      </PhoneFrame>
    </>
  );
};

export default Index;
