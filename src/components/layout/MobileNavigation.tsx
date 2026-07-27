"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { portfolio } from "@/data/portfolio";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="mobile-navigation__trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu size={20} />
      </button>

      <div
        className={`mobile-navigation ${
          isOpen ? "mobile-navigation--open" : ""
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="mobile-navigation__backdrop"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />

        <div className="mobile-navigation__panel">
          <header className="mobile-navigation__header">
            <div>
              <span>Portfolio</span>
              <strong>Ceren Demir</strong>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </header>

          <nav>
            <ul>
              {portfolio.navigation.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <footer>
            <a href={`mailto:${portfolio.profile.email}`}>
              {portfolio.profile.email}
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}