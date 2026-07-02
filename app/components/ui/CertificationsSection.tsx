"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import { ExternalLink, Award, Calendar, Hash } from "lucide-react";

export default function CertificationsSection() {
  const { certifications } = portfolioConfig;

  return (
    <section id="certifications" className="py-28 relative">
      <div className="glow-orb bottom-0 left-1/4 bg-accent/50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Professional certifications and training credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass rounded-xl overflow-hidden hover:glass-hover transition-all duration-300 hover:-translate-y-1 reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Banner */}
              <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <Award
                  size={48}
                  className="text-white/30 group-hover:text-white/50 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{cert.name}</h3>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award size={14} className="text-primary shrink-0" />
                    {cert.organization}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary shrink-0" />
                    {cert.issueDate}
                  </div>
                  {cert.credentialId && cert.credentialId !== "N/A" && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Hash size={14} className="text-primary shrink-0" />
                      {cert.credentialId}
                    </div>
                  )}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary-light transition-colors"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
