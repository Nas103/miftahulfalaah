"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Icon3DProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Depth intensity: sm, md, lg */
  depth?: "sm" | "md" | "lg";
  /** Glow color for 3D highlight */
  glow?: "blue" | "orange" | "purple" | "none";
  /** Disable hover scale/lift (for inline icons e.g. in inputs) */
  static?: boolean;
}

const depthFilter = {
  sm: "drop-shadow(0 2px 2px rgba(0,0,0,0.4)) drop-shadow(0 1px 0 rgba(255,255,255,0.1))",
  md: "drop-shadow(0 3px 4px rgba(0,0,0,0.5)) drop-shadow(0 2px 0 rgba(255,255,255,0.15)) drop-shadow(0 6px 12px rgba(0,0,0,0.2))",
  lg: "drop-shadow(0 4px 6px rgba(0,0,0,0.5)) drop-shadow(0 3px 0 rgba(255,255,255,0.2)) drop-shadow(0 8px 16px rgba(0,0,0,0.25))",
};

const glowFilter = {
  blue: "drop-shadow(0 0 8px rgba(59,130,246,0.5))",
  orange: "drop-shadow(0 0 8px rgba(249,115,22,0.5))",
  purple: "drop-shadow(0 0 8px rgba(139,92,246,0.5))",
  none: "",
};

export function Icon3D({
  children,
  className,
  depth = "md",
  glow = "none",
  static: isStatic = false,
  style,
  ...props
}: Icon3DProps) {
  const filter = [depthFilter[depth], glow !== "none" && glowFilter[glow]]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 [transform-style:preserve-3d] [perspective:200px]",
        !isStatic && "hover:scale-110 hover:-translate-y-0.5",
        className
      )}
      style={{
        transform: "perspective(200px) rotateX(5deg) rotateY(-2deg)",
        filter: filter || undefined,
        ...style,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </span>
  );
}
