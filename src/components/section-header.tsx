import { Reveal } from "@/components/reveal";
import { cx } from "@/lib/utils";

type Props = {
  /** Primeira linha, em alto contraste. */
  line1: string;
  /** Segunda linha, recuada em cinza — cria o efeito de duas cores. */
  line2: string;
  intro?: string;
  className?: string;
};

export function SectionHeader({ line1, line2, intro, className }: Props) {
  return (
    <Reveal
      className={cx(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <h2 className="display text-[clamp(2rem,7vw,4.5rem)]">
        <span className="block">{line1}</span>
        <span className="block text-muted">{line2}</span>
      </h2>

      {intro && (
        <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted lg:pb-2 lg:text-right">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
