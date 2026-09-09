import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AmbientBackground } from "@/components/ambient-background";
import { Button } from "@/components/button";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { projects, site } from "@/content/site";
import { filled, ordinal } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const url = `${site.url}/projetos/${project.slug}`;

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${project.name} — Gabriel Sousa`,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Gabriel Sousa`,
      description: project.description,
    },
  };
}

/** Bloco de texto do case. Não renderiza nada se o campo estiver vazio. */
function CaseBlock({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) {
  return (
    <Reveal as="section" className="border-t border-line pt-7">
      <div className="flex items-baseline gap-4">
        <span className="text-[0.6875rem] font-semibold tabular-nums text-accent">
          {ordinal(index)}
        </span>
        <h2 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
          {title}
        </h2>
      </div>
      <p className="mt-4 max-w-[64ch] pl-8 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        {text}
      </p>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];
  const hasMeta =
    filled(project.role) ||
    project.technologies.length > 0 ||
    filled(project.period) ||
    filled(project.url);

  // Numeração contínua apenas entre os blocos que existem.
  const blocks = [
    { title: "Contexto", text: project.context },
    { title: "O problema", text: project.problem },
    { title: "A solução", text: project.solution },
    { title: "Meu papel", text: project.role },
    { title: "Resultado", text: project.result },
  ].filter((block) => filled(block.text));

  return (
    <>
      <AmbientBackground />
      <SiteNav />

      <main id="conteudo" className="pt-28 sm:pt-32">
        <article className="container-page">
          <header className="max-w-4xl">
            <Link
              href="/#projetos"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              <Icon
                name="arrow"
                className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              Todos os projetos
            </Link>

            <p className="label-caps mt-9 text-accent">{project.category}</p>

            <h1 className="display mt-4 text-[clamp(2.125rem,8vw,5.5rem)]">
              {project.name}
            </h1>

            <p className="mt-5 max-w-[46ch] text-xl font-semibold tracking-[-0.02em] text-muted sm:text-2xl">
              {project.tagline}
            </p>

            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              {project.description}
            </p>

            {filled(project.url) && (
              <div className="mt-8">
                <Button href={project.url} external arrow>
                  Visitar projeto
                </Button>
              </div>
            )}
          </header>

          <div className="mt-14 grid gap-12 pb-20 sm:mt-16 lg:grid-cols-12 lg:gap-16">
            {hasMeta && (
              <aside className="lg:col-span-4">
                <dl className="rounded-panel border border-line bg-panel p-6 lg:sticky lg:top-28">
                  {filled(project.period) && (
                    <div className="pb-4">
                      <dt className="label-caps">Período</dt>
                      <dd className="mt-2 text-[0.9375rem]">
                        {project.period}
                      </dd>
                    </div>
                  )}

                  {filled(project.role) && (
                    <div className="border-t border-line py-4 first:border-t-0 first:pt-0">
                      <dt className="label-caps">Papel</dt>
                      <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                        {project.role}
                      </dd>
                    </div>
                  )}

                  {project.technologies.length > 0 && (
                    <div className="border-t border-line py-4 first:border-t-0 first:pt-0">
                      <dt className="label-caps">Tecnologias</dt>
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}

                  {filled(project.url) && (
                    <div className="border-t border-line pt-4">
                      <dt className="label-caps">Link</dt>
                      <dd className="mt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.9375rem] text-accent underline-offset-4 hover:underline"
                        >
                          Abrir produto
                          <Icon name="arrowUpRight" className="size-3.5" />
                        </a>
                        {filled(project.urlNote) && (
                          <span className="mt-1.5 block text-xs leading-relaxed text-faint">
                            {project.urlNote}
                          </span>
                        )}
                      </dd>
                    </div>
                  )}
                </dl>
              </aside>
            )}

            <div
              className={
                hasMeta
                  ? "space-y-10 lg:col-span-8"
                  : "max-w-3xl space-y-10 lg:col-span-12"
              }
            >
              {blocks.map((block, blockIndex) => (
                <CaseBlock
                  key={block.title}
                  index={blockIndex}
                  title={block.title}
                  text={block.text}
                />
              ))}

              {project.features.length > 0 && (
                <Reveal as="section" className="border-t border-line pt-7">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[0.6875rem] font-semibold tabular-nums text-accent">
                      {ordinal(blocks.length)}
                    </span>
                    <h2 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
                      O que o produto faz
                    </h2>
                  </div>
                  <ul className="mt-5 grid gap-px pl-8 sm:grid-cols-2 sm:gap-x-8">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 border-t border-line py-3 text-[0.9375rem] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {project.images.length > 0 && (
                <Reveal as="section" className="border-t border-line pt-7">
                  <h2 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
                    Galeria
                  </h2>
                  <div className="mt-6 space-y-5">
                    {project.images.map((image) => (
                      <figure key={image.src}>
                        <div className="overflow-hidden rounded-card border border-line bg-panel">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1440}
                            height={900}
                            sizes="(max-width: 1024px) 92vw, 44rem"
                            className="w-full object-cover"
                          />
                        </div>
                        {image.caption && (
                          <figcaption className="mt-3 text-xs text-faint">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </article>

        {next && next.slug !== project.slug && (
          <div className="border-t border-line">
            <div className="container-page">
              <Link
                href={`/projetos/${next.slug}`}
                className="group flex flex-col gap-3 py-12 sm:flex-row sm:items-end sm:justify-between sm:py-14"
              >
                <div>
                  <p className="label-caps">Próximo projeto</p>
                  <p className="display mt-3 text-[clamp(1.875rem,6vw,3.25rem)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:group-hover:translate-x-1">
                    {next.name}
                  </p>
                </div>
                <span className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                  <Icon name="arrow" className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
