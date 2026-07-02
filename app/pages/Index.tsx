"use client";

import { useEffect } from "react";
import Header from "@/app/components/ui/Header";
import Hero from "@/app/components/ui/Hero";
import AboutSection from "@/app/components/ui/AboutSection";
import SkillsSection from "@/app/components/ui/SkillsSection";
import FeaturedProjectsSection from "@/app/components/ui/FeaturedProjectsSection";
import AiModelsSection from "@/app/components/ui/AiModelsSection";
import CertificationsSection from "@/app/components/ui/CertificationsSection";
import WebsitesSection from "@/app/components/ui/WebsitesSection";
import ExperienceSection from "@/app/components/ui/ExperienceSection";
import ContactSection from "@/app/components/ui/ContactSection";
import Footer from "@/app/components/ui/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <AiModelsSection />
      <CertificationsSection />
      <WebsitesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
