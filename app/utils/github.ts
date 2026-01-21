import { portfolioConfig } from "@/app/config/portfolio";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    `${portfolioConfig.github.apiUrl}?sort=updated&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const repos: GitHubRepo[] = await response.json();
  return repos.filter((repo) => !repo.name.includes(".github"));
}

export function getLanguageColor(language: string | null): string {
 const colors: Record<string, string> = {
  TypeScript: "hsl(210, 70%, 50%)",   // clean blue
  JavaScript: "hsl(50, 95%, 55%)",    // bright yellow
  Python: "hsl(220, 60%, 45%)",       // deep blue
  Java: "hsl(20, 80%, 50%)",          // warm orange
  HTML: "hsl(10, 80%, 55%)",          // vivid red-orange
  CSS: "hsl(260, 70%, 55%)",          // purple
  PHP: "hsl(240, 50%, 55%)",          // indigo
  Swift: "hsl(15, 90%, 55%)",         // orange-red
  Kotlin: "hsl(270, 70%, 55%)",       // violet
  Shell: "hsl(140, 40%, 45%)",        // green
};
  return colors[language ?? ""] ?? "hsl(var(--muted-foreground))";
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}