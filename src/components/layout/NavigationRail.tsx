"use client";

import { useEffect, useState } from "react";
import {
  Blocks,
  BriefcaseBusiness,
  Code2,
  FolderGit2,
  Home,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { portfolio } from "@/data/portfolio";

const icons = {
  "#home": Home,
  "#architecture": Blocks,
  "#experience": BriefcaseBusiness,
  "#projects": FolderGit2,
  "#github": FaGithub,
  "#stack": Code2,
  "#contact": Mail,
} as const;

export function NavigationRail() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = portfolio.navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (visibleSection?.target.id) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.15, 0.3, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside
      className="navigation-rail"
      aria-label="Portfolio navigation"
    >
      <nav className="navigation-rail__container">
        <ul className="navigation-rail__list">
          {portfolio.navigation.map((item) => {
            const Icon =
              icons[item.href as keyof typeof icons] ?? Home;

            const isActive = activeSection === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`navigation-rail__link ${
                    isActive
                      ? "navigation-rail__link--active"
                      : ""
                  }`}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="navigation-active-pill"
                      className="navigation-rail__active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 30,
                      }}
                    />
                  ) : null}
                  {item.href === "#github" ? (
                    <FaGithub className="navigation-rail__icon" size={18} />
                    ) : (
                        <Icon
                            className="navigation-rail__icon"
                            size={18}
                            strokeWidth={2}
                        />
                    )}
                

                  <span className="navigation-rail__tooltip">
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <span className="navigation-rail__progress">
          {String(
            portfolio.navigation.findIndex(
              (item) => item.href === activeSection,
            ) + 1,
          ).padStart(2, "0")}
          <small>
            /{String(portfolio.navigation.length).padStart(2, "0")}
          </small>
        </span>
      </nav>
    </aside>
  );
}