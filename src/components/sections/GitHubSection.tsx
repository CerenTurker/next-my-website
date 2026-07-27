import {
  ArrowUpRight,
  Clock3,
  Code2,
  GitFork,
  Star,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { getGitHubRepositories } from "@/lib/github";
import { formatRelativeDate } from "@/lib/date";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const languageClassNames: Record<string, string> = {
  PHP: "language-dot language-dot--php",
  TypeScript: "language-dot language-dot--typescript",
  JavaScript: "language-dot language-dot--javascript",
  Go: "language-dot language-dot--go",
  HTML: "language-dot language-dot--html",
  CSS: "language-dot language-dot--css",
};

function formatRepositoryName(name: string): string {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map(
      (part) =>
        part.charAt(0).toUpperCase() +
        part.slice(1),
    )
    .join(" ");
}

export async function GitHubSection() {
  const repositories = await getGitHubRepositories();

  return (
    <section
      id="github"
      className="section github-section"
    >
      <Reveal>
        <SectionHeading
          eyebrow="GitHub"
          title="Latest repositories and active development work."
          description="The most recently pushed public repositories from my GitHub profile."
        />
      </Reveal>

      {repositories.length > 0 ? (
        <div className="github-grid">
          {repositories.map((repository, index) => {
            const language =
              repository.language ?? "Code";

            const languageClassName =
              languageClassNames[language] ??
              "language-dot";

            return (
              <Reveal
                key={repository.id}
                delay={index * 0.06}
              >
                <article className="github-card glass-panel">
                  <div className="github-card__header">
                    <div className="github-card__icon">
                      <FaGithub size={21} />
                    </div>

                    <a
                      href={repository.html_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${repository.name} on GitHub`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <div className="github-card__content">
                    <span className="github-card__label">
                      Public repository
                    </span>

                    <h3>
                      {formatRepositoryName(repository.name)}
                    </h3>

                    <p>
                      {repository.description ??
                        "A public software project available on my GitHub profile."}
                    </p>
                  </div>

                  {repository.topics.length > 0 ? (
                    <div className="github-card__topics">
                      {repository.topics
                        .slice(0, 4)
                        .map((topic: string) => (
                          <span key={topic}>{topic}</span>
                        ))}
                    </div>
                  ) : null}

                  <div className="github-card__activity">
                    <Clock3 size={14} />

                    <span>
                      Last push{" "}
                      {formatRelativeDate(
                        repository.pushed_at,
                      )}
                    </span>
                  </div>

                  <footer className="github-card__footer">
                    <div>
                      <span className={languageClassName} />
                      <Code2 size={14} />
                      <span>{language}</span>
                    </div>

                    <div>
                      <Star size={14} />
                      <span>
                        {repository.stargazers_count}
                      </span>
                    </div>

                    <div>
                      <GitFork size={14} />
                      <span>
                        {repository.forks_count}
                      </span>
                    </div>
                  </footer>

                  <a
                    className="github-card__link"
                    href={repository.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository
                    <ArrowUpRight size={15} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      ) : (
        <Reveal>
          <div className="github-empty glass-panel">
            <FaGithub size={28} />

            <div>
              <h3>GitHub repositories</h3>

              <p>
                Repository information could not be loaded.
                You can still visit my GitHub profile.
              </p>
            </div>

            <a
              href="https://github.com/CerenTurker"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      )}

      <Reveal
        delay={0.2}
        className="github-profile-link"
      >
        <a
          href="https://github.com/CerenTurker"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={18} />
          View all repositories
          <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}