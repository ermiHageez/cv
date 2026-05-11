"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import { MapPin, Code2, Database, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    label: "Focus",
    value: "Backend Systems & ERP",
  },
  {
    icon: Database,
    label: "Expertise",
    value: "PostgreSQL & REST APIs",
  },
  {
    icon: Code2,
    label: "Stack",
    value: "React, Node.js, Java",
  },
];

export default function AboutSection() {
  const { personal } = portfolioConfig;

  return (
    <section id="about" className="py-28 relative">
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
              My journey in software engineering started with curiosity about
              how systems work under the hood. Over time, that curiosity evolved
              into a passion for building enterprise-grade applications that
              solve real business problems. From inventory management to ERP
              workflows, I focus on creating systems that are reliable,
              scalable, and maintainable.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              I believe great engineering is about more than just writing code.
              It&apos;s about understanding the problem deeply, designing clean
              architecture, and building solutions that stand the test of time.
              I&apos;m constantly exploring new technologies in backend
              development, database design, and AI integration to stay at the
              cutting edge of the industry.
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
      </div>
    </section>
  );
}
