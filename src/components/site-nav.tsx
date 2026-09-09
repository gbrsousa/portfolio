"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, sectionIds } from "@/content/site";
import { cx } from "@/lib/utils";

/**
 * Dock flutuante de ícones. Só ícones no visual, mas cada item
 * carrega nome acessível e um rótulo que aparece no hover/foco —
 * ícone sozinho nunca é suficiente para quem não conhece o site.
 */
export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>("inicio");
  const progressRef = useRef<HTMLDivElement>(null);

  /* Barra de progresso de leitura. */
  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${ratio})`);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Indicador de seção ativa. */
  useEffect(() => {
    if (!isHome) return;

    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [isHome]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Pular para o conteúdo
      </a>

      {/* Progresso de leitura */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-px overflow-hidden"
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5">
        <nav
          aria-label="Navegação principal"
          className="glass-dock flex items-center gap-0.5 rounded-full p-1.5 shadow-soft backdrop-blur-xl backdrop-saturate-150 xs:gap-1"
        >
          {navigation.map((item) => {
            const id = item.href.split("#")[1] ?? "";
            const isActive = isHome && active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className={cx(
                  "group relative grid size-9 place-items-center rounded-full transition-colors duration-300 sm:size-10",
                  isActive
                    ? "bg-glass-strong text-accent"
                    : "text-muted hover:text-text",
                )}
              >
                <Icon name={item.icon as IconName} className="size-[18px]" />

                {/* Rótulo em hover/foco */}
                <span
                  className="pointer-events-none absolute -bottom-9 whitespace-nowrap rounded-full border border-line bg-panel px-2.5 py-1 text-[0.6875rem] font-medium text-text opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  role="tooltip"
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <span aria-hidden className="mx-1 h-5 w-px bg-line" />

          <ThemeToggle />

          <Link
            href="/#contato"
            aria-label="Ir para o contato"
            className="group relative grid size-9 place-items-center rounded-full bg-accent text-accent-ink transition-colors duration-300 hover:bg-accent-strong sm:size-10"
          >
            <Icon name="mail" className="size-[18px]" />
            <span
              className="pointer-events-none absolute -bottom-9 whitespace-nowrap rounded-full border border-line bg-panel px-2.5 py-1 text-[0.6875rem] font-medium text-text opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
              role="tooltip"
            >
              Contato
            </span>
          </Link>
        </nav>
      </header>
    </>
  );
}
