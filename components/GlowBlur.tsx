"use client";

import { motion } from "framer-motion";

type GlowBlurProps = {
  className?: string;
};

export function GlowBlur({ className = "" }: GlowBlurProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="h-32 w-[min(90vw,37.5rem)] rounded-full bg-primary/40 blur-[80px] sm:h-40 sm:blur-[90px]" />
      </motion.div>
    </div>
  );
}
