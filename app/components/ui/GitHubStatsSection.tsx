"use client";

import { portfolioConfig } from "@/app/config/portfolio";
import Image from "next/image";
import { Github, ExternalLink, Code2, Flame, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

interface PinnedRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
}

interface LanguageData {
  [key: string]: number;
}

const languageColors: Record<string, string> = {
  TypeScript: "hsl(210, 70%, 50%)",
  JavaScript: "hsl(50, 95%, 55%)",
  Python: "hsl(220, 60%, 45%)",
  Java: "hsl(20, 80%, 50%)",
  HTML: "hsl(10, 80%, 55%)",
  CSS: "hsl(260, 70%, 55%)",
  Shell: "hsl(140, 40%, 45%)",
};

export default function GitHubStatsSection() {
  const { github } = portfolioConfig;
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [languages, setLanguages] = useState<LanguageData>({});
  const [totalStars, setTotalStars] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${github.username}/repos?per_page=100&sort=updated`
        );
        if (res.ok) {
          const repos = await res.json();
          setTotalRepos(repos.length);

          const langCount: LanguageData = {};
          let stars = 0;
          repos.forEach((repo: { language: string | null; stargazers_count: number }) => {
            if (repo.language) {
              langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
            stars += repo.stargazers_count;
          });
          setLanguages(langCount);
          setTotalStars(stars);

          const pinned = repos
            .filter((r: { stargazers_count: number }) => r.stargazers_count > 0)
            .sort((a: { stargazers_count: number }, b: { stargazers_count: number }) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4);
          if (pinned.length < 4) {
            const additional = repos
              .filter((r: { name: string }) => !pinned.some((p: { name: string }) => p.name === r.name))
              .slice(0, 4 - pinned.length);
            pinned.push(...additional);
          }
          setPinnedRepos(pinned);
        }
      } catch {
        // silently fail
      }
    }
    fetchStats();
  }, [github.username]);

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6);

  const totalLang = topLanguages.reduce((sum, [, count]) => sum + count, 0);

  return (
    <section id="github" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Contribution Graph */}
          <div className="lg:col-span-2 glass rounded-xl p-6 reveal">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={20} className="text-primary" />
              <h3 className="text-lg font-semibold">Contribution Graph</h3>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src={`https://github-readme-contributions-mhrlv.vercel.app/api?username=${github.username}&theme=dark&hide_border=true`}
                alt="GitHub Contributions"
                width={800}
                height={200}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 reveal reveal-delay-1">
              <div className="flex items-center gap-3 mb-4">
                <Flame size={20} className="text-primary" />
                <h3 className="text-lg font-semibold">Quick Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Repos</span>
                  <span className="font-bold text-foreground">{totalRepos}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Stars</span>
                  <span className="font-bold text-foreground">{totalStars}</span>
                </div>
              </div>
            </div>

            {/* Top Languages */}
            <div className="glass rounded-xl p-6 reveal reveal-delay-2">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-primary" />
                <h3 className="text-lg font-semibold">Top Languages</h3>
              </div>
              <div className="space-y-3">
                {topLanguages.map(([lang, count]) => {
                  const percentage = totalLang > 0 ? (count / totalLang) * 100 : 0;
                  return (
                    <div key={lang}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor: languageColors[lang] || "var(--color-muted-foreground)",
                            }}
                          />
                          <span className="text-sm text-foreground">{lang}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: languageColors[lang] || "var(--color-primary)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Projects */}
        {pinnedRepos.length > 0 && (
          <div className="reveal reveal-delay-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Github size={20} className="text-primary" />
              Pinned Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pinnedRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-5 hover:glass-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </h4>
                  {repo.description && (
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor:
                                languageColors[repo.language] || "var(--color-muted-foreground)",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                    </div>
                    {repo.stargazers_count > 0 && (
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        ★ {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="text-center mt-10 reveal reveal-delay-4">
          <a
            href={`https://github.com/${github.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-hover text-foreground font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github size={18} />
            View GitHub Profile
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
