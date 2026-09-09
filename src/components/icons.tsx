import type { SVGProps } from "react";

/**
 * Ícones em traço, desenhados na mesma grade de 24px e com a
 * mesma espessura. Inline por escolha: são poucos e evitam uma
 * dependência inteira só para isso.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const icons = {
  home: (props: IconProps) => (
    <Base {...props}>
      <path d="M3.5 10.2 12 3.6l8.5 6.6V19a1.4 1.4 0 0 1-1.4 1.4h-3.9v-6.2H8.8v6.2H4.9A1.4 1.4 0 0 1 3.5 19Z" />
    </Base>
  ),
  folder: (props: IconProps) => (
    <Base {...props}>
      <path d="M3.6 6.6a1.6 1.6 0 0 1 1.6-1.6h3.4l1.9 2.4h7.9a1.6 1.6 0 0 1 1.6 1.6v8.4a1.6 1.6 0 0 1-1.6 1.6H5.2a1.6 1.6 0 0 1-1.6-1.6Z" />
    </Base>
  ),
  briefcase: (props: IconProps) => (
    <Base {...props}>
      <rect x="3.2" y="7.6" width="17.6" height="11.6" rx="1.8" />
      <path d="M8.8 7.6V6.2a1.6 1.6 0 0 1 1.6-1.6h3.2a1.6 1.6 0 0 1 1.6 1.6v1.4M3.2 12.4h17.6" />
    </Base>
  ),
  wrench: (props: IconProps) => (
    <Base {...props}>
      <path d="M15.2 3.6a5 5 0 0 0-4.6 6.9L4 17.1a1.9 1.9 0 0 0 2.7 2.7l6.6-6.6a5 5 0 0 0 6.3-6.4l-2.8 2.8-2.6-.7-.7-2.6Z" />
    </Base>
  ),
  pen: (props: IconProps) => (
    <Base {...props}>
      <path d="M4 20h4.2L19.4 8.8a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L4 15.8Z" />
      <path d="M14.6 5.8 18.2 9.4" />
    </Base>
  ),
  code: (props: IconProps) => (
    <Base {...props}>
      <path d="m8.4 8.4-4 3.6 4 3.6M15.6 8.4l4 3.6-4 3.6M13.4 5.2l-2.8 13.6" />
    </Base>
  ),
  layout: (props: IconProps) => (
    <Base {...props}>
      <rect x="3.4" y="4.2" width="17.2" height="15.6" rx="2" />
      <path d="M3.4 9.4h17.2M9.4 9.4v10.4" />
    </Base>
  ),
  tools: (props: IconProps) => (
    <Base {...props}>
      <path d="M12 3.6v3M12 17.4v3M20.4 12h-3M6.6 12h-3M17.9 6.1l-2.1 2.1M8.2 15.8l-2.1 2.1M17.9 17.9l-2.1-2.1M8.2 8.2 6.1 6.1" />
      <circle cx="12" cy="12" r="2.8" />
    </Base>
  ),
  mail: (props: IconProps) => (
    <Base {...props}>
      <rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2" />
      <path d="m3.8 7 7.1 5.3a1.8 1.8 0 0 0 2.2 0L20.2 7" />
    </Base>
  ),
  /* Marcas: preenchidas, não em traço — é assim que são reconhecidas. */
  github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5.01 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2.2Z" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.98h3.32V21H3.3V8.98Zm5.44 0h3.18v1.64h.05c.44-.83 1.53-1.71 3.15-1.71 3.37 0 3.99 2.21 3.99 5.09V21h-3.32v-5.34c0-1.27-.02-2.91-1.78-2.91-1.78 0-2.05 1.39-2.05 2.82V21H8.74V8.98Z" />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <Base {...props}>
      <path d="M4.8 12h14.4M13.2 6l6 6-6 6" />
    </Base>
  ),
  arrowUpRight: (props: IconProps) => (
    <Base {...props}>
      <path d="M6.8 17.2 17.2 6.8M8.6 6.8h8.6v8.6" />
    </Base>
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const Component = icons[name];
  return <Component {...props} />;
}
