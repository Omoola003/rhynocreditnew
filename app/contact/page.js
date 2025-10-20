import ContactHero from "@/components/Contact/hero";
import ContactSection from "@/components/Contact/ContactSection";
import ContactFormSection from "@/components/Contact/ContactForm";
import FAQSection from "@/components/Contact/FAQSection";

export const metadata = {
  title: "Contact Us | RhynoCredit — We’re Here to Help You Grow",
  description:
    "Get in touch with the RhynoCredit support team for inquiries, partnership opportunities, or loan assistance. We’re always ready to guide you toward your financial goals.",
  keywords: [
    "RhynoCredit contact",
    "loan support",
    "customer service",
    "RhynoCredit Nigeria",
    "speak to RhynoCredit",
    "apply for a loan help",
  ],
  openGraph: {
    title: "Contact RhynoCredit — Get Financial Support and Guidance",
    description:
      "Need assistance or loan advice? Contact RhynoCredit’s friendly team today and get the help you need to achieve your financial goals.",
    url: "https://rhynocredit.com/contact",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact RhynoCredit Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RhynoCredit — Get Financial Support and Guidance",
    description:
      "Reach out to RhynoCredit’s team for questions, loan advice, or partnership opportunities. We’re happy to help you grow.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://rhynocredit.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}
