import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { skillGroups } from "@/content/site";

/**
 * Stack em três colunas de leitura, não em parede de logos.
 * Categoria sem itens confirmados não é renderizada.
 */
export function Stack() {
  const groups = skillGroups.filter((group) => group.items.length > 0);
  if (groups.length === 0) return null;

  return (
    <section id="stack" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        <SectionHeader
          line1="Com o que"
          line2="eu construo"
          intro="Ferramentas escolhidas por problema, não por moda."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 90}
              className="group flex flex-col rounded-panel border border-line bg-panel p-6 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-bold tracking-[-0.03em]">
                  {group.title}
                </h3>
                <span className="text-[0.6875rem] tabular-nums text-faint">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-2 text-sm text-faint">{group.description}</p>

              <ul className="mt-6 space-y-px">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-t border-line py-3 text-[0.9375rem] text-muted transition-colors duration-300 group-hover:text-text"
                  >
                    {item}
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
