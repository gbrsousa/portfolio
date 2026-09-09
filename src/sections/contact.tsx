"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { contact, contactLinks, primaryContact } from "@/content/site";
import { filled } from "@/lib/utils";

const field =
  "w-full rounded-[10px] border border-line bg-bg-deep px-4 py-3 text-[0.9375rem] text-text " +
  "placeholder:text-faint transition-colors duration-300 focus:border-accent focus:outline-none";

export function Contact() {
  const links = contactLinks.filter((link) => filled(link.href));
  const email = filled(primaryContact?.href) ? primaryContact : undefined;
  const [sent, setSent] = useState(false);

  /**
   * Sem backend: o formulário monta a mensagem e entrega ao app de
   * e-mail do visitante. É honesto e funciona em qualquer host —
   * para envio automático basta trocar este handler por um POST.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "");
    const from = String(data.get("email") ?? "");
    const subject = String(data.get("assunto") ?? "");
    const message = String(data.get("mensagem") ?? "");

    const body = `${message}\n\n—\n${name}\n${from}`;
    const target = email.href.replace(/^mailto:/, "");
    window.location.href = `mailto:${target}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contato" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-panel border border-line bg-panel px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-40 size-[34rem]"
            style={{
              background:
                "radial-gradient(closest-side, var(--ambient), transparent 70%)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display text-[clamp(2rem,6.5vw,4rem)]">
                <span className="block">{contact.title.line1}</span>
                <span className="block text-muted">{contact.title.line2}</span>
              </h2>

              <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {contact.text}
              </p>

              {links.length > 0 && (
                <ul className="mt-8 border-t border-line">
                  {links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center justify-between gap-6 border-b border-line py-4"
                      >
                        <span className="label-caps transition-colors duration-300 group-hover:text-muted">
                          {link.label}
                        </span>
                        <span className="flex items-center gap-2.5 text-[0.9375rem] transition-colors duration-300 group-hover:text-accent">
                          {filled(link.display) ? link.display : link.label}
                          <Icon
                            name="arrowUpRight"
                            className="size-3.5 text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="lg:col-span-7">
              {email ? (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className="label-caps">
                        {contact.form.name}
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        autoComplete="name"
                        className={`mt-2 ${field}`}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="label-caps">
                        {contact.form.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={`mt-2 ${field}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="label-caps">
                      {contact.form.subject}
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      required
                      defaultValue=""
                      className={`mt-2 ${field}`}
                    >
                      <option value="" disabled>
                        Selecione…
                      </option>
                      {contact.form.subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="label-caps">
                      {contact.form.message}
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      className={`mt-2 resize-y ${field}`}
                    />
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[0.9375rem] font-semibold text-accent-ink transition-[background-color,transform] duration-300 hover:bg-accent-strong active:scale-[0.985]"
                    >
                      {contact.cta}
                      <Icon name="arrow" className="size-4" />
                    </button>

                    {sent && (
                      <p role="status" className="text-sm text-muted">
                        Seu aplicativo de e-mail deve abrir com a mensagem
                        pronta.
                      </p>
                    )}
                  </div>
                </form>
              ) : (
                <div className="rounded-panel border border-dashed border-line-strong p-8">
                  <p className="text-[0.9375rem] leading-relaxed text-muted">
                    Os canais de contato estão sendo publicados. Enquanto isso,
                    os projetos abaixo contam boa parte da história.
                  </p>

                  {/* Lembrete apenas em desenvolvimento. */}
                  {process.env.NODE_ENV === "development" && (
                    <p className="mt-5 border-t border-line pt-4 text-xs text-faint">
                      <strong className="font-semibold text-muted">
                        Apenas em desenvolvimento:
                      </strong>{" "}
                      preencha <code className="text-accent">contactLinks</code>{" "}
                      em <code className="text-accent">src/content/site.ts</code>{" "}
                      para publicar o formulário e os links.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
