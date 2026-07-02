"use client";

import Image from "next/image";
import { portfolioConfig } from "@/app/config/portfolio";
import { ExternalLink, Copy, Brain, Sparkles } from "lucide-react";

export default function AiModelsSection() {
  const { aiModels } = portfolioConfig;

  return (
    <section id="ai-models" className="py-28 relative">
      <div className="glow-orb top-1/3 -right-48 bg-accent/60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Published <span className="gradient-text">AI Models</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Custom AI models built for Ethiopian enterprise use cases
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {aiModels.map((model, index) => (
            <div
              key={model.name}
              className="glass rounded-2xl overflow-hidden hover:glass-hover transition-all duration-300 hover:-translate-y-1 reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                {model.image && (
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                      <Brain size={22} />
                    </div>
                    <h3 className="text-xl font-bold">{model.name}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {model.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {model.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-muted"
                        >
                          <Sparkles size={10} className="text-accent" />
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Platform & Command */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Platform:</span>
                      <span className="font-medium text-foreground">{model.platform}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Command:</span>
                      <code className="px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-primary font-mono text-xs">
                        {model.command}
                      </code>
                      <button
                        onClick={() => navigator.clipboard.writeText(model.command)}
                        className="p-1 rounded-md hover:bg-white/[0.04] text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Copy command"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Model Link */}
                  <a
                    href={model.modelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5 w-fit"
                  >
                    <ExternalLink size={14} />
                    View on Ollama
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
