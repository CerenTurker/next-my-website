import { HeroSection } from "@/components/hero/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { NavigationRail } from "@/components/layout/NavigationRail";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { ProfileCard } from "@/components/layout/ProfileCard";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function HomePage() {
  return (
    <PortfolioShell>
      <ProfileCard />

      <div className="main-content">
        <HeroSection />
        <ArchitectureSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </div>

      <NavigationRail />
    </PortfolioShell>
  );
}