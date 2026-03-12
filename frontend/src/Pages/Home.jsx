import About from "../Components/About";
import Benefits from "../Components/Benefits";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar ";
import Skills from "../Components/Skills";
import Steps from "../Components/Steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Benefits />
      <Steps />
      <CTA />
      <Footer />
    </>
  );
}
