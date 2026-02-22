"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Logo3DCanvas = dynamic(
  () => import("./Logo3DCanvas"),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#3b82f6] via-indigo-500 to-[#f97316]"
        aria-hidden
      >
        <span className="text-xl font-bold text-white">م</span>
      </div>
    ),
  }
);

interface Logo3DProps {
  className?: string;
  size?: number;
}

export function Logo3D({ className = "", size = 40 }: Logo3DProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <Suspense
        fallback={
          <div
            className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#3b82f6] via-indigo-500 to-[#f97316]"
            aria-hidden
          >
            <span className="text-base font-bold text-white">م</span>
          </div>
        }
      >
        <Logo3DCanvas size={size} />
      </Suspense>
    </div>
  );
}
