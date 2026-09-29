import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Founder from "@/components/Founder";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Technologies />
        <Founder />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>
            <WhatsAppButton />

      
    </>
  );
}