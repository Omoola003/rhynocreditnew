import CoreValues from "@/components/about/CoreValues";
import AboutHeroSection from "@/components/about/hero";
import StoryMission from "@/components/about/storyMission";
import RhynoDifferenceSection from "@/components/about/RhynoDifferenceSection";
import RegulatoryCommitment from "@/components/about/RegulatoryCommitment";
import SuccessStorySection from "@/components/about/SuccessStorySection";
import MissionSection from "@/components/about/founder";

export const metadata = {
  title: "About Us | RhynoCredit — Your Partner in Financial Growth",
  description:
    "Learn about RhynoCredit’s mission to make financial empowerment simple, transparent, and accessible. Discover our story, core values, and commitment to responsible lending.",
  keywords: [
    "RhynoCredit about",
    "our mission",
    "financial empowerment",
    "trusted loan company",
    "CBN licensed lender",
    "ethical finance",
  ],
  openGraph: {
    title: "About RhynoCredit — Building Financial Confidence for Everyone",
    description:
      "Discover the story behind RhynoCredit and our mission to simplify access to financial growth for individuals, startups, and businesses.",
    url: "https://rhynocredit.com/about",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RhynoCredit About Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RhynoCredit — Building Financial Confidence for Everyone",
    description:
      "We’re redefining access to finance through trust, transparency, and innovation. Learn more about RhynoCredit’s mission and story.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://rhynocredit.com/about",
  },
};

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <StoryMission />
      <CoreValues />
      <MissionSection />
      <RhynoDifferenceSection />
      <RegulatoryCommitment />
      <SuccessStorySection />
    </>
  );
}
