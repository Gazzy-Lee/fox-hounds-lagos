import { HeroSection } from "./HeroSection";
import { EssentialsSection } from "./EssentialsSection";
import { AboutSection } from "./AboutSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <EssentialsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
