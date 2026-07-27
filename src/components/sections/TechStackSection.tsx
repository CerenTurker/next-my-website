import {
  Braces,
  Boxes,
  Database,
  Wrench,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryIcons = {
  Backend: Braces,
  Database,
  Architecture: Boxes,
  Tools: Wrench,
} as const;

export function TechStackSection() {
  return (
    <section
      id="stack"
      className="section tech-stack-section"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies selected for maintainable backend development."
          description="My main focus is backend development, supported by database design, application architecture and delivery tools."
        />
      </Reveal>

      <div className="tech-stack-grid">
        {portfolio.stack.map((group, index) => {
          const Icon =
            categoryIcons[
              group.category as keyof typeof categoryIcons
            ];

          return (
            <Reveal
              key={group.category}
              delay={index * 0.07}
            >
              <article className="tech-stack-card glass-panel">
                <header className="tech-stack-card__header">
                  <div className="tech-stack-card__icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <span>0{index + 1}</span>
                    <h3>{group.category}</h3>
                  </div>
                </header>

                <p>{group.description}</p>

                <div className="tech-stack-card__items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal
        delay={0.25}
        className="stack-summary glass-panel"
      >
        <div>
          <span className="stack-summary__label">
            Primary focus
          </span>

          <strong>
            Backend applications and enterprise systems
          </strong>
        </div>

        <p>
          PHP and Moodle form the foundation of my professional
          experience, while I continue developing modern backend
          projects with Node.js, TypeScript, NestJS and Go.
        </p>
      </Reveal>
    </section>
  );
}