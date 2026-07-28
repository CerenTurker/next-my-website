import Image from "next/image";

import {
  BriefcaseBusiness,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { portfolio } from "@/data/portfolio";

export function ProfileCard() {
  const { profile } = portfolio;

  return (
    <aside className="profile-card glass-panel">
      <div className="profile-card__monogram">CD</div>

      <div className="profile-card__image-wrapper">
        <Image
          src={profile.image}
          alt={`${profile.name} profile photo`}
          width={220}
          height={220}
          priority
          className="profile-card__image"
        />
      </div>

      <div className="profile-card__content">
        <p className="profile-card__eyebrow">
          Backend Developer
        </p>

        <h2>{profile.name}</h2>

        <div className="profile-card__current-role">
            <span>Currently</span>

            <strong>Software Developer</strong>

            <p>MTR Bilişim</p>
        </div>

        <div className="profile-card__status">
          <span />
          {profile.availability}
        </div>

        <div className="profile-card__details">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} />
            <span>{profile.email}</span>
          </a>

          <div>
            <MapPin size={16} />
            <span>{profile.location}</span>
          </div>

          <div>
            <BriefcaseBusiness size={16} />
            <span>5+ years of experience</span>
          </div>
        </div>

        <div className="profile-card__socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <a
        href="#contact"
        className="profile-card__cta"
      >
        Contact me
      </a>
    </aside>
  );
}