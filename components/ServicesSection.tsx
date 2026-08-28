import { services } from "@/const/services";
import ServicesCard from "./ServicesCard";
import { FadeIn } from "./FadeIn";

interface ServicesSectionProps {
  description?: string;
}

export default function ServicesSection({ description }: ServicesSectionProps) {
  return (
    <FadeIn
      y={60}
      className="bg-linear-to-b from-primary to-stone-700 p-px rounded-2xl sm:rounded-3xl md:rounded-4xl w-full z-40"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl border border-primary/20 bg-black">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="h-40 w-125 rounded-full bg-primary/40 blur-[90px]" />
        </div>

        <div className="relative z-10 p-4 text-center sm:p-6 md:p-8">
          <FadeIn y={20} delay={0.1}>
            <h2 className="text-white text-3xl">خدمات ما</h2>
          </FadeIn>

          <FadeIn y={20} delay={0.2}>
            <p className="text-stone-300">
              {description
                ? description
                : "راهکارهای یک پارچه برای دیده شدن برند شما در مراکز خرید"}
            </p>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-2.5">
            {services.map((s, i) => (
              <FadeIn
                key={s.name}
                y={40}
                scale={0.95}
                delay={0.1 + i * 0.12}
                className="w-full"
              >
                <ServicesCard
                  title={s.name}
                  image={s.image}
                  href={s.link}
                  description={s.description}
                  icon={s.icon}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
