import HeroSection from "@/components/HeroSection";
import { HERO } from "@/const/outdoor-ad";
import heroImage from "@/public/tabliq-mohiti.webp";
export default function page() {
  return (
    <div>
      <HeroSection {...HERO} image={heroImage} />
    </div>
  );
}
