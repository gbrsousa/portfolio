import Link from "next/link";
import { contactLinks, profile, site } from "@/content/site";
import { filled } from "@/lib/utils";

export function SiteFooter() {
  const links = contactLinks.filter((link) => filled(link.href));
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[-0.02em]">
            {profile.name} <span className="text-faint">© {year}</span>
          </p>
          <p className="mt-1 text-xs text-faint">{site.footerNote}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/#projetos"
            className="text-sm text-muted transition-colors duration-300 hover:text-accent"
          >
            Projetos
          </Link>
        </div>
      </div>
    </footer>
  );
}
