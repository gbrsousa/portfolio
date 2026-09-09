import { AmbientBackground } from "@/components/ambient-background";
import { Button } from "@/components/button";
import { SiteNav } from "@/components/site-nav";

export default function NotFound() {
  return (
    <>
      <AmbientBackground />
      <SiteNav />

      <main
        id="conteudo"
        className="container-page flex min-h-dvh flex-col justify-center py-32"
      >
        <p className="label-caps text-accent">Erro 404</p>

        <h1 className="display mt-5 text-[clamp(2.125rem,8vw,5rem)]">
          <span className="block">Esta página</span>
          <span className="block text-muted">não existe</span>
        </h1>

        <p className="mt-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          O endereço pode ter mudado ou o conteúdo ainda não foi publicado.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/" arrow>
            Voltar ao início
          </Button>
          <Button href="/#projetos" variant="outline">
            Ver projetos
          </Button>
        </div>
      </main>
    </>
  );
}
