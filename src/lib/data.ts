import blogMeta from "./blog-meta.json";
import {
  Building2,
  Smartphone,
  LineChart,
  Workflow,
  Bot,
  Globe,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Home,
} from "lucide-react";

export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  content?: string; // HTML-rich detailed article content (Loaded asynchronously)
  date: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
}

export const solutions: Solution[] = [
  {
    id: "crm",
    slug: "crm",
    title: "CRM Imobiliário",
    shortDesc:
      "Pare de perder vendas por desorganização. Centralize contatos, imóveis e propostas, e saiba exatamente onde cada negócio parou.",
    longDesc:
      "Sabemos que planilhas bagunçadas, cadernos e processos manuais fazem você perder leads quentes e vendas certas todos os dias. O CRM da Microsistec centraliza sua operação, organizando contatos, imóveis e propostas em um só lugar. Tenha o controle total da sua imobiliária e acabe com o desperdício de oportunidades.",
    iconName: "Building2",
    features: [
      "Cruzamento inteligente (match) entre perfis de compradores e imóveis disponíveis.",
      "Cadastro rápido de propriedades com upload otimizado de mídias e fotos.",
      "Controle total de permissões para gerentes, corretores e parceiros externos.",
      "Geração automatizada de contratos e fichas de visitas em PDF.",
      "Histórico detalhado de interações para que você nunca perca o contexto do cliente.",
    ],
    benefits: [
      "Aumento de até 40% na produtividade diária da equipe de corretores.",
      "Redução drástica no tempo de busca de imóveis compatíveis com o cliente.",
      "Segurança e conformidade total com as normas da LGPD.",
    ],
    ctaText: "Falar com especialista",
  },
  {
    id: "app",
    slug: "app",
    title: "App de Atendimento",
    shortDesc:
      "Atenda antes do seu concorrente. Receba notificações em tempo real, envie imóveis no WhatsApp e não perca nenhum lead, mesmo estando na rua.",
    longDesc:
      "Seus corretores estão perdendo vendas porque demoram a responder enquanto estão na rua? O App da Microsistec acaba com esse problema. Notificações imediatas, acesso a toda a carteira de imóveis e envio rápido por WhatsApp para que você responda o lead antes da concorrência, de onde estiver.",
    iconName: "Smartphone",
    features: [
      "Sincronização imediata em tempo real com a plataforma web imobiliária.",
      "Compartilhamento rápido de imóveis por WhatsApp com layouts elegantes.",
      "Notificações instantâneas (push) ao receber novos leads de portais.",
      "Check-in e check-out geolocalizados nas visitas de imóveis.",
      "Chamadas integradas com registro automático de conversas e notas.",
    ],
    benefits: [
      "Velocidade de resposta que dobra as chances de conversão no primeiro contato.",
      "Gestão ativa de leads mesmo durante visitas presenciais na rua.",
      "Interface ultra simples desenvolvida com foco total no dia a dia do corretor.",
    ],
    ctaText: "Baixar Aplicativo Agora",
  },
  /* === BACKUP MULTI-FUNIL ===
  {
    id: "funil",
    slug: "funil",
    title: "Funil de Vendas Multi-Funil",
    shortDesc: "Crie quantos funis e etapas quiser. Cada processo de venda, locação, captação e lançamento tem sua própria jornada — com métricas separadas e precisas.",
    longDesc: "Cada negócio imobiliário é único. Um processo de venda de alto padrão é completamente diferente de um Minha Casa Minha Vida, de uma captação de imóveis ou de uma locação comercial. Com o Multi-Funil da Microsistec, você cria funis independentes para cada tipo de operação — com etapas, responsáveis e métricas próprias. Chega de misturar leads de processos distintos num único pipeline confuso.",
    iconName: "LineChart",
    features: [
      "Multi-funil ilimitado: crie funis separados para venda, locação, captação, lançamentos, alto padrão, MCMV e qualquer outro processo.",
      "Etapas totalmente customizáveis por funil — adicione, renomeie, reordene e remova sem limite.",
      "Drag & drop intuitivo estilo Kanban para mover leads entre etapas com um toque ou clique.",
      "Métricas independentes por funil: taxa de conversão, tempo médio por etapa e previsão de receita separados.",
      "Alertas automáticos por funil quando um lead fica parado além do tempo configurado em cada etapa.",
      "Visão consolidada de todos os funis no painel do gestor — ou visão individual por corretor."
    ],
    benefits: [
      "Jornada única para cada tipo de cliente: MCMV, alto padrão, locação, captação e lançamentos nunca mais misturados.",
      "Métricas mais efetivas porque comparam maçã com maçã — locação com locação, venda com venda.",
      "Decisões baseadas em dados reais por processo, não em médias distorcidas de pipelines mistos."
    ],
    ctaText: "Otimizar Meu Funil"
  },
  */
  {
    id: "funil",
    slug: "funil",
    title: "Funil de Vendas",
    shortDesc:
      "Acompanhe visualmente a jornada dos seus leads, do primeiro contato até a assinatura do contrato, de forma intuitiva.",
    longDesc:
      "O Funil de Vendas Kanban da Microsistec oferece uma visão clara e objetiva de todas as oportunidades de negócio da sua imobiliária. Acompanhe em qual etapa cada lead está, identifique gargalos no processo e garanta que nenhuma negociação esfrie por falta de contato.",
    iconName: "LineChart",
    features: [
      "Visão Kanban interativa: movimente leads entre as etapas com um simples arrastar e soltar.",
      "Imóveis recomendados: o sistema cruza o perfil do lead com o catálogo e sugere opções compatíveis.",
      "Envio ágil: encaminhe as opções de imóveis diretamente por e-mail ou WhatsApp em um clique.",
      "Gestão de visitas: agende a visita e gere o termo de visita para assinatura de forma automática.",
      "Centralização total: clique em um card no funil e tenha todo o histórico, mensagens e propostas do lead.",
    ],
    benefits: [
      "Controle visual total de todo o seu pipeline de vendas e locações.",
      "Previsibilidade de receita com base nos negócios nas etapas mais avançadas.",
      "Correção rápida de falhas no processo comercial identificando em qual etapa os leads mais desistem.",
    ],
    ctaText: "Otimizar Meu Funil",
  },

  {
    id: "integracoes",
    slug: "integracoes",
    title: "Integrações de Portais, WhatsApp & Meta",
    shortDesc:
      "Integração bidirecional automática. Publique nos maiores portais imobiliários e gerencie conversas do WhatsApp e leads da Meta em um único painel.",
    longDesc:
      "Perder tempo cadastrando o mesmo imóvel em múltiplos portais, copiando dados no WhatsApp e capturando leads de Facebook/Instagram Ads de forma isolada é coisa do passado. Nossa tecnologia de integração publica seus anúncios automaticamente nos portais parceiros (ZAP, VivaReal, OLX, Imovelweb) e centraliza conversas do WhatsApp e leads da Meta para facilitar o atendimento.",
    iconName: "Workflow",
    features: [
      "Carga automatizada de anúncios de imóveis via XML, JSON ou API, dependendo do portal parceiro.",
      "Centralização de leads recebidos em todas as plataformas e campanhas da Meta direto no CRM.",
      "Integração oficial com API do WhatsApp Business e Facebook Lead Ads para maior segurança.",
      "Distribuição automática de leads (fila de rodízio) para corretores online.",
      "Rastreabilidade total das campanhas que mais trazem retorno de leads.",
    ],
    benefits: [
      "Economia de centenas de horas mensais de trabalho manual e administrativo.",
      "Fim da perda de leads vindos de portais e anúncios à noite ou aos finais de semana.",
      "Atendimento instantâneo de clientes potenciais direto no WhatsApp.",
    ],
    ctaText: "Integrar Meus Canais",
  },
  {
    id: "albert-ia",
    slug: "albert-ia",
    title: "Albert IA - Assistente de Vendas",
    shortDesc:
      "Não perca vendas por demora no atendimento. O Albert IA (Assistente Virtual Baseado em LLMs) qualifica leads em segundos com IA conversacional avançada.",
    longDesc:
      "Otimize seu funil de vendas com Inteligência Artificial. O Albert IA utiliza LLMs de última geração para entender intenções reais, qualificar leads financeiramente 24/7 e automatizar o atendimento inicial, garantindo que sua equipe só foque nos clientes de alta conversão.",
    iconName: "Bot",
    features: [
      "Treinamento sob medida baseado na história e no roteiro da sua imobiliária.",
      "Capacidade de qualificar leads financeiros antes do repasse (financiamento, FGTS, etc.).",
      "Disponibilidade integral 24 horas por dia, 7 dias por semana no WhatsApp.",
      "Integração direta com o CRM para atualização autônoma da ficha do lead.",
      "Análise semântica avançada com tom de escrita extremamente humanizado.",
    ],
    benefits: [
      "Aumento médio de 300% na velocidade do primeiro atendimento comercial.",
      "Filtragem inteligente: o corretor só atende contatos qualificados de verdade.",
      "Redução substancial do custo de aquisição de clientes (CAC).",
    ],
    ctaText: "Converse com o Albert agora mesmo",
  },
  {
    id: "sites-template",
    slug: "sites-template",
    title: "Sites premium",
    shortDesc:
      "Transforme visitantes em leads qualificados. Tenha um Site Imobiliário de Alta Conversão, estruturado com SEO avançado para dominar o Google.",
    longDesc:
      "Se você está perdendo negócios porque seu site é lento, desatualizado e não gera confiança no cliente, nossos Sites Marketing são a solução. Eles são estruturados especificamente para conversão, entregando velocidade, presença no Google (SEO) e uma interface que transforma visitantes em contatos reais, sem depender de grandes investimentos iniciais.",
    iconName: "Globe",
    features: [
      "Estrutura otimizada para SEO local favorecendo o ranqueamento no Google.",
      "Filtros de busca avançados (localização, preço, dormitórios, vagas).",
      "Páginas de imóveis limpas com galeria de fotos e botão direto para WhatsApp.",
      "Layout totalmente adaptado para visualização perfeita em dispositivos móveis.",
      "Seção de blog e captação de leads de proprietários nativas.",
    ],
    benefits: [
      "Lançamento ultra rápido do site no seu domínio próprio em poucos dias.",
      "Baixo custo de setup e manutenção mensal extremamente acessível.",
      "Carregamento veloz que garante excelente experiência ao usuário móvel.",
    ],
    ctaText: "Escolher Meu Template",
  },
  {
    id: "sites-v8",
    slug: "sites-v8",
    title: "Sites personalizados",
    shortDesc:
      "Imobiliárias de alto padrão perdem vendas quando o site é genérico. Nossos Sites Premium são desenvolvidos sob medida para velocidade e conversão.",
    longDesc:
      "Para imobiliárias e construtoras que exigem o máximo de diferenciação e estão perdendo conversões por causa de plataformas engessadas. Criados com tecnologia de ponta, os sites Premium entregam carregamento instantâneo, design exclusivo e arquitetura imbatível para escalar os resultados da sua operação.",
    iconName: "Sparkles",
    features: [
      "Design exclusivo criado por designers especializados em proptech.",
      "Código limpo de alta performance com nota máxima no Google PageSpeed Insights.",
      "Integrações complexas com múltiplos sistemas de gestão e mapas.",
      "Otimização avançada de imagens de forma automática para carregamento rápido.",
      "Segurança reforçada contra ataques virtuais e quedas de servidor.",
    ],
    benefits: [
      "Destaque absoluto frente a qualquer concorrente no mercado local.",
      "Melhoria orgânica contínua nas buscas do Google devido à velocidade extrema.",
      "Maior retenção de usuários móveis devido à navegação instantânea de página.",
    ],
    ctaText: "Solicitar Projeto V8",
  },
  {
    id: "rodizio",
    slug: "rodizio",
    title: "Rodízio de Atendimento",
    shortDesc:
      "Distribuição inteligente e justa de leads. Garanta que toda a sua equipe de corretores seja atendida em tempo recorde de forma equilibrada.",
    longDesc:
      "Nosso sistema de Rodízio de Atendimento foi criado para eliminar o atrito e maximizar a velocidade na resposta de leads. Ao receber contatos de portais, sites ou Meta Ads, o sistema faz o cruzamento imediato de regras configuráveis (disponibilidade, escala de plantão ou especialidade de nicho) e direciona o lead de forma justa no WhatsApp do corretor da vez.",
    iconName: "Users",
    features: [
      "Fila automatizada Round-Robin com inteligência de distribuição justa.",
      "Definição ágil de regras por especialidade (ex: corretores de alto padrão vs loteamento).",
      "Status dinâmicos em tempo real (Online, Ocupado, Em Visita, Folga) configurados pelos corretores.",
      "Escalonamento imediato: pula o corretor da vez caso ele demore mais de X minutos para responder.",
      "Métricas gerenciais profundas de tempo de resposta médio e taxa de conversão por corretor.",
    ],
    benefits: [
      "Fim definitivo de brigas por divisão de leads dentro da imobiliária.",
      "Aceleração do tempo de resposta inicial para menos de 3 minutos de forma orgânica.",
      "Visibilidade analítica completa para o gerente avaliar o desempenho da equipe comercial.",
    ],
    ctaText: "Ativar Meu Rodízio",
  },
  {
    id: "locacao",
    slug: "locacao",
    title: "Sistema de Locação",
    shortDesc:
      "Gestão completa de contratos de locação. Controle de vencimentos, reajustes, garantias e repasses em uma única plataforma.",
    longDesc:
      "O Sistema de Locação da Microsistec foi projetado para simplificar toda a administração de imóveis alugados. Controle vencimentos, calcule reajustes automáticos pelo IGPM/IPCA, gerencie garantias e caução, emita boletos e acompanhe repasses para proprietários de forma totalmente digital.",
    iconName: "Home",
    features: [
      "Controle automatizado de contratos com alertas de vencimento e renovação.",
      "Cálculo automático de reajustes por IGPM, IPCA ou índice personalizado.",
      "Gestão de garantias: caução, fiador, seguro-fiança e título de capitalização.",
      "Emissão de boletos e controle de inadimplência integrado.",
      "Repasse automático de valores para proprietários com relatórios detalhados.",
    ],
    benefits: [
      "Redução de 80% no tempo gasto com administração de contratos de locação.",
      "Eliminação de erros em cálculos manuais de reajuste e repasses.",
      "Visão financeira completa da carteira de locação da imobiliária.",
    ],
    ctaText: "Em Breve",
  },
];

