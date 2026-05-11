"use client";

import Image from "next/image";
import { portfolioConfig } from "@/app/config/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ArrowDown,
  Download,
} from "lucide-react";

export default function Hero() {
  const { personal, social } = portfolioConfig;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="glow-orb top-1/4 -left-48 bg-primary animate-glow-pulse" />
      <div className="glow-orb bottom-1/4 -right-48 bg-accent" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-primary font-semibold tracking-wider uppercase text-sm animate-fade-in-up">
                Hello, I&apos;m
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {personal.name.split(" ")[0]}
                <br />
                <span className="gradient-text">
                  {personal.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-muted font-medium animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {personal.title}
              </p>
              <p
                className="text-muted-foreground leading-relaxed max-w-lg text-base md:text-lg animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {personal.bio}
              </p>
            </div>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown size={16} />
              </button>
              <a
                href={portfolioConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-hover text-foreground font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Download CV
                <Download size={16} />
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted hover:text-foreground hover:border-white/10 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </button>
            </div>

            <div
              className="flex items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:glass-hover hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:glass-hover hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={social.email}
                className="p-3 rounded-xl glass hover:glass-hover hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:glass-hover hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div
            className="relative flex justify-center items-center animate-fade-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />

            <div className="gradient-border p-1">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[calc(1rem-1px)] overflow-hidden">
                <Image
                  src={personal.profileImage}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
            </div>

            <div className="absolute -top-3 -right-3 glass rounded-xl px-4 py-2 text-sm font-medium animate-float shadow-lg">
              <span className="gradient-text">React</span>
            </div>
            <div
              className="absolute -bottom-2 -left-3 glass rounded-xl px-4 py-2 text-sm font-medium animate-float shadow-lg"
              style={{ animationDelay: "2s" }}
            >
              <span className="gradient-text-blue">Node.js</span>
            </div>
            <div
              className="absolute top-1/2 -right-6 glass rounded-xl px-4 py-2 text-sm font-medium animate-float shadow-lg hidden md:block"
              style={{ animationDelay: "4s" }}
            >
              <span className="gradient-text">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
