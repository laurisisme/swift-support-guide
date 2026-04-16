import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="min-h-screen w-full bg-gradient-calm flex items-center justify-center p-0 sm:p-6">
      <div className="w-full sm:w-[390px] sm:h-[844px] bg-background sm:rounded-[3rem] sm:shadow-card sm:border-[10px] sm:border-foreground/90 overflow-hidden relative flex flex-col">
        {/* Status bar (visible only on desktop frame) */}
        <div className="hidden sm:flex items-center justify-between px-8 pt-3 pb-1 text-xs font-semibold text-foreground">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px]">●●●●</span>
            <span className="text-[10px]">100%</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
