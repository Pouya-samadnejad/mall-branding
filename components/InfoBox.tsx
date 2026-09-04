import { FadeIn } from "./FadeIn";
import Image from "next/image";
import { GlowBlur } from "./GlowBlur";

type InfoBoxProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
};

export default function InfoBox({
  image,
  imageAlt,
  eyebrow,
  heading,
  paragraphs,
}: InfoBoxProps) {
  return (
    <section className="container my-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col overflow-hidden rounded-3xl border border-primary/20 bg-black md:rounded-4xl lg:flex-row">
        <FadeIn
          x={-60}
          y={0}
          className="relative h-72 w-full sm:h-96 md:h-[30rem] lg:w-1/2"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover "
            priority={false}
          />

          <div className="absolute inset-0 bg-linear-to-l from-transparent via-background/35 to-background" />
        </FadeIn>

        <FadeIn x={60} y={0} className="lg:w-1/2">
          <div className="relative flex w-full justify-center overflow-hidden px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-16">
            <GlowBlur />

            <div className="relative flex flex-col  z-10">
              <FadeIn delay={0.15}>
                <h3 className="mb-2 text-center text-sm text-primary sm:text-base">
                  {eyebrow}
                </h3>
              </FadeIn>

              <FadeIn delay={0.25}>
                <h4 className="mb-6 text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  {heading}
                </h4>
              </FadeIn>

              <div className="space-y-4">
                {paragraphs.map((text, i) => (
                  <FadeIn key={i} delay={0.35 + i * 0.12}>
                    <p className="text-start text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                      {text}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
