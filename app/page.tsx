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
  <Navbar />
  <Hero />
  <Technologies />
  <About />
  <Services />
  <Projects />
  <Process />
  <Contact />
  <Footer />
</>
  );
}