"use client";

import { Star, GitFork, ExternalLink, Github, Calendar } from "lucide-react";
import { GitHubRepo, getLanguageColor, formatDate } from "@/app/utils/github";

interface ProjectCardProps {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
            <Github size={18} />
          </div>
          <h3 className="font-semibold text-foreground truncate">
            {repo.name}
          </h3>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 shrink-0"
          aria-label="View on GitHub"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {repo.description && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {repo.description}
        </p>
      )}

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/5 text-primary/80 border border-primary/10"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                {repo.language}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Star size={13} /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={13} /> {repo.forks_count}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Calendar size={12} />
            {formatDate(repo.updated_at)}
          </span>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary hover:text-primary-light transition-colors"
          >
            View Repo &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
