export type ROIParameter = {
  name: string;
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  label: string;
  unit: string;
};

export type ProductData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  calculator: {
    title: string;
    description: string;
    params: ROIParameter[];
    calculate: (values: number[]) => {
      primaryLabel: string;
      primaryValue: string;
      secondaryLabel: string;
      secondaryValue: string;
    };
  };
};

export const productsList: ProductData[] = [
  {
    slug: "crm",
    title: "CRM Imobiliário",
    subtitle: "Controle absoluto do seu funil e aceleração de vendas",
    description: "Nossa plataforma CRM centraliza todos os contatos, distribui leads de forma justa e automatizada na roleta de corretores e guarda todo o histórico de interações para que sua imobiliária nunca mais perca uma oportunidade de negócio por falha de follow-up.",
    iconName: "ShieldCheck",
    features: [
      "Roleta dinâmica de distribuição inteligente de leads (MQL).",
      "Histórico integrado com chamadas, WhatsApp e e-mails de clientes.",
      "Visão Kanban completa dos estágios de atendimento personalizáveis.",
      "Secretaria de Vendas inteligente com triagem inicial qualificada.",
      "Relatórios de produtividade em tempo real para gerentes e diretores."
    ],
    quote: {
      text: "Após implantarmos o CRM da Microsistec, nossa equipe comercial aumentou a taxa de conversão em 28% no primeiro trimestre. O controle de leads é cirúrgico.",
      author: "Rodrigo Mendonça",
      role: "Diretor Comercial",
      company: "Mendonça Prime Imóveis"
    },
    calculator: {
      title: "Simulador de Produtividade CRM",
      description: "Descubra o ganho em vendas e receita potencial automatizando a gestão da sua equipe comercial com o nosso CRM.",
      params: [
        { name: "corretores", label: "Corretores na equipe", min: 1, max: 100, defaultValue: 12, step: 1, unit: "" },
        { name: "mediaVendas", label: "Média de vendas/corretor/mês", min: 0.5, max: 10, defaultValue: 1.5, step: 0.5, unit: "imóvel" }
      ],
      calculate: (values) => {
        const [corretores, mediaVendas] = values;
        // CRM generates about 25% closing boost
        const extraVendas = Math.round(corretores * mediaVendas * 0.25 * 10) / 10;
        const extraReceita = Math.round(extraVendas * 12500); // R$ 12,500 average commission
        return {
          primaryLabel: "Vendas Extras Estimadas / Mês",
          primaryValue: `${extraVendas} vendas`,
          secondaryLabel: "Faturamento de Comissão Extra",
          secondaryValue: `R$ ${extraReceita.toLocaleString("pt-BR")}`
        };
      }
    }
  },
  {
    slug: "app",
    title: "APP Mobile",
    subtitle: "Atendimento de alta velocidade na palma da mão",
    description: "Leve o controle das suas vendas e imóveis para qualquer lugar. O APP Mobile Microsistec notifica instantaneamente quando um novo lead qualificado chega, permitindo respostas imediatas em menos de 2 minutos para bater a concorrência.",
    iconName: "Smartphone",
    features: [
      "Notificações Push instantâneas de novos leads cadastrados.",
      "Discador integrado e atalhos rápidos para mensagens de WhatsApp.",
      "Modo Offline para consultar imóveis e fichas técnicas em visitas.",
      "Upload rápido de fotos de novos imóveis diretamente do celular.",
      "Sincronização bidirecional em tempo real com a versão desktop."
    ],
    quote: {
      text: "Com o aplicativo no celular, meus corretores atendem os leads em minutos, mesmo na rua. Nosso tempo de resposta despencou de horas para menos de 5 minutos.",
      author: "Juliana Vasconcelos",
      role: "Sócia-Fundadora",
      company: "JV Imóveis Boutique"
    },
    calculator: {
      title: "Simulador de Agilidade no Celular",
      description: "Respostas rápidas multiplicam conversões. Calcule o aumento de vendas ao encurtar seu tempo de primeiro contato comercial.",
      params: [
        { name: "leadsMes", label: "Leads recebidos por mês", min: 20, max: 2000, defaultValue: 250, step: 10, unit: "leads" },
        { name: "tempoAtual", label: "Tempo de resposta atual (minutos)", min: 10, max: 240, defaultValue: 60, step: 10, unit: "min" }
      ],
      calculate: (values) => {
        const [leadsMes, tempoAtual] = values;
        // APP reduces response time to under 3 mins. Leads answered in < 5 mins have a 30% higher conversion rate.
        const conversaoAproveitamento = Math.round(leadsMes * (tempoAtual / 240) * 0.08);
        const receitaAproveitada = conversaoAproveitamento * 11000;
        return {
          primaryLabel: "Leads Convertidos Adicionais / Mês",
          primaryValue: `+ ${conversaoAproveitamento} contatos`,
          secondaryLabel: "Valor de Comissão Recuperado",
          secondaryValue: `R$ ${receitaAproveitada.toLocaleString("pt-BR")}`
        };
      }
    }
  },
  {
    slug: "sites-v8",
    title: "Sites V8 Imobiliários",
    subtitle: "A vitrine digital ultraveloz que mais converte clientes",
    description: "Seu site é seu maior canal de atração de clientes. Nossos portais da linha V8 possuem nota máxima no Google PageSpeed, carregamento instantâneo, e arquitetura de funil focada em levar o visitante a agendar uma visita instantaneamente.",
    iconName: "Globe",
    features: [
      "Velocidade extrema de carregamento de páginas (Core Web Vitals nota 100).",
      "SEO técnico totalmente otimizado para posicionamento nas buscas do Google.",
      "Filtros de busca inteligentes e mapa geolocalizado de empreendimentos.",
      "Integração de chatbots nativos e botões expressos para o WhatsApp.",
      "Design ultra-responsivo que funciona com alta elegância em celulares."
    ],
    quote: {
      text: "Migrar para o Site V8 reduziu nossa taxa de rejeição pela metade. O tráfego orgânico cresceu tanto que pudemos economizar 20% em anúncios pagos.",
      author: "Carlos Alberto",
      role: "Gerente de Marketing",
      company: "Aliança & Associados"
    },
    calculator: {
      title: "Simulador de Performance do Site",
      description: "Estime a geração extra de cadastros de leads aumentando a velocidade e otimizando o funil de conversão da sua vitrine na internet.",
      params: [
        { name: "visitasSite", label: "Visitas mensais atuais no site", min: 500, max: 50000, defaultValue: 5000, step: 500, unit: "visitas" },
        { name: "taxaConversao", label: "Taxa de conversão atual", min: 0.2, max: 5, defaultValue: 1.2, step: 0.1, unit: "%" }
      ],
      calculate: (values) => {
        const [visitasSite, taxaConversao] = values;
        // Otimização V8 increases conversion rate by roughly 1.8x
        const leadsAtuais = (visitasSite * taxaConversao) / 100;
        const leadsNovos = (visitasSite * (taxaConversao * 1.8)) / 100;
        const leadsExtras = Math.round(leadsNovos - leadsAtuais);
        return {
          primaryLabel: "Novos Leads Gerados / Mês",
          primaryValue: `${leadsExtras} novos leads`,
          secondaryLabel: "Custo de Mídia Pago Economizado",
          secondaryValue: `R$ ${(leadsExtras * 45).toLocaleString("pt-BR")} /mês` // R$ 45 average CPL savings
        };
      }
    }
  },
  {
    slug: "funil",
    title: "Funil de Vendas & Automações",
    subtitle: "Régua de relacionamento automática e sem esquecimentos",
    description: "Configure gatilhos automatizados para nutrir leads frios, enviar mensagens de parabéns ou disparar sugestões de novos imóveis que combinam exatamente com o perfil buscado. Impeça que leads sejam abandonados.",
    iconName: "Repeat",
    features: [
      "Réguas automáticas de follow-up pós-visita ou pós-proposta.",
      "Envio automatizado de novos imóveis por perfil de interesse.",
      "Alertas automáticos para corretores retomarem contatos frios.",
      "Disparador de e-mails em massa e mensagens automáticas.",
      "Métricas completas de conversão por etapa do funil comercial."
    ],
    quote: {
      text: "Nossa régua automatizada de follow-up recuperou mais de 45 leads que estavam parados no funil há mais de dois meses. Um recurso fantástico.",
      author: "Eliane Souza",
      role: "Diretora Comercial",
      company: "Souza Imóveis Premium"
    },
    calculator: {
      title: "Simulador de Recuperação de Leads",
      description: "Calcule a quantidade de leads que voltam à negociação ativa utilizando as réguas automáticas Microsistec.",
      params: [
        { name: "leadsFrios", label: "Leads parados ou frios por mês", min: 50, max: 5000, defaultValue: 400, step: 50, unit: "leads" },
        { name: "esquecimento", label: "Taxa média de leads não contactados", min: 5, max: 90, defaultValue: 25, step: 5, unit: "%" }
      ],
      calculate: (values) => {
        const [leadsFrios, esquecimento] = values;
        const leadsEsquecidos = (leadsFrios * esquecimento) / 100;
        // Automation recovers about 35% of forgotten leads
        const leadsRecuperados = Math.round(leadsEsquecidos * 0.35);
        const comissaoRecuperada = leadsRecuperados * 0.03 * 15000; // 3% close rate of recovered leads
        return {
          primaryLabel: "Leads Resgatados no Funil / Mês",
          primaryValue: `${leadsRecuperados} leads salvos`,
          secondaryLabel: "Valor de Comissão Gerada",
          secondaryValue: `R$ ${Math.round(comissaoRecuperada).toLocaleString("pt-BR")}`
        };
      }
    }
  },
  {
    slug: "integracao",
    title: "Integração de Portais",
    subtitle: "Carga única e sincronização para os maiores portais",
    description: "Anuncie nos maiores portais imobiliários do Brasil (Zap, VivaReal, Imovelweb e muitos outros) digitando as informações apenas uma vez no CRM. Mantenha os preços e disponibilidades sempre atualizados.",
    iconName: "Plug",
    features: [
      "Integração instantânea em lote com mais de 35 portais imobiliários.",
      "Atualização expressa de preço e status do imóvel nos portais em minutos.",
      "Mapeamento automático de campos técnicos personalizados por portal.",
      "Leads gerados nos portais caem direto no funil e roleta do CRM.",
      "Histórico de gastos e relatórios de retorno de investimento por portal."
    ],
    quote: {
      text: "Antes das integrações integradas Microsistec V8, levávamos dias atualizando planilhas de portais. Agora cadastramos em minutos e recebemos o lead na hora.",
      author: "Arthur Nogueira",
      role: "Gerente Operacional",
      company: "Nogueira & Cia Imobiliária"
    },
    calculator: {
      title: "Simulador de Economia de Tempo",
      description: "Estime a quantidade de horas operacionais salvas na semana ao integrar os cadastros de portais parceiros em lote.",
      params: [
        { name: "imoveisAtivos", label: "Imóveis ativos em carteira", min: 10, max: 2000, defaultValue: 300, step: 10, unit: "imóveis" },
        { name: "portaisCanais", label: "Portais de anúncio parceiros", min: 1, max: 10, defaultValue: 4, step: 1, unit: "portais" }
      ],
      calculate: (values) => {
        const [imoveisAtivos, portaisCanais] = values;
        // Integrated sync saves roughly 0.15 hours per property per portal in manual checking monthly
        const horasSalvas = Math.round(imoveisAtivos * portaisCanais * 0.15 * 10) / 10;
        const custoSalvo = Math.round(horasSalvas * 25); // R$ 25 average administrative hour cost
        return {
          primaryLabel: "Tempo Manual Economizado / Mês",
          primaryValue: `${horasSalvas} horas`,
          secondaryLabel: "Custo Administrativo Reduzido",
          secondaryValue: `R$ ${custoSalvo.toLocaleString("pt-BR")} /mês`
        };
      }
    }
  },
  {
    slug: "albert",
    title: "Albert (IA Imobiliária)",
    subtitle: "Atendimento cognitivo especialista em imóveis 24/7",
    description: "Albert é nossa inteligência artificial proprietária treinada em mais de 1 milhão de diálogos de compra e venda de imóveis. Ele atende de forma acolhedora, humana e com alta conversão em seu site ou WhatsApp a qualquer hora.",
    iconName: "Bot",
    features: [
      "Atendimento cognitivo instantâneo e humanizado em linguagem natural.",
      "Leitura inteligente de fichas do CRM para sugerir imóveis exatos.",
      "Mapeamento do estágio de compra, renda, FGTS e preferências do lead.",
      "Passagem fluida com histórico completo para os corretores no WhatsApp.",
      "Atualização contínua baseada em feedbacks e novas interações imobiliárias."
    ],
    quote: {
      text: "Ficamos impressionados com a naturalidade do Albert. Ele qualifica os clientes de madrugada e, quando o corretor acorda, o lead já está pronto para a visita.",
      author: "Renata Faria",
      role: "Diretora Comercial",
      company: "Faria & Associados Imóveis"
    },
    calculator: {
      title: "Simulador de Economia Operacional IA",
      description: "Calcule a eficiência financeira e de escala ao delegar a triagem primária e plantões 24h para o robô imobiliário Albert.",
      params: [
        { name: "atendimentosFora", label: "Atendimentos fora de hora / mês", min: 20, max: 3000, defaultValue: 300, step: 10, unit: "atendimentos" },
        { name: "custoLigacao", label: "Custo estimado de triagem humana", min: 3, max: 50, defaultValue: 15, step: 1, unit: "R$/lead" }
      ],
      calculate: (values) => {
        const [atendimentosFora, custoLigacao] = values;
        // Albert processes leads at approximately 95% lower operational overheads
        const custoTradicional = atendimentosFora * custoLigacao;
        const custoAlbert = atendimentosFora * 1.5; // Albert costs roughly R$ 1.5 per interaction
        const economia = Math.round(custoTradicional - custoAlbert);
        return {
          primaryLabel: "Economia Mensal Operacional",
          primaryValue: `R$ ${economia.toLocaleString("pt-BR")}`,
          secondaryLabel: "Aumento no volume de Leads Qualificados",
          secondaryValue: "+ 40% leads triados"
        };
      }
    }
  },
  {
    slug: "filial",
    title: "Multi-filiais & Secretaria",
    subtitle: "Distribuição inteligente para redes e franquias",
    description: "Gerencie diversas filiais ou redes de imobiliárias de forma centralizada. Nossa plataforma permite configurar roletas regionais, controlar secretarias de atendimento centralizadas ou distribuídas, e unificar relatórios de resultados.",
    iconName: "Building",
    features: [
      "Roletas de leads geograficamente isoladas por bairros e cidades.",
      "Controle hierárquico avançado de permissões para donos de franquias.",
      "Triagem centralizada por Secretaria de Vendas para otimizar MQL.",
      "Compartilhamento inteligente e seguro de carteiras de imóveis da rede.",
      "Consolidação completa de métricas de marketing e vendas das filiais."
    ],
    quote: {
      text: "Integrar nossas 6 filiais sob a Microsistec V8 nos permitiu centralizar a triagem de leads. Economizamos estrutura e criamos uma cultura de alto desempenho.",
      author: "Guilherme Sampaio",
      role: "Diretor Executivo",
      company: "Sampaio Imóveis Network"
    },
    calculator: {
      title: "Simulador de Gestão Multi-filial",
      description: "Estime a economia de horas de triagem centralizando e automatizando a triagem de redes de filiais comerciais.",
      params: [
        { name: "numFiliais", label: "Número de filiais integradas", min: 2, max: 30, defaultValue: 5, step: 1, unit: "filiais" },
        { name: "leadsDiaFilial", label: "Mapeamento manual de leads/dia", min: 5, max: 200, defaultValue: 30, step: 5, unit: "leads" }
      ],
      calculate: (values) => {
        const [numFiliais, leadsDiaFilial] = values;
        // Centralized automation saves about 10 minutes (0.16 hours) per lead mapped across regions
        const horasSemana = Math.round(numFiliais * leadsDiaFilial * 0.165 * 22);
        const custoEconomizado = Math.round(horasSemana * 28);
        return {
          primaryLabel: "Horas de Triagem Economizadas / Mês",
          primaryValue: `${horasSemana} horas salvas`,
          secondaryLabel: "Custo com Pessoal Reduzido",
          secondaryValue: `R$ ${custoEconomizado.toLocaleString("pt-BR")} /mês`
        };
      }
    }
  }
];
