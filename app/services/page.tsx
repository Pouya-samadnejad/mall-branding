import CalliingSection from "@/components/CalliingSection";
import HeroSection from "@/components/HeroSection";
import ProccessSection from "@/components/ProccessSection";
import ServicesSection from "@/components/ServicesSection";
import heroImage from "@/public/mall-branding-heroPic.webp";

export default function ServicesPage() {
  return (
    <div>
      <HeroSection
        image={heroImage}
        title="خدمات ما"
        highlightTitle="راهکارهایی برای دیده شدن برند شما"
        description="ما با ترکیب خلاقیت؛ استراتژی و تجربه در فضاهای لوکس تجاری؛ به برندها کمک می کنیم پیامشان را موثرتر و ماندگارتر منتقل کنند."
      />
      <div className=" mx- mt-16 sm:mx-8  md:mx-12 lg:mx-20 xl:mx-36 mb-20">
        <ServicesSection description="با ما هر فضا؛ یک فرصت تبلیغاتیست" />
      </div>
      <ProccessSection />
      <div className="mb-20">
        <CalliingSection />
      </div>
    </div>
  );
}
