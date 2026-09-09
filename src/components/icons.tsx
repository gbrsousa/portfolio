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
