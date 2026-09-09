"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { workflow } from "@/content/site";
import { cx, ordinal } from "@/lib/utils";

/**
 * Linha de processo que se preenche conforme a seção passa pela
 * tela. O cálculo roda em rAF e escreve uma custom property; o
 * estado do React só muda quando a etapa ativa realmente muda.
 */
export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let current = -1;

    function update() {
      frame = 0;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const distance = rect.height + start - window.innerHeight * 0.35;
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / Math.max(distance, 1)),
      );

      // Uma única escrita: os dois trilhos herdam a propriedade.
      track.style.setProperty("--fill", progress.toFixed(4));

      const step = Math.min(
        workflow.steps.length - 1,
        Math.floor(progress * workflow.steps.length),
      );
      if (step !== current) {
        current = step;
        setActiveStep(step);
      }
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

  return (
    <section id="processo" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        <SectionHeader
          line1="Como eu"
          line2="trabalho"
          intro={workflow.intro}
        />

        <div ref={trackRef} className="relative mt-12 sm:mt-16">
          {/* Trilho vertical (mobile e tablet) */}
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-line lg:hidden"
          >
            <span
              className="block h-full w-full origin-top bg-accent"
              style={{ transform: "scaleY(var(--fill, 0))" }}
            />
          </div>

          {/* Trilho horizontal (desktop) */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-[15px] hidden h-px bg-line lg:block"
          >
            <span
              className="block h-full w-full origin-left bg-accent"
              style={{ transform: "scaleX(var(--fill, 0))" }}
            />
          </div>

          <ol className="grid gap-9 lg:grid-cols-4 lg:gap-8">
            {workflow.steps.map((step, index) => {
              const reached = index <= activeStep;
              return (
                <li key={step.title} className="relative pl-11 lg:pl-0 lg:pt-12">
                  <span
                    aria-hidden
                    className={cx(
                      "absolute left-0 top-0 grid size-[31px] place-items-center rounded-full border transition-colors duration-500",
                      reached
                        ? "border-accent bg-accent text-accent-ink"
                        : "border-line bg-bg text-faint",
                    )}
                  >
                    <span className="text-[0.625rem] font-bold tabular-nums">
                      {ordinal(index)}
                    </span>
                  </span>

                  <h3 className="text-lg font-bold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted lg:max-w-none lg:pr-6">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
