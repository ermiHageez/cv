"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
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
  const [selectedLanguage, setSelectedLanguage] = useState<string|"">("");

  // Load repos on mount
  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await fetchGitHubRepos();
        setRepos(data);
        setFilteredRepos(data);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadRepos();
  }, []);

  // Apply filters and sorting
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
    <section id="projects" className="flex flex-col mb-10 px-6 md:px-20">
      {/* Header */}
      <div className="container flex flex-col justify-center items-center gap-1">
        <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
        <div className="px-2 border-2 border-blue-500 rounded w-40 self-center mb-1"></div>
      </div>

      <p className="text-lg p-2 text-center mb-5">
        Explore my open-source projects and contributions on GitHub
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-blue-500 rounded-lg 
                       bg-white/10 text-gray-900 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       transition duration-200"
          />
        </div>

        {/* Sort & Language */}
        <div className="flex gap-2">
          <select
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 rounded-md border border-input bg-background text-sm"
            value={sortBy}
          >
            <option value="updated">Recently Updated</option>
            <option value="stars">Stars</option>
            <option value="name">Name</option>
          </select>

          <select
            value={selectedLanguage}
            className="px-3 py-2 rounded-md border border-input bg-background text-sm"
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">All languages</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      {isLoading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <>
          {filteredRepos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ProjectSelection;