import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "blue" | "orange" | "purple" | "none";
  variant?: "default" | "module" | "elevated";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = "blue", variant = "default", ...props }, ref) => {
    const glowClass =
      glow === "blue"
        ? "hover:shadow-[0_0_30px_rgba(59,130,246,0.3),0_0_60px_rgba(59,130,246,0.1)]"
        : glow === "orange"
          ? "hover:shadow-[0_0_30px_rgba(249,115,22,0.3),0_0_60px_rgba(249,115,22,0.1)]"
          : glow === "purple"
            ? "hover:shadow-[0_0_30px_rgba(139,92,246,0.3),0_0_60px_rgba(139,92,246,0.1)]"
            : "";
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.08)] hover:border-[var(--primary)]/40",
          glow !== "none" && glowClass,
          variant === "module" &&
            "module-2d border-[var(--primary)]/20 hover:border-[var(--primary)]/50",
          variant === "elevated" && "shadow-xl",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