export { blogMeta as blogPosts };

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "A gente parou de perder lead no WhatsApp. O Albert qualifica enquanto o corretor dorme e de manhã está tudo no CRM, organizado. Mudou a operação.",
    author: "Carla M.",
    role: "Diretora Comercial",
    company: "Imobiliária Litoral Santos",
    location: "Santos/SP",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "2",
    quote:
      "O aplicativo de atendimento mudou a vida dos nossos corretores. Eles atualizam visitas na hora, enviam imóveis lindos para os clientes na rua em 2 segundos e fecham muito mais.",
    author: "Roberto Silva",
    role: "Proprietário",
    company: "Silva & Associados Imóveis",
    location: "Campinas/SP",
    avatarUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "3",
    quote:
      "Usar o CRM Microsistec unificado com os portais nos economizou mais de 40 horas semanais de trabalho burocrático e duplicado. Agora nosso foco é totalmente no cliente.",
    author: "Juliana Costa",
    role: "Gerente de Operações",
    company: "Habita Prime Negócios",
    location: "Curitiba/PR",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "4",
    quote:
      "O site V8 tem uma velocidade incrível no celular! Nosso tráfego orgânico e os leads do Google Meu Negócio triplicaram nos últimos 6 meses. Recomendo muito.",
    author: "Marcos Paulo",
    role: "Diretor de Marketing",
    company: "Paulista Brokers",
    location: "São Paulo/SP",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "5",
    quote:
      "O Albert IA qualificou mais de 1.200 leads só no primeiro mês de uso. O corretor recebe o lead com o perfil financeiro completo e intenção de financiamento aprovada. Revolucionário.",
    author: "Fernanda Almeida",
    role: "Gestora de Vendas",
    company: "Viver Bem Empreendimentos",
    location: "Belo Horizonte/MG",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export function getIconComponent(name: string) {
  switch (name) {
    case "Building2":
      return Building2;
    case "Smartphone":
      return Smartphone;
    case "LineChart":
      return LineChart;
    case "Workflow":
      return Workflow;
    case "Bot":
      return Bot;
    case "Globe":
      return Globe;
    case "Sparkles":
      return Sparkles;
    case "ShieldCheck":
      return ShieldCheck;
    case "Zap":
      return Zap;
    case "Users":
      return Users;
    case "Home":
      return Home;
    default:
      return Sparkles;
  }
}

