import HowItWorks from "@/components/services/HowItWorks";
import LoanProducts from "@/components/services/LoanProducts";
import ServicesCTA from "@/components/services/ServicesCTA";
import WhyTrustRhynoCredit from "@/components/services/WhyTrustRhynoCredit";
import ServicesHero from "@/components/services/hero";

export const metadata = {
  title: "Our Services | RhynoCredit — Smart, Fast & Flexible Loans",
  description:
    "Explore RhynoCredit’s range of financial services — from personal loans to SME and startup financing. Fast approval, flexible repayment, and transparent terms built for your success.",
  keywords: [
    "RhynoCredit services",
    "loan options",
    "personal loans",
    "business loans",
    "SME financing",
    "startup funding",
    "apply for a loan",
  ],
  openGraph: {
    title: "RhynoCredit Services — Loans That Fit Your Financial Goals",
    description:
      "Discover loan solutions tailored for individuals, startups, and businesses. RhynoCredit makes funding simple, transparent, and flexible.",
    url: "https://rhynocredit.vercel.app/services",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RhynoCredit Services Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RhynoCredit Services — Loans That Fit Your Financial Goals",
    description:
      "Personal, startup, and SME loans built for growth. Discover the right financial solution with RhynoCredit.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://rhynocredit.vercel.app/services",
  },
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <LoanProducts />
      <HowItWorks />
      <WhyTrustRhynoCredit />
      <ServicesCTA />
    </>
  );
}
