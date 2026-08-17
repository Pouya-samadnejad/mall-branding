"use client";
import { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  title: string;
  suffix?: string;
  duration?: number;
  className?: string;
  numberClassName?: string;
  titleClassName?: string;
}

export function Counter({
  value,
  title,
  suffix = "",
  duration = 2,
  className,
  numberClassName,
  titleClassName,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-col items-center px-2 text-center md:px-7", className)}
    >
      <div
        className={cn(
          "text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          numberClassName,
        )}
      >
        {display.toLocaleString("en-US")}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 text-xs font-medium text-stone-400 sm:mt-3 sm:text-sm md:text-base",
          titleClassName,
        )}
      >
        {title}
      </p>
    </motion.div>
  );
}
