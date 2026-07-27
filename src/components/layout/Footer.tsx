import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {currentYear} Ceren Demir. Built with Next.js,
        TypeScript and care.
      </p>

      <a href="#home">
        Back to top
        <ArrowUp size={15} />
      </a>
    </footer>
  );
}