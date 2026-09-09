/**
 * ─────────────────────────────────────────────────────────────
 *  FONTE ÚNICA DE CONTEÚDO DO SITE
 * ─────────────────────────────────────────────────────────────
 *  Tudo que é texto, link, projeto, tecnologia ou imagem vive
 *  aqui. Nenhum componente contém conteúdo escrito diretamente.
 *
 *  Regra do projeto: campos vazios ("") são tratados como
 *  "ainda não informado". O site simplesmente não renderiza o
 *  elemento correspondente — nunca inventa link, número,
 *  tecnologia ou resultado.
 *
 *  Para atualizar o site, edite apenas este arquivo.
 * ─────────────────────────────────────────────────────────────
 */

/* ============================================================
 * 1. PERFIL
 * ========================================================== */

export const profile = {
  name: "Gabriel Sousa",
  role: "Desenvolvedor · Estudante de Engenharia de Software",

  /** Tag de status no card do retrato. */
  availability: "Disponível para oportunidades",

  /**
   * Título gigante da hero, em duas linhas.
   * A primeira sai em branco, a segunda em cinza.
   */
  headline: {
    line1: "Desenvolvedor",
    line2: "de Software",
  },

  /** Frase curta dentro do card do retrato. */
  cardTagline:
    "Construo produtos digitais, não apenas código.",

  /** Parágrafo de apoio ao lado do título. */
  intro:
    "Transformo problemas reais em software que as pessoas conseguem usar sem manual: interface clara na frente, estrutura sólida atrás.",

  /**
   * Foto de perfil.
   * Para trocar: substitua o arquivo em /public e ajuste o caminho.
   * Formato ideal: retrato vertical, ~4:5, mínimo 800px de largura.
   */
  photo: {
    src: "/gabriel.jpg",
    alt: "Retrato de Gabriel Sousa",
    width: 720,
    height: 800,
  },
} as const;

/* ============================================================
 * 2. DESTAQUES (bento cards da hero)
 *    Três blocos coloridos com o que Gabriel faz. Conteúdo
 *    qualitativo e verdadeiro — nada de métricas inventadas.
 * ========================================================== */

export type Highlight = {
  id: string;
  /** "accent" (laranja) | "lime" | "outline" */
  tone: "accent" | "lime" | "outline";
  /** Ícone: chave do mapa em components/icons.tsx */
  icon: "code" | "layout" | "tools";
  title: string;
  text: string;
};

export const highlights: Highlight[] = [
  {
    id: "desenvolvimento",
    tone: "accent",
    icon: "code",
    title: "Desenvolvimento web",
    text: "Interface, API e banco de dados na mesma cabeça.",
  },
  {
    id: "produto",
    tone: "lime",
    icon: "layout",
    title: "Produto e UX",
    text: "Decisões de experiência antes da primeira linha.",
  },
  {
    id: "processo",
    tone: "outline",
    icon: "tools",
    title: "Do problema ao deploy",
    text: "Levo a ideia até estar no ar e funcionando.",
  },
];

/* ============================================================
 * 3. CONTATO E LINKS
 *    Preencha apenas o que existir. O que ficar vazio não é
 *    renderizado no site publicado.
 * ========================================================== */

export type ContactLink = {
  id: string;
  label: string;
  /** Texto exibido. Se vazio, cai no label. */
  display: string;
  /** URL completa ou mailto:. Vazio = link ainda não informado. */
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "E-mail",
    display: "gabriellr.sousa@gmail.com",
    href: "mailto:gabriellr.sousa@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    display: "/in/gbrsousa",
    href: "https://www.linkedin.com/in/gbrsousa/",
  },
  {
    id: "github",
    label: "GitHub",
    display: "@gbrsousa",
    href: "https://github.com/gbrsousa",
  },
];

export const primaryContact = contactLinks.find((l) => l.id === "email");

/* ============================================================
 * 4. SOBRE
 * ========================================================== */

export const about = {
  title: { line1: "Sobre", line2: "mim" },
  paragraphs: [
    "Estudo Engenharia de Software e passo a maior parte do tempo construindo coisas. Cada projeto começa pelo problema: o que precisa ser resolvido, para quem, e o que acontece se for resolvido mal.",
    "Trabalho nos dois lados da tela. Na frente, me interessa a experiência — o quanto uma decisão de interface reduz o esforço de quem usa. Atrás, me interessa a estrutura — o quanto o código continua fácil de mudar seis meses depois.",
  ],
};

