"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cx } from "@/lib/utils";

/**
 * Scroll reveal com um único IntersectionObserver compartilhado
 * por toda a página. Cada elemento é observado uma vez e liberado
 * assim que aparece — nenhum listener de scroll, nenhum reflow.
 */
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-revealed", "true");
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );
  return observer;
}

type RevealProps = {
  children: ReactNode;
  /** Elemento renderizado. Mantém o HTML semântico. */
  as?: ElementType;
  className?: string;
  /** Atraso em ms para escalonar elementos de uma mesma linha. */
  delay?: number;
  id?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = getObserver();
    if (!io) {
      // Sem suporte: mostra o conteúdo imediatamente.
      node.setAttribute("data-revealed", "true");
      return;
    }

    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={cx(className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as object) : undefined}
    >
      {children}
    </Tag>
  );
}
