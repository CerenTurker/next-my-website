import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const { profile } = portfolio;

  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <Reveal>
        <div className="contact-card glass-panel">
          <div className="contact-card__glow" />

          <div className="contact-card__content">
            <span className="contact-card__eyebrow">
              Contact
            </span>

            <h2>Interested in working together?</h2>

            <p>
              I&apos;m currently open to Backend Developer
              opportunities. If you&apos;d like to discuss a
              role, a project or simply get in touch, I&apos;d be
              happy to hear from you.
            </p>

            <div className="contact-card__actions">
              <a
                href={`mailto:${profile.email}`}
                className="button button--primary"
              >
                <Mail size={17} />
                Send an email
              </a>

            <a
                href="/documents/ceren-demir-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="button button--secondary"
                >
                <Download size={17} />
                Download CV
            </a>
            </div>
          </div>

          <div className="contact-card__links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <FaLinkedinIn size={18} />
                <span>LinkedIn</span>
              </div>

              <ArrowUpRight size={17} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <FaGithub size={18} />
                <span>GitHub</span>
              </div>

              <ArrowUpRight size={17} />
            </a>

            <a href={`mailto:${profile.email}`}>
              <div>
                <Mail size={18} />
                <span>Email</span>
              </div>

              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}