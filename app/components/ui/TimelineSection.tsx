"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import { Briefcase } from "lucide-react";

export default function TimelineSection() {
  const { timeline } = portfolioConfig;

  return (
    <section id="experience" className="py-28 relative">
      <div className="glow-orb bottom-0 left-1/4 bg-accent/50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative pl-20 reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                  <Briefcase size={14} className="text-primary" />
                </div>

                <div className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
