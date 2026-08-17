import CoverImage from "@/public/koroushmall.webp";
import Image from "next/image";
import CalliingSection from "./CalliingSection";

export default function TestemonialSection() {
  return (
    <div className="relative mb-10 flex min-h-80 w-full items-center justify-center px-4 py-10 md:mb-20 md:min-h-125 md:py-0">
      <Image
        src={CoverImage}
        alt="hero-section"
        fill
        priority
        className="-z-10 object-cover grayscale"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <CalliingSection />
    </div>
  );
}
