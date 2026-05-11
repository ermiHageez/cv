"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import {
  Monitor,
  Server,
  Database,
  GitBranch,
  Wrench,
  Brain,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Monitor,
  Backend: Server,
  Databases: Database,
  DevOps: GitBranch,
  Tools: Wrench,
  "AI/ML": Brain,
};

const categoryGradients: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-emerald-500 to-teal-500",
  Databases: "from-violet-500 to-purple-500",
  DevOps: "from-orange-500 to-amber-500",
  Tools: "from-rose-500 to-pink-500",
  "AI/ML": "from-indigo-500 to-blue-500",
};

export default function SkillsSection() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Technologies and tools I use to build production-grade applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, index) => {
            const Icon = categoryIcons[category.category] || Wrench;
            const gradient = categoryGradients[category.category] || "from-primary to-accent";

            return (
              <div
                key={category.category}
                className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300 hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10 text-white`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.06] text-muted hover:text-foreground hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
