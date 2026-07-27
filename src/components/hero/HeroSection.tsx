"use client";

import {
  ArrowDownRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section section"
    >
      <div className="hero-section__glow" />

      <Reveal>
        <div className="hero-badge">
          <span className="hero-badge__dot" />
          Open to Backend Developer opportunities
        </div>
      </Reveal>

      <motion.h1
        className="display-title gradient-text"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Building enterprise applications, APIs and learning platforms.
      </motion.h1>

      <Reveal delay={0.12}>
        <p className="body-copy">
          I am a backend-focused software developer with
          professional experience in PHP-based systems,
          Moodle LMS platforms, REST APIs and
          database-driven applications.
        </p>
      </Reveal>

      <Reveal
        delay={0.2}
        className="hero-actions"
      >
        <a
          href="/ceren-demir-cv.pdf"
          className="button button--primary"
        >
          <Download size={17} />
          Download CV
        </a>

        <a
          href="#contact"
          className="button button--secondary"
        >
          Contact me
          <ArrowDownRight size={17} />
        </a>
      </Reveal>

      <Reveal
        delay={0.3}
        className="hero-stats"
      >
        {portfolio.stats.map((stat) => (
          <article
            key={stat.label}
            className="hero-stat glass-panel"
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </Reveal>

      <Reveal
        delay={0.38}
        className="hero-current"
      >
        <div>
          <span className="hero-current__label">
            Currently
          </span>

          <strong>Software Developer</strong>
          <p>MTR Bilişim</p>
        </div>

        <div className="hero-current__stack">
          <span>PHP</span>
          <span>Moodle</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
      </Reveal>
    </section>
  );
}