import Cart from "@/components/Cart";
import { FadeIn } from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import InfoBox from "@/components/InfoBox";
import TestemonialSection from "@/components/TestemonialSection";
import { getServiceBySlug, services } from "@/const/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <HeroSection {...service.hero} />

      <InfoBox {...service.info} />

      <section className="container mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col overflow-hidden rounded-3xl border border-primary/20 md:rounded-4xl lg:flex-row">
          <div className="relative flex w-full flex-col justify-center overflow-hidden px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2"
            >
              <div className="h-32 w-[min(90vw,37.5rem)] rounded-full bg-primary/40 blur-[80px] sm:h-40 sm:blur-[90px]" />
            </div>

            <div className="relative z-10">
              <h4 className="mb-6 text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {service.reasons.heading}
              </h4>

              <div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-4">
                {service.reasons.items.map(
                  ({ id, icon: Icon, label, value }, i) => (
                    <FadeIn key={id} delay={i * 0.12} y={40}>
                      <Cart icon={<Icon />} label={value} value={label} />
                    </FadeIn>
                  ),
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <TestemonialSection />
    </div>
  );
}
