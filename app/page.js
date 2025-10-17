import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroSection from "@/components/homepage/HeroSection";
import MissionSection from "@/components/homepage/MissionSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import CallToActionSection from "@/components/homepage/CTASection";
import AudienceSection from "@/components/homepage/AudienceSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";

export const metadata = {
  title: "Home | RhynoCredit — Fast, Flexible Loans Made Simple",
  description:
    "Welcome to RhynoCredit — your trusted partner for fast, flexible, and secure financial solutions. Get personal, startup, or business loans designed to help you grow with ease.",
  keywords: [
    "RhynoCredit",
    "fast loans",
    "startup loans",
    "business financing",
    "personal loans",
    "Nigeria loan platform",
    "SME funding",
  ],
  openGraph: {
    title: "RhynoCredit — Empowering Growth Through Smart Financing",
    description:
      "Explore flexible loan options with RhynoCredit. Fast approval, transparent terms, and funding built for individuals, startups, and businesses.",
    url: "https://rhynocredit.vercel.app/",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RhynoCredit Homepage Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RhynoCredit — Empowering Growth Through Smart Financing",
    description:
      "Flexible loans built for startups, small businesses, and individuals. Apply in minutes with RhynoCredit.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://rhynocredit.vercel.app/",
  },
};

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
