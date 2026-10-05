import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import DefenseSection from "../components/home/DefenseSection";
import RoofSystem from "../components/home/RoofSystem";
import ServicesSection from "../components/home/ServicesSection";
import BeforeAfter from "../components/home/BeforeAfter";
import ProjectsSection from "../components/home/ProjectsSection";
import ProcessSection from "../components/home/ProcessSection";
import StormSection from "../components/home/StormSection";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <DefenseSection />
        <RoofSystem />
        <ServicesSection />
        <BeforeAfter />
        <ProjectsSection />
        <ProcessSection />
        <StormSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;
