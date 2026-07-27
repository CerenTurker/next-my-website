import type { ReactNode } from "react";

import { CursorGlow } from "@/components/ui/CursorGlow";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

type PortfolioShellProps = {
  children: ReactNode;
};

export function PortfolioShell({
  children,
}: PortfolioShellProps) {
  return (
    <>
      <CursorGlow />
      <MobileNavigation />

      <main className="portfolio-shell">
        {children}
      </main>
    </>
  );
}