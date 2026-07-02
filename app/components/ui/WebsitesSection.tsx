"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import { ExternalLink, Github, Globe } from "lucide-react";

const bannerGradients = [
  "from-blue-600/20 to-purple-600/20",
  "from-emerald-600/20 to-teal-600/20",
  "from-orange-600/20 to-rose-600/20",
  "from-violet-600/20 to-indigo-600/20",
];

const statusColors: Record<string, string> = {
  "In Active Development": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Published: "bg-green-500/10 text-green-400 border-green-500/20",
  "Completed (Version 2)": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function WebsitesSection() {
  const { websites } = portfolioConfig;

  return (
    <section id="websites" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Websites & <span className="gradient-text">Products</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Deployed applications and production systems I&apos;ve built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site, index) => (
            <div
              key={site.name}
              className="glass rounded-xl overflow-hidden hover:glass-hover transition-all duration-300 hover:-translate-y-1 reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`h-44 bg-gradient-to-br ${
                  bannerGradients[index % bannerGradients.length]
                } flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <Globe
                  size={48}
                  className="text-white/30 group-hover:text-white/50 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{site.name}</h3>
                  {site.status && (
                    <span
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-full border shrink-0 ${
                        statusColors[site.status] ||
                        "bg-primary/10 text-primary border-primary/20"
                      }`}
                    >
                      {site.status}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {site.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {site.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {site.url !== "#" && (
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                  )}
                  {site.github !== "#" && (
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
