import BrandSection from "@/components/BrandSection";
import CounterSection from "@/components/CounterSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProccessSection from "@/components/ProccessSection";
import ServicesSection from "@/components/ServicesSection";
import TestemonialSection from "@/components/TestemonialSection";
import heroImage from "@/public/mall-branding-heroPic.webp";
export default function page() {
  return (
    <>
      <div className="relative z-0">
        <HeroSection
          image={heroImage}
          title="برند شما"
          highlightTitle="در بهترین نقطه دیده می شود"
          description="ما با خلق هویت‌های ماندگار و کمپین‌های هدفمند، برندها را در مراکز خرید به تجربه‌ای فراموش‌نشدنی تبدیل می‌کنیم."
        />
      </div>

      <div className="relative z-10 -mt-12 mx-4 sm:-mt-16 sm:mx-8 md:-mt-20 md:mx-12 lg:-mt-24 lg:mx-20 xl:-mt-30 xl:mx-36">
        <ServicesSection />
      </div>
      <PortfolioSection />
      <CounterSection />
      <ProccessSection />
      <BrandSection />
      <TestemonialSection />
    </>
  );
}
