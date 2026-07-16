import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
   <>
     <ScrollProgress />
  <Navbar />
  <div className="pt-20">
  <Hero />
</div>
  <Technologies />
  <About />
  <Services />
  <Projects />
  <Process />
  <Pricing />
  <FAQ />
  <Contact />
  <WhatsAppButton />
  <Footer />
</>
  );
}