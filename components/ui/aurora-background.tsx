"use client";
import { cn } from "@/app/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-full flex-col items-center justify-center bg-zinc-50 text-slate-950",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg, #f59e0b 10%, #fbbf24 15%, #fcd34d 20%, #fde68a 25%, #fef08a 30%)", // Adjusted for gold tones
              "--white-gradient":
                "repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)",

              "--gold-300": "#fcd34d",  // Light gold
              "--gold-400": "#fbbf24",  // Medium gold
              "--gold-500": "#f59e0b",  // Dark gold
              "--yellow-300": "#fef08a", // Soft yellow
              "--yellow-400": "#fde68a", // Bright yellow
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%, 200%] [background-position:50% 50%, 50% 50%] opacity-50 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--gold-500)_10%,var(--yellow-400)_15%,var(--gold-300)_20%,var(--yellow-300)_25%,var(--yellow-400)_30%)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%, black_10%, var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
