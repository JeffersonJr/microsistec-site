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
  Home
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
  content: string; // HTML-rich detailed article content
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
    shortDesc: "O coração operacional da sua imobiliária. Cadastre imóveis, controle contatos e acompanhe propostas de forma unificada e simples.",
    longDesc: "Nosso CRM foi desenvolvido ouvindo as reais dores de imobiliárias de todos os portes. Esqueça planilhas confusas e dados dispersos: centralize sua carteira de imóveis e sua base de clientes em uma plataforma intuitiva que faz o trabalho pesado por você.",
    iconName: "Building2",
    features: [
      "Cruzamento inteligente (match) entre perfis de compradores e imóveis disponíveis.",
      "Cadastro rápido de propriedades com upload otimizado de mídias e fotos.",
      "Controle total de permissões para gerentes, corretores e parceiros externos.",
      "Geração automatizada de contratos e fichas de visitas em PDF.",
      "Histórico detalhado de interações para que você nunca perca o contexto do cliente."
    ],
    benefits: [
      "Aumento de até 40% na produtividade diária da equipe de corretores.",
      "Redução drástica no tempo de busca de imóveis compatíveis com o cliente.",
      "Segurança e conformidade total com as normas da LGPD."
    ],
    ctaText: "Começar Teste do CRM"
  },
  {
    id: "app",
    slug: "app",
    title: "App de Atendimento",
    shortDesc: "Toda a força da Microsistec na palma da mão da sua equipe. Envie imóveis no WhatsApp e atualize status de visitas direto da rua.",
    longDesc: "Corretores não trabalham sentados atrás de uma mesa de escritório o dia todo. Eles estão na rua, fazendo visitas e fechando negócios. O nosso Aplicativo de Atendimento oferece mobilidade total, permitindo que sua equipe gerencie leads, atualize o CRM e agende tarefas diretamente de qualquer smartphone.",
    iconName: "Smartphone",
    features: [
      "Sincronização imediata em tempo real com a plataforma web imobiliária.",
      "Compartilhamento rápido de imóveis por WhatsApp com layouts elegantes.",
      "Notificações instantâneas (push) ao receber novos leads de portais.",
      "Check-in e check-out geolocalizados nas visitas de imóveis.",
      "Chamadas integradas com registro automático de conversas e notas."
    ],
    benefits: [
      "Velocidade de resposta que dobra as chances de conversão no primeiro contato.",
      "Gestão ativa de leads mesmo durante visitas presenciais na rua.",
      "Interface ultra simples desenvolvida com foco total no dia a dia do corretor."
    ],
    ctaText: "Baixar Aplicativo Agora"
  },
  {
    id: "funil",
    slug: "funil",
    title: "Funil de Vendas Multi-Funil",
    shortDesc: "Crie quantos funis e etapas quiser. Cada processo de venda, locação, captação e lançamento tem sua própria jornada — com métricas separadas e precisas.",
    longDesc: "Cada negócio imobiliário é único. Um processo de venda de alto padrão é completamente diferente de um Minha Casa Minha Vida, de uma captação de imóveis ou de uma locação comercial. Com o Multi-Funil da Microsistec, você cria funis independentes para cada tipo de operação — com etapas, responsáveis e métricas próprias. Chega de misturar leads de processos distintos num único pipeline confuso.",
    iconName: "LineChart",
    features: [
      "Multi-funil ilimitado: crie funis separados para venda, locação, captação, lançamentos, alto padrão, MCMV e qualquer outro processo.",
      "Etapas 100% customizáveis por funil — adicione, renomeie, reordene e remova sem limite.",
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

  {
    id: "integracoes",
    slug: "integracoes",
    title: "Integrações de Portais & WhatsApp & Meta",
    shortDesc: "Integração bidirecional automática. Publique nos maiores portais imobiliários e gerencie conversas do WhatsApp e leads da Meta em um único painel.",
    longDesc: "Perder tempo cadastrando o mesmo imóvel em múltiplos portais, copiando dados no WhatsApp e capturando leads de Facebook/Instagram Ads de forma isolada é coisa do passado. Nossa tecnologia de integração publica seus anúncios automaticamente nos portais parceiros (ZAP, VivaReal, OLX, Imovelweb) e centraliza conversas do WhatsApp e leads da Meta para facilitar o atendimento.",
    iconName: "Workflow",
    features: [
      "Carga automatizada de anúncios de imóveis (XML) sem intervenção manual.",
      "Centralização de leads recebidos em todas as plataformas e campanhas da Meta direto no CRM.",
      "Integração oficial com API do WhatsApp Business e Meta Lead Ads para maior segurança.",
      "Distribuição automática de leads (fila de rodízio) para corretores online.",
      "Rastreabilidade total das campanhas que mais trazem retorno de leads."
    ],
    benefits: [
      "Economia de centenas de horas mensais de trabalho manual e administrativo.",
      "Fim da perda de leads vindos de portais e anúncios à noite ou aos finais de semana.",
      "Atendimento instantâneo de clientes potenciais direto no WhatsApp."
    ],
    ctaText: "Integrar Meus Canais"
  },
  {
    id: "albert-ia",
    slug: "albert-ia",
    title: "Albert IA - SDR Inteligente",
    shortDesc: "Nossa IA exclusiva que age como um clone do seu melhor corretor. Atendimento e qualificação automatizados em tempo real, 24 horas por dia.",
    longDesc: "O Albert IA foi desenvolvido especialmente para o mercado imobiliário brasileiro. Ele não é um chatbot burro que apenas decora caminhos pré-definidos: ele entende intenções reais, responde com naturalidade, qualifica as finanças do lead e repassa o contato pronto para o corretor fechar o negócio no momento ideal.",
    iconName: "Bot",
    features: [
      "Treinamento sob medida baseado na história e no roteiro da sua imobiliária.",
      "Capacidade de qualificar leads financeiros antes do repasse (financiamento, FGTS, etc.).",
      "Disponibilidade integral 24 horas por dia, 7 dias por semana no WhatsApp.",
      "Integração direta com o CRM para atualização autônoma da ficha do lead.",
      "Análise semântica avançada com tom de escrita extremamente humanizado."
    ],
    benefits: [
      "Aumento médio de 300% na velocidade do primeiro atendimento comercial.",
      "Filtragem inteligente: o corretor só atende contatos qualificados de verdade.",
      "Redução substancial do custo de aquisição de clientes (CAC)."
    ],
    ctaText: "Converse com o Albert agora mesmo"
  },
  {
    id: "sites-template",
    slug: "sites-template",
    title: "Sites Template Express",
    shortDesc: "Sua imobiliária na internet em tempo recorde. Modelos otimizados para mecanismos de busca, elegantes e prontos para converter leads.",
    longDesc: "Se você precisa de uma presença profissional na internet sem gastar fortunas e sem esperar meses por um desenvolvimento demorado, nossos templates de sites imobiliários são perfeitos. Eles são ultravelozes, responsivos e focados na conversão imediata de visitantes em contatos reais.",
    iconName: "Globe",
    features: [
      "Estrutura otimizada para SEO local garantindo presença no Google.",
      "Filtros de busca avançados (localização, preço, dormitórios, vagas).",
      "Páginas de imóveis limpas com galeria de fotos e botão direto para WhatsApp.",
      "Layout totalmente adaptado para visualização perfeita em dispositivos móveis.",
      "Seção de blog e captação de leads de proprietários nativas."
    ],
    benefits: [
      "Lançamento ultra rápido do site no seu domínio próprio em poucos dias.",
      "Baixo custo de setup e manutenção mensal extremamente acessível.",
      "Carregamento veloz que garante excelente experiência ao usuário móvel."
    ],
    ctaText: "Escolher Meu Template"
  },
  {
    id: "sites-v8",
    slug: "sites-v8",
    title: "Sites Customizados V8",
    shortDesc: "Sites feitos sob medida com performance extrema. Performance incrível, design arrojado e velocidade de carregamento absurda no mobile.",
    longDesc: "Para imobiliárias e construtoras que exigem o máximo de diferenciação e performance, a linha de sites V8 da Microsistec é a escolha definitiva. Criados com tecnologia de ponta usada pelas maiores tech companies do mundo, os sites V8 entregam carregamento instantâneo, design único e SEO imbatível.",
    iconName: "Sparkles",
    features: [
      "Design 100% exclusivo criado por designers especializados em proptech.",
      "Código limpo de alta performance com nota máxima no Google PageSpeed Insights.",
      "Integrações complexas com múltiplos sistemas de gestão e mapas.",
      "Otimização avançada de imagens de forma automática para carregamento rápido.",
      "Segurança reforçada contra ataques virtuais e quedas de servidor."
    ],
    benefits: [
      "Destaque absoluto frente a qualquer concorrente no mercado local.",
      "Melhoria orgânica contínua nas buscas do Google devido à velocidade extrema.",
      "Maior retenção de usuários móveis devido à navegação instantânea de página."
    ],
    ctaText: "Solicitar Projeto V8"
  },
  {
    id: "rodizio",
    slug: "rodizio",
    title: "Rodízio de Atendimento",
    shortDesc: "Distribuição inteligente e justa de leads. Garanta que toda a sua equipe de corretores seja atendida em tempo recorde de forma equilibrada.",
    longDesc: "Nosso sistema de Rodízio de Atendimento foi criado para eliminar o atrito e garantir total velocidade na resposta de leads. Ao receber contatos de portais, sites ou Meta Ads, o sistema faz o cruzamento imediato de regras configuráveis (disponibilidade, escala de plantão ou especialidade de nicho) e direciona o lead de forma justa no WhatsApp do corretor da vez.",
    iconName: "Users",
    features: [
      "Fila automatizada Round-Robin com inteligência de distribuição justa.",
      "Definição ágil de regras por especialidade (ex: corretores de alto padrão vs loteamento).",
      "Status dinâmicos em tempo real (Online, Ocupado, Em Visita, Folga) configurados pelos corretores.",
      "Escalonamento imediato: pula o corretor da vez caso ele demore mais de X minutos para responder.",
      "Métricas gerenciais profundas de tempo de resposta médio e taxa de conversão por corretor."
    ],
    benefits: [
      "Fim definitivo de brigas por divisão de leads dentro da imobiliária.",
      "Aceleração do tempo de resposta inicial para menos de 3 minutos de forma orgânica.",
      "Visibilidade analítica completa para o gerente avaliar o desempenho da equipe comercial."
    ],
    ctaText: "Ativar Meu Rodízio"
  },
  {
    id: "locacao",
    slug: "locacao",
    title: "Sistema de Locação",
    shortDesc: "Gestão completa de contratos de locação. Controle de vencimentos, reajustes, garantias e repasses em uma única plataforma.",
    longDesc: "O Sistema de Locação da Microsistec foi projetado para simplificar toda a administração de imóveis alugados. Controle vencimentos, calcule reajustes automáticos pelo IGPM/IPCA, gerencie garantias e caução, emita boletos e acompanhe repasses para proprietários de forma 100% digital.",
    iconName: "Home",
    features: [
      "Controle automatizado de contratos com alertas de vencimento e renovação.",
      "Cálculo automático de reajustes por IGPM, IPCA ou índice personalizado.",
      "Gestão de garantias: caução, fiador, seguro-fiança e título de capitalização.",
      "Emissão de boletos e controle de inadimplência integrado.",
      "Repasse automático de valores para proprietários com relatórios detalhados."
    ],
    benefits: [
      "Redução de 80% no tempo gasto com administração de contratos de locação.",
      "Eliminação de erros em cálculos manuais de reajuste e repasses.",
      "Visão financeira completa da carteira de locação da imobiliária."
    ],
    ctaText: "Em Breve"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "como-ia-transforma-leads-imobiliarios",
    tag: "Inteligência Artificial",
    title: "Como a Inteligência Artificial está transformando a qualificação de leads imobiliários",
    excerpt: "Descubra como os assistentes virtuais inteligentes estão eliminando a perda de contatos nas imobiliárias brasileiras e otimizando a conversão.",
    date: "05 Jun 2025",
    readTime: "6 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">No concorrido mercado imobiliário moderno, a velocidade no atendimento ao cliente não é apenas uma vantagem competitiva; é a linha divisória entre fechar uma venda ou perder o cliente para a concorrência. Estudos mostram que atender um lead nos primeiros 5 minutos aumenta as chances de conversão em até 21 vezes.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">O Gargalo Humano na Qualificação de Leads</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">O maior desafio de qualquer imobiliária de médio e grande porte é dar vazão a centenas de contatos recebidos em horários comerciais e não comerciais. Corretores acumulam tarefas burocráticas, visitas externas e negociações complexas. Deixar que eles mesmos façam a triagem manual de cada lead é uma receita garantida para o atraso e a frustração.</p>
      <p class="leading-relaxed text-foreground/80 mb-6">É aqui que a Inteligência Artificial entra como uma revolução operacional. Ferramentas como o <strong>Albert IA</strong> da Microsistec agem como uma triagem autônoma, atendendo instantaneamente o lead no exato segundo em que ele demonstra interesse em um portal ou no site.</p>
      
      <blockquote class="border-l-4 border-[color:var(--brand-orange)] pl-4 italic text-foreground/90 my-8">
        "A automação de triagem por IA permite que os corretores foquem sua atenção exclusivamente nos 20% de leads que realmente possuem capacidade e intenção imediata de compra."
      </blockquote>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">Como o Albert IA Faz Essa Qualificação?</h2>
      <ul class="list-disc pl-6 space-y-3 text-foreground/80 mb-6">
        <li><strong>Conversação Humanizada:</strong> O sistema entende o contexto linguístico, evitando respostas robóticas ou caminhos travados de botões tradicionais.</li>
        <li><strong>Coleta Financeira:</strong> A IA pergunta com sutileza e naturalidade sobre a intenção de financiamento bancário, o uso do FGTS e o valor de entrada planejado.</li>
        <li><strong>Mapeamento de Necessidades:</strong> Descobre o número desejado de dormitórios, a localização ideal e se a motivação de compra é moradia ou investimento.</li>
        <li><strong>Distribuição Inteligente:</strong> Ao detectar que o lead está qualificado e pronto, a IA agenda a visita no CRM e notifica o corretor especialista.</li>
      </ul>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">Resultados Reais no Mercado Brasileiro</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Imobiliárias que utilizam o Albert IA integrado ao ecossistema Microsistec reportam um aumento imediato na satisfação do usuário e uma redução brutal do Lead Response Time para menos de 30 segundos. O resultado financeiro é claro: equipes de corretores mais felizes atendendo leads qualificados e maior volume de escrituras no final do mês.</p>
    `
  },
  {
    id: "2",
    slug: "crm-imobiliario-vs-planilhas",
    tag: "Produtividade",
    title: "CRM Imobiliário integrado vs. Planilhas: O verdadeiro custo da desorganização",
    excerpt: "Planilhas de Excel são gratuitas no início, mas custam milhares de reais em leads perdidos e tempo jogado fora. Veja o comparativo financeiro.",
    date: "02 Jun 2025",
    readTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">É extremamente comum que imobiliárias comecem sua operação usando planilhas eletrônicas. Afinal, elas são gratuitas, flexíveis e familiares. Porém, conforme o time de corretores cresce e o volume de captação aumenta, a planilha se torna um grande gargalo, ocultando ineficiências que custam milhares de reais todos os meses.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">O Perigo Oculto das Planilhas de Leads</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">A falta de automatização em planilhas gera diversos problemas operacionais críticos:</p>
      <ul class="list-disc pl-6 space-y-3 text-foreground/80 mb-6">
        <li><strong>Falta de Histórico Centralizado:</strong> Se um corretor sai da empresa, as informações sobre as conversas com os clientes muitas vezes vão embora com ele em seu celular pessoal.</li>
        <li><strong>Falhas no Rodízio de Leads:</strong> Distribuir contatos manualmente de forma justa e rápida usando planilhas é uma tarefa hercúlea para os gerentes comerciais.</li>
        <li><strong>Impossibilidade de Cruzamento Inteligente:</strong> Uma planilha não avisa o corretor que acabou de entrar na carteira um apartamento exatamente igual ao que o cliente 'X' estava procurando há um mês.</li>
        <li><strong>Problemas Jurídicos (LGPD):</strong> Arquivos de planilhas baixados localmente na máquina dos funcionários representam um enorme risco de vazamento de dados confidenciais.</li>
      </ul>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">O Retorno sobre o Investimento em um CRM Integrado</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Migrar para um CRM imobiliário moderno como o da Microsistec não deve ser visto como um custo, mas sim como um investimento de alto retorno. Ao centralizar imóveis, cruzamento de dados, funil de vendas e contratos no mesmo sistema, a imobiliária consegue otimizar sua operação de ponta a ponta.</p>
      <p class="leading-relaxed text-foreground/80 mb-6">Além disso, com automações de alertas e um aplicativo móvel integrado, o corretor atualiza o status de suas vendas diretamente do local de visitação, reduzindo o trabalho manual redundante e focando na única atividade que gera receita: construir relacionamentos e fechar negócios de imóveis.</p>
    `
  },
  {
    id: "3",
    slug: "estrategias-seo-local-site-imobiliario",
    tag: "Marketing Digital",
    title: "5 estratégias de SEO local para fazer o site da sua imobiliária dominar o Google",
    excerpt: "Gere leads qualificados de forma orgânica sem gastar com anúncios pagos. Aprenda como ranquear seu site nos termos de busca da sua região.",
    date: "28 Mai 2025",
    readTime: "7 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">Quando alguém decide comprar ou alugar um imóvel, o primeiro passo quase sempre é uma pesquisa no Google. Termos de busca locais como 'apartamento 2 quartos para alugar em Santos' ou 'imobiliária em São Paulo' possuem altíssima intenção de conversão. Se o site da sua imobiliária não aparece nas primeiras posições destas buscas, você está perdendo dezenas de clientes diariamente.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">O Poder do SEO Local no Mercado Imobiliário</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Diferente de portais imobiliários gigantescos que disputam buscas genéricas de nível nacional, a sua imobiliária pode facilmente dominar o tráfego orgânico da sua cidade se adotar as estratégias corretas de otimização local.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">5 Ações para Implementar no Seu Site Agora</h2>
      <ol class="list-decimal pl-6 space-y-3 text-foreground/80 mb-6">
        <li><strong>Foco em Palavras-Chave de Cauda Longa (Long-Tail):</strong> Crie páginas específicas voltadas para bairros e perfis de imóveis (ex: 'cobertura com piscina no Gonzaga').</li>
        <li><strong>Otimize sua Ficha no Google Meu Negócio:</strong> Mantenha o nome, endereço, telefone e horário idênticos no site e no Google Maps. Colete avaliações dos seus clientes satisfeitos constantemente.</li>
        <li><strong>Velocidade de Carregamento Absoluta (Mobile):</strong> Mais de 70% das buscas imobiliárias acontecem por celulares. A tecnologia V8 da Microsistec garante que suas páginas carreguem instantaneamente.</li>
        <li><strong>Dados Estruturados de Imóveis (Schema Markup):</strong> Ajude o Google a entender as informações de preço, número de quartos e localização dos seus imóveis diretamente do código.</li>
        <li><strong>Criação de Conteúdo de Bairro:</strong> Escreva artigos informativos sobre o estilo de vida, escolas e segurança dos bairros em que você mais possui carteira ativa. Isso cria autoridade no buscador.</li>
      </ol>
    `
  },
  {
    id: "4",
    slug: "papel-app-atendimento-leads-alto-padrao",
    tag: "Vendas",
    title: "O papel do aplicativo de atendimento na conversão de leads de alto padrão",
    excerpt: "Clientes de alto luxo exigem exclusividade e respostas instantâneas. Entenda como a mobilidade do corretor define o sucesso dessas vendas.",
    date: "25 Mai 2025",
    readTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">Vender imóveis de luxo e alto padrão exige uma postura comercial completamente diferenciada da venda popular. O comprador de alto padrão é um executivo, investidor ou empresário de rotina extremamente corrida. Ele valoriza o tempo acima de tudo, exige respostas precisas imediatas e detesta amadorismo tecnológico.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">Exclusividade Exige Agilidade Móvel</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Corretores focados em alto padrão passam a maior parte do tempo em visitas presenciais a coberturas, condomínios fechados ou apartamentos conceito. Se um novo lead de alto padrão chega através de um portal ou indicação e o corretor demora 4 horas para responder porque estava em campo sem acesso ao computador, a chance de perder esse cliente de milhões é gigantesca.</p>
      <p class="leading-relaxed text-foreground/80 mb-6">Com o **App de Atendimento da Microsistec**, o corretor recebe alertas imediatos no celular e consegue, em um clique, gerar um catálogo em PDF de altíssima fidelidade e compartilhá-lo via WhatsApp personalizado, garantindo que o atendimento de luxo comece com velocidade incrível e total sofisticação visual.</p>
    `
  },
  {
    id: "5",
    slug: "como-reduzir-tempo-de-resposta-leads",
    tag: "Inteligência Artificial",
    title: "Como reduzir o tempo de resposta (lead response time) em até 95% usando IA",
    excerpt: "O tempo ideal para responder um lead é de 5 minutos. Conheça as tecnologias autônomas que automatizam essa barreira crucial no WhatsApp.",
    date: "20 Mai 2025",
    readTime: "6 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1552581230-c01bc9148c00?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">Imagine que um cliente potencial passe a noite pesquisando imóveis e envie uma mensagem pedindo informações às 23h30. Se sua equipe comercial só iniciar o contato às 9h da manhã seguinte, são quase 10 horas de espera. Nesse meio tempo, ele provavelmente continuou navegando e enviou mensagens para outras três imobiliárias concorrentes.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">A Regra de Ouro dos 5 Minutos</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Dados estatísticos do mercado global de proptech mostram que se você entra em contato após 30 minutos do envio do formulário, as taxas de qualificação caem em até 80%. A velocidade é o fator mais correlacionado ao fechamento do negócio na internet imobiliária moderna.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">O Albert IA no WhatsApp: Resposta Imediata</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Implementar um sistema autônomo baseado em inteligência artificial resolve este desafio definitivamente. O **Albert IA** está conectado à API oficial do WhatsApp 24/7. Quando o lead envia o formulário no site ou portal, a IA inicia a conversa no WhatsApp em menos de 10 segundos, fazendo o primeiro atendimento com empatia e eficiência, reduzindo o tempo de espera imobiliária a praticamente zero.</p>
    `
  },
  {
    id: "6",
    slug: "guia-lgpd-para-imobiliarias",
    tag: "Segurança",
    title: "Guia completo da LGPD para imobiliárias: Protegendo dados e fechando vendas",
    excerpt: "O mercado imobiliário lida com dados extremamente sensíveis: imposto de renda, RG, CPF e escrituras. Entenda as obrigações legais da lei.",
    date: "15 Mai 2025",
    readTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">A Lei Geral de Proteção de Dados (LGPD) impacta diretamente o funcionamento do setor imobiliário brasileiro. Para qualificar um inquilino ou comprador, as imobiliárias e corretores solicitam documentações de alto risco: comprovantes de renda, declarações de imposto de renda completas, CPF, cópias de documentos de identidade e certidões de casamento.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">Onde Estão os Maiores Riscos Jurídicos?</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">A maioria dos problemas com a LGPD nas imobiliárias não advém de ataques hackers complexos, mas sim de atitudes e hábitos internos desatentos:</p>
      <ul class="list-disc pl-6 space-y-3 text-foreground/80 mb-6">
        <li>Corretores salvando fotos de documentos de clientes em suas galerias de celulares pessoais.</li>
        <li>Arquivamento físico de contratos antigos sem controle restrito de acesso.</li>
        <li>Envio de fichas financeiras completas de compradores para proprietários via chat comum sem consentimento formalizado.</li>
      </ul>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">A Solução com a Microsistec</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">A plataforma Microsistec foi inteiramente projetada seguindo as premissas de Privacy by Design. O tráfego de documentos é criptografado, e os dados bancários e de renda dos clientes ficam armazenados de forma ultra segura, com rastreabilidade total de acessos de cada colaborador da imobiliária.</p>
    `
  },
  {
    id: "7",
    slug: "integracao-com-portais-imobiliarios",
    tag: "Marketing Digital",
    title: "Integração com portais imobiliários: Como automatizar a publicação e triplicar contatos",
    excerpt: "Pare de cadastrar anúncios manualmente. Saiba como a integração XML unificada economiza horas e multiplica seus pontos de contato.",
    date: "10 Mai 2025",
    readTime: "4 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">Estar presente nos principais canais de venda da internet é fundamental. Porém, manter a carteira de 500 ou 1000 imóveis atualizada de forma manual no ZAP, VivaReal, OLX e portais regionais é praticamente impossível. Preços desatualizados, fotos trocadas e imóveis vendidos que continuam anunciados são péssimos para a imagem da marca.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">A Força da Integração Automatizada Microsistec</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Com o nosso sistema de integração XML unificado, você insere o imóvel uma única vez no CRM Microsistec. O sistema gera a carga e atualiza de forma autônoma e programada todos os anúncios nas plataformas parceiras selecionadas, sincronizando preços, status de disponibilidade e descrições com total consistência.</p>
    `
  },
  {
    id: "8",
    slug: "o-que-e-funil-de-vendas-imobiliario",
    tag: "Vendas",
    title: "O que é Funil de Vendas Imobiliário e como estruturar etapas que convertem",
    excerpt: "Entenda a estrutura científica por trás das vendas imobiliárias bem-sucedidas. Defina as fases certas para o seu time comercial.",
    date: "05 Mai 2025",
    readTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">Muitos gerentes comerciais tratam o processo de vendas como uma arte subjetiva, dependente exclusivamente do talento ou do carisma do corretor. Contudo, nas maiores imobiliárias do país, as vendas são tratadas como um processo científico, mensurável e replicável através do **Funil de Vendas Imobiliário**.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">As Etapas Fundamentais do Funil de Sucesso</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">Um bom funil não deve ter muitas etapas a ponto de confundir a equipe, nem poucas a ponto de ocultar a real situação comercial de cada negócio. As fases clássicas imobiliárias recomendadas incluem:</p>
      <ul class="list-disc pl-6 space-y-3 text-foreground/80 mb-6">
        <li><strong>Lead Recebido:</strong> Novos contatos vindos de formulários do site, portais ou campanhas sem atendimento inicial.</li>
        <li><strong>Contato Estabelecido (Qualificação):</strong> A conversa foi iniciada, e a IA ou o corretor estão entendendo o perfil financeiro e o objetivo do comprador.</li>
        <li><strong>Visita Agendada/Realizada:</strong> O momento em que o lead conhece o imóvel. Esta é a fase de maior calor comercial no processo.</li>
        <li><strong>Proposta Enviada:</strong> Negociação ativa de valores, formas de pagamento e aprovação de crédito.</li>
        <li><strong>Fechamento (Contrato):</strong> Assinatura de contratos, recolhimento de documentações de garantia e escrituração pública do imóvel.</li>
      </ul>
    `
  },
  {
    id: "9",
    slug: "secretaria-de-vendas-mql",
    tag: "Produtividade",
    title: "Secretaria de Vendas (MQL): O elo perdido entre o marketing e o fechamento",
    excerpt: "Você está jogando dinheiro de marketing fora se repassa leads brutos para os corretores. Entenda a função vital da pré-qualificação imobiliária.",
    date: "01 Mai 2025",
    readTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">O maior conflito clássico em imobiliárias é a eterna disputa entre o marketing (que afirma gerar centenas de leads ótimos) e os corretores (que reclamam que todos os leads recebidos são desqualificados e sem interesse real). Esse atrito comercial costuma drenar os orçamentos das empresas.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">O Papel da Secretaria de Vendas</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">A Secretaria de Vendas (ou time de SDR - Sales Development Representatives) atua exatamente nessa ponte crucial de transição. Sua função exclusiva é atender e filtrar o lead o mais rápido possível, validando dados básicos de contato e capacidade de investimento antes de fazer o repasse definitivo ao corretor em campo.</p>
      <p class="leading-relaxed text-foreground/80 mb-6">Com o advento do **Albert IA**, o papel da secretaria de vendas é automatizado por completo. A IA executa esse primeiro contato de acolhimento e triagem em massa, fazendo o repasse inteligente somente de contatos que preencham os pré-requisitos para a imobiliária.</p>
    `
  },
  {
    id: "10",
    slug: "site-imobiliario-v8-velocidade",
    tag: "Tecnologia",
    title: "Site Imobiliário V8: Por que a velocidade de carregamento define suas vendas em 2026",
    excerpt: "Um atraso de 2 segundos no carregamento do site mobile pode triplicar sua taxa de rejeição. Entenda a infraestrutura V8 Microsistec.",
    date: "25 Abr 2025",
    readTime: "4 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jefferson Junior",
      role: "Especialista em PropTech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    content: `
      <p class="text-lg leading-relaxed text-foreground/80 mb-6">Na internet imobiliária moderna, velocidade é sinônimo direto de faturamento. Mais de 75% das captações de leads acontecem a partir de dispositivos móveis, utilizando conexões 4G/5G que muitas vezes oscilam. Se o site da sua imobiliária demora mais de 3 segundos para renderizar as fotos do anúncio, o usuário desiste e volta para o Google em um clique.</p>
      
      <h2 class="text-2xl font-bold tracking-tight mt-10 mb-4 text-foreground">Como a Tecnologia V8 Aumenta sua Conversão</h2>
      <p class="leading-relaxed text-foreground/80 mb-6">A arquitetura **Sites V8 da Microsistec** foi desenvolvida com foco total em rendimento mobile. Ela utiliza rendering estático otimizado, compressão inteligente de imagens sem perda de qualidade e servidores CDN de baixa latência em todo o país. O resultado prático é um site que carrega instantaneamente, nota máxima no PageSpeed do Google e maior volume de leads orgânicos gerados.</p>
    `
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "A gente parou de perder lead no WhatsApp. O Albert qualifica enquanto o corretor dorme e de manhã está tudo no CRM, organizado. Mudou a operação.",
    author: "Carla M.",
    role: "Diretora Comercial",
    company: "Imobiliária Litoral Santos",
    location: "Santos/SP",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "2",
    quote: "O aplicativo de atendimento mudou a vida dos nossos corretores. Eles atualizam visitas na hora, enviam imóveis lindos para os clientes na rua em 2 segundos e fecham muito mais.",
    author: "Roberto Silva",
    role: "Proprietário",
    company: "Silva & Associados Imóveis",
    location: "Campinas/SP",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "3",
    quote: "Usar o CRM Microsistec unificado com os portais nos economizou mais de 40 horas semanais de trabalho burocrático e duplicado. Agora nosso foco é 100% no cliente.",
    author: "Juliana Costa",
    role: "Gerente de Operações",
    company: "Habita Prime Negócios",
    location: "Curitiba/PR",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "4",
    quote: "O site V8 tem uma velocidade incrível no celular! Nosso tráfego orgânico e os leads do Google Meu Negócio triplicaram nos últimos 6 meses. Recomendo muito.",
    author: "Marcos Paulo",
    role: "Diretor de Marketing",
    company: "Paulista Brokers",
    location: "São Paulo/SP",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "5",
    quote: "O Albert IA qualificou mais de 1.200 leads só no primeiro mês de uso. O corretor recebe o lead com o perfil financeiro completo e intenção de financiamento aprovada. Revolucionário.",
    author: "Fernanda Almeida",
    role: "Gestora de Vendas",
    company: "Viver Bem Empreendimentos",
    location: "Belo Horizonte/MG",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  }
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
  category: "Portais Imobiliários Nacionais" | "Portais Imobiliários Regionais" | "Marketing & Ferramentas" | "Exclusivos & XML";
  description: string;
  type: "XML" | "API" | "XML / API" | "Em Breve";
  logoBg: string;
  logoTextColor: string;
  logoText: string;
  officialColor: string;
}

export const portalIntegrations: PortalIntegration[] = [
  {
    name: "Grupo Zap (Oferta Única)",
    category: "Portais Imobiliários Nacionais",
    description: "Pacote unificado de alta audiência. Envia os mesmos anúncios de forma sincronizada para o ZAP e VivaReal.",
    type: "XML / API",
    logoBg: "bg-indigo-600/10",
    logoTextColor: "text-indigo-600",
    logoText: "GZ",
    officialColor: "#131a40"
  },
  {
    name: "Viva Real",
    category: "Portais Imobiliários Nacionais",
    description: "Um dos portais líderes com abrangência nacional e foco total em geração contínua de leads qualificados.",
    type: "XML / API",
    logoBg: "bg-blue-600/10",
    logoTextColor: "text-blue-600",
    logoText: "VR",
    officialColor: "#35D4B6"
  },
  {
    name: "Zap Imóveis",
    category: "Portais Imobiliários Nacionais",
    description: "O mais tradicional portal de classificados imobiliários de alta relevância no Brasil, parte do Grupo Globo.",
    type: "XML / API",
    logoBg: "bg-cyan-600/10",
    logoTextColor: "text-cyan-600",
    logoText: "ZP",
    officialColor: "#1b2d91"
  },
  {
    name: "Mercado Livre",
    category: "Portais Imobiliários Nacionais",
    description: "Canal de alta conversão nacional, ideal para anúncios de venda, locação definitiva e temporada.",
    type: "XML / API",
    logoBg: "bg-yellow-500/10",
    logoTextColor: "text-yellow-600",
    logoText: "ML",
    officialColor: "#FFF159"
  },
  {
    name: "OLX",
    category: "Portais Imobiliários Nacionais",
    description: "Maior classificado de anúncios gerais e residenciais do Brasil com gigantesca abrangência orgânica.",
    type: "XML",
    logoBg: "bg-purple-600/10",
    logoTextColor: "text-purple-600",
    logoText: "OLX",
    officialColor: "#8C38B2"
  },
  {
    name: "Imovelweb",
    category: "Portais Imobiliários Nacionais",
    description: "Portal oficial de imóveis presente em mais de 1.500 cidades brasileiras com audiência altamente qualificada.",
    type: "XML / API",
    logoBg: "bg-red-600/10",
    logoTextColor: "text-red-600",
    logoText: "IW",
    officialColor: "#E63B2E"
  },
  {
    name: "Chaves na Mão",
    category: "Portais Imobiliários Nacionais",
    description: "Forte atuação em imóveis e veículos com mais de 500 mil anúncios ativos em todo o Brasil.",
    type: "XML / API",
    logoBg: "bg-orange-600/10",
    logoTextColor: "text-orange-600",
    logoText: "CM",
    officialColor: "#E30613"
  },
  {
    name: "Portal CRECI",
    category: "Exclusivos & XML",
    description: "Portal oficial regulamentador dos corretores de todas as regiões CRECI brasileiras.",
    type: "XML",
    logoBg: "bg-emerald-600/10",
    logoTextColor: "text-emerald-600",
    logoText: "CR",
    officialColor: "#006B3F"
  },
  {
    name: "Netimóveis",
    category: "Exclusivos & XML",
    description: "Rede colaborativa de anúncios integrando as melhores opções residenciais de imobiliárias homologadas.",
    type: "XML",
    logoBg: "bg-sky-600/10",
    logoTextColor: "text-sky-600",
    logoText: "NI",
    officialColor: "#0F172A"
  },
  {
    name: "Órulo",
    category: "Marketing & Ferramentas",
    description: "Catálogo completo de lançamentos e novos empreendimentos em tempo real para sua carteira.",
    type: "Em Breve",
    logoBg: "bg-teal-500/10",
    logoTextColor: "text-teal-600",
    logoText: "OR",
    officialColor: "#00F2A6"
  },
  {
    name: "Facebook",
    category: "Marketing & Ferramentas",
    description: "Publicação ágil de catálogos imobiliários automáticos para campanhas dinâmicas e retargeting.",
    type: "API",
    logoBg: "bg-blue-700/10",
    logoTextColor: "text-blue-700",
    logoText: "FB",
    officialColor: "#1877F2"
  },
  {
    name: "Leadster",
    category: "Marketing & Ferramentas",
    description: "Plataforma de marketing conversacional que automatiza o primeiro atendimento de leads imobiliários.",
    type: "API",
    logoBg: "bg-violet-600/10",
    logoTextColor: "text-violet-600",
    logoText: "LD",
    officialColor: "#8B5CF6"
  },
  {
    name: "imobflux",
    category: "Marketing & Ferramentas",
    description: "Distribuição ágil e rastreamento avançado de novos contatos para otimização de campanhas comerciais.",
    type: "API",
    logoBg: "bg-cyan-500/10",
    logoTextColor: "text-cyan-600",
    logoText: "IF",
    officialColor: "#14B8A6"
  },
  {
    name: "Olho Mágico",
    category: "Portais Imobiliários Nacionais",
    description: "Divulgação gratuita com o portal Olho Mágico permitindo visibilidade nacional sem taxas.",
    type: "XML / API",
    logoBg: "bg-amber-600/10",
    logoTextColor: "text-amber-600",
    logoText: "OM",
    officialColor: "#EC4899"
  },
  {
    name: "123i",
    category: "Portais Imobiliários Nacionais",
    description: "Portal inteligente de anúncios pagos com cobertura nacional e grande público investidor.",
    type: "XML",
    logoBg: "bg-zinc-600/10",
    logoTextColor: "text-zinc-600",
    logoText: "123",
    officialColor: "#4B5563"
  },
  {
    name: "321achei",
    category: "Portais Imobiliários Nacionais",
    description: "Classificados eficientes com alta flexibilidade de ofertas residenciais nacionais.",
    type: "XML",
    logoBg: "bg-stone-600/10",
    logoTextColor: "text-stone-600",
    logoText: "321",
    officialColor: "#78716C"
  },
  {
    name: "AlugarJa",
    category: "Portais Imobiliários Nacionais",
    description: "Portal vertical de alta tração focado especificamente em imóveis residenciais para locação.",
    type: "XML",
    logoBg: "bg-indigo-500/10",
    logoTextColor: "text-indigo-600",
    logoText: "AJ",
    officialColor: "#6366F1"
  },
  {
    name: "Casa Jaú",
    category: "Portais Imobiliários Regionais",
    description: "Portal líder de audiência com foco na cidade paulista de Jaú e municípios vizinhos.",
    type: "XML",
    logoBg: "bg-emerald-500/10",
    logoTextColor: "text-emerald-600",
    logoText: "CJ",
    officialColor: "#10B981"
  },
  {
    name: "Casa Mineira",
    category: "Portais Imobiliários Regionais",
    description: "Referência absoluta em aluguel e venda de imóveis de terceiros em Belo Horizonte/MG.",
    type: "XML",
    logoBg: "bg-amber-500/10",
    logoTextColor: "text-amber-600",
    logoText: "CM",
    officialColor: "#F59E0B"
  },
  {
    name: "Diario Imoveis",
    category: "Portais Imobiliários Regionais",
    description: "Portal focado regionalmente na cidade de São José do Rio Preto e toda a região noroeste de SP.",
    type: "XML",
    logoBg: "bg-red-500/10",
    logoTextColor: "text-red-600",
    logoText: "DI",
    officialColor: "#EF4444"
  },
  {
    name: "DF Imóveis",
    category: "Portais Imobiliários Regionais",
    description: "O maior e mais lembrado portal imobiliário especializado na região do Distrito Federal.",
    type: "XML",
    logoBg: "bg-blue-500/10",
    logoTextColor: "text-blue-600",
    logoText: "DF",
    officialColor: "#3B82F6"
  },
  {
    name: "Dream Casa",
    category: "Marketing & Ferramentas",
    description: "Gerador e qualificador de contatos imobiliários operando desde 2015 em todo o país.",
    type: "XML",
    logoBg: "bg-pink-500/10",
    logoTextColor: "text-pink-600",
    logoText: "DC",
    officialColor: "#EC4899"
  },
  {
    name: "Guia de Imóveis",
    category: "Portais Imobiliários Nacionais",
    description: "Plataforma gratuita de anúncios de casas e apartamentos para novos corretores.",
    type: "XML",
    logoBg: "bg-rose-500/10",
    logoTextColor: "text-rose-600",
    logoText: "GI",
    officialColor: "#F43F5E"
  },
  {
    name: "Guia Imóvel & Cia",
    category: "Portais Imobiliários Regionais",
    description: "Portal regional atuante na cobertura imobiliária de todas as cidades do Grande ABC paulista.",
    type: "XML",
    logoBg: "bg-teal-600/10",
    logoTextColor: "text-teal-600",
    logoText: "GC",
    officialColor: "#0D9488"
  },
  {
    name: "Guia de Imóveis IMB",
    category: "Portais Imobiliários Regionais",
    description: "Subportais focados em micro-regiões estratégicas de alta demanda em São Paulo.",
    type: "XML",
    logoBg: "bg-lime-600/10",
    logoTextColor: "text-lime-600",
    logoText: "IMB",
    officialColor: "#65A30D"
  },
  {
    name: "Grupo SP",
    category: "Portais Imobiliários Nacionais",
    description: "Portal nacional otimizado para anúncios de venda rápida e locação de imóveis prontos.",
    type: "XML / API",
    logoBg: "bg-indigo-400/10",
    logoTextColor: "text-indigo-600",
    logoText: "SP",
    officialColor: "#818CF8"
  },
  {
    name: "Loop Imóveis",
    category: "Portais Imobiliários Nacionais",
    description: "Portal nacional unificado integrando corretores de imóveis autônomos e construtoras.",
    type: "XML",
    logoBg: "bg-teal-400/10",
    logoTextColor: "text-teal-600",
    logoText: "LP",
    officialColor: "#2DD4BF"
  },
  {
    name: "Local do Imóvel",
    category: "Portais Imobiliários Nacionais",
    description: "Anúncios residenciais e comerciais pagos de ampla circulação nacional.",
    type: "XML",
    logoBg: "bg-cyan-400/10",
    logoTextColor: "text-cyan-600",
    logoText: "LI",
    officialColor: "#22D3EE"
  },
  {
    name: "Moving Imóveis",
    category: "Portais Imobiliários Nacionais",
    description: "Iniciativa do Grupo Estadão para promover negócios imobiliários seguros em todo o Brasil.",
    type: "XML",
    logoBg: "bg-violet-400/10",
    logoTextColor: "text-violet-600",
    logoText: "MV",
    officialColor: "#A78BFA"
  },
  {
    name: "Portal Lugar Certo",
    category: "Portais Imobiliários Regionais",
    description: "Líder regional pertencente aos Diários Associados no estado de Minas Gerais.",
    type: "XML",
    logoBg: "bg-orange-500/10",
    logoTextColor: "text-orange-600",
    logoText: "LC",
    officialColor: "#F97316"
  },
  {
    name: "Portais Imobiliários",
    category: "Portais Imobiliários Nacionais",
    description: "Rede de alta abrangência interligada a portais de mais de 270 cidades no Brasil.",
    type: "XML",
    logoBg: "bg-emerald-400/10",
    logoTextColor: "text-emerald-600",
    logoText: "PI",
    officialColor: "#34D399"
  },
  {
    name: "Trocalar",
    category: "Exclusivos & XML",
    description: "Portal de nicho especializado exclusivamente em permuta e troca amigável de imóveis.",
    type: "XML",
    logoBg: "bg-sky-400/10",
    logoTextColor: "text-sky-600",
    logoText: "TL",
    officialColor: "#38BDF8"
  },
  {
    name: "VC Busca",
    category: "Portais Imobiliários Nacionais",
    description: "Pesquisa avançada que localiza as melhores condições de aquisição no mercado digital.",
    type: "XML",
    logoBg: "bg-indigo-300/10",
    logoTextColor: "text-indigo-600",
    logoText: "VC",
    officialColor: "#A5B4FC"
  },
  {
    name: "WImoveis",
    category: "Portais Imobiliários Regionais",
    description: "Tradicional canal imobiliário especializado no Distrito Federal e no estado de Goiás.",
    type: "XML",
    logoBg: "bg-blue-400/10",
    logoTextColor: "text-blue-600",
    logoText: "WI",
    officialColor: "#60A5FA"
  },
  {
    name: "ZoopImoveis",
    category: "Portais Imobiliários Nacionais",
    description: "Portal otimizado para facilitação da jornada de novos compradores e corretores autônomos.",
    type: "XML",
    logoBg: "bg-fuchsia-600/10",
    logoTextColor: "text-fuchsia-600",
    logoText: "ZI",
    officialColor: "#C026D3"
  },
  {
    name: "Imóvel Guide",
    category: "Portais Imobiliários Nacionais",
    description: "Portal moderno voltado a casas e apartamentos de médio e alto padrão.",
    type: "XML",
    logoBg: "bg-rose-600/10",
    logoTextColor: "text-rose-600",
    logoText: "IG",
    officialColor: "#E11D48"
  },
  {
    name: "Microsistec By Zap",
    category: "Exclusivos & XML",
    description: "Formato de exportação inteligente otimizado e estruturado sob os critérios do Zap Imóveis.",
    type: "XML",
    logoBg: "bg-teal-700/10",
    logoTextColor: "text-teal-600",
    logoText: "MZ",
    officialColor: "#0F766E"
  },
  {
    name: "XML Microsistec",
    category: "Exclusivos & XML",
    description: "Exportador universal nativo compatível com qualquer portal ou agência parceira do mercado.",
    type: "XML",
    logoBg: "bg-neutral-600/10",
    logoTextColor: "text-neutral-600",
    logoText: "XML",
    officialColor: "#525252"
  },
  {
    name: "Chave Fácil",
    category: "Portais Imobiliários Nacionais",
    description: "Uma das plataformas mais modernas e performáticas para captação direta de locação e vendas.",
    type: "XML / API",
    logoBg: "bg-emerald-300/10",
    logoTextColor: "text-emerald-600",
    logoText: "CF",
    officialColor: "#6EE7B7"
  },
  {
    name: "Linklar",
    category: "Portais Imobiliários Nacionais",
    description: "Portal dinâmico com design limpo, focado em simplificar buscas de lançamentos.",
    type: "XML",
    logoBg: "bg-blue-300/10",
    logoTextColor: "text-blue-600",
    logoText: "LL",
    officialColor: "#93C5FD"
  },
  {
    name: "Storia Imóveis",
    category: "Portais Imobiliários Nacionais",
    description: "Portal focado em dados de vizinhança e informações qualificadas do imóvel de terceiros.",
    type: "XML",
    logoBg: "bg-orange-400/10",
    logoTextColor: "text-orange-600",
    logoText: "SI",
    officialColor: "#FB923C"
  },
  {
    name: "AchouMudou",
    category: "Portais Imobiliários Nacionais",
    description: "Plataforma focada em otimização de buscas de compra e mudança imediata.",
    type: "XML",
    logoBg: "bg-indigo-200/10",
    logoTextColor: "text-indigo-600",
    logoText: "AM",
    officialColor: "#C7D2FE"
  },
  {
    name: "Buskaza",
    category: "Portais Imobiliários Nacionais",
    description: "Portal simplificado integrando locação imobiliária de forma totalmente descomplicada.",
    type: "XML",
    logoBg: "bg-amber-400/10",
    logoTextColor: "text-amber-600",
    logoText: "BK",
    officialColor: "#FBBF24"
  },
  {
    name: "Epungo",
    category: "Portais Imobiliários Nacionais",
    description: "Classificados modernos de alta velocidade e indexação imediata nos buscadores.",
    type: "XML",
    logoBg: "bg-rose-400/10",
    logoTextColor: "text-rose-600",
    logoText: "EP",
    officialColor: "#FB7185"
  },
  {
    name: "Imocasa",
    category: "Portais Imobiliários Nacionais",
    description: "Canal eficiente integrando dezenas de imobiliárias e anúncios residenciais locais.",
    type: "XML",
    logoBg: "bg-teal-300/10",
    logoTextColor: "text-teal-600",
    logoText: "IC",
    officialColor: "#5EEAD4"
  }
];
