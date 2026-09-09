import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { site, profile } from "@/content/site";
import "./globals.css";

/** Uma família só. Pesos escolhidos: corpo, apoio e títulos. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Gabriel Sousa",
  },
  description: site.description,
  applicationName: "Gabriel Sousa",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Gabriel Sousa",
    "desenvolvedor",
    "engenharia de software",
    "desenvolvimento web",
    "produtos digitais",
    "portfólio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: profile.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#151312" },
    { media: "(prefers-color-scheme: light)", color: "#f2efec" },
  ],
  colorScheme: "dark light",
};

/**
 * Resolve o tema antes do primeiro paint para não haver flash.
 * Preferência salva vence; na ausência dela, segue o sistema.
 */
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={poppins.variable}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
