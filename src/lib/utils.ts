/** Junta classes ignorando valores falsos. Sem dependência externa. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Número de ordem editorial: 1 → "01". */
export function ordinal(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/** Um campo de texto só conta como preenchido se não for vazio. */
export function filled(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
