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
    width: 1173,
    height: 1341,
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
    "Antes de escrever meus próprios produtos, passei por operações digitais reais: e-commerce, checkout, rastreamento, automação e os sites que precisavam estar no ar no dia do lançamento. Foi ali que aprendi a diferença entre um sistema que funciona na demonstração e um que aguenta o cliente chegando.",
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
  // Só entra o que já foi usado para construir algo que está no ar.
  {
    id: "interface",
    title: "Interface",
    description: "O lado que a pessoa usa.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "dados",
    title: "Dados e servidor",
    description: "O que sustenta o produto por trás.",
    items: [
      "Node.js",
      "Cloud Firestore",
      "Firebase Authentication",
      "Firebase Admin SDK",
      "APIs serverless",
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas",
    description: "O processo do commit ao deploy.",
    items: ["Git", "GitHub", "Vercel", "Vite", "ESLint"],
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
  /** Dimensões reais do arquivo: evitam distorção e salto de layout. */
  width: number;
  height: number;
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
  /** O que o produto faz. Vazio = seção omitida. */
  features: string[];
  /**
   * Estágio real do projeto, ex.: "Projeto pessoal · no ar".
   * Existe para dizer a verdade sobre o alcance de cada produto sem
   * precisar inventar métrica. Vazio = não exibido.
   */
  status: string;
  /**
   * Somente resultados reais e verificáveis — número que você possa
   * comprovar. Na dúvida, deixe vazio: a seção some.
   */
  result: string;
  technologies: string[];
  /** URL do produto. Vazio = botão não é exibido. */
  url: string;
  /** Ressalva sobre o link (ex.: exige login). Vazio = omitida. */
  urlNote: string;
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
      "Uma aplicação full stack que reúne as quatro etapas em uma interface só. O planejamento alimenta o fluxo de produção, os assets ficam junto do conteúdo que os usa, e o desempenho volta para o mesmo lugar onde a próxima decisão é tomada. Os dados sincronizam em tempo real, então o que muda na produção aparece na análise sem exportar nada.",
    role: "Construí o produto inteiro, da interface ao backend: modelagem dos dados no Firestore, autenticação, sincronização em tempo real, os componentes de interface e os painéis de análise. Também montei a estrutura serverless em Node.js que deixa o terreno preparado para integrações com Instagram e TikTok, com criptografia das credenciais.",
    features: [
      "Dashboard com resumo da produção e do desempenho dos conteúdos",
      "Pipeline de produção em quadro Kanban com arrastar e soltar",
      "Calendário editorial",
      "Banco de ideias, pautas e referências",
      "Gestão de marca: cores, fontes e links dos materiais visuais",
      "Análise de resultados com gráficos, indicadores, rankings e filtros por período e rede social",
      "Histórico de publicações e suas métricas",
      "Autenticação, sincronização em tempo real e armazenamento local de apoio",
      "Tema claro e escuro",
    ],
    status: "Projeto pessoal · no ar",
    result: "", // PREENCHER se houver número comprovável.
    technologies: [
      "React 19",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Admin SDK",
      "Node.js",
      "Vercel Functions",
      "Recharts",
    ],
    url: "https://octaflow-ini.vercel.app/",
    urlNote: "",
    images: [
      {
        src: "/projetos/octaflow-3.png",
        alt: "Dashboard do Octaflow com o resumo da produção, a saúde da esteira de conteúdo e os conteúdos de melhor desempenho.",
        width: 1440,
        height: 779,
        caption: "Dashboard: a produção e o desempenho na mesma tela.",
      },
      {
        src: "/projetos/octaflow-2.png",
        alt: "Biblioteca de conteúdos do Octaflow em tabela, com data, visualizações, likes, comentários, compartilhamentos e saves por publicação.",
        width: 1440,
        height: 1144,
        caption: "Biblioteca de conteúdos, ordenável por qualquer métrica.",
      },
      {
        src: "/projetos/octaflow-1.png",
        alt: "Painel de performance do Octaflow com indicadores, evolução das visualizações no período e comparação entre redes sociais.",
        width: 1440,
        height: 779,
        caption: "Panorama de performance, com comparação entre redes.",
      },
    ],
    period: "",
  },
  {
    slug: "game-das-unidades",
    name: "Game das Unidades",
    category: "Engajamento e experiência",
    tagline: "Competição saudável entre unidades.",
    description:
      "Plataforma de gamificação para a classe bíblica do Clube Zion, com seis jogos, controle de pontuação e ranking em tempo real entre as unidades.",
    context:
      "A classe bíblica do clube de desbravadores é conduzida ao vivo, com seis unidades participando ao mesmo tempo. Sem uma ferramenta própria, a pontuação vira anotação no papel e o ranking só existe na cabeça de quem está apitando.",
    problem:
      "Manter seis unidades engajadas exige que o progresso seja visível enquanto acontece. E quem conduz a atividade precisa registrar pontos sem parar a dinâmica para fazer conta.",
    solution:
      "Uma aplicação com seis jogos prontos — Quiz Bíblico, Mímica, Música, Stop Bíblico, Forca Bíblica e Batalha de Versículos — e o controle de pontuação embutido. O ranking atualiza em tempo real, o histórico registra quem deu cada ponto e por quê, e a equipe personaliza perguntas, tempos e pontuações sem mexer no código.",
    role: "Desenvolvi a aplicação por completo: a lógica dos seis jogos, o sistema de pontuação e ranking, a persistência em tempo real no Firestore e toda a identidade visual inspirada em videogame, com animações, cronômetros e efeitos sonoros. Também implementei o modo local, que mantém o jogo funcionando quando não há Firebase configurado.",
    features: [
      "Seis dinâmicas: Quiz Bíblico, Mímica, Música, Stop Bíblico, Forca Bíblica e Batalha de Versículos",
      "Pontuação de seis unidades com ranking em tempo real",
      "Histórico de pontos com motivo, responsável e data",
      "Personalização de perguntas, palavras, tempos de rodada e pontuações",
      "Cronômetros, efeitos sonoros e animações",
      "Layout adaptado a celular e computador",
      "Funcionamento offline com armazenamento local",
    ],
    status: "Projeto pessoal · no ar",
    result: "",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Cloud Firestore",
      "Firebase Authentication",
      "CSS",
      "Web Audio API",
    ],
    url: "https://gamificacao-zion.vercel.app",
    urlNote: "",
    images: [
      {
        src: "/projetos/game-das-unidades-1.webp",
        alt: "Ranking do Game das Unidades em pixel art, com as seis unidades e suas pontuações em placas de madeira sobre um cenário de acampamento.",
        width: 1878,
        height: 969,
        caption: "Ranking ao vivo, projetado durante a atividade.",
      },
      {
        src: "/projetos/game-das-unidades-2.png",
        alt: "Painel do instrutor do Game das Unidades, com os seis jogos disponíveis e os botões de configurar e iniciar cada dinâmica.",
        width: 1878,
        height: 969,
        caption: "Painel do instrutor: configurar e iniciar cada dinâmica.",
      },
    ],
    period: "",
  },
  {
    slug: "pm-casa",
    name: "PM Casa",
    category: "Gestão comercial",
    tagline: "Cada lançamento sob controle.",
    description:
      "Plataforma de gestão comercial da Paper Memories Casa: clientes, catálogo, pedidos e o planejamento de lançamentos em um só lugar.",
    context:
      "A Paper Memories Casa faz seus lançamentos por grupos de WhatsApp, e o time comercial acompanha tudo isso à mão. Um lançamento envolve metas, orçamento, tarefas com responsáveis e prazos — e depois pedidos, clientes e fornecedores. Quando esse controle vive em mensagens e planilhas soltas, o que falha é sempre a informação, não a equipe.",
    problem:
      "A Paper Memories Casa reconstruía o mesmo controle manualmente a cada ciclo, e os números que importam para decidir — faturamento, ticket médio, conversão, custo de aquisição — só apareciam depois, quando o lançamento já tinha acabado.",
    solution:
      "Uma aplicação full stack que reúne clientes, catálogo, pedidos e planejamento de lançamentos na mesma base. Como os pedidos e os cadastros alimentam os painéis diretamente, os indicadores acompanham o lançamento enquanto ele acontece, em vez de virarem relatório no fim.",
    role: "Desenvolvi a aplicação completa. Modelei os dados e as regras de negócio em TypeScript, implementei a autenticação com perfis de acesso, o acesso ao banco pelo servidor via Server Actions e Firebase Admin SDK, a importação de clientes e produtos por CSV e os painéis de resultado. Usei operações transacionais no Firestore para manter a consistência dos pedidos e escrevi testes automatizados para os cálculos de métricas e para a importação.",
    features: [
      "Clientes: cadastro, origem de aquisição, histórico de compras, recompra, tags e anotações",
      "Catálogo: categorias, variações, SKU, preços, dimensões e unidades por pacote",
      "Pedidos com múltiplos itens, descontos, status, pagamento e entrega",
      "Planejamento de lançamentos com metas, orçamento e tarefas por responsável e prazo",
      "Painéis de faturamento, ticket médio, conversão, CAC e lucro estimado",
      "Acompanhamento de fornecedores com cálculo das quantidades necessárias",
      "Importação de clientes e produtos por CSV, com busca e filtros",
      "Autenticação, recuperação de senha e gestão de usuários por perfil de acesso",
    ],
    status: "Feito para a Paper Memories Casa · implantação em preparação",
    result:
      "Entregue para o time comercial da Paper Memories Casa: três pessoas vão usar a plataforma para gerenciar os lançamentos feitos por grupos de WhatsApp. A implantação ainda não começou.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Admin SDK",
      "Node.js",
      "ESLint",
    ],
    url: "https://painel.papermemoriescasa.com.br/",
    urlNote: "Painel privado: o acesso exige login.",
    images: [
      {
        src: "/projetos/pm-casa-1.png",
        alt: "Visão geral da operação no PM Casa, com os primeiros passos de configuração, indicadores de faturamento, conversão e ticket médio, e as próximas ações.",
        width: 1912,
        height: 1296,
        caption: "Visão geral da operação, com o estado inicial guiando a configuração.",
      },
      {
        src: "/projetos/pm-casa-2.png",
        alt: "A mesma visão geral da operação do PM Casa no tema escuro.",
        width: 1912,
        height: 1296,
        caption: "O mesmo painel no tema escuro.",
      },
    ],
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
  /** O que foi feito, em itens curtos. Vazio = seção omitida. */
  highlights: string[];
  /**
   * Resultado da operação, sempre creditado à equipe. Números de
   * faturamento aqui são da empresa, não uma conquista individual —
   * o texto precisa deixar isso explícito.
   */
  result: string;
  technologies: string[];
};