/* ============================================================
 * 5. STACK
 *    Liste apenas o que é verdade. Categoria sem itens não é
 *    renderizada — deixe o array vazio até confirmar.
 * ========================================================== */

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "desenvolvimento",
    title: "Desenvolvimento",
    description: "Da interface ao dado que a alimenta.",
    // Adicione somente o que domina de fato.
    items: ["Frontend", "Backend", "APIs", "Banco de dados"],
  },
  {
    id: "produto",
    title: "Produto",
    description: "As decisões que vêm antes do código.",
    items: ["UX/UI", "Arquitetura", "Prototipação", "Design de produto"],
  },
  {
    id: "ferramentas",
    title: "Ferramentas",
    description: "O processo do commit ao deploy.",
    items: ["Git", "GitHub", "Vercel"],
  },
];

/* ============================================================
 * 6. PROJETOS
 *    Cada projeto vira automaticamente uma página de case study
 *    em /projetos/[slug]. Campos vazios são omitidos na página.
 * ========================================================== */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Categoria curta exibida no card. */
  category: string;
  /** Uma linha, em destaque no card. */
  tagline: string;
  description: string;
  /** Case study — deixe "" para omitir a seção. */
  context: string;
  problem: string;
  solution: string;
  role: string;
  /** Somente resultados reais e verificáveis. */
  result: string;
  technologies: string[];
  /** URL do produto. Vazio = botão não é exibido. */
  url: string;
  /** Screenshots em /public. Vazio = galeria não é exibida. */
  images: ProjectImage[];
  period: string;
};

export const projects: Project[] = [
  {
    slug: "octaflow",
    name: "Octaflow",
    category: "Gestão de conteúdo",
    tagline: "Todo o ciclo de conteúdo em um lugar só.",
    description:
      "Planeje conteúdo, acompanhe produção, consulte assets e transforme métricas em decisões sem sair do Octaflow.",
    context:
      "A operação de conteúdo costuma ficar espalhada: o planejamento em um lugar, a produção em outro, os assets em uma pasta compartilhada e os números em uma planilha à parte.",
    problem:
      "Quando planejamento, produção, assets e métricas moram em ferramentas diferentes, a equipe gasta tempo procurando informação e decide com uma visão incompleta do próprio trabalho.",
    solution:
      "Um produto que reúne as quatro etapas em uma única interface. O planejamento alimenta a produção, os assets ficam junto do conteúdo que os usa, e as métricas voltam para o mesmo lugar onde a próxima decisão é tomada.",
    role: "", // PREENCHER: o que você fez no projeto.
    result: "", // PREENCHER: somente resultados reais.
    technologies: [], // PREENCHER
    url: "", // PREENCHER
    images: [], // PREENCHER: { src: "/projetos/octaflow-1.png", alt: "..." }
    period: "",
  },
  {
    slug: "gamificacao-zion",
    name: "Gamificação Zion",
    category: "Engajamento e desempenho",
    tagline: "Competição saudável entre unidades.",
    description:
      "Plataforma de gamificação entre unidades, com foco em engajamento, competição saudável e acompanhamento de desempenho.",
    context:
      "Times distribuídos em unidades diferentes raramente enxergam como estão indo em relação ao conjunto — e sem essa visão, o desempenho vira assunto de relatório, não do dia a dia.",
    problem:
      "Manter o engajamento entre unidades exige mais do que divulgar resultados no fim do mês. É preciso tornar o progresso visível enquanto ele acontece, sem transformar a comparação em pressão.",
    solution:
      "Uma plataforma que traduz o desempenho das unidades em uma dinâmica de gamificação: o progresso fica acompanhável de perto e a competição acontece de forma saudável, com regras claras para todos.",
    role: "",
    result: "",
    technologies: [],
    url: "",
    images: [],
    period: "",
  },
  {
    slug: "pm-casa",
    name: "PM Casa",
    category: "Operação e gestão",
    tagline: "Cada lançamento sob controle.",
    description: "Plataforma de gestão de lançamentos da Paper Memories Casa.",
    context:
      "Um lançamento envolve etapas, prazos e responsáveis que precisam se encontrar no tempo certo. Quando esse controle vive em mensagens e planilhas soltas, o que falha é sempre a informação, não a equipe.",
    problem:
      "A Paper Memories Casa precisava de um lugar próprio para organizar seus lançamentos, em vez de reconstruir o mesmo controle manualmente a cada ciclo.",
    solution:
      "Uma plataforma dedicada à gestão desses lançamentos, com a organização das etapas centralizada em um software feito para essa operação específica.",
    role: "",
    result: "",
    technologies: [],
    url: "",
    images: [],
    period: "",
  },
];

