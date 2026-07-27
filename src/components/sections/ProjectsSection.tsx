import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Globe2,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  const featuredProjects = portfolio.projects.filter(
    (project) => project.featured,
  );

  const freelanceProjects = portfolio.projects.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across enterprise products and client projects."
          description="A selection of professional backend responsibilities and freelance web projects developed for different business needs."
        />
      </Reveal>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
          >
            <article className="featured-project glass-panel">
              <header className="featured-project__header">
                <div className="featured-project__icon">
                  <BriefcaseBusiness size={22} />
                </div>

                <span>{project.category}</span>
              </header>

              <h3>{project.title}</h3>

              <p className="featured-project__description">
                {project.description}
              </p>

              <ul className="featured-project__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={14} />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="featured-project__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="projects-subheading">
        <div>
          <span>Freelance work</span>
          <h3>
            Web solutions for local and international clients.
          </h3>
        </div>

        <p>
          Earlier in my career, I developed corporate and
          event-focused websites for clients across different
          industries.
        </p>
      </Reveal>

      <div className="freelance-projects">
        {freelanceProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.06}
          >
            <article className="freelance-project glass-panel">
              <div className="freelance-project__top">
                <div className="freelance-project__icon">
                  <Globe2 size={19} />
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                ) : null}
              </div>

              <span className="freelance-project__category">
                {project.category}
              </span>

              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <div className="freelance-project__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}