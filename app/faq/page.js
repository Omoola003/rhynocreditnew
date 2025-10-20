import FAQCTA from "@/components/faq/FAQCTA";
import FAQPageHero from "@/components/faq/hero";
import FaqQuestion from "@/components/faq/FaqQuestion";
import FaqQuestion2 from "@/components/faq/FaqQuestion2";
import FaqQuestion3 from "@/components/faq/FaqQuestion3";
import FaqQuestion4 from "@/components/faq/FaqQuestion4";

export const metadata = {
  title: "FAQs | RhynoCredit — Answers to Your Loan & Investment Questions",
  description:
    "Find quick answers about RhynoCredit’s loan applications, repayment terms, investment options, and eligibility requirements. Transparent, simple, and designed to help you make confident financial decisions.",
  keywords: [
    "RhynoCredit FAQ",
    "loan eligibility",
    "loan repayment",
    "investment questions",
    "how to apply for RhynoCredit loan",
    "RhynoCredit support",
  ],
  openGraph: {
    title: "RhynoCredit FAQs — Everything You Need to Know",
    description:
      "Get clarity on loans, investments, and repayments with RhynoCredit’s detailed FAQ section.",
    url: "https://rhynocredit.com/faq",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RhynoCredit FAQ Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RhynoCredit FAQs — Everything You Need to Know",
    description:
      "Clear answers to common loan and investment questions. Learn how RhynoCredit helps you reach your goals.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://rhynocredit.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQPageHero />
      <FaqQuestion />
      <FaqQuestion2 />
      <FaqQuestion3 />
      <FaqQuestion4 />
      <FAQCTA />
    </>
  );
}
