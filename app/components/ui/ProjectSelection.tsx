"use client";

import React, { useEffect, useState } from "react";
import { Search, GitBranch } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { fetchGitHubRepos, GitHubRepo } from "@/app/utils/github";

type SortOption = "updated" | "stars" | "name";

function ProjectSelection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("updated");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await fetchGitHubRepos();
        setRepos(data);
        setFilteredRepos(data);
      } catch {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadRepos();
  }, []);

  useEffect(() => {
    let result = [...repos];

    if (searchQuery) {
      result = result.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          repo.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLanguage) {
      result = result.filter((repo) => repo.language === selectedLanguage);
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "name":
          return a.name.localeCompare(b.name);
        case "updated":
        default:
          return (
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
          );
      }
    });

    setFilteredRepos(result);
  }, [repos, searchQuery, sortBy, selectedLanguage]);

  const languages = Array.from(
    new Set(
      repos
        .map((repo) => repo.language)
        .filter((l): l is string => Boolean(l))
    )
  );

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open <span className="gradient-text">Source</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Explore my open-source projects and contributions on GitHub
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 reveal reveal-delay-1">
          <div className="relative flex-1">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={16}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="flex gap-2">
            <select
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-all duration-300"
              value={sortBy}
            >
              <option value="updated">Recent</option>
              <option value="stars">Stars</option>
              <option value="name">Name</option>
            </select>

            <select
              value={selectedLanguage}
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-all duration-300"
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isLoading && (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass">
              <GitBranch size={18} className="text-primary animate-pulse" />
              <span className="text-muted">Loading repositories...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-20 animate-fade-in-up">
            <p className="text-red-400/80 bg-red-500/5 border border-red-500/10 rounded-xl px-6 py-4 inline-block">
              {error}
            </p>
          </div>
        )}

        {!isLoading && !error && (
          <>
            {filteredRepos.length === 0 ? (
              <div className="text-center py-20 animate-fade-in-up">
                <p className="text-muted">
                  No projects found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                {filteredRepos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProjectSelection;
