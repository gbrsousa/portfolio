import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { timeline } from "@/content/site";
import { filled } from "@/lib/utils";

export function Experience() {
  if (timeline.length === 0) return null;

  return (
    <section id="experiencia" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        <SectionHeader line1="Formação e" line2="experiência" />

        <ul className="mt-12 border-t border-line sm:mt-16">
          {timeline.map((entry, index) => (
            <Reveal
              key={entry.id}
              as="li"
              delay={index * 80}
              className="group border-b border-line"
            >
              <div className="grid gap-4 py-8 transition-[padding] duration-500 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="label-caps">{entry.kind}</span>
                    {filled(entry.status) && (
                      <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.6875rem] font-semibold text-accent">
                        {entry.status}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-[1.75rem]">
                    {entry.title}
                  </h3>

                  {filled(entry.organization) && (
                    <p className="mt-1.5 text-[0.9375rem] text-accent">
                      {entry.organization}
                    </p>
                  )}
                </div>

                <div className="md:col-span-5">
                  {filled(entry.description) && (
                    <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  )}

                  {filled(entry.period) && (
                    <p className="mt-4 text-sm tabular-nums text-faint">
                      {entry.period}
                    </p>
                  )}

                  {entry.technologies.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {entry.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
