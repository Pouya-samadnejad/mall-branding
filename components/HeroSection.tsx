"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

interface HeroSectionProps {
  image: StaticImageData;
  title: string;
  highlightTitle?: string;
  description: string;
}

export default function HeroSection({
  image,
  title,
  highlightTitle,
  description,
}: HeroSectionProps) {
  return (
    <div className="relative flex min-h-[80svh] w-full items-center overflow-hidden lg:min-h-[90svh]">
      {/* Background image — slow zoom-out effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay — stronger on mobile for text readability */}
      <div className="absolute inset-0 -z-10 bg-linear-to-l from-stone-950 from-40% via-stone-950/70 to-stone-950/30 lg:via-stone-950/50 lg:to-transparent" />

      <div className="flex w-full flex-col gap-5 px-4 py-20 sm:px-8 sm:py-28 lg:w-1/2 lg:py-40 lg:pr-10 xl:pr-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-3xl font-bold leading-relaxed text-white sm:text-4xl md:text-5xl lg:leading-loose"
        >
          <span className="block text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </span>

          {highlightTitle && (
            <span className="text-2xl text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              {highlightTitle}
            </span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="max-w-md text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:max-w-lg"
        >
          <p>{description}</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
        >
          <HoverBorderGradient
            containerClassName="rounded-full w-full sm:w-auto sm:min-w-40"
            as="button"
            className="flex w-full items-center justify-center space-x-2 bg-black text-white"
          >
            <Link href="/contact-us" className="w-full py-1">
              دریافت مشاوره
            </Link>
          </HoverBorderGradient>

          <Link
            href="/portfolio"
            className="w-full rounded-full border border-primary bg-transparent px-4 py-2.5 text-center text-primary transition-all hover:bg-primary hover:text-black sm:w-auto sm:min-w-40"
          >
            مشاهده پروژه ها
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
