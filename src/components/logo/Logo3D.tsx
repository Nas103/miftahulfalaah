"use client";

import Image from "next/image";

interface Logo3DProps {
  className?: string;
  size?: number;
}

export function Logo3D({ className = "", size = 40 }: Logo3DProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Miftahul Falaah"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  );
}
