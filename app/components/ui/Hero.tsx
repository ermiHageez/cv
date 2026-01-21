"use client";

import Image from "next/image";
import { portfolioConfig } from "@/app/config/portfolio";

import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const { personal, social } = portfolioConfig;
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const down = () => {
    window.scrollBy({ top: 650, behavior: "smooth" });
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-34 mb-30 ">
      {/* Profile Image */}
      <div className="relative w-55 h-55 mb-8 overflow-hidden rounded-full border-4 border-blue-300 shadow-lg">
        <Image
          src={personal.profileImage}
          alt={personal.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Name */}
      <h1 className="text-center text-6xl font-bold font-sans">
        {personal.name}
      </h1>

      {/* Title */}
      <p className="text-center text-xl text-blue-400 font-medium">
        {personal.title}
      </p>

      <p className="text-center text-xl text-gray-100 font-medium">
        {personal.tagline}
      </p>

      {/* Social Links */}
      <div
        className="flex items-center justify-center gap-4 mb-4 mt-2 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <a
          href={social.github}
          target="_blank"
          aria-label="GitHub"
          className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground duration-300  hover:scale-105 transition-transform hover:bg-blue-500"
        >
          <Github size={20} />
        </a>

        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-105 transition-transform hover:bg-blue-500"
        >
          <Linkedin size={20} />
        </a>

        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-105 transition-transform hover:bg-blue-500"
        >
          <Twitter size={20} />
        </a>

        <a
          href={`mailto:${social.email}`}
          aria-label="Email"
          className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground duration-300  hover:scale-105 transition-transform hover:bg-blue-500"
        >
          <Mail size={20} />
        </a>
      </div>
      <div className="animate-fade-in mx-2.5" style={{ animationDelay: "0.5s" }}>
        <button onClick={scrollToProjects} className="text-semibold group flex items-center bg-blue-500 text-white rounded hover:bg-blue-600 transition px-6 py-4">
          View My Work
          <ChevronDown
            className="ml-4 group-hover:translate-y-1 transition-transform"
            size={18}
          />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={24} onClick={down}/>
      </div>
    </div>
  );
}
