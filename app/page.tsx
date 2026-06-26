

// pages/index.js (or Home.js)
import AboutMeSection from "@/components/home/AboutMeSection";
import ContactForm from "@/components/home/Contact";
import ExperienceSection from "@/components/home/Expertise";
import FloatingButton from "@/components/home/FloatingButton";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import Overly from "@/components/home/Overly";
import FeaturedProjectsSection from "@/components/home/Project";
import Skill from "@/components/home/Skill";

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="home" className="relative scroll-mt-24">
        <HeroSection />
        <div className="absolute top-[0px] right-[0px] z-50">
          <Overly />
        </div>
      </div>

      <div id="about" className="scroll-mt-24">
        <AboutMeSection />
      </div>

      <div id="skills" className="scroll-mt-24">
        <Skill />
      </div>

      <div id="projects" className="scroll-mt-24">
        <FeaturedProjectsSection />
      </div>

      <div id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </div>

      <div id="contact" className="scroll-mt-24">
        <ContactForm />
      </div>

      <Footer />

      {/* Add the FloatingButton component */}
      <FloatingButton />
    </>
  );
}
