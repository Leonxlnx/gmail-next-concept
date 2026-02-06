import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoFeatures from "@/components/BentoFeatures";
import SmartCompose from "@/components/SmartCompose";
import Security from "@/components/Security";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoFeatures />
      <SmartCompose />
      <Stats />
      <Security />
      <CTASection />
      <Footer />
    </main>
  );
}
