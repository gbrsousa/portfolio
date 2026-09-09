"use client";

import { useEffect, useRef } from "react";

/**
 * Fundo do site: uma luz ambiente fixa no topo, malha discreta e
 * grão. Uma segunda luz acompanha o cursor de forma sutil —
 * atualizada por rAF, escrevendo duas custom properties e movendo
 * por transform (só compositor), sem re-render do React.
 *
 * Desligada em ponteiro grosso (toque) e em reduced motion.
 */
export function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        node?.style.setProperty("--px", `${x}px`);
        node?.style.setProperty("--py", `${y}px`);
        node?.style.setProperty("--pointer-opacity", "1");
      });
    }

    function onLeave() {
      node?.style.setProperty("--pointer-opacity", "0");
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--pointer-opacity" as string]: "0" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 30%, var(--bg) 80%, var(--bg-deep) 100%)",
        }}
      />

      {/* Malha discreta, dissolvida nas bordas */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(120% 85% at 50% 0%, #000 18%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(120% 85% at 50% 0%, #000 18%, transparent 76%)",
        }}
      />

      {/* Luz ambiente do topo */}
      <div
        className="absolute left-1/2 top-[-30vh] h-[70vh] w-[110vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, var(--ambient), transparent 72%)",
        }}
      />

      {/* Luz que acompanha o cursor */}
      <div
        className="absolute left-0 top-0 h-[40rem] w-[40rem] transition-opacity duration-700"
        style={{
          transform:
            "translate3d(calc(var(--px, 50vw) - 50%), calc(var(--py, 30vh) - 50%), 0)",
          opacity: "var(--pointer-opacity)",
          background:
            "radial-gradient(closest-side, var(--ambient), transparent 68%)",
          willChange: "transform",
        }}
      />

      {/* Grão: quebra o banding dos gradientes */}
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--noise-opacity)",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
