import { ThumbsUp, ThumbsDown } from "lucide-react";

interface FeedbackCardProps {
  onFeedback: (accurate: boolean) => void;
}

export const FeedbackCard = ({ onFeedback }: FeedbackCardProps) => {
  return (
    <div className="rounded-[2rem] bg-primary-soft p-5 animate-slide-up">
      <p className="text-sm font-medium text-accent-foreground">Quick check</p>
      <h3 className="font-semibold text-foreground mt-1">Was this detection accurate?</h3>
      <p className="text-xs text-muted-foreground mt-1">
        Helps the system learn your patient's patterns.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <button
          onClick={() => onFeedback(true)}
          className="h-14 rounded-2xl bg-card border border-border hover:border-status-stable hover:bg-status-stable-soft transition-smooth flex items-center justify-center gap-2 font-semibold text-foreground"
        >
          <ThumbsUp className="w-5 h-5 text-status-stable" />
          Yes
        </button>
        <button
          onClick={() => onFeedback(false)}
          className="h-14 rounded-2xl bg-card border border-border hover:border-status-off hover:bg-status-off-soft transition-smooth flex items-center justify-center gap-2 font-semibold text-foreground"
        >
          <ThumbsDown className="w-5 h-5 text-status-off" />
          No
        </button>
      </div>
    </div>
  );
};
