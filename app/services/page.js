import HowItWorks from "@/components/services/HowItWorks";
import LoanProducts from "@/components/services/LoanProducts";
import ServicesCTA from "@/components/services/ServicesCTA";
import WhyTrustRhynoCredit from "@/components/services/WhyTrustRhynoCredit";
import ServicesHero from "@/components/services/hero";


export default function Services() {
    return (
        <>
            <ServicesHero />
            <LoanProducts />
            <HowItWorks />
            <WhyTrustRhynoCredit  />
            <ServicesCTA />
        </>
    )
}