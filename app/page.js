import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroSection from "@/components/homepage/HeroSection";
import MissionSection from "@/components/homepage/MissionSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import CallToActionSection from "@/components/homepage/CTASection";
import AudienceSection from "@/components/homepage/AudienceSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <MissionSection />
      <CallToActionSection />
      <AudienceSection />
      <TestimonialsSection />
    </>
  );
}
