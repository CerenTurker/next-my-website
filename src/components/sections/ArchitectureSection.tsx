import {
  Blocks,
  Database,
  KeyRound,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const architectureItems = [
  {
    icon: Blocks,
    title: "Modular backend development",
    description:
      "I structure backend features as focused modules that are easier to maintain, test and extend.",
    tags: ["Clean structure", "Services", "Repositories"],
  },
  {
    icon: ShieldCheck,
    title: "Authentication and authorization",
    description:
      "I work with login flows, role-based access control, permissions and protected application areas.",
    tags: ["RBAC", "Permissions", "Security"],
  },
  {
    icon: Database,
    title: "Database-driven systems",
    description:
      "I design and improve relational database structures with attention to consistency and maintainability.",
    tags: ["MySQL", "PostgreSQL", "Data integrity"],
  },
  {
    icon: Network,
    title: "REST API integrations",
    description:
      "I build and integrate backend endpoints that connect products, platforms and third-party services.",
    tags: ["REST", "JSON", "Swagger"],
  },
  {
    icon: Workflow,
    title: "Enterprise LMS workflows",
    description:
      "I develop Moodle-based workflows for users, roles, courses, permissions and custom learning modules.",
    tags: ["Moodle", "Plugins", "Learning systems"],
  },
  {
    icon: KeyRound,
    title: "Legacy code improvement",
    description:
      "I refactor existing PHP applications, resolve bugs and make older systems easier to evolve.",
    tags: ["PHP", "Refactoring", "Maintenance"],
  },
];

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="section architecture-section"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Architecture"
          title="Backend foundations designed for real product needs."
          description="My work focuses on building stable backend features, clear application flows and maintainable systems for enterprise products."
        />
      </Reveal>

      <div className="architecture-grid">
        {architectureItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal
              key={item.title}
              delay={index * 0.06}
            >
              <article className="architecture-card glass-panel">
                <div className="architecture-card__icon">
                  <Icon size={22} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="architecture-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}