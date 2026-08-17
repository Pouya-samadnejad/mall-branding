import React from "react";
import { Marquee } from "./ui/marquee";
import Image from "next/image";
import { brands } from "@/const/brands";

export default function BrandSection() {
  return (
    <div
      dir="ltr"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-8 sm:py-10"
    >
      <div className="mb-6 text-center text-stone-800 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl">برند های معتبر همراه ما</h3>
      </div>
      <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem] sm:[--gap:3rem]">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="relative flex h-10 w-24 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12 sm:w-32"
          >
            <Image
              src={brand.image}
              alt={`${brand.id} logo`}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white to-transparent"></div>
    </div>
  );
}
