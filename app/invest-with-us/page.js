import SuccessStorySection from "@/components/about/SuccessStorySection";
import BeginJourney from "@/components/InvestWithUs/BeginJourney";
import InvestHero from "@/components/InvestWithUs/hero";
import InvestmentPlans from "@/components/InvestWithUs/InvestmentPlans";
import WhyChooseRhynoCredit from "@/components/InvestWithUs/WhyChoseRhynoCredit";

export const metadata = {
  title: "Invest With Us | RhynoCredit — Grow Your Wealth Securely",
  description:
    "Partner with RhynoCredit to grow your savings and secure your future. Enjoy competitive returns, transparent processes, and a CBN-licensed, trustworthy investment platform.",
  keywords: [
    "RhynoCredit investment",
    "savings plans",
    "wealth growth",
    "secure investment",
    "CBN licensed investment",
    "financial growth",
    "invest in Nigeria",
  ],
  openGraph: {
    title: "Invest With RhynoCredit — Build Wealth Confidently",
    description:
      "Earn more with RhynoCredit. Safe, flexible, and transparent investment options designed to grow your future.",
    url: "https://rhynocredit.vercel.app/invest-with-us",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RhynoCredit Invest With Us Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest With RhynoCredit — Build Wealth Confidently",
    description:
      "Grow your savings securely and enjoy competitive returns with RhynoCredit’s trusted investment plans.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://rhynocredit.vercel.app/invest-with-us",
  },
};

export default function InvestWithUs() {
  return (
    <>
      <InvestHero />
      <WhyChooseRhynoCredit />
      <InvestmentPlans />
      <BeginJourney />
      <SuccessStorySection />
    </>
  );
}
