"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Download,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  const { personal, social } = portfolioConfig;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: social.email,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ermiHageez",
      href: social.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ermiHageez",
      href: social.linkedin,
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@ermiHageez",
      href: social.telegram,
    },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let&apos;s
            connect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-10 reveal reveal-delay-1">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision. Feel free
                  to reach out through any of the channels below.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-primary" />
                  {personal.location}
                </div>

                <a
                  href={portfolioConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-border hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <method.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
