import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { cx } from "@/lib/utils";

type Variant = "primary" | "light" | "outline";
type Size = "md" | "sm";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[transform,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:scale-[0.985] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-accent-strong hover:-translate-y-px",
  light:
    "bg-card text-card-text hover:-translate-y-px hover:bg-white/90 shadow-soft",
  outline:
    "border border-line-strong text-text hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  sm: "h-10 px-4 text-sm",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  external = false,
  ariaLabel,
}: Props) {
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          name={external ? "arrowUpRight" : "arrow"}
          className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5"
        />
      )}
    </>
  );

  const classes = cx(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
