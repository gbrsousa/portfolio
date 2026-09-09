import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Fixa a raiz no projeto: sem isso o Turbopack sobe até o diretório
  // do usuário procurando lockfile.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /** Slugs antigos que já estiveram no ar continuam resolvendo. */
  async redirects() {
    return [
      {
        source: "/projetos/gamificacao-zion",
        destination: "/projetos/game-das-unidades",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
