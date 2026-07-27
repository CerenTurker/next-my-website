import type { GitHubRepository } from "@/types/github";

const GITHUB_USERNAME = "CerenTurker";
const GITHUB_API_URL =
  `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function getGitHubRepositories(): Promise<
  GitHubRepository[]
> {
  try {
    const token = process.env.GITHUB_TOKEN?.trim();

    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "ceren-portfolio",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `${GITHUB_API_URL}?sort=pushed&direction=desc&per_page=100`,
      {
        headers,
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      const body = await response.text();

      console.warn("GitHub API request failed", {
        status: response.status,
        statusText: response.statusText,
        remaining: response.headers.get("x-ratelimit-remaining"),
        reset: response.headers.get("x-ratelimit-reset"),
        retryAfter: response.headers.get("retry-after"),
        body,
      });

      return [];
    }

    const repositories =
      (await response.json()) as GitHubRepository[];

    return repositories
      .filter(
        (repository) =>
          !repository.fork &&
          !repository.archived &&
          repository.name !== GITHUB_USERNAME,
      )
      .sort((a, b) => {
        const aDate = a.pushed_at
          ? new Date(a.pushed_at).getTime()
          : 0;

        const bDate = b.pushed_at
          ? new Date(b.pushed_at).getTime()
          : 0;

        return bDate - aDate;
      })
      .slice(0, 6);
  } catch (error) {
    console.warn(
      "GitHub repositories could not be loaded:",
      error,
    );

    return [];
  }
}