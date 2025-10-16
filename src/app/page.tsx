import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import MetricsBar from "@/sections/MetricsBar";
import HowItWorks from "@/sections/HowItWorks";
import PerformanceCompliance from "@/sections/PerformanceCompliance";
import CarbonCredits from "@/sections/CarbonCredits";
import MiniCases from "@/sections/MiniCases";
import LogoTicker from "@/sections/LogoTicker";
import Faqs from "@/sections/Faqs";
import ContactRFQ from "@/sections/ContactRFQ";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <MetricsBar />
            <HowItWorks />
            <PerformanceCompliance />
            <CarbonCredits />
            <MiniCases />
            <LogoTicker />
            <Faqs />
            <ContactRFQ />
            <Footer />
        </>
    );
}
