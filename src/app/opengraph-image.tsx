import { ImageResponse } from "next/og";
import { profile, site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Cartão de compartilhamento gerado no build, com a mesma paleta
 * do site. Sem fonte externa: evita uma requisição de rede na
 * geração e mantém o build determinístico.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(1000px 620px at 12% -10%, #3a241a 0%, #151312 55%, #100f0e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 2,
              background: "#f46c38",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#998f8f",
              display: "flex",
            }}
          >
            Portfólio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1,
              display: "flex",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#998f8f",
              maxWidth: 880,
              display: "flex",
            }}
          >
            {profile.cardTagline}
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#6a6b6e",
            display: "flex",
          }}
        >
          {profile.role}
        </div>
      </div>
    ),
    size,
  );
}
