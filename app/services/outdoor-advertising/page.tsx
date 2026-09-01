import HeroSection from "@/components/HeroSection";
import { HERO } from "@/const/outdoor-ad";

export default function page() {
  return (
    <div>
      <HeroSection {...HERO} />
    </div>
  );
}
