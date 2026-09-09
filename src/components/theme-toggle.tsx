"use client";

/**
 * Alterna e persiste o tema.
 *
 * Não há estado no React de propósito: a fonte de verdade é o
 * atributo data-theme no <html>, definido antes do primeiro paint
 * pelo script do layout. Os ícones reagem a esse atributo por CSS,
 * o que elimina flash, hidratação divergente e re-render.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Armazenamento indisponível: a troca vale para esta sessão.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      className={[
        "group relative grid size-9 place-items-center rounded-full sm:size-10",
        "text-muted transition-colors duration-300 hover:text-text",
        className ?? "",
      ].join(" ")}
    >
      <span aria-hidden className="relative block size-[18px]">
        {/* Sol — visível no tema escuro (leva ao claro) */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          className="theme-icon theme-icon-sun absolute inset-0"
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
        </svg>

        {/* Lua — visível no tema claro (leva ao escuro) */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme-icon theme-icon-moon absolute inset-0"
        >
          <path d="M20.2 14.4A8.4 8.4 0 0 1 9.6 3.8a8.4 8.4 0 1 0 10.6 10.6Z" />
        </svg>
      </span>
    </button>
  );
}