export interface PortalIntegration {
  name: string;
  category:
    | "Portais Imobiliários Nacionais"
    | "Portais Imobiliários Regionais"
    | "Marketing & Ferramentas"
    | "Exclusivos & XML";
  description: string;
  type: "XML" | "API" | "XML / API" | "Em Breve";
  logoBg: string;
  logoTextColor: string;
  logoText: string;
  logoImg?: string;
  officialColor: string;
}

export const portalIntegrations: PortalIntegration[] = [
  {
    name: "123i",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal inteligente de anúncios pagos com cobertura nacional e grande público investidor.",
    type: "XML",
    logoBg: "bg-zinc-600/10",
    logoTextColor: "text-zinc-600",
    logoText: "123",
    logoImg: "https://www.google.com/s2/favicons?domain=123i.uol.com.br&sz=64",
    officialColor: "#4B5563",
  },
  {
    name: "321achei",
    category: "Portais Imobiliários Nacionais",
    description:
      "Classificados eficientes com alta flexibilidade de ofertas residenciais nacionais.",
    type: "XML",
    logoBg: "bg-stone-600/10",
    logoTextColor: "text-stone-600",
    logoText: "321",
    logoImg: "https://www.google.com/s2/favicons?domain=321achei.com.br&sz=64",
    officialColor: "#78716C",
  },
  {
    name: "AchouMudou",
    category: "Portais Imobiliários Nacionais",
    description:
      "Plataforma focada em otimização de buscas de compra e mudança imediata.",
    type: "XML",
    logoBg: "bg-indigo-200/10",
    logoTextColor: "text-indigo-600",
    logoText: "AM",
    logoImg: "https://www.google.com/s2/favicons?domain=achoumudou.com.br&sz=64",
    officialColor: "#C7D2FE",
  },
  {
    name: "AlugarJa",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal vertical de alta tração focado especificamente em imóveis residenciais para locação.",
    type: "XML",
    logoBg: "bg-indigo-500/10",
    logoTextColor: "text-indigo-600",
    logoText: "AJ",
    logoImg: "https://imob.online/imgs/portais/alugarja.png",
    officialColor: "#6366F1",
  },
  {
    name: "Buskaza",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal simplificado integrando locação imobiliária de forma totalmente descomplicada.",
    type: "XML",
    logoBg: "bg-amber-400/10",
    logoTextColor: "text-amber-600",
    logoText: "BK",
    logoImg: "https://www.google.com/s2/favicons?domain=buskaza.com.br&sz=64",
    officialColor: "#FBBF24",
  },
  {
    name: "Casa Jaú",
    category: "Portais Imobiliários Regionais",
    description:
      "Portal líder de audiência com foco na cidade paulista de Jaú e municípios vizinhos.",
    type: "XML",
    logoBg: "bg-emerald-500/10",
    logoTextColor: "text-emerald-600",
    logoText: "CJ",
    logoImg: "https://www.google.com/s2/favicons?domain=casajau.com.br&sz=64",
    officialColor: "#10B981",
  },
  {
    name: "Casa Mineira",
    category: "Portais Imobiliários Regionais",
    description:
      "Referência absoluta em aluguel e venda de imóveis de terceiros em Belo Horizonte/MG.",
    type: "XML",
    logoBg: "bg-amber-500/10",
    logoTextColor: "text-amber-600",
    logoText: "CM",
    logoImg: "https://www.google.com/s2/favicons?domain=casamineira.com.br&sz=64",
    officialColor: "#F59E0B",
  },
  {
    name: "Chave Fácil",
    category: "Portais Imobiliários Nacionais",
    description:
      "Uma das plataformas mais modernas e performáticas para captação direta de locação e vendas.",
    type: "XML / API",
    logoBg: "bg-emerald-300/10",
    logoTextColor: "text-emerald-600",
    logoText: "CF",
    logoImg: "https://www.google.com/s2/favicons?domain=chavefacil.com.br&sz=64",
    officialColor: "#6EE7B7",
  },
  {
    name: "Chaves na Mão",
    category: "Portais Imobiliários Nacionais",
    description:
      "Forte atuação em imóveis e veículos com mais de 500 mil anúncios ativos em todo o Brasil.",
    type: "XML / API",
    logoBg: "bg-orange-600/10",
    logoTextColor: "text-orange-600",
    logoText: "CM",
    logoImg: "https://www.google.com/s2/favicons?domain=chavesnamao.com.br&sz=64",
    officialColor: "#E30613",
  },
  {
    name: "DF Imóveis",
    category: "Portais Imobiliários Regionais",
    description:
      "O maior e mais lembrado portal imobiliário especializado na região do Distrito Federal.",
    type: "XML",
    logoBg: "bg-blue-500/10",
    logoTextColor: "text-blue-600",
    logoText: "DF",
    logoImg: "https://www.google.com/s2/favicons?domain=dfimoveis.com.br&sz=64",
    officialColor: "#3B82F6",
  },
  {
    name: "Diario Imoveis",
    category: "Portais Imobiliários Regionais",
    description:
      "Portal focado regionalmente na cidade de São José do Rio Preto e toda a região noroeste de SP.",
    type: "XML",
    logoBg: "bg-red-500/10",
    logoTextColor: "text-red-600",
    logoText: "DI",
    logoImg: "https://www.google.com/s2/favicons?domain=diarioimoveis.com.br&sz=64",
    officialColor: "#EF4444",
  },
  {
    name: "Dream Casa",
    category: "Marketing & Ferramentas",
    description:
      "Gerador e qualificador de contatos imobiliários operando desde 2015 em todo o país.",
    type: "XML",
    logoBg: "bg-pink-500/10",
    logoTextColor: "text-pink-600",
    logoText: "DC",
    logoImg: "https://www.google.com/s2/favicons?domain=dreamcasa.com.br&sz=64",
    officialColor: "#EC4899",
  },
  {
    name: "Epungo",
    category: "Portais Imobiliários Nacionais",
    description:
      "Classificados modernos de alta velocidade e indexação imediata nos buscadores.",
    type: "XML",
    logoBg: "bg-rose-400/10",
    logoTextColor: "text-rose-600",
    logoText: "EP",
    logoImg: "https://imob.online/imgs/portais/epungo.png",
    officialColor: "#FB7185",
  },
  {
    name: "Facebook",
    category: "Marketing & Ferramentas",
    description:
      "Publicação ágil de catálogos imobiliários automáticos para campanhas dinâmicas e retargeting.",
    type: "API",
    logoBg: "bg-blue-700/10",
    logoTextColor: "text-blue-700",
    logoText: "FB",
    logoImg: "https://www.google.com/s2/favicons?domain=facebook.com&sz=64",
    officialColor: "#1877F2",
  },
  {
    name: "Grupo Zap (Oferta Única)",
    category: "Portais Imobiliários Nacionais",
    description:
      "Pacote unificado de alta audiência. Envia os mesmos anúncios de forma sincronizada para o ZAP e VivaReal.",
    type: "XML / API",
    logoBg: "bg-indigo-600/10",
    logoTextColor: "text-indigo-600",
    logoText: "GZ",
    logoImg: "https://www.google.com/s2/favicons?domain=zapimoveis.com.br&sz=64",
    officialColor: "#131a40",
  },
  {
    name: "Guia de Imóveis",
    category: "Portais Imobiliários Nacionais",
    description:
      "Plataforma gratuita de anúncios de casas e apartamentos para novos corretores.",
    type: "XML",
    logoBg: "bg-rose-500/10",
    logoTextColor: "text-rose-600",
    logoText: "GI",
    logoImg: "https://www.google.com/s2/favicons?domain=guiadeimoveis.imb.br&sz=64",
    officialColor: "#F43F5E",
  },
  {
    name: "Guia de Imóveis IMB",
    category: "Portais Imobiliários Regionais",
    description:
      "Subportais focados em micro-regiões estratégicas de alta demanda em São Paulo.",
    type: "XML",
    logoBg: "bg-lime-600/10",
    logoTextColor: "text-lime-600",
    logoText: "IMB",
    logoImg: "https://www.google.com/s2/favicons?domain=guiadeimoveis.imb.br&sz=64",
    officialColor: "#65A30D",
  },
  {
    name: "Guia Imóvel & Cia",
    category: "Portais Imobiliários Regionais",
    description:
      "Portal regional atuante na cobertura imobiliária de todas as cidades do Grande ABC paulista.",
    type: "XML",
    logoBg: "bg-teal-600/10",
    logoTextColor: "text-teal-600",
    logoText: "GC",
    logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXcSe0BIeh1BrH3IrrAg2b_a3gxcWLabia-ysmjtLDg&s",
    officialColor: "#0D9488",
  },
  {
    name: "imobflux",
    category: "Marketing & Ferramentas",
    description:
      "Distribuição ágil e rastreamento avançado de novos contatos para otimização de campanhas comerciais.",
    type: "API",
    logoBg: "bg-cyan-500/10",
    logoTextColor: "text-cyan-600",
    logoText: "IM",
    logoImg: "/logos/imobflux.jpg",
    officialColor: "#14B8A6",
  },
  {
    name: "Imocasa",
    category: "Portais Imobiliários Nacionais",
    description:
      "Canal eficiente integrando dezenas de imobiliárias e anúncios residenciais locais.",
    type: "XML",
    logoBg: "bg-teal-300/10",
    logoTextColor: "text-teal-600",
    logoText: "IC",
    logoImg: "https://imob.online/imgs/portais/imocasa.png",
    officialColor: "#5EEAD4",
  },
  {
    name: "Imóvel Guide",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal moderno voltado a casas e apartamentos de médio e alto padrão.",
    type: "XML",
    logoBg: "bg-rose-600/10",
    logoTextColor: "text-rose-600",
    logoText: "IG",
    logoImg: "https://www.google.com/s2/favicons?domain=imovelguide.com.br&sz=64",
    officialColor: "#E11D48",
  },
  {
    name: "Imoveldo",
    category: "Portais Imobiliários Nacionais",
    description: "Inovação tecnológica e busca simplificada de imóveis de diversas regiões.",
    type: "XML",
    logoBg: "bg-cyan-200/10",
    logoTextColor: "text-cyan-700",
    logoText: "IM",
    logoImg: "https://www.google.com/s2/favicons?domain=imovendo.pt&sz=64",
    officialColor: "#0891B2",
  },
  {
    name: "Imovelweb",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal oficial de imóveis presente em mais de 1.500 cidades brasileiras com audiência altamente qualificada.",
    type: "XML / API",
    logoBg: "bg-red-600/10",
    logoTextColor: "text-red-600",
    logoText: "IW",
    logoImg: "https://www.google.com/s2/favicons?domain=imovelweb.com.br&sz=64",
    officialColor: "#E63B2E",
  },
  {
    name: "Leadster",
    category: "Marketing & Ferramentas",
    description:
      "Plataforma de marketing conversacional que automatiza o primeiro atendimento de leads imobiliários.",
    type: "API",
    logoBg: "bg-violet-600/10",
    logoTextColor: "text-violet-600",
    logoText: "LD",
    logoImg: "https://www.google.com/s2/favicons?domain=leadster.com.br&sz=64",
    officialColor: "#8B5CF6",
  },
  {
    name: "Lello",
    category: "Portais Imobiliários Nacionais",
    description: "Tradição e confiança em serviços integrados para facilitar a negociação imobiliária.",
    type: "XML",
    logoBg: "bg-rose-200/10",
    logoTextColor: "text-rose-700",
    logoText: "LE",
    logoImg: "https://www.google.com/s2/favicons?domain=lellocondominios.com.br&sz=64",
    officialColor: "#E11D48",
  },
  {
    name: "Linklar",
    category: "Portais Imobiliários Nacionais",
    description:
      "Conexão veloz entre inquilinos buscando aluguel rápido e imobiliárias dinâmicas.",
    type: "XML",
    logoBg: "bg-lime-400/10",
    logoTextColor: "text-lime-600",
    logoText: "LK",
    logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3JyBigvnkExl1it6pjPSGAvwIjvaDrmRdJsAAsaz8exMIPH595UU8256&s=10",
    officialColor: "#A3E635",
  },
  {
    name: "Local do Imóvel",
    category: "Portais Imobiliários Nacionais",
    description:
      "Anúncios residenciais e comerciais pagos de ampla circulação nacional.",
    type: "XML",
    logoBg: "bg-cyan-400/10",
    logoTextColor: "text-cyan-600",
    logoText: "LI",
    logoImg: "https://www.google.com/s2/favicons?domain=localimoveis.com.br&sz=64",
    officialColor: "#22D3EE",
  },
  {
    name: "Loop Imóveis",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal nacional unificado integrando corretores de imóveis autônomos e construtoras.",
    type: "XML",
    logoBg: "bg-teal-400/10",
    logoTextColor: "text-teal-600",
    logoText: "LP",
    logoImg: "https://www.google.com/s2/favicons?domain=loophouse.com.br&sz=64",
    officialColor: "#2DD4BF",
  },
  {
    name: "Mercado Livre",
    category: "Portais Imobiliários Nacionais",
    description:
      "Canal de alta conversão nacional, ideal para anúncios de venda, locação definitiva e temporada.",
    type: "XML / API",
    logoBg: "bg-yellow-500/10",
    logoTextColor: "text-yellow-600",
    logoText: "ML",
    logoImg: "https://www.google.com/s2/favicons?domain=mercadolivre.com.br&sz=64",
    officialColor: "#FFF159",
  },
  {
    name: "Microsistec By Zap",
    category: "Exclusivos & XML",
    description:
      "Formato de exportação inteligente otimizado e estruturado sob os critérios do Zap Imóveis.",
    type: "XML",
    logoBg: "bg-teal-700/10",
    logoTextColor: "text-teal-600",
    logoText: "MZ",
    logoImg: "/icon.svg",
    officialColor: "#0F766E",
  },
  {
    name: "Moving Imóveis",
    category: "Portais Imobiliários Nacionais",
    description:
      "Iniciativa do Grupo Estadão para promover negócios imobiliários seguros em todo o Brasil.",
    type: "XML",
    logoBg: "bg-violet-400/10",
    logoTextColor: "text-violet-600",
    logoText: "MV",
    logoImg: "https://www.google.com/s2/favicons?domain=moving.com.br&sz=64",
    officialColor: "#A78BFA",
  },
  {
    name: "Netimóveis",
    category: "Exclusivos & XML",
    description:
      "Rede colaborativa de anúncios integrando as melhores opções residenciais de imobiliárias homologadas.",
    type: "XML",
    logoBg: "bg-sky-600/10",
    logoTextColor: "text-sky-600",
    logoText: "NI",
    logoImg: "https://www.google.com/s2/favicons?domain=netimoveis.com&sz=64",
    officialColor: "#0F172A",
  },
  {
    name: "Olho Mágico",
    category: "Portais Imobiliários Nacionais",
    description:
      "Divulgação gratuita com o portal Olho Mágico permitindo visibilidade nacional sem taxas.",
    type: "XML / API",
    logoBg: "bg-amber-600/10",
    logoTextColor: "text-amber-600",
    logoText: "OM",
    logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yk7nVYRjKj8nuIN3jEr4iVyhH-NvZ8z8y6uEnUe2ow&s",
    officialColor: "#EC4899",
  },
  {
    name: "OLX",
    category: "Portais Imobiliários Nacionais",
    description:
      "Maior classificado de anúncios gerais e residenciais do Brasil com gigantesca abrangência orgânica.",
    type: "XML",
    logoBg: "bg-purple-600/10",
    logoTextColor: "text-purple-600",
    logoText: "OLX",
    logoImg: "https://www.google.com/s2/favicons?domain=olx.com.br&sz=64",
    officialColor: "#8C38B2",
  },
  {
    name: "Órulo",
    category: "Marketing & Ferramentas",
    description:
      "Catálogo completo de lançamentos e novos empreendimentos em tempo real para sua carteira.",
    type: "Em Breve",
    logoBg: "bg-teal-500/10",
    logoTextColor: "text-teal-600",
    logoText: "OR",
    logoImg: "https://www.google.com/s2/favicons?domain=orulo.com.br&sz=64",
    officialColor: "#00F2A6",
  },
  {
    name: "Portais Imobiliários",
    category: "Portais Imobiliários Nacionais",
    description:
      "Rede de alta abrangência interligada a portais de mais de 270 cidades no Brasil.",
    type: "XML",
    logoBg: "bg-emerald-400/10",
    logoTextColor: "text-emerald-600",
    logoText: "PI",
    logoImg: "https://imob.online/imgs/portais/portaisimobiliarios.png",
    officialColor: "#34D399",
  },
  {
    name: "Portal CRECI",
    category: "Exclusivos & XML",
    description:
      "Portal oficial regulamentador dos corretores de todas as regiões CRECI brasileiras.",
    type: "XML",
    logoBg: "bg-emerald-600/10",
    logoTextColor: "text-emerald-600",
    logoText: "CR",
    logoImg: "https://media.licdn.com/dms/image/v2/C4D03AQErx3Dzpr8S8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1641672790139?e=2147483647&v=beta&t=6tVZICvQLHxNpYmbOtbBs7a-mUPknKr3pjX_s61CIkE",
    officialColor: "#006B3F",
  },
  {
    name: "Portal Lugar Certo",
    category: "Portais Imobiliários Regionais",
    description:
      "Líder regional pertencente aos Diários Associados no estado de Minas Gerais.",
    type: "XML",
    logoBg: "bg-orange-500/10",
    logoTextColor: "text-orange-600",
    logoText: "LC",
    logoImg: "https://www.google.com/s2/favicons?domain=lugarcerto.com.br&sz=64",
    officialColor: "#F97316",
  },
  {
    name: "SP Imóvel",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal nacional otimizado para anúncios de venda rápida e locação de imóveis prontos.",
    type: "XML / API",
    logoBg: "bg-indigo-400/10",
    logoTextColor: "text-indigo-600",
    logoText: "SP",
    logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvJpCqmEPiLZH37Yk5wk4G3u-5HZWpkCAaVUaU49UdhxC1hfNUkE3d5w&s=10",
    officialColor: "#818CF8",
  },
  {
    name: "Storia Imóveis",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal focado em dados de vizinhança e informações qualificadas do imóvel de terceiros.",
    type: "XML",
    logoBg: "bg-orange-400/10",
    logoTextColor: "text-orange-600",
    logoText: "SI",
    logoImg: "https://imob.online/imgs/portais/storia.png",
    officialColor: "#FB923C",
  },
  {
    name: "Trocalar",
    category: "Exclusivos & XML",
    description:
      "Portal de nicho especializado exclusivamente em permuta e troca amigável de imóveis.",
    type: "XML",
    logoBg: "bg-sky-400/10",
    logoTextColor: "text-sky-600",
    logoText: "TL",
    logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77mMb2M2AUFP88o_iLJvrFtBKh1xU7Fzn5cSNPKcOlw&s=10",
    officialColor: "#38BDF8",
  },
  {
    name: "VC Busca",
    category: "Portais Imobiliários Nacionais",
    description:
      "Pesquisa avançada que localiza as melhores condições de aquisição no mercado digital.",
    type: "XML",
    logoBg: "bg-indigo-300/10",
    logoTextColor: "text-indigo-600",
    logoText: "VC",
    logoImg: "https://imob.online/imgs/portais/vcbusca.png",
    officialColor: "#A5B4FC",
  },
  {
    name: "Viva Real",
    category: "Portais Imobiliários Nacionais",
    description:
      "Um dos portais líderes com abrangência nacional e foco total em geração contínua de leads qualificados.",
    type: "XML / API",
    logoBg: "bg-blue-600/10",
    logoTextColor: "text-blue-600",
    logoText: "VR",
    logoImg: "https://www.google.com/s2/favicons?domain=vivareal.com.br&sz=64",
    officialColor: "#35D4B6",
  },
  {
    name: "WImoveis",
    category: "Portais Imobiliários Regionais",
    description:
      "Tradicional canal imobiliário especializado no Distrito Federal e no estado de Goiás.",
    type: "XML",
    logoBg: "bg-blue-400/10",
    logoTextColor: "text-blue-600",
    logoText: "WI",
    logoImg: "https://www.google.com/s2/favicons?domain=wimoveis.com.br&sz=64",
    officialColor: "#60A5FA",
  },
  {
    name: "XML Microsistec",
    category: "Exclusivos & XML",
    description:
      "Exportador universal nativo compatível com qualquer portal ou agência parceira do mercado.",
    type: "XML",
    logoBg: "bg-neutral-600/10",
    logoTextColor: "text-neutral-600",
    logoText: "XML",
    logoImg: "/icon.svg",
    officialColor: "#525252",
  },
  {
    name: "Zap Imóveis",
    category: "Portais Imobiliários Nacionais",
    description:
      "O mais tradicional portal de classificados imobiliários de alta relevância no Brasil, parte do Grupo Globo.",
    type: "XML / API",
    logoBg: "bg-cyan-600/10",
    logoTextColor: "text-cyan-600",
    logoText: "ZP",
    logoImg: "https://www.google.com/s2/favicons?domain=zapimoveis.com.br&sz=64",
    officialColor: "#1b2d91",
  },
  {
    name: "ZoopImoveis",
    category: "Portais Imobiliários Nacionais",
    description:
      "Portal otimizado para facilitação da jornada de novos compradores e corretores autônomos.",
    type: "XML",
    logoBg: "bg-fuchsia-600/10",
    logoTextColor: "text-fuchsia-600",
    logoText: "ZI",
    logoImg: "https://www.google.com/s2/favicons?domain=zoop.com.br&sz=64",
    officialColor: "#C026D3",
  },
];

