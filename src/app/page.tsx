import { AmbientBackground } from "@/components/ambient-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Projects } from "@/sections/projects";
import { Stack } from "@/sections/stack";
import { contactLinks, profile, site } from "@/content/site";
import { filled } from "@/lib/utils";

/** Dados estruturados: só entra o que está de fato preenchido. */
function personJsonLd() {
  const sameAs = contactLinks
    .filter((link) => filled(link.href) && link.href.startsWith("http"))
    .map((link) => link.href);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Desenvolvedor de Software",
    description: site.description,
    url: site.url,
    image: `${site.url}${profile.photo.src}`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export default function HomePage() {
  return (
    <>
      <AmbientBackground />
      <SiteNav />

      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Process />
        <Contact />
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
    </>
  );
}
