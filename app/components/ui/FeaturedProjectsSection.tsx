"use client";

import Image from "next/image";
import { portfolioConfig } from "@/app/config/portfolio";
import { Github, CheckCircle, Star } from "lucide-react";

const statusColors: Record<string, string> = {
  "MVP (78% Complete)": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function FeaturedProjectsSection() {
  const { featuredProjects } = portfolioConfig;

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            AI-powered products and enterprise solutions I&apos;ve built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.name}
              className="glass rounded-xl overflow-hidden hover:glass-hover transition-all duration-300 hover:-translate-y-1 reveal group flex flex-col"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <Star size={48} className="text-white/30 group-hover:text-white/50 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  {project.status && (
                    <span
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-full border ${
                        statusColors[project.status] ||
                        "bg-primary/10 text-primary border-primary/20"
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features or Highlights */}
                {project.features && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-muted"
                      >
                        <CheckCircle size={10} className="text-success" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {project.highlights && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-muted"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
