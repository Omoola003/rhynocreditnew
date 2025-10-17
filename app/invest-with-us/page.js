import SuccessStorySection from "@/components/about/SuccessStorySection";
import BeginJourney from "@/components/InvestWithUs/BeginJourney";
import InvestHero from "@/components/InvestWithUs/hero";
import InvestmentPlans from "@/components/InvestWithUs/InvestmentPlans";
import WhyChooseRhynoCredit from "@/components/InvestWithUs/WhyChoseRhynoCredit";


export default function InvestWithUs() {
    return (
        <>
            <InvestHero />
            <WhyChooseRhynoCredit />
            <InvestmentPlans />
            <BeginJourney />
            <SuccessStorySection />
        </>
    )
}