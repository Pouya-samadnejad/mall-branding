import { ReactNode } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

interface GlowBoxProps {
  children: ReactNode;
  className?: string;
  spread?: number;
  proximity?: number;
  /** وقتی محتوا fill/absolute هست (مثل کارت تصویردار) true بذار */
  fillContent?: boolean;
}

export default function GlowBox({
  children,
  className = "",
  spread = 40,
  proximity = 64,
  fillContent = false,
}: GlowBoxProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <GlowingEffect
        spread={spread}
        glow
        disabled={false}
        proximity={proximity}
        inactiveZone={0.01}
      />

      <div
        className={
          fillContent
            ? "absolute inset-0 overflow-hidden rounded-3xl border border-stone-800 bg-black"
            : "relative overflow-hidden rounded-3xl border border-stone-800 bg-black"
        }
      >
        {children}
      </div>
    </div>
  );
}
