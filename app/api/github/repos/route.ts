import { NextResponse } from "next/server";
import { portfolioConfig } from "@/app/config/portfolio";

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${portfolioConfig.github.apiUrl}?sort=updated&per_page=100&type=owner`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories" },
        { status: response.status }
      );
    }

    const repos = await response.json();
    const filtered = repos.filter(
      (repo: { name: string }) => !repo.name.startsWith(".")
    );

    return NextResponse.json(filtered);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
