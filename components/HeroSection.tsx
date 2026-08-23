"use client";

import Image, { StaticImageData } from "next/image";
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
    <div className="relative flex min-h-[75vh] w-full items-center overflow-hidden lg:min-h-[90vh]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="-z-10 object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 -z-10 bg-linear-to-l from-stone-950 from-40% via-stone-950/70 to-stone-950/30 lg:via-stone-950/50 lg:to-transparent" />

      <div className="flex w-full flex-col gap-5 px-4 py-24 sm:px-8 sm:py-32 lg:w-1/2 lg:py-40 lg:pr-10">
        <h1 className="text-3xl font-bold leading-relaxed text-white sm:text-4xl md:text-5xl lg:leading-loose">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </span>

          {highlightTitle && (
            <span className="text-primary">{highlightTitle}</span>
          )}
        </h1>

        <div className="text-sm text-white sm:text-base pl-48">
          <p>{description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
          <HoverBorderGradient
            containerClassName="rounded-full w-full sm:w-auto sm:min-w-40"
            as="button"
            className="flex w-full items-center space-x-2 bg-black text-white"
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
        </div>
      </div>
    </div>
  );
}
