import About from "../Components/About";
import Benefits from "../Components/Benefits";
import CEOSection from "../Components/CEOSection";
import CTA from "../Components/CTA";
import Experts from "../Components/Experts";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import InternsSlider from "../Components/InternsSlider";
import Navbar from "../Components/Navbar ";
import PanIndia from "../Components/PanIndia";
import Skills from "../Components/Skills";
import Steps from "../Components/Steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CEOSection />
      <Skills />
      <Benefits />
      <Steps />
      <Experts/>
      <CTA />
      <InternsSlider/>
      <PanIndia/>
      <Footer />
    </>
  );
}
