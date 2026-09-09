# Portfólio — Gabriel Sousa

Site pessoal em Next.js 16 (App Router), TypeScript e Tailwind CSS v4.
Todo o conteúdo vive em **um único arquivo**: `src/content/site.ts`.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run lint     # ESLint
npm run typecheck
```

## Onde editar o quê

Abra `src/content/site.ts`. Nenhum componente contém texto escrito
diretamente — mudar o site é mudar esse arquivo.

| O que você quer mudar | Onde |
| --- | --- |
| Nome, cargo, frase da hero, foto | `profile` |
| Os três cards coloridos da hero | `highlights` |
| E-mail, LinkedIn, GitHub | `contactLinks` |
| Texto da seção Sobre | `about` |
| Tecnologias por categoria | `skillGroups` |
| Projetos e cases completos | `projects` |
| Etapas do "Como eu trabalho" | `workflow` |
| Formação e experiência | `timeline` |
| Seção de contato e formulário | `contact` |
| Título, descrição e URL do site | `site` |

### A regra dos campos vazios

Todo campo de texto vazio (`""`) e todo array vazio (`[]`) são tratados
como **"ainda não informado"**: o site simplesmente não renderiza aquele
elemento. É proposital — assim nada aparece inventado enquanto a
informação real não existir.

Exemplos:

- `contactLinks` sem `href` → o link não aparece, e o formulário de
  contato só entra no ar quando o e-mail for preenchido.
- Um projeto sem `technologies` → a lista de tecnologias some do card.
- Um projeto sem `images` → em vez de um screenshot falso, o card mostra
  um pôster tipográfico com a promessa do produto.
- Um projeto sem `result` → o bloco "Resultado" não existe no case.

Os pontos que ainda faltam estão marcados com `// PREENCHER`.

## O que falta preencher

1. **E-mail, LinkedIn e GitHub** em `contactLinks`. É o mais importante:
   sem o e-mail, o formulário de contato não aparece.
2. **Instituição e período** da graduação em `timeline`.
3. Por projeto: `role` (seu papel), `technologies`, `url`, `period`,
   `result` e `images`.

### Como adicionar screenshots

1. Coloque os arquivos em `public/projetos/`.
2. Referencie no projeto correspondente:

```ts
images: [
  { src: "/projetos/octaflow-1.png", alt: "Painel de planejamento do Octaflow" },
]
```

A primeira imagem vira a capa do card na home; todas aparecem na galeria
do case. Sempre escreva o `alt` — ele é lido por quem usa leitor de tela.

### Como trocar a foto

Substitua `public/gabriel.jpg` (retrato vertical, proporção ~4:5, no
mínimo 800px de largura) ou ajuste o caminho em `profile.photo`.

## Estrutura

```
src/
├─ app/                 rotas, metadata, sitemap, robots, OG image
│  └─ projetos/[slug]/  case study gerado a partir de cada projeto
├─ components/          peças reutilizáveis (dock, card, botão, ícones)
├─ sections/            as seções da home, uma por arquivo
├─ content/site.ts      ← todo o conteúdo
└─ lib/                 utilidades
```

## Decisões técnicas

- **Sem biblioteca de animação.** O scroll reveal usa um único
  `IntersectionObserver` compartilhado que solta o elemento assim que ele
  aparece; o resto é CSS. Os efeitos de cursor escrevem custom properties
  dentro de `requestAnimationFrame` e animam só por `transform`, sem
  causar layout. `prefers-reduced-motion` desliga tudo.
- **Tema sem estado no React.** O tema é resolvido por um script inline
  antes do primeiro paint (sem flash) e vive no atributo `data-theme` do
  `<html>`. O botão só troca o atributo; os ícones reagem por CSS.
- **Contraste verificado.** A tinta sobre o laranja é escura no tema
  escuro e branca no claro porque branco sobre `#f46c38` dá 3.1:1 e
  reprova em AA. Todos os pares de texto usados passam em AA.
- **Páginas estáticas.** Home e cases são pré-renderizados no build.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Importe o projeto na Vercel — a configuração é detectada sozinha.
3. Depois do deploy, atualize `site.url` em `src/content/site.ts` com o
   domínio definitivo. Ele alimenta o sitemap, o canonical e as tags
   Open Graph.
