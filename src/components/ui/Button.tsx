import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "liquid";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
          {
            "bg-gradient-to-r from-[var(--primary)] via-indigo-500 to-[var(--accent)] text-white shadow-[0_0_25px_rgba(59,130,246,0.4),0_0_50px_rgba(249,115,22,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5),0_0_70px_rgba(249,115,22,0.25)]":
              variant === "primary",
            "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]":
              variant === "secondary",
            "border border-[var(--primary)]/50 bg-transparent text-[var(--primary)] hover:bg-[var(--primary)]/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]":
              variant === "outline",
            "glass-water border border-white/20 bg-white/5 backdrop-blur-md text-[var(--foreground)] hover:bg-white/10 hover:border-white/30":
              variant === "glass",
            "btn-liquid text-white hover:border-[rgba(192,192,192,0.6)] hover:shadow-[0_0_25px_rgba(192,192,192,0.25),inset_0_0_25px_rgba(255,255,255,0.08)]":
              variant === "liquid",
            "hover:bg-[var(--border)]/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]":
              variant === "ghost",
          },
          {
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-5 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
