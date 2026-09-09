"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/icons";
import { contactLinks, profile } from "@/content/site";
import { filled } from "@/lib/utils";

/**
 * Card claro do retrato: o contraponto de luz sobre o fundo quase
 * preto. Inclina de leve conforme o cursor atravessa a página —
 * movimento pequeno de propósito, só para sugerir profundidade.
 */
export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const links = contactLinks.filter((link) => filled(link.href));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let frame = 0;
    let rx = 0;
    let ry = 0;

    function apply() {
      frame = 0;
      node?.style.setProperty("--rx", `${rx.toFixed(3)}deg`);
      node?.style.setProperty("--ry", `${ry.toFixed(3)}deg`);
    }

    function onMove(event: PointerEvent) {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      ry = Math.max(-1, Math.min(1, dx * 2)) * 3;
      rx = Math.max(-1, Math.min(1, dy * 2)) * -2.2;
      if (!frame) frame = requestAnimationFrame(apply);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative" style={{ perspective: "1200px" }}>
      {/* Arcos tracejados: o detalhe gráfico da identidade.
          Desenhados na moldura externa, fora da área do card. */}
      <svg
        aria-hidden
        viewBox="0 0 360 460"
        className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-accent sm:-inset-10 sm:h-[calc(100%+5rem)] sm:w-[calc(100%+5rem)]"
        fill="none"
      >
        {/* Passam por fora das bordas do card, senão ficam cobertos */}
        <path
          d="M8 150C56 14 300 8 352 116"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          opacity="0.8"
        />
        <path
          d="M8 316c6 88 84 140 186 136"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          opacity="0.45"
        />
      </svg>

      <div
        ref={ref}
        className="card-light relative p-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        }}
      >
        <div className="relative overflow-hidden rounded-[10px]">
          {/* Selo dentro da foto: não briga com o nome nem corta a borda */}
          <span className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1.5 text-[0.6875rem] font-semibold leading-none text-accent-ink shadow-soft">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-accent-ink"
              style={{ animation: "pulse-dot 2.8s ease-in-out infinite" }}
            />
            {profile.availability}
          </span>

          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={profile.photo.width}
            height={profile.photo.height}
            priority
            sizes="(max-width: 768px) 78vw, 20rem"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          {/* Gradação quente: integra a foto à paleta sem descaracterizá-la */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-accent opacity-[0.16] mix-blend-color"
          />
        </div>

        <div className="px-2 pb-3 pt-5 text-center">
          <p className="text-[1.75rem] font-bold leading-tight tracking-[-0.04em] text-card-text">
            {profile.name}
          </p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-card-muted">
            {profile.cardTagline}
          </p>

          {links.length > 0 && (
            <ul className="mt-5 flex items-center justify-center gap-2 border-t border-card-line pt-4">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={link.label}
                    title={link.label}
                    className="grid size-9 place-items-center rounded-full text-card-muted transition-colors duration-300 hover:bg-black/5 hover:text-card-text"
                  >
                    <Icon
                      name={link.id === "email" ? "mail" : "arrowUpRight"}
                      className="size-[18px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
