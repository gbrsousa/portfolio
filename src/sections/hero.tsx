import { Button } from "@/components/button";
import { Icon, type IconName } from "@/components/icons";
import { ProfileCard } from "@/components/profile-card";
import { highlights, profile } from "@/content/site";
import { cx } from "@/lib/utils";

/** Estilo de cada bento card por tom. */
const tones = {
  accent: "bg-accent text-accent-ink",
  lime: "bg-lime text-lime-ink",
  outline: "border border-line text-text",
} as const;

const iconBoxTones = {
  accent: "bg-black/10 text-accent-ink",
  lime: "bg-black/10 text-lime-ink",
  outline: "bg-glass text-accent",
} as const;

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-28 pb-20 pt-28 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36">
      <div className="container-page">
        {/* No mobile o título vem primeiro: é ele que precisa ser lido
            antes de qualquer rolagem. No desktop, o card volta para a
            esquerda ocupando as duas linhas. */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Card do retrato */}
          <div
            className="enter order-2 mx-auto w-full max-w-[19rem] lg:order-1 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none"
            style={{ ["--enter-delay" as string]: "80ms" }}
          >
            <ProfileCard />
          </div>

          {/* Coluna principal */}
          <div className="order-1 lg:order-2 lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:pt-4">
            <h1
              className="enter display text-[clamp(2rem,9vw,6rem)]"
              style={{ ["--enter-delay" as string]: "0ms" }}
            >
              <span className="block">{profile.headline.line1}</span>
              <span className="block text-muted">{profile.headline.line2}</span>
            </h1>

            <p
              className="enter mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem]"
              style={{ ["--enter-delay" as string]: "120ms" }}
            >
              {profile.intro}
            </p>

            <div
              className="enter mt-8 flex flex-wrap items-center gap-3"
              style={{ ["--enter-delay" as string]: "200ms" }}
            >
              <Button href="/#projetos" arrow>
                Ver projetos
              </Button>
              {/* Leva à seção de contato, não direto para o mailto: abrir
                  o app de e-mail sem aviso é abrupto, e lá o visitante
                  escolhe entre formulário, e-mail, LinkedIn e GitHub. */}
              <Button href="/#contato" variant="outline">
                Entre em contato
              </Button>
            </div>
          </div>

          {/* Bento cards: filho próprio da grade, para ficar depois do
              card do retrato no mobile e alinhado à direita no desktop */}
          <div className="order-3 lg:col-span-8 lg:col-start-5 lg:row-start-2">
            <ul
              className="enter grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              style={{ ["--enter-delay" as string]: "280ms" }}
            >
              {highlights.map((item) => (
                <li
                  key={item.id}
                  className={cx(
                    "group flex flex-col justify-between rounded-card p-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1",
                    tones[item.tone],
                  )}
                >
                  <span
                    className={cx(
                      "grid size-10 place-items-center rounded-[10px]",
                      iconBoxTones[item.tone],
                    )}
                  >
                    <Icon name={item.icon as IconName} className="size-5" />
                  </span>

                  <div className="mt-8">
                    <p className="text-[0.9375rem] font-semibold uppercase leading-tight tracking-[-0.01em]">
                      {item.title}
                    </p>
                    <p
                      className={cx(
                        "mt-1.5 text-sm leading-relaxed",
                        item.tone === "outline" ? "text-muted" : "opacity-80",
                      )}
                    >
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
