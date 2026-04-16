import { AlertTriangle, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertCardProps {
  onConfirm: () => void;
  onDismiss: () => void;
}

export const AlertCard = ({ onConfirm, onDismiss }: AlertCardProps) => {
  return (
    <div className="rounded-[2rem] bg-card border-2 border-status-off/20 p-5 shadow-alert animate-slide-up">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-2xl bg-status-off-soft flex items-center justify-center shrink-0">
          <AlertTriangle className="w-6 h-6 text-status-off" strokeWidth={2.5} />
        </div>
        <div className="flex-1 pt-0.5">
          <h3 className="font-semibold text-foreground text-base leading-tight">
            Patient may be entering OFF state
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Detected tremor pattern · 30s ago
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <Button
          onClick={onDismiss}
          variant="outline"
          className="h-14 rounded-2xl text-base font-semibold border-2"
        >
          <X className="w-5 h-5 mr-1" />
          Dismiss
        </Button>
        <Button
          onClick={onConfirm}
          className="h-14 rounded-2xl text-base font-semibold bg-status-off hover:bg-status-off/90 text-white shadow-soft"
        >
          <Check className="w-5 h-5 mr-1" />
          Confirm
        </Button>
      </div>
    </div>
  );
};
