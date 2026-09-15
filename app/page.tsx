import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoldSparkles from "@/components/GoldSparkles";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Founder from "@/components/Founder";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <GoldSparkles />

      <Navbar />

      <main>
        <div className="pt-20">
          <Hero />
        </div>

        <Technologies />
        <Services />
        <Projects />
        <Founder />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  );
}