import ContactInfo from "@/components/ContactInfo";
import { FadeIn } from "@/components/FadeIn";
import { GlowBlur } from "@/components/GlowBlur";
import GlowBox from "@/components/GlowBox";
import HeroSection from "@/components/HeroSection";
import { MapEmbed } from "@/components/MapEmbed";
import SocialSection from "@/components/SocialSection";
import TestemonialSection from "@/components/TestemonialSection";
import { contactData, HERO } from "@/const/contact-us";
import heroImage from "@/public/contact-hero.webp";

export default function ContactUsPage() {
  return (
    <main>
      <div className="relative z-0">
        <HeroSection {...HERO} image={heroImage} noButton={true} />
      </div>

      <section className="container mx-auto my-10 flex w-full flex-col items-stretch gap-5 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8">
        <FadeIn x={-60} y={0} className="lg:w-2/3">
          <GlowBox className="rounded-3xl h-full">
            <MapEmbed />
          </GlowBox>
        </FadeIn>

        <FadeIn x={60} y={0} delay={0.15} className="lg:w-1/3">
          <GlowBox className="rounded-3xl h-full">
            <div className="relative px-6 py-8">
              <GlowBlur />
              <h2 className="mb-5 text-center text-lg font-bold text-primary sm:text-xl">
                راه های تماس با ما
              </h2>

              <div className="relative z-10 space-y-3">
                {contactData.map((item, i) => (
                  <FadeIn key={item.title} delay={0.3 + i * 0.12}>
                    <ContactInfo {...item} />
                  </FadeIn>
                ))}
              </div>

              <div className="my-6 border border-primary/20" />

              <div className="relative z-10">
                <SocialSection />
              </div>
            </div>
          </GlowBox>
        </FadeIn>
      </section>

      <TestemonialSection />
    </main>
  );
}
