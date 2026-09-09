import { Reveal } from "@/components/reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <section aria-labelledby="sobre-titulo" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:gap-12 md:pt-14">
          <Reveal className="md:col-span-4">
            <h2
              id="sobre-titulo"
              className="display text-[clamp(1.875rem,5.5vw,3rem)]"
            >
              <span className="block">{about.title.line1}</span>
              <span className="block text-muted">{about.title.line2}</span>
            </h2>
          </Reveal>

          <div className="space-y-5 md:col-span-8">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal
                key={paragraph.slice(0, 24)}
                as="p"
                delay={index * 80}
                className="max-w-[62ch] text-base leading-relaxed text-muted sm:text-[1.0625rem]"
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
