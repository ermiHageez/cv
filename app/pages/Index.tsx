
import AboutSection from "../components/ui/AboutSection";
import ExperienceSection from "../components/ui/ExperienceSection";
import Footer from "../components/ui/Footer";
import HeaderMain from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import ProjectSelection from "../components/ui/ProjectSelection";
import SkillsSection from "../components/ui/SkillsSection";
import { portfolioConfig } from "../config/portfolio";

const Index = () => {
  const {personal} = portfolioConfig;

  return (
    <>
      
      <HeaderMain />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectSelection />
      {/* <ExperienceSection /> */}
      <Footer />
    </>
  );
};

export default Index;