export const timeline: TimelineEntry[] = [
  {
    id: "paper-memories-casa",
    kind: "Experiência",
    title: "Tecnologia e e-commerce",
    organization: "Paper Memories Casa",
    period: "", // PREENCHER: ex. "2024 — atual"
    status: "",
    description:
      "Acompanhei a marca desde o início da operação, responsável pela infraestrutura digital que sustenta os lançamentos: o e-commerce, a jornada de compra e o que precisa funcionar quando o cliente chega ao site.",
    highlights: [
      "Criação, configuração e manutenção do e-commerce da marca",
      "Configuração e testes de checkout, meios de pagamento e frete",
      "Conferência da jornada de compra completa antes de cada lançamento",
      "Cadastro e organização de catálogo: produtos, coleções, preços, pesos e medidas",
      "Suporte técnico durante campanhas e picos de volume",
      "Acompanhamento de indicadores comerciais dos lançamentos",
      "Produção e edição de vídeos e criativos para as campanhas",
    ],
    result:
      "A marca acumulou cerca de R$ 210 mil em faturamento desde o início da operação — resultado do trabalho conjunto da equipe, com a minha parte na infraestrutura de e-commerce e na produção audiovisual que sustentam os lançamentos.",
    technologies: [],
  },
  {
    id: "conviteria-paper-memories",
    kind: "Experiência",
    title: "Tecnologia e sites",
    organization: "Conviteria Paper Memories",
    period: "", // PREENCHER
    status: "",
    description:
      "Responsável pelos sites personalizados de casamento entregues a cada casal — traduzir a identidade visual do projeto em uma experiência digital para os convidados, e mantê-la no ar até o dia do evento.",
    highlights: [
      "Criação, configuração e gerenciamento dos sites de casamento",
      "Estruturação de cada site conforme a identidade visual do projeto",
      "Organização das informações: cerimônia, recepção, lista de presentes e confirmação de presença",
      "Manutenção e ajustes durante todo o período de preparação",
      "Suporte técnico ao site institucional e às ferramentas digitais",
      "Atendimento direto às noivas para mudanças no ambiente digital",
    ],
    result: "",
    technologies: [],
  },
  {
    id: "marca-leticia-oliveira",
    kind: "Experiência",
    title: "Tecnologia, automação e dados",
    organization: "Marca Letícia Oliveira",
    period: "", // PREENCHER
    status: "",
    description:
      "Atuei na infraestrutura que liga aquisição, automação e pós-venda — não só na ponta da campanha, mas nos sistemas que precisavam conversar entre si para o cliente ter uma jornada contínua.",
    highlights: [
      "Implementação e organização da plataforma de cursos na Kiwify",
      "Configuração de Pixel, Google Tag Manager e GA4, com eventos de conversão",
      "Construção de automações de marketing e pós-venda no ManyChat e no BotConversa",
      "Jornadas automáticas de relacionamento (D+1, D+2, D+3) e segmentação por tags",
      "Integrações entre as plataformas da operação digital",
      "Gestão de tráfego pago e acompanhamento de indicadores de campanha",
      "Apoio à estrutura de blog e SEO",
    ],
    result:
      "A plataforma de cursos estruturada pelo time alcançou cerca de R$ 464,9 mil em faturamento — resultado construído em conjunto pela equipe, com a minha parte na estrutura tecnológica, nas automações e no rastreamento.",
    technologies: [],
  },
  {
    id: "engenharia-de-software",
    kind: "Formação",
    title: "Engenharia de Software",
    organization: "UNDB — Universidade Dom Bosco",
    period: "2024 — 2029",
    status: "Em andamento",
    description:
      "Graduação com foco em fundamentos de engenharia: estruturas de dados, arquitetura de software, bancos de dados e desenvolvimento de sistemas.",
    highlights: [],
    result: "",
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