/* ============================================================
 * 7. COMO EU TRABALHO
 * ========================================================== */

/** Nome evita sombrear o `process` global do Node nos módulos. */
export const workflow = {
  title: { line1: "Como eu", line2: "trabalho" },
  intro:
    "Quatro etapas que se repetem em todo projeto — na ordem em que fazem diferença.",
  steps: [
    {
      title: "Entendo o problema",
      text: "Antes da tecnologia, o contexto. Descubro o que precisa ser resolvido, para quem e por quê — porque a solução errada bem construída continua sendo a solução errada.",
    },
    {
      title: "Projeto a solução",
      text: "Transformo requisitos em uma experiência clara. Defino fluxos, hierarquia e o que fica de fora, que costuma ser a decisão mais importante.",
    },
    {
      title: "Construo",
      text: "Desenvolvo pensando em arquitetura, performance e manutenção. O produto precisa funcionar hoje e continuar fácil de mudar depois.",
    },
    {
      title: "Refino",
      text: "Testo, observo o uso real e ajusto. É na última camada de detalhe que um produto deixa de parecer protótipo.",
    },
  ],
};

/* ============================================================
 * 8. FORMAÇÃO E EXPERIÊNCIA
 *    Adicione entradas conforme forem existindo. Campos vazios
 *    não aparecem. Não preencha com estimativas.
 * ========================================================== */

export type TimelineEntry = {
  id: string;
  kind: string;
  title: string;
  /** Instituição ou empresa. */
  organization: string;
  period: string;
  /** Ex.: "Em andamento". Vazio = não exibido. */
  status: string;
  description: string;
  technologies: string[];
};

export const timeline: TimelineEntry[] = [
  {
    id: "engenharia-de-software",
    kind: "Formação",
    title: "Engenharia de Software",
    organization: "", // PREENCHER: instituição
    period: "", // PREENCHER: ex. "2024 — 2028"
    status: "Em andamento",
    description:
      "Graduação com foco em fundamentos de engenharia: estruturas de dados, arquitetura de software, bancos de dados e desenvolvimento de sistemas.",
    technologies: [],
  },
  // Novas entradas (estágios, trabalhos, cursos) entram aqui.
];

/* ============================================================
 * 9. CONTATO
 * ========================================================== */

export const contact = {
  title: { line1: "Vamos construir", line2: "alguma coisa" },
  text: "Estou em busca de estágio ou primeira oportunidade em desenvolvimento. Se você tem um problema interessante para resolver, quero saber dele.",
  cta: "Enviar mensagem",
  /**
   * O formulário abre o app de e-mail do visitante com a mensagem
   * pronta. Só aparece quando o e-mail acima estiver preenchido —
   * um formulário que não envia nada seria pior que nenhum.
   */
  form: {
    name: "Nome",
    email: "E-mail",
    subject: "Assunto",
    message: "Mensagem",
    subjectOptions: [
      "Oportunidade de estágio",
      "Vaga de desenvolvimento",
      "Projeto freelance",
      "Outro assunto",
    ],
  },
};

/* ============================================================
 * 10. NAVEGAÇÃO E METADADOS
 * ========================================================== */

/** Dock de ícones. `icon` referencia components/icons.tsx */
export const navigation = [
  { href: "/#inicio", label: "Início", icon: "home" },
  { href: "/#projetos", label: "Projetos", icon: "folder" },
  { href: "/#experiencia", label: "Experiência", icon: "briefcase" },
  { href: "/#stack", label: "Stack", icon: "wrench" },
  { href: "/#processo", label: "Processo", icon: "pen" },
] as const;

/** Seções observadas pelo indicador de seção da navbar. */
export const sectionIds = [
  "inicio",
  "projetos",
  "experiencia",
  "stack",
  "processo",
  "contato",
] as const;

export const site = {
  /** URL de produção. Alimenta sitemap, canonical e Open Graph. */
  url: "https://gbrsousa.vercel.app",
  title: "Gabriel Sousa — Desenvolvedor de Software",
  description:
    "Gabriel Sousa, desenvolvedor e estudante de Engenharia de Software. Construo produtos digitais completos — da experiência de uso à estrutura que sustenta o sistema.",
  locale: "pt_BR",
  footerNote: "Desenvolvido com cuidado.",
};
