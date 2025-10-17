import FAQCTA from "@/components/faq/FAQCTA";
import FAQPageHero from "@/components/faq/hero";
import FaqQuestion from "@/components/faq/FaqQuestion";
import FaqQuestion2 from "@/components/faq/FaqQuestion2";
import FaqQuestion3 from "@/components/faq/FaqQuestion3";
import FaqQuestion4 from "@/components/faq/FaqQuestion4";


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
    )
}