export type Material = {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  ctaText: string;
  imageUrl: string;
  downloadUrl?: string;
  lpTitle?: string;
  lpSubtitle?: string;
  lpBullets?: string[];
};

export const materiaisData: Material[] = [
  {
    id: "1",
    slug: "instagram-para-corretores",
    title: "Instagram para Corretores de Imóveis e Imobiliárias",
    type: "PDF Ebook",
    description:
      "Aprenda as melhores estratégias de conteúdo e posicionamento para atrair clientes pelo Instagram.",
    ctaText: "Baixar Ebook",
    imageUrl: "/materiais/instagram.webp",
    downloadUrl: "/materiais/downloads/Ebook-Guia-Instagram-1.pdf",
    lpTitle:
      "Um **guia completo** para **Corretores de Imóveis** que desejam fazer bonito no instagram",
    lpSubtitle:
      "Baixe agora grátis e comece hoje mesmo divulgar seus imóveis no Instagram da maneira correta.",
    lpBullets: [
      "Guia prático passo-a-passo",
      "Aprenda a divulgar seus imóveis no Instagram",
      "Bônus - Calendário de Publicação",
    ],
  },
  {
    id: "3",
    slug: "funil-de-vendas",
    title: "Guia Completo Funil de Vendas para Corretores e Imobiliárias",
    type: "PDF Ebook",
    description:
      "Estruture o seu processo comercial do zero e entenda as etapas para fechar mais negócios.",
    ctaText: "Baixar Ebook",
    imageUrl: "/materiais/funil.webp",
    downloadUrl: "/materiais/downloads/ebook-funil-de-vendas.pdf",
    lpTitle:
      "Baixe grátis nosso **Guia Prático** para aplicar **Funil de vendas** na sua **Imobiliária**",
    lpSubtitle:
      "Baixe agora grátis e comece hoje mesmo a aplicar o Funil de vendas na sua imobiliária",
    lpBullets: [
      "Tenha controle sobre seus atendimentos",
      "Guia prático passo-a-passo",
      "Aumente suas vendas",
      "Sua equipe engajada",
    ],
  },
  {
    id: "4",
    slug: "ficha-de-captacao",
    title: "Ficha de Captação de Imóveis para Imobiliárias e Corretores",
    type: "PDF Ficha",
    description:
      "Documento completo e prático para facilitar e profissionalizar a sua captação de imóveis.",
    ctaText: "Baixar Ficha",
    imageUrl: "/materiais/ficha.webp",
    downloadUrl: "/materiais/downloads/Ficha-Captacao-Imoveis.pdf",
    lpTitle:
      "Captar imóveis não precisa ser uma tarefa difícil. Baixe nossa **ficha de captação de imóveis** e facilite sua captação.",
    lpSubtitle:
      "Faça agora o download gratuito da ficha de captação de imóveis",
    lpBullets: [
      "Captação com Qualidade",
      "Ficha Completa",
      "Não esqueça de nenhuma informação",
      "Ficha gratuita!",
    ],
  },
  {
    id: "5",
    slug: "planilha-fluxo-trabalho",
    title: "Organize seu fluxo de trabalho e turbine suas vendas",
    type: "Planilha",
    description:
      "Uma planilha exclusiva para organizar seus contatos, agenda e não esquecer de nenhum follow-up.",
    ctaText: "Baixar material",
    imageUrl: "/materiais/planilha.webp",
    downloadUrl: "/materiais/downloads/planilha-imobiliaria.xlsx",
    lpTitle:
      "Baixe grátis a **Planilha Imobiliária** e organize suas tarefas e seu dia-a-dia dentro da Imobiliária",
    lpSubtitle: "Faça agora o download gratuito da Planilha Imobiliária",
    lpBullets: [
      "Captação com Qualidade",
      "Organize sua rotina",
      "Não esqueça de nenhuma informação",
      "Material gratuito",
    ],
  },
  {
    id: "6",
    slug: "home-office-imobiliarias",
    title: "Home Office para Imobiliárias",
    type: "PDF Ebook",
    description:
      "Como manter a equipe produtiva e fechar contratos trabalhando de maneira remota.",
    ctaText: "Baixar material",
    imageUrl: "/materiais/homeoffice.webp",
    downloadUrl: "/materiais/downloads/ebook-home-office-imobiliaria.pdf",
    lpTitle:
      "Baixe grátis nosso **Guia Prático** para aplicar **Home Office** na sua **Imobiliária**",
    lpSubtitle:
      "Baixe agora grátis e aplique hoje mesmo as melhores práticas para Home Office na sua imobiliária",
    lpBullets: [
      "Sua operação totalmente Online",
      "Controle sobre as atividades da equipe",
      "Boa práticas para melhor desempenho",
      "Sua equipe engajada",
    ],
  },
  {
    id: "7",
    slug: "guia-email-marketing",
    title: "Guia completo de e-mail marketing para imobiliárias",
    type: "e-Book",
    description:
      "Aprenda a criar campanhas de e-mail que convertem leads frios em clientes compradores.",
    ctaText: "Baixar material",
    imageUrl: "/materiais/email.webp",
    downloadUrl:
      "/materiais/downloads/Email-marketing-como-ferramenta-de-vendas.pdf",
    lpTitle:
      "Descubra como fazer **campanhas de sucesso de e-mail** marketing e **potencializar seus resultados**!",
    lpSubtitle:
      "Faça agora o download gratuito do Ebook - Email Marketing Imobiliário",
    lpBullets: [
      "Aprenda o que é e-mail marketing e quais itens seguir para que ele não caia na temida caixa de spam.",
      "Confira dicas para criar um e-mail marketing voltado totalmente para o aumento de vendas.",
      "Saiba como criar e segmentar uma boa lista de e-mails e oferecer conteúdo realmente relevante ao seu cliente.",
    ],
  },
  {
    id: "8",
    slug: "taticas-atendimento-cliente",
    title: "Táticas de sucesso para o atendimento ao cliente",
    type: "e-Book",
    description:
      "Fidelize seus clientes e encante proprietários com um atendimento de alto padrão.",
    ctaText: "Baixar material",
    imageUrl: "/materiais/atendimento.webp",
    downloadUrl:
      "/materiais/downloads/Taticas-de-sucesso-para-o-atendimento-ao-cliente.pdf",
    lpTitle:
      "Telefone, e-mail ou pessoal. Não importa a forma de abordagem, saiba como aprimorá-la para que o corretor e a imobiliária obtenham sucesso no atendimento.",
    lpSubtitle:
      "Faça agora o download gratuito do Ebook - Táticas de sucesso para o atendimento ao cliente",
    lpBullets: [
      "Saiba a importância de entender seu público-alvo e veja os primeiros passos para descobrir seu público-alvo",
      "Na prática: como fazer o atendimento de sucesso Ao telefone ou pessoalmente veja táticas que realmente funcionam.",
    ],
  },
];
