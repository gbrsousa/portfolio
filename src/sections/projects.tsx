import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/content/site";
import { ordinal } from "@/lib/utils";

/** Quantas tecnologias o card da home mostra antes de resumir. */
const TECH_NO_CARD = 5;

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        <SectionHeader
          line1="Projetos"
          line2="recentes"
          intro="Cada um começou por um problema concreto. Abra o case para ver o contexto, as decisões e o que foi entregue."
        />

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2">
          {projects.map((project, index) => {
            const cover = project.images[0];
            /* O primeiro projeto ocupa a linha inteira: hierarquia
               em vez de três cards idênticos. */
            const featured = index === 0;

            return (
              <Reveal
                key={project.slug}
                as="li"
                delay={index * 90}
                className={featured ? "sm:col-span-2" : undefined}
              >
                <Link
                  href={`/projetos/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-panel p-3 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong"
                >
                  {/* Mídia: screenshot real quando existir, composição
                      tipográfica quando não — nunca um mockup falso. */}
                  <div
                    className={
                      featured
                        ? "relative overflow-hidden rounded-[12px] bg-bg-deep sm:aspect-[21/9] aspect-[16/10]"
                        : "relative aspect-[16/10] overflow-hidden rounded-[12px] bg-bg-deep"
                    }
                  >
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        sizes={
                          featured
                            ? "(max-width: 640px) 92vw, 72rem"
                            : "(max-width: 640px) 92vw, 36rem"
                        }
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                    ) : (
                      /* Sem screenshot ainda: um pôster tipográfico com a
                         promessa do produto. O nome não se repete aqui —
                         ele já é o título logo abaixo. */
                      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-70"
                          style={{
                            background:
                              "radial-gradient(80% 120% at 12% 0%, var(--ambient), transparent 70%)",
                          }}
                        />
                        <span className="relative text-[0.6875rem] font-semibold tabular-nums text-accent">
                          {ordinal(index)}
                        </span>
                        <span className="relative max-w-[22ch] text-[clamp(1.25rem,3.4vw,2rem)] font-bold leading-[1.15] tracking-[-0.03em] text-text/90">
                          {project.tagline}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="label-caps">{project.category}</p>
                        <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] sm:text-2xl">
                          {project.name}
                        </h3>
                      </div>

                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                        <Icon name="arrowUpRight" className="size-4" />
                      </span>
                    </div>

                    <p className="mt-3 max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {project.technologies.length > 0 && (
                      /* Só as principais aqui: o card é resumo, a lista
                         completa fica no case. Evita a parede de chips. */
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, TECH_NO_CARD).map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                          >
                            {tech}
                          </li>
                        ))}
                        {project.technologies.length > TECH_NO_CARD && (
                          <li className="rounded-full px-1 py-1 text-xs text-faint">
                            +{project.technologies.length - TECH_NO_CARD}
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
