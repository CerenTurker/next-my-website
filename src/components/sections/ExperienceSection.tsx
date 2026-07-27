import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience across enterprise and data-driven products."
          description="My professional journey includes learning platforms, maritime logistics systems and custom web applications."
        />
      </Reveal>

      <div className="experience-timeline">
        {portfolio.experience.map((experience, index) => (
          <Reveal
            key={`${experience.company}-${experience.period}`}
            delay={index * 0.08}
          >
            <article className="experience-card glass-panel">
              <div className="experience-card__marker">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="experience-card__header">
                <div>
                  <div className="experience-card__period">
                    <CalendarDays size={14} />
                    {experience.period}
                  </div>

                  <h3>{experience.role}</h3>

                  <p className="experience-card__company">
                    {experience.company}
                  </p>
                </div>

                {experience.current ? (
                  <span className="experience-card__current">
                    <span />
                    Current role
                  </span>
                ) : (
                  <ArrowUpRight
                    className="experience-card__arrow"
                    size={20}
                  />
                )}
              </div>

              <p className="experience-card__description">
                {experience.description}
              </p>

              <ul className="experience-card__responsibilities">
                {experience.responsibilities.map(
                  (responsibility) => (
                    <li key={responsibility}>
                      {responsibility}
                    </li>
                  ),
                )}
              </ul>

              <div className="experience-card__technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}