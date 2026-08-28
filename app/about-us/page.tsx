import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/public/tabliqat-mohiti.webp";
import Cart from "@/components/Cart";
import { Counter } from "@/components/Counter";
import { ABOUT, HERO, STATS, VALUES, VALUES_LIST } from "@/const/about-us";
import TestemonialSection from "@/components/TestemonialSection";

export default function AboutUsPage() {
  return (
    <main className="space-y-10 md:space-y-16">
      <HeroSection {...HERO} image={heroImage} />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col overflow-hidden rounded-3xl border border-primary/20 md:rounded-4xl lg:flex-row">
          <div className="relative h-72 w-full sm:h-96 md:h-[30rem] lg:h-[43.75rem] lg:w-1/2">
            <Image
              src="/tabliqat-mohiti.webp"
              alt="تبلیغات محیطی در مرکز خرید"
              fill
              className="object-cover"
              priority={false}
            />

            <div className="absolute inset-0 bg-linear-to-l from-transparent via-background/35 to-background" />
          </div>

          <div className="relative flex w-full flex-col justify-center overflow-hidden bg-black px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:w-1/2 lg:px-12 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2"
            >
              <div className="h-32 w-[min(90vw,37.5rem)] rounded-full bg-primary/40 blur-[80px] sm:h-40 sm:blur-[90px]" />
            </div>

            <div className="relative z-10">
              <h3 className="mb-2 text-center text-sm text-primary sm:text-base">
                {ABOUT.eyebrow}
              </h3>

              <h4 className="mb-6 text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {ABOUT.heading}
              </h4>

              <div className="space-y-4">
                {ABOUT.paragraphs.map((text) => (
                  <p
                    key={text}
                    className="text-start text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
                  >
                    {text}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex w-full gap-2 sm:gap-3 lg:mt-10">
                {STATS.map(({ id, icon: Icon, label, value }) => (
                  <Cart
                    key={id}
                    icon={<Icon />}
                    label={label}
                    value={<Counter suffix="+" value={value} />}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col overflow-hidden rounded-3xl border border-primary/20 md:rounded-4xl lg:flex-row">
          <div className="relative flex w-full flex-col justify-center overflow-hidden bg-black px-5 py-10 sm:px-8 sm:py-12 md:px-10  lg:px-12 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2"
            >
              <div className="h-32 w-[min(90vw,37.5rem)] rounded-full bg-primary/40 blur-[80px] sm:h-40 sm:blur-[90px]" />
            </div>

            <div className="relative z-10">
              <h3 className="mb-2 text-center text-sm text-primary sm:text-base">
                {VALUES.eyebrow}
              </h3>

              <h4 className="mb-6 text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {VALUES.heading}
              </h4>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-3 sm:gap-4 justify-items-center lg:mt-10">
                {VALUES_LIST.map(({ id, icon: Icon, label, value }) => (
                  <Cart key={id} icon={<Icon />} label={value} value={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestemonialSection />
    </main>
  );
}
