"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import {
  MapPin,
  Code2,
  Brain,
  Building2,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    label: "Focus",
    value: "Backend Systems & AI",
  },
  {
    icon: Brain,
    label: "AI Expertise",
    value: "RAG, LLMs, Multi-Agent",
  },
  {
    icon: Code2,
    label: "Stack",
    value: "Node.js, Python, Java",
  },
];

export default function AboutSection() {
  const { personal, currentExperience } = portfolioConfig;

  return (
    <section id="about" className="py-28 relative margin-button-[100px]">
      <div className="glow-orb top-0 right-1/4 bg-primary/60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-6 reveal reveal-delay-1">
            <p className="text-lg text-muted leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-lg text-muted leading-relaxed">
              {personal.aboutExtended}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4 reveal reveal-delay-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:glass-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5 reveal reveal-delay-3">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-foreground font-medium">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Experience Card */}
        <div className="mt-28 glass rounded-2xl p-8 md:p-10 reveal reveal-delay-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{currentExperience.title}</h3>
              <p className="text-muted-foreground text-sm">
                {currentExperience.company} &middot; {currentExperience.role}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Responsibilities
              </h4>
              {currentExperience.responsibilities.map((item) => (
                <div key={item.category} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      {item.category}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Achievements
              </h4>
              {currentExperience.achievements.map((achievement) => (
                <div key={achievement} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                  <p className="text-muted text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
