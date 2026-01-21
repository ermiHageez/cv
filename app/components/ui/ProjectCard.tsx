import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import { GitHubRepo, getLanguageColor, formatDate } from "@/app/utils/github";
import React from "react";

interface ProjectCardProps {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div
      className="flex flex-col border border-blue-500 rounded-lg p-6 
                 bg-white/10 shadow-md hover:shadow-xl hover:shadow-blue-500/30 
                 transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-foreground">
          {repo.name}
        </h2>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      {/* Description */}
      {repo.description && (
        <p className="text-sm text-muted-foreground mb-4">
          {repo.description}
        </p>
      )}

      {/* Language + Stats */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          {repo.language && (
            <span
              className="flex items-center gap-1"
              style={{ color: getLanguageColor(repo.language) }}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              ></span>
              {repo.language}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-gray-600">
            <Star size={16} /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <GitFork size={16} /> {repo.forks_count}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <span>Updated {formatDate(repo.updated_at)}</span>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
        >
          <Github size={14} /> View Repo
        </a>
      </div>
    </div>
  );
}