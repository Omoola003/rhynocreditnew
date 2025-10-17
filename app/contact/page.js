import ContactHero from "@/components/Contact/hero";
import ContactSection from "@/components/Contact/ContactSection";
import ContactFormSection from "@/components/Contact/ContactForm";
import FAQSection from "@/components/Contact/FAQSection";


export default function Contact() {
    return (
        <>
            <ContactHero  />
            <ContactSection />
            <ContactFormSection />
            <FAQSection />
        </>
    )
}