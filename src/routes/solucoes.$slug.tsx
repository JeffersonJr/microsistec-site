import { createFileRoute, notFound } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { solutions, getIconComponent, Solution, portalIntegrations, PortalIntegration } from "@/lib/data";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  Sparkles, 
  Bot, 
  Send, 
  User, 
  Smartphone, 
  Globe, 
  Laptop, 
  ExternalLink, 
  Palette, 
  Check, 
  Zap, 
  Shield, 
  Award, 
  ArrowUpRight, 
  Activity, 
  Gauge,
  Calendar,
  DollarSign,
  ShieldCheck
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/$slug")({
  head: ({ params }) => {
    const sol = solutions.find((s) => s.slug === params.slug);
    return {
      meta: [
        { title: sol ? `${sol.title} - Microsistec` : "Soluções Microsistec" },
        {
          name: "description",
          content: sol ? sol.shortDesc : "Explore as soluções de inteligência imobiliária da Microsistec.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const sol = solutions.find((s) => s.slug === params.slug);
    if (!sol) {
      throw notFound();
    }
    return sol;
  },
  component: SolucaoDetalhe,
});


/* ==========================================
   HOW IT WORKS — 3 steps por produto
   ========================================== */
const howItWorksData: Record<string, { title: string; steps: { n: string; title: string; desc: string }[] }> = {
  crm: {
    title: "Do cadastro ao fechamento em 3 passos",
    steps: [
      { n: "01", title: "Cadastre e organize", desc: "Adicione imóveis, proprietários e clientes em minutos. O sistema sugere categorias e otimiza as mídias automaticamente." },
      { n: "02", title: "Cruze e qualifique", desc: "O Smart Match identifica os leads com maior chance de compra para cada imóvel novo cadastrado e dispara alertas em tempo real." },
      { n: "03", title: "Acompanhe e feche", desc: "Visualize toda a jornada no funil, controle propostas, gere contratos em PDF e registre o fechamento com histórico completo." },
    ],
  },
  "albert-ia": {
    title: "Do lead ao agendamento em menos de 3 minutos",
    steps: [
      { n: "01", title: "Lead entra no WhatsApp", desc: "O Albert detecta automaticamente novos leads de qualquer fonte: portais, site, Instagram Ads ou número direto da imobiliária." },
      { n: "02", title: "Qualificação inteligente", desc: "Em conversa natural, o Albert coleta renda, entrada, FGTS, localização desejada e urgência, sem menus engessados." },
      { n: "03", title: "Repasse e agendamento", desc: "O lead qualificado é transferido ao corretor certo com toda a ficha preenchida e visita já agendada no CRM." },
    ],
  },
  app: {
    title: "Gestão imobiliária de qualquer lugar",
    steps: [
      { n: "01", title: "Instale em 2 minutos", desc: "Disponível para iOS e Android. Faça login com suas credenciais do CRM Microsistec e sincronize tudo automaticamente." },
      { n: "02", title: "Receba leads instantaneamente", desc: "Notificações push em tempo real ao chegar um novo lead de qualquer canal. Atenda antes que o concorrente." },
      { n: "03", title: "Trabalhe onde estiver", desc: "Acesse o funil, catálogo, histórico e agenda de visitas. Compartilhe lâminas no WhatsApp com um toque." },
    ],
  },
  /* === BACKUP MULTI-FUNIL ===
  funil: {
    title: "Crie a jornada certa para cada tipo de venda",
    steps: [
      { n: "01", title: "Crie seus funis", desc: "Crie funis separados para venda, locação, MCMV, alto padrão ou lançamento. Cada um com etapas, nomes e regras totalmente independentes." },
      { n: "02", title: "Configure as etapas", desc: "Adicione quantas etapas quiser em cada funil. Nomeie-as do jeito que a sua equipe fala: 'Visita Técnica', 'Simulação CEF', 'Proposta Formal'..." },
      { n: "03", title: "Acompanhe métricas por processo", desc: "Cada funil gera suas próprias métricas: conversão, tempo médio e previsão de receita. Compare MCMV com MCMV, alto padrão com alto padrão." },
    ],
  },
  */
  funil: {
    title: "Domine o processo de vendas de ponta a ponta",
    steps: [
      { n: "01", title: "Recomendações e Match", desc: "Receba recomendações de imóveis perfeitos de acordo com o perfil do lead através do nosso cruzamento de dados inteligente." },
      { n: "02", title: "Envios com um clique", desc: "Encaminhe as opções de imóveis selecionadas diretamente para o e-mail ou WhatsApp do cliente em segundos." },
      { n: "03", title: "Agenda e Termo de Visita", desc: "Marque as visitas na agenda do corretor e gere automaticamente o termo de visita em PDF para assinatura." },
    ],
  },
  integracoes: {
    title: "Conecte tudo em uma tarde",
    steps: [
      { n: "01", title: "Ative os portais", desc: "Selecione os portais parceiros no painel. Imóveis são enviados automaticamente via XML sem nenhum cadastro manual." },
      { n: "02", title: "Conecte WhatsApp e Meta", desc: "Configure a API oficial do WhatsApp Business e os Lead Ads do Facebook/Instagram. Leads chegam direto no CRM." },
      { n: "03", title: "Acompanhe tudo num painel", desc: "Visualize de onde vêm os leads, qual portal converte mais e quanto cada campanha gera em oportunidades reais." },
    ],
  },
  "sites-template": {
    title: "Do zero ao site publicado em 1 dia",
    steps: [
      { n: "01", title: "Escolha seu tema", desc: "São 15 templates de alta conversão. Escolha o que melhor combina com a identidade da sua imobiliária." },
      { n: "02", title: "Personalize", desc: "Adicione logo, cores, textos e imóveis da sua carteira. Tudo sincronizado automaticamente com o CRM." },
      { n: "03", title: "Publique no seu domínio", desc: "Configure o DNS e em minutos seu site imobiliário está no ar com SEO otimizado e formulários de captação ativos." },
    ],
  },
  "sites-v8": {
    title: "Do briefing ao site premium em 2 semanas",
    steps: [
      { n: "01", title: "Briefing e identidade", desc: "Nossa equipe faz um diagnóstico completo: nicho, público, concorrentes e objetivos de conversão da imobiliária." },
      { n: "02", title: "Design exclusivo", desc: "Criamos um layout único 100% personalizado com identidade visual, tipografia e paleta desenvolvidas para você." },
      { n: "03", title: "Entrega e performance", desc: "Site SSR nativo, nota máxima no PageSpeed, CDN Cloudflare e monitoramento contínuo de performance e SEO." },
    ],
  },
  rodizio: {
    title: "Distribuição justa e automática",
    steps: [
      { n: "01", title: "Configure as regras", desc: "Defina a sequência de corretores, especialidades por tipo de imóvel e janelas de plantão de atendimento." },
      { n: "02", title: "Lead chega, sistema distribui", desc: "Ao entrar um lead, o sistema identifica o próximo da fila, envia por WhatsApp e aguarda resposta com timeout configurável." },
      { n: "03", title: "Métricas de equidade", desc: "Relatórios em tempo real mostram quantos leads cada corretor recebeu, tempo de resposta e taxa de conversão." },
    ],
  },
};

function SolutionHowItWorks({ slug }: { slug: string }) {
  const data = howItWorksData[slug];
  if (!data) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      <div className="border-t border-[color:var(--brand-ink)]/8 pt-14 md:pt-20">
        <div className="space-y-3 mb-12">
          <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
            Como funciona
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {data.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line between steps */}
          <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-px bg-gradient-to-r from-[color:var(--brand-orange)]/20 via-[color:var(--brand-orange)]/40 to-[color:var(--brand-orange)]/20" />
          {data.steps.map((step, i) => (
            <div key={i} className="relative flex flex-col gap-4 p-7 rounded-2xl border border-[color:var(--brand-ink)]/7 bg-background hover:border-[color:var(--brand-orange)]/30 hover:shadow-soft transition-all duration-300 feature-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-orange)] flex items-center justify-center font-mono-ui text-sm font-bold shrink-0">
                  {step.n}
                </div>
                <div className="h-px flex-1 bg-[color:var(--brand-ink)]/8 md:hidden" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   IMPACT METRICS — 4 números por produto
   ========================================== */
const metricsData: Record<string, { value: string; label: string; sub: string }[]> = {
  crm:           [{ value: "40%", label: "mais produtividade", sub: "corretores ativos" }, { value: "3×", label: "mais velocidade", sub: "busca de imóveis" }, { value: "100%", label: "LGPD conforme", sub: "segurança de dados" }, { value: "30+", label: "anos de mercado", sub: "experiência validada" }],
  "albert-ia":   [{ value: "24/7", label: "atendimento", sub: "sem pausas" }, { value: "<3s", label: "tempo de resposta", sub: "média do Albert" }, { value: "300%", label: "mais velocidade", sub: "vs. atendimento humano" }, { value: "100%", label: "integrado", sub: "ao CRM Microsistec" }],
  app:           [{ value: "2×", label: "conversão", sub: "1º contato mais rápido" }, { value: "iOS + Android", label: "multiplataforma", sub: "nativo" }, { value: "100%", label: "sincronizado", sub: "em tempo real" }, { value: "Offline", label: "histórico disponível", sub: "sem internet" }],
  /* === BACKUP MULTI-FUNIL ===
  funil:         [{ value: "∞", label: "funis possíveis", sub: "sem limite" }, { value: "∞", label: "etapas por funil", sub: "total liberdade" }, { value: "100%", label: "métricas separadas", sub: "por processo" }, { value: "0", label: "leads misturados", sub: "cada negócio no lugar certo" }],
  */
  funil:         [{ value: "100%", label: "visual", sub: "interface kanban" }, { value: "Automático", label: "recomendações", sub: "match de imóveis" }, { value: "1 click", label: "envios", sub: "whatsapp e e-mail" }, { value: "Integrado", label: "agendamento", sub: "com termo de visita" }],
  integracoes:   [{ value: "40+", label: "portais", sub: "conectados" }, { value: "100%", label: "automático", sub: "sem cadastro manual" }, { value: "↓ 90%", label: "menos tempo", sub: "em publicações" }, { value: "Bidirecional", label: "sincronia", sub: "leads e anúncios" }],
  "sites-template": [{ value: "15", label: "temas", sub: "de alta conversão" }, { value: "1 dia", label: "para publicar", sub: "do zero ao ar" }, { value: "100%", label: "integrado", sub: "ao CRM Microsistec" }, { value: "SEO", label: "nativo", sub: "otimizado Google" }],
  "sites-v8":    [{ value: "98+", label: "PageSpeed", sub: "mobile e desktop" }, { value: "100%", label: "SEO score", sub: "técnico" }, { value: "CDN", label: "Cloudflare Edge", sub: "velocidade global" }, { value: "Custom", label: "design exclusivo", sub: "identidade única" }],
  rodizio:       [{ value: "<3min", label: "resposta média", sub: "com rodízio ativo" }, { value: "100%", label: "equidade", sub: "distribuição justa" }, { value: "↑ 42%", label: "conversão", sub: "1º contato" }, { value: "Round-Robin", label: "algoritmo", sub: "inteligente" }],
};

function SolutionMetrics({ slug }: { slug: string }) {
  const metrics = metricsData[slug];
  if (!metrics) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="relative bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-2xl px-5 py-8 flex flex-col items-center gap-1 text-center overflow-hidden group feature-card border border-[color:var(--brand-ink)]">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[color:var(--brand-orange)]/10 rounded-full" />
            <div className="text-3xl md:text-4xl font-extrabold text-[color:var(--brand-orange)] tracking-tight relative z-10">{m.value}</div>
            <div className="text-xs font-semibold text-[color:var(--brand-sand)] mt-1 relative z-10">{m.label}</div>
            <div className="text-[10px] text-[color:var(--brand-sand)]/50 font-mono-ui relative z-10">{m.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==========================================
   FOR WHO — perfis ideais por produto
   ========================================== */
const forWhoData: Record<string, { icon: string; title: string; desc: string }[]> = {
  crm: [
    { icon: "🏢", title: "Imobiliárias em crescimento", desc: "Que precisam organizar a carteira e escalar a equipe de corretores sem perder o controle." },
    { icon: "🔑", title: "Corretores autônomos", desc: "Que gerenciam múltiplos clientes e imóveis e querem profissionalizar o atendimento." },
    { icon: "📈", title: "Gestores e sócios", desc: "Que precisam de visibilidade real das métricas sem depender de planilhas." },
  ],
  "albert-ia": [
    { icon: "⚡", title: "Imobiliárias com alto volume de leads", desc: "Que recebem dezenas de leads por dia e não conseguem atender todos em tempo hábil." },
    { icon: "🌙", title: "Operações sem plantão 24h", desc: "Que perdem leads fora do horário comercial ou nos fins de semana." },
    { icon: "📊", title: "Incorporadoras e lançamentos", desc: "Que precisam qualificar e filtrar leads antes de acionar a equipe comercial." },
  ],
  app: [
    { icon: "🚗", title: "Corretores na rua", desc: "Que passam o dia fazendo visitas e precisam atualizar o CRM sem voltar ao escritório." },
    { icon: "📲", title: "Equipes ágeis e mobile-first", desc: "Que preferem operar 100% pelo smartphone com notificações instantâneas de leads." },
    { icon: "🏃", title: "Profissionais de alta performance", desc: "Que querem ser o primeiro a responder um lead e fechar mais rápido que a concorrência." },
  ],
  funil: [
    { icon: "🏆", title: "Imobiliárias multi-nicho", desc: "Que trabalham com MCMV, alto padrão e locação ao mesmo tempo e precisam de métricas separadas por processo." },
    { icon: "📋", title: "Gestores com times segmentados", desc: "Que têm equipes distintas por produto e querem acompanhar a performance de cada time de forma independente." },
    { icon: "🎯", title: "Incorporadoras e lançamentos", desc: "Que têm um processo comercial para pré-lançamento totalmente diferente das vendas do estoque disponível." },
  ],
  integracoes: [
    { icon: "🌐", title: "Imobiliárias com múltiplos portais", desc: "Que atualizam imóveis manualmente em vários portais e perdem horas toda semana." },
    { icon: "📱", title: "Operações com tráfego pago", desc: "Que investem em Facebook/Instagram Ads e precisam capturar leads direto no CRM." },
    { icon: "🤝", title: "Imobiliárias que usam WhatsApp", desc: "Que querem centralizar atendimento via WhatsApp integrado ao histórico do cliente." },
  ],
  "sites-template": [
    { icon: "🚀", title: "Imobiliárias que precisam lançar rápido", desc: "Que precisam de um site profissional no ar em um dia sem esperar desenvolvimento customizado." },
    { icon: "💡", title: "Corretores autônomos", desc: "Que querem ter um portal próprio de imóveis com formulário de captação e SEO básico." },
    { icon: "🏗️", title: "Imobiliárias de médio porte", desc: "Que buscam custo-benefício alto com templates modernos e integração imediata ao CRM." },
  ],
  "sites-v8": [
    { icon: "⭐", title: "Alto padrão e lançamentos", desc: "Que trabalham com imóveis de luxo e precisam de um site que transmita exclusividade." },
    { icon: "📊", title: "SEO como estratégia", desc: "Que querem capturar leads orgânicos do Google com conteúdo e performance técnica impecáveis." },
    { icon: "🏆", title: "Grandes imobiliárias", desc: "Com catálogos extensos, múltiplas equipes e necessidade de integrações customizadas." },
  ],
  rodizio: [
    { icon: "⚖️", title: "Equipes com conflito de leads", desc: "Onde corretores brigam por leads ou alguns ficam sem atendimento e outros sobrecarregados." },
    { icon: "🎪", title: "Plantão de atendimento", desc: "Que precisam distribuir leads automaticamente conforme o horário e disponibilidade de cada corretor." },
    { icon: "📈", title: "Gerentes focados em dados", desc: "Que querem medir tempo de resposta e taxa de conversão por corretor para tomada de decisão." },
  ],
};

function SolutionForWho({ slug }: { slug: string }) {
  const profiles = forWhoData[slug];
  if (!profiles) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
      <div className="mb-8">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
          Para quem é
        </span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {profiles.map((p, i) => (
          <div key={i} className="group p-6 rounded-2xl border border-[color:var(--brand-ink)]/7 bg-gradient-to-br from-[color:var(--brand-sand)]/40 to-background hover:from-background hover:border-[color:var(--brand-orange)]/25 hover:shadow-soft transition-all duration-300 feature-card">
            <span className="text-3xl block mb-4">{p.icon}</span>
            <h3 className="font-bold text-sm mb-2 group-hover:text-[color:var(--brand-orange)] transition-colors duration-200">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==========================================
   FAQ — Accordion por produto
   ========================================== */
const faqData: Record<string, { q: string; a: string }[]> = {
  crm: [
    { q: "Quanto tempo leva para migrar dados do meu sistema atual?", a: "A migração é feita pela nossa equipe de onboarding em 3 a 9 dias úteis, dependendo da plataforma de origem e da qualidade dos dados exportados. Importamos imóveis, clientes e histórico de forma segura sem perda de dados." },
    { q: "Funciona para imobiliária de locação e venda?", a: "Sim. O CRM possui módulos para gestão de venda. Para locação, consulte nossa equipe para verificar a disponibilidade dos módulos de locação e as opções de integração." },
    { q: "Quantos usuários posso cadastrar?", a: "Depende do plano. Temos planos para corretores autônomos até grandes imobiliárias com equipes ilimitadas. Consulte nossa tabela de planos." },
    { q: "O sistema funciona offline?", a: "A plataforma web requer conexão. O app mobile mantém histórico e dados em cache offline, sincronizando ao reconectar." },
    { q: "Tem integração com portais como ZAP e Viva Real?", a: "Sim. Integramos com mais de 40 portais nacionais e regionais, Facebook Lead Ads, Google e WhatsApp Business. Tudo centralizado no CRM." },
  ],
  "albert-ia": [
    { q: "Quanto tempo leva para configurar o Albert?", a: "O processo de onboarding dura em média de 5 a 15 dias úteis, dependendo da complexidade da operação. Nossa equipe coleta seu script, tone of voice e catálogo de imóveis para treinar o Albert." },
    { q: "O Albert substitui o corretor?", a: "Não. O Albert é um SDR — ele qualifica e agenda, mas o corretor fecha. O objetivo é liberar o time para o que importa: negociar e fechar." },
    { q: "Em quais plataformas o Albert atua?", a: "Atualmente via WhatsApp Business (API oficial) e no site da imobiliária. Novas integrações estão em roadmap." },
    { q: "O que acontece se o lead fizer uma pergunta que o Albert não sabe?", a: "O Albert reconhece limitações e transfere o lead para um corretor humano de forma transparente, sem frustrar o cliente." },
    { q: "O Albert funciona 24 horas por dia, inclusive fins de semana?", a: "Sim. O Albert atende 365 dias por ano, 24 horas por dia, sem pausas, feriados ou plantões extras." },
  ],
  app: [
    { q: "O app é gratuito?", a: "O app está incluído nos planos do CRM Microsistec sem custo adicional. Disponível para iOS e Android." },
    { q: "Posso usar o app sem o CRM web?", a: "Não. O app é uma extensão mobile do CRM e requer conta ativa na plataforma." },
    { q: "O app sincroniza em tempo real?", a: "Sim. Qualquer ação no app é sincronizada instantaneamente com a plataforma web e vice-versa." },
    { q: "Funciona no iPhone e Android?", a: "Sim. O app está disponível na App Store (iOS) e Google Play (Android), com paridade de funcionalidades." },
    { q: "Como recebo notificações de novos leads?", a: "Por push notifications nativas do sistema operacional. Você recebe o alerta mesmo com o app fechado." },
  ],
  funil: [
    { q: "Quantos funis posso criar?", a: "Não há limite. Você pode criar quantos funis quiser: venda de imóveis residenciais, locação, lançamentos, MCMV, alto padrão, comercial e muito mais." },
    { q: "As etapas de cada funil são diferentes?", a: "Sim. Cada funil tem suas próprias etapas totalmente independentes. O funil de MCMV pode ter 'Simulação CEF' e 'Aprovação Bancária', enquanto o alto padrão tem 'Visita Técnica' e 'Carta de Crédito'. Você nomeia do jeito que a sua equipe fala." },
    { q: "As métricas de conversão são separadas por funil?", a: "Sim. Cada funil gera seus próprios relatórios de conversão, tempo médio por etapa e previsão de receita. Isso evita que dados de MCMV (alta conversão, ticket baixo) distorçam os resultados de alto padrão (baixa conversão, ticket alto)." },
    { q: "Posso ter corretores diferentes por funil?", a: "Sim. Cada funil pode ter responsáveis configurados de forma independente, permitindo que você tenha equipes especializadas por tipo de produto." },
    { q: "O funil funciona em conjunto com o Albert IA?", a: "Sim. O Albert qualifica o lead e o registra automaticamente no funil correto baseado no interesse demonstrado. Um lead interessado em MCMV vai para o funil MCMV; um lead de alto padrão vai para o funil certo." },
  ],
  integracoes: [
    { q: "Quais portais estão disponíveis para integração?", a: "Mais de 40 portais, incluindo ZAP Imóveis, Viva Real, OLX, Imovelweb, Mercado Livre, Chaves na Mão e portais regionais." },
    { q: "A sincronização é bidirecional?", a: "Sim. Imóveis cadastrados no CRM são enviados para os portais. Leads recebidos nos portais chegam ao CRM automaticamente." },
    { q: "Preciso pagar extra pelo WhatsApp Business?", a: "A integração com a API oficial do WhatsApp tem um custo de conversação conforme a tabela da Meta. A integração com nosso sistema não tem custo adicional." },
    { q: "Funciona com Facebook Lead Ads?", a: "Sim. Leads gerados em campanhas do Facebook chegam direto ao CRM sem precisar exportar planilhas. A integração com Instagram Lead Ads está em breve." },
    { q: "Os imóveis sobem automaticamente nos portais?", a: "Sim. Ao cadastrar ou atualizar um imóvel no CRM, as alterações são enviadas automaticamente para todos os portais configurados." },
  ],
  "sites-template": [
    { q: "Preciso de conhecimento técnico para instalar?", a: "Não. Nossa equipe faz a instalação completa. Você só precisa ter um domínio registrado e apontar o DNS conforme nossa orientação." },
    { q: "Posso trocar de tema depois?", a: "Sim. A migração de tema é feita pela equipe técnica sem perda de dados. Disponível mediante solicitação." },
    { q: "O site atualiza os imóveis automaticamente do CRM?", a: "Sim. Toda vez que você adiciona ou atualiza um imóvel no CRM, o site reflete as mudanças automaticamente." },
    { q: "Os formulários do site vão para o CRM?", a: "Sim. Todos os formulários de contato e interesse do site criam leads automaticamente no CRM com origem identificada." },
    { q: "O site é otimizado para SEO?", a: "Sim. Todos os temas são otimizados com meta tags, sitemap, URLs amigáveis e velocidade de carregamento adequada para Google." },
  ],
  "sites-v8": [
    { q: "Qual o prazo de entrega de um site V8?", a: "Em média 2 a 3 semanas do briefing à entrega, dependendo da complexidade e aprovações do cliente." },
    { q: "O site V8 é hospedado pela Microsistec?", a: "Sim. Hospedagem, CDN Cloudflare, certificado SSL e monitoramento de performance estão incluídos no plano." },
    { q: "Posso ter integrações customizadas?", a: "Sim. Sites V8 permitem integrações com CRMs externos, sistemas de gestão de condomínios e APIs personalizadas." },
    { q: "Como é feita a manutenção do site?", a: "Oferecemos pacotes de suporte mensal com atualizações de conteúdo, ajustes de layout e monitoramento técnico." },
    { q: "O site V8 é diferente dos temas prontos?", a: "Totalmente. O V8 é um projeto exclusivo com design 100% personalizado, enquanto os templates são modelos pré-formatados prontos para uso." },
  ],
  rodizio: [
    { q: "O rodízio funciona para qualquer quantidade de corretores?", a: "Sim. Funciona desde equipes de 2 corretores até grandes operações com dezenas de profissionais em múltiplas filiais." },
    { q: "O que acontece se o corretor não responder ao lead?", a: "Após o timeout configurado, o sistema passa o lead automaticamente para o próximo da fila e notifica o gestor sobre o no-show." },
    { q: "Posso configurar regras por especialidade?", a: "Sim. Você pode definir que leads de lançamentos vão para corretores específicos, e leads de locação para outros." },
    { q: "O corretor em férias ou folga é pulado?", a: "Sim. O corretor pode marcar seu status como 'férias' ou 'folga' e o sistema o exclui automaticamente da fila de distribuição." },
    { q: "Como funciona o rodízio fora do horário comercial?", a: "Você configura um plantão de atendimento. Fora do plantão, o Albert IA pode atender e qualificar o lead até o próximo corretor disponível." },
  ],
};

function SolutionFAQ({ slug }: { slug: string }) {
  const faqs = faqData[slug];
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  if (!faqs) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      <div className="mb-8">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
          Perguntas frequentes
        </span>
      </div>

      <div className="divide-y divide-[color:var(--brand-ink)]/7">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent border-none py-1 group"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-[color:var(--brand-orange)] transition-colors duration-200">
                  {faq.q}
                </span>
                <span
                  className="text-[color:var(--brand-orange)] shrink-0 transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className="faq-content"
                style={{
                  maxHeight: isOpen ? "400px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed pt-3 pb-1">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SolucaoDetalhe() {
  const sol = Route.useLoaderData() as Solution;
  const { openModal } = useDemoModal();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("Todos");

  const filteredPortals = portalIntegrations.filter((portal) => {
    const matchesSearch =
      portal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portal.description.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesCategory = true;
    if (activeCategory === "Nacionais") {
      matchesCategory = portal.category === "Portais Imobiliários Nacionais";
    } else if (activeCategory === "Regionais") {
      matchesCategory = portal.category === "Portais Imobiliários Regionais";
    } else if (activeCategory === "Marketing") {
      matchesCategory = portal.category === "Marketing & Ferramentas";
    } else if (activeCategory === "Exclusivos") {
      matchesCategory = portal.category === "Exclusivos & XML";
    }

    return matchesSearch && matchesCategory;
  });

  const IconComp = getIconComponent(sol.iconName);

  const getFeaturesTitle = (s: string, defaultTitle: string) => {
    switch (s) {
      case "crm": return "Gestão Imobiliária e Automação de Ponta a Ponta";
      case "app": return "O poder do CRM na palma da sua mão";
      /* case "funil": return "Acelere negócios com um funil de vendas inteligente"; */
      case "funil": return "Acelere negócios com um funil de vendas inteligente";
      case "integracoes": return "Conectividade total com portais, WhatsApp e Meta";
      case "albert-ia": return "Conheça o SDR que nunca dorme e não perde leads";
      case "sites-template": return "Seu site imobiliário no ar em tempo recorde";
      case "sites-v8": return "Presença digital única e de altíssima performance";
      case "rodizio": return "Distribuição justa e automática de leads";
      default: return `Recursos e Funcionalidades do ${defaultTitle}`;
    }
  };

  const getFeatureCardTitle = (slug: string, idx: number) => {
    const titles: Record<string, string[]> = {
      "crm": ["Smart Match", "Cadastro Ágil", "Gestão de Acessos", "Documentos Automatizados", "Timeline do Cliente"],
      "app": ["Notificações em Tempo Real", "Portabilidade Total", "Compartilhamento Ágil", "Agenda na Palma da Mão", "Sincronização Imediata"],
      /* "funil": ["Multi-Funil Ilimitado", "Etapas por Negócio", "Arrastar e Soltar", "Métricas Independentes", "Alertas por Funil", "Painel Consolidado"], */
      "funil": ["Kanban Visual", "Match de Imóveis", "Envio via WhatsApp", "Envio por E-mail", "Agendamento", "Termo de Visita"],
      "integracoes": ["Sincronia Bidirecional", "Atendimento via WhatsApp", "Captura Inteligente no Meta", "Painel Unificado", "Distribuição Automática"],
      "albert-ia": ["Qualificação Precisa", "Agendamento Autônomo", "Domínio de Empreendimentos", "Transferência Fluida", "Atendimento 24/7"],
      "sites-template": ["Design Adaptável", "Otimização para Buscas (SEO)", "Pesquisa Refinada", "Captação de Alta Conversão", "Implantação Expressa"],
      "sites-v8": ["Performance Extrema", "Identidade Exclusiva", "Integrações Customizadas", "Acompanhamento Dedicado", "Arquitetura Escalável"],
      "rodizio": ["Distribuição Equilibrada", "Regras por Performance", "Transparência de Fila", "Redirecionamento Ágil", "Métricas de Eficiência"],
      "locacao": ["Controle de Inadimplência", "Vistorias Digitais", "Repasses Automáticos", "Gestão de Contratos", "Portal do Inquilino"]
    };
    return titles[slug]?.[idx] || "Recurso Exclusivo";
  };

  // Custom subsection renderer
  const renderCustomSection = () => {
    switch (sol.slug) {
      case "albert-ia":
        return <AlbertIASubSection openModal={openModal} />;
      case "sites-template":
        return <SitesTemplateSubSection openModal={openModal} />;
      case "sites-v8":
        return <SitesV8SubSection openModal={openModal} />;
      case "crm":
        return <CRMSubSection />;
      case "app":
        return <AppSubSection />;
      case "funil":
        return <FunilSubSection />;
      case "rodizio":
        return <RodizioSubSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        {/* Solution Hero */}
        <section className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[color:var(--brand-ink)]/8">
          <div className="bg-grid absolute inset-0" />
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Link title="Página Inicial da Microsistec" to="/" className="text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition text-muted-foreground">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              <Link title="Acessar link" to="/solucoes" className="text-xs font-mono-ui uppercase text-[color:var(--brand-orange)]/80 hover:text-[color:var(--brand-orange)] transition">
                Soluções
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              <span className="text-xs font-mono-ui uppercase text-muted-foreground">
                {sol.title}
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-3">
                  {sol.slug === "albert-ia" ? (
                    <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-2.5 border border-[color:var(--brand-ink)]/10 shadow-soft flex items-center justify-center max-w-[180px]">
                      <img src="/albert-logo.png" alt="Albert IA" title="Albert IA - Inteligência Artificial" width={100} height={32} fetchPriority="high" className="h-8 w-auto object-contain" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[color:var(--brand-orange)]" />
                    </div>
                  )}
                  <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
                    Produto Exclusivo
                  </span>
                </div>
                
                <h1 className="font-extrabold tracking-[-0.045em] leading-[0.97] text-[clamp(2.4rem,5vw,3.8rem)]">
                  {sol.title}
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-serif-italic">
                  {sol.shortDesc}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sol.longDesc}
                </p>

                <div className="pt-2">
                  {sol.slug === "albert-ia" ? (
                    <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft decoration-none no-underline"
                    >
                      {sol.ctaText} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : sol.slug === "app" ? (
                    <a title="Acessar link" href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
                        if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !(window as any).MSStream) {
                          window.open("https://apps.apple.com/us/app/microsistec-leads/id1550404156", "_blank");
                        } else {
                          window.open("https://play.google.com/store/apps/details?id=br.com.microsistec.mercury&hl=pt_BR", "_blank");
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft decoration-none no-underline"
                    >
                      {sol.ctaText} <Smartphone className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={openModal}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft"
                    >
                      {sol.ctaText} <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="md:col-span-4 bg-background border border-[color:var(--brand-ink)]/8 rounded-2xl p-6 shadow-soft space-y-5 md:sticky md:top-20">
                <h4 className="font-bold text-xs uppercase font-mono-ui text-muted-foreground/70 tracking-widest pb-3 border-b border-[color:var(--brand-ink)]/6">
                  Vantagens
                </h4>
                <ul className="space-y-3">
                  {sol.benefits.map((b: string, idx: number) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-foreground/75">
                      <CheckCircle2 className="w-4 h-4 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Grid */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="space-y-4 mb-12">
            <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
              O que está incluso
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {getFeaturesTitle(sol.slug, sol.title)}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sol.features.map((f: string, idx: number) => (
              <div 
                key={idx} 
                className="feature-card flex items-start gap-4 p-6 rounded-2xl border border-[color:var(--brand-ink)]/7 bg-background hover:border-[color:var(--brand-orange)]/25 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[color:var(--brand-orange)]/8 text-[color:var(--brand-orange)] flex items-center justify-center shrink-0 font-mono-ui text-xs font-bold">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {getFeatureCardTitle(sol.slug, idx)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Custom Subsection Injection */}
        {renderCustomSection()}

        {/* How it Works + Metrics + For Who + FAQ */}
        <SolutionHowItWorks slug={sol.slug} />
        <SolutionMetrics slug={sol.slug} />
        <SolutionForWho slug={sol.slug} />
        <SolutionFAQ slug={sol.slug} />

        {sol.slug === "integracoes" && (

          <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
            <div className="border-t border-[color:var(--brand-ink)]/10 pt-16 md:pt-24 space-y-8">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div className="space-y-6 max-w-lg">
                  <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
                    Ecossistema Completo
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Mais de 40 portais e ferramentas integradas
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sincronize seus imóveis automaticamente com os maiores players do mercado. Sem cadastros manuais repetitivos, sem perda de tempo.
                  </p>
                </div>

                {/* Search input */}
                <div className="relative w-full md:w-72 shrink-0">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar portal ou ferramenta..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-[color:var(--brand-ink)]/15 focus:outline-none focus:ring-1 focus:ring-[color:var(--brand-orange)] focus:border-[color:var(--brand-orange)] rounded-full text-xs font-medium"
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 pb-4 border-b border-[color:var(--brand-ink)]/10">
                {["Todos", "Nacionais", "Regionais", "Marketing", "Exclusivos"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${
                      activeCategory === cat
                        ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-[color:var(--brand-ink)]"
                        : "bg-background text-muted-foreground border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)] hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid of Portals */}
              {filteredPortals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPortals.map((portal) => (
                    <div
                      key={portal.name}
                      style={{ "--brand-accent-color": portal.officialColor } as React.CSSProperties}
                      className="group relative flex flex-col p-5 bg-[color:var(--brand-sand)]/20 hover:bg-background border border-[color:var(--brand-ink)]/10 hover:border-[var(--brand-accent-color)]/30 rounded-2xl transition-all duration-300 shadow-soft overflow-hidden"
                    >
                      {/* Brand accent top stripe or glow on hover */}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[var(--brand-accent-color)] transition-all duration-300" />
                      
                      {/* Logo and Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shadow-sm ${portal.logoBg} ${portal.logoTextColor}`}
                        >
                          {portal.logoText}
                        </div>
                        <span className={`text-[9px] font-mono-ui font-bold px-2 py-0.5 rounded-full ${
                          portal.type === "Em Breve"
                            ? "bg-amber-100 text-amber-800"
                            : portal.type === "API"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-emerald-100 text-emerald-800"
                        }`}>
                          {portal.type}
                        </span>
                      </div>

                      {/* Info */}
                      <h3 className="font-bold text-sm text-foreground group-hover:text-[color:var(--brand-orange)] transition-colors duration-200">
                        {portal.name}
                      </h3>
                      
                      <span className="text-[10px] text-[color:var(--brand-orange)] font-mono-ui font-semibold mt-1">
                        {portal.category}
                      </span>
                      
                      <p className="text-xs text-muted-foreground mt-3 leading-relaxed flex-grow">
                        {portal.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-[color:var(--brand-ink)]/15 rounded-2xl space-y-2">
                  <h4 className="font-bold text-foreground text-sm">Nenhum portal encontrado</h4>
                  <p className="text-xs text-muted-foreground">Tente buscar por termos diferentes ou selecione outra categoria.</p>
                </div>
              )}

            </div>
          </section>
        )}

        {/* CTA section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[color:var(--brand-ink)]" />
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(60% 50% at 80% 0%, oklch(0.7 0.19 45 / 0.5), transparent 60%), radial-gradient(50% 40% at 20% 100%, oklch(0.623 0.106 195.8 / 0.4), transparent 60%)" }}
          />
          <div className="bg-grid absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-4xl px-6 text-center space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/15 bg-[color:var(--brand-sand)]/8 px-4 py-1.5 text-sm text-[color:var(--brand-sand)]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)] animate-pulse" />
              Comece hoje, sem burocracia
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[color:var(--brand-sand)] leading-[1.02]">
              Comece a usar o{" "}
              <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">{sol.title}</span>
              {" "}hoje mesmo
            </h2>
            <p className="text-base text-[color:var(--brand-sand)]/60 max-w-md mx-auto">
              Experimente toda a inteligência e automação da Microsistec. Leva menos de 30 segundos para configurar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {sol.slug === "albert-ia" ? (
                <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-9 py-4 font-bold text-base hover:scale-[1.03] transition-transform cursor-pointer border-none shadow-elev decoration-none no-underline"
                >
                  Converse com o Albert agora <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-9 py-4 font-bold text-base hover:scale-[1.03] transition-transform cursor-pointer border-none shadow-elev"
                >
                  Ativar Teste 14 Dias Grátis <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <a title="Acessar link" href="/solucoes"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/20 text-[color:var(--brand-sand)]/70 px-7 py-4 font-medium text-base hover:bg-[color:var(--brand-sand)]/10 transition decoration-none no-underline"
              >
                Ver todas as soluções
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ==========================================
   CUSTOM COMPONENT 1: ALBERT IA SUBSECTION
   ========================================== */
interface ChatMessage {
  sender: "albert" | "user";
  text: string;
  options?: { label: string; actionStep: number }[];
}

function AlbertIASubSection({ openModal }: { openModal: () => void }) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [chatHistory, setChatHistory] = React.useState<ChatMessage[]>([
    {
      sender: "albert",
      text: "Olá! Sou o Albert, assistente inteligente da Microsistec. Vi que se interessou pela cobertura duplex de R$ 980.000 no Gonzaga. Gostaria de agendar uma visita ou prefere simular as parcelas?",
      options: [
        { label: "Simular financiamento", actionStep: 1 },
        { label: "Agendar visita direta", actionStep: 4 }
      ]
    }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const handleOptionClick = (label: string, nextStep: number) => {
    // Add user response
    const newUserMsg: ChatMessage = { sender: "user", text: label };
    setChatHistory((prev) => [...prev, newUserMsg]);
    setCurrentStep(nextStep);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let albertMsg: ChatMessage;

      if (nextStep === 1) {
        albertMsg = {
          sender: "albert",
          text: "Excelente! Para fazermos uma simulação precisa: qual o valor aproximado que você planeja dar de entrada?",
          options: [
            { label: "R$ 200.000 de entrada", actionStep: 2 },
            { label: "R$ 300.000 ou mais", actionStep: 2 }
          ]
        };
      } else if (nextStep === 2) {
        albertMsg = {
          sender: "albert",
          text: "Perfeito! E você possui saldo de FGTS ativo que gostaria de usar para somar na entrada e reduzir as parcelas?",
          options: [
            { label: "Sim, R$ 40.000 de FGTS", actionStep: 3 },
            { label: "Não pretendo usar FGTS", actionStep: 3 }
          ]
        };
      } else if (nextStep === 3) {
        albertMsg = {
          sender: "albert",
          text: "Sensacional! Consolidei R$ 240.000 de entrada total, restando R$ 740.000 a financiar. Pela tabela SAC, as parcelas ficariam em média R$ 5.800/mês. Posso enviar a ficha formal para nossa gerência de crédito e já pré-agendar sua visita no sábado às 10h?",
          options: [
            { label: "Sim, agendar visita!", actionStep: 4 },
            { label: "Falar com corretor humano", actionStep: 4 }
          ]
        };
      } else {
        albertMsg = {
          sender: "albert",
          text: "Ficha qualificada enviada e visita pré-agendada no CRM da imobiliária! 🚀 Um especialista em crédito entrará em contato em instantes para enviar a proposta. O Albert garante atendimento 24/7 sem que você precise levantar um dedo!",
          options: []
        };
      }

      setChatHistory((prev) => [...prev, albertMsg]);
    }, 1200);
  };

  const resetChat = () => {
    setCurrentStep(0);
    setChatHistory([
      {
        sender: "albert",
        text: "Olá! Sou o Albert, assistente inteligente da Microsistec. Vi que se interessou pela cobertura duplex de R$ 980.000 no Gonzaga. Gostaria de agendar uma visita ou prefere simular as parcelas?",
        options: [
          { label: "Simular financiamento", actionStep: 1 },
          { label: "Agendar visita direta", actionStep: 4 }
        ]
      }
    ]);
  };

  const albertCapabilities = [
    { icon: "🧠", title: "IA personalizada para sua imobiliária", desc: "O Albert é treinado sob medida com os dados, tom de voz e roteiro comercial da sua empresa. Ele não é genérico, ele é o clone do seu melhor SDR." },
    { icon: "💬", title: "Atendimento via WhatsApp 24/7", desc: "Atende leads automaticamente pelo WhatsApp com diálogos livres, naturais e consultivos. Sem menus engessados, sem frustrações." },
    { icon: "🎯", title: "Qualificação financeira inteligente", desc: "Identifica renda, entrada, FGTS e capacidade de financiamento do lead antes mesmo do corretor entrar na conversa." },
    { icon: "📅", title: "Agendamento automático de visitas", desc: "Cruza disponibilidade de corretores e preferências do cliente para agendar visitas direto no CRM, sem intervenção humana." },
    { icon: "🔗", title: "Integração total com o CRM", desc: "Toda conversa, qualificação e agendamento é registrado automaticamente na ficha do lead dentro do CRM Microsistec." },
    { icon: "📊", title: "Relatórios de atendimento", desc: "Dashboard com métricas de atendimento, tempo médio de resposta, taxa de qualificação e conversão por período." },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
        
          {/* Texts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] text-xs font-mono-ui font-bold">
              <Bot className="w-3.5 h-3.5" /> Interatividade Real
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Veja o Albert IA operando em tempo real
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interaja com o simulador de WhatsApp ao lado. O Albert atende com empatia linguística, faz cruzamento de dados, qualificação bancária de crédito e agenda visitas integradas diretamente no CRM da sua imobiliária, 24 horas por dia.
            </p>

            {/* Comparison */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase font-mono-ui text-foreground tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15">
                Por que ele é diferente de chatbots comuns?
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-3 bg-red-50/40 rounded-xl border border-red-100">
                  <span className="font-bold text-red-700 block mb-1">Chatbot Tradicional</span>
                  Menu engessado de botões, sem contexto humano e frustrante para o cliente final.
                </div>
                <div className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-700 block mb-1">Albert IA</span>
                  Diálogos dinâmicos livres, tom consultivo, entendimento de renda, entrada e agendamento inteligente.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={resetChat} 
                className="text-xs font-mono-ui font-bold text-[color:var(--brand-orange)] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Reiniciar Simulação ↻
              </button>
            </div>
          </div>

          {/* WhatsApp Mockup */}
          <div className="lg:col-span-7 bg-[color:var(--brand-sand)]/60 rounded-3xl p-4 border border-[color:var(--brand-ink)]/15 shadow-soft relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
          
            {/* Mockup Header */}
            <div className="flex items-center gap-3 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-4 rounded-2xl mb-4 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-[color:var(--brand-sand)]/20 p-1 flex items-center justify-center">
                <img src="/albert-logo.png" alt="Albert" title="Albert - Assistente Virtual" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <div className="font-bold text-sm flex items-center gap-1">
                  Albert IA <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                </div>
                <div className="text-[10px] text-[color:var(--brand-sand)]/70">Atendimento Imobiliário Oficial</div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="stamp text-[color:var(--brand-orange)] text-[9px] border-[color:var(--brand-orange)]/30 font-bold">24h ONLINE</span>
              </div>
            </div>

            {/* Messages area */}
            <div className="h-[360px] overflow-y-auto space-y-3 px-2 py-4 bg-background/50 rounded-2xl border border-[color:var(--brand-ink)]/5 flex flex-col justify-end">
              <div className="overflow-y-auto space-y-3 pr-1">
                {chatHistory.map((msg, index) => (
                  <div 
                    key={index}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.sender === "user" 
                          ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-tr-none" 
                          : "bg-[color:var(--brand-sand)] text-foreground border border-[color:var(--brand-ink)]/10 rounded-tl-none shadow-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                      <span className="text-[9px] text-muted-foreground/60 mt-1 block text-right">
                        Hoje, {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[color:var(--brand-sand)] rounded-2xl rounded-tl-none p-3 border border-[color:var(--brand-ink)]/10 flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Options Buttons */}
            <div className="mt-4 p-2 bg-background/80 rounded-2xl border border-[color:var(--brand-ink)]/10 min-h-[60px] flex flex-wrap items-center justify-center gap-2">
              {!isTyping && chatHistory[chatHistory.length - 1]?.options && chatHistory[chatHistory.length - 1].options!.length > 0 ? (
                chatHistory[chatHistory.length - 1].options!.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt.label, opt.actionStep)}
                    className="bg-background hover:bg-[color:var(--brand-sand)] text-foreground border border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)] px-4 py-2 rounded-full text-xs font-bold transition shadow-sm cursor-pointer"
                  >
                    {opt.label}
                  </button>
                ))
              ) : !isTyping && currentStep === 4 ? (
                <button
                  onClick={openModal}
                  className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] text-[color:var(--brand-ink)] px-6 py-2.5 rounded-full text-xs font-extrabold transition shadow-elev cursor-pointer flex items-center gap-1"
                >
                  Conectar Minha Imobiliária Agora <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="text-xs text-muted-foreground/60 italic font-mono-ui">
                  Albert digitando... aguarde a resposta
                </span>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Albert capabilities section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="space-y-6 mb-14 text-center max-w-2xl mx-auto">
          <span className="stamp text-[color:var(--brand-orange)] text-[10px] inline-block">
            A única IA para imobiliárias com um coração
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            O clone do seu melhor SDR
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Chega de soluções genéricas. O Albert é uma IA personalizada que atua como um clone do seu melhor SDR. Uma solução montada sob medida para sua imobiliária com tom de voz, conhecimento dos empreendimentos e roteiro comercial exclusivos.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {albertCapabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 hover:bg-background hover:border-[color:var(--brand-orange)]/30 transition duration-300 group"
            >
              <span className="text-2xl shrink-0 mt-0.5">{cap.icon}</span>
              <div>
                <h3 className="font-bold text-sm text-foreground group-hover:text-[color:var(--brand-orange)] transition mb-1">
                  {cap.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-5 bg-[color:var(--brand-sand)]/40 rounded-2xl border border-[color:var(--brand-ink)]/5">
            <div className="text-3xl font-extrabold text-[color:var(--brand-orange)]">24/7</div>
            <div className="text-xs text-muted-foreground font-mono-ui mt-1">Disponibilidade</div>
          </div>
          <div className="text-center p-5 bg-[color:var(--brand-sand)]/40 rounded-2xl border border-[color:var(--brand-ink)]/5">
            <div className="text-3xl font-extrabold text-[color:var(--brand-orange)]">300%</div>
            <div className="text-xs text-muted-foreground font-mono-ui mt-1">+ Velocidade</div>
          </div>
          <div className="text-center p-5 bg-[color:var(--brand-sand)]/40 rounded-2xl border border-[color:var(--brand-ink)]/5">
            <div className="text-3xl font-extrabold text-[color:var(--brand-orange)]">&lt;3s</div>
            <div className="text-xs text-muted-foreground font-mono-ui mt-1">Tempo resposta</div>
          </div>
          <div className="text-center p-5 bg-[color:var(--brand-sand)]/40 rounded-2xl border border-[color:var(--brand-ink)]/5">
            <div className="text-3xl font-extrabold text-[color:var(--brand-orange)]">100%</div>
            <div className="text-xs text-muted-foreground font-mono-ui mt-1">Integrado ao CRM</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-15" />
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <img src="/albert-logo.png" alt="Albert IA" title="Albert IA" width={56} height={56} loading="lazy" decoding="async" className="w-14 h-14 object-contain" />
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Conheça o Albert pessoalmente</h3>
                <p className="text-sm text-[color:var(--brand-sand)]/70 max-w-lg">
                  Converse agora mesmo com o Albert pelo WhatsApp e veja na prática como ele transforma o atendimento da sua imobiliária.
                </p>
              </div>
            </div>
            <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-bold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none shadow-elev no-underline decoration-none shrink-0"
            >
              Converse com o Albert <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ==========================================
   CUSTOM COMPONENT 2: SITES TEMPLATE SUBSECTION
   ========================================== */
interface ThemeTemplate {
  name: string;
  url: string;
  image: string;
  desc: string;
  tags: string[];
}

const templates: ThemeTemplate[] = [
  {
    name: "ElegantHaus",
    url: "http://eleganthaus1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164147/elegant-scaled.jpg",
    desc: "Design minimalista e de altíssimo padrão, com foco em fotografias de grandes proporções e tipografia moderna.",
    tags: ["Luxo", "Minimalista", "Imagens Amplas"]
  },
  {
    name: "CirclesHouse",
    url: "http://circleshaus1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164326/circles-scaled.jpg",
    desc: "Elementos geométricos arredondados e transições suaves, perfeito para imobiliárias dinâmicas.",
    tags: ["Moderno", "Circular", "Transições Suaves"]
  },
  {
    name: "CityHouse",
    url: "http://cityhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164724/city-scaled.jpg",
    desc: "Otimizado para imóveis urbanos e metropolitanos, com filtros de busca extremamente rápidos.",
    tags: ["Urbano", "Filtro Avançado", "Rápido"]
  },
  {
    name: "BeachHouse",
    url: "http://beachhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164800/beach-scaled.jpg",
    desc: "Clima litorâneo e fresco, ideal para imóveis de praia, veraneio e locação de temporada.",
    tags: ["Praia", "Fresco", "Temporada"]
  },
  {
    name: "Landhouse",
    url: "http://landhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164915/land-scaled.jpg",
    desc: "Especialmente desenvolvido para chácaras, sítios, fazendas e grandes lotes de terra.",
    tags: ["Rural", "Lotes", "Verde"]
  },
  {
    name: "DotHouse Light",
    url: "http://dothouselight1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165001/dothouse-scaled.jpg",
    desc: "Visual corporativo limpo, excelente legibilidade e estrutura focada na conversão rápida de leads.",
    tags: ["Corporativo", "Clean", "Conversão"]
  },
  {
    name: "DotHouse Dark",
    url: "http://dothousedark1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165035/dothouse-dark-1-scaled.jpg",
    desc: "A versão escura premium do campeão de vendas, ideal para marcas arrojadas e modernas.",
    tags: ["Dark Mode", "Premium", "Arrojado"]
  },
  {
    name: "CleanHouse",
    url: "http://cleanhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165100/clean-scaled.jpg",
    desc: "Interface ultra-limpa com foco absoluto no conteúdo e navegação simplificada.",
    tags: ["Ultra Clean", "Leitura", "Simples"]
  },
  {
    name: "CenterHouse",
    url: "http://centerhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165133/center-scaled.jpg",
    desc: "Layout simétrico e centralizado, com excelente destaque para imóveis em destaque.",
    tags: ["Simétrico", "Destaque", "Equilibrado"]
  },
  {
    name: "SmartHouse",
    url: "http://smarthousemicrosistec1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165328/smart-scaled.jpg",
    desc: "Foco tecnológico e automações visuais integradas, perfeito para jovens proptechs.",
    tags: ["Tech", "Automações", "Jovem"]
  },
  {
    name: "FlashHouse",
    url: "http://flashhousemicrosistec1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165352/flash-scaled.jpg",
    desc: "Performance ultrarrápida e design focado no público mobile e redes sociais.",
    tags: ["Performance", "Mobile First", "Social"]
  },
  {
    name: "LightingHouse",
    url: "http://lightninghousemicrosistec1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165418/lighting-scaled.jpg",
    desc: "Efeitos de iluminação suaves e layout dinâmico que valoriza cada pixel do imóvel.",
    tags: ["Iluminado", "Dinâmico", "Sofisticado"]
  },
  {
    name: "CenterCityHouse",
    url: "http://centercityhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165505/center-house-1-scaled.jpg",
    desc: "Otimizado para grandes centros urbanos e imobiliárias de alto giro comercial.",
    tags: ["Centro Urbano", "Giro Alto", "Densidade"]
  },
  {
    name: "BusinessHouse",
    url: "http://businesshouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165532/business-scaled.jpg",
    desc: "Abordagem corporativa e profissional, ideal para loteadoras e grandes construtoras.",
    tags: ["Loteadoras", "B2B", "Corporativo"]
  },
  {
    name: "MasterHouse",
    url: "http://masterhouse1.imob.online/",
    image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165553/master-scaled.jpg",
    desc: "Nosso modelo mais completo, unindo todas as melhores práticas de SEO, conversão e velocidade.",
    tags: ["Completo", "SEO King", "Campeão"]
  }
];

function SitesTemplateSubSection({ openModal }: { openModal: () => void }) {
  const [selectedTheme, setSelectedTheme] = React.useState<ThemeTemplate | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      <div className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px] inline-block">
          Catálogo Oficial de Temas
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Nossos 15 Modelos Otimizados
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Temos 15 temas de altíssima conversão integrados à nossa plataforma, prontos para rodar no seu próprio domínio com velocidade extrema e SEO avançado.
        </p>
      </div>

      {/* Grid of 15 themes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((tpl, i) => (
          <div 
            key={i} 
            className="group bg-[color:var(--brand-sand)]/30 hover:bg-background border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)]/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-soft flex flex-col"
          >
            {/* Visual Frame */}
            <div className="aspect-[16/10] overflow-hidden border-b border-[color:var(--brand-ink)]/5 bg-muted relative">
              <img 
                src={tpl.image} 
                alt={tpl.name} 
                title={tpl.name} 
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Info */}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {tpl.tags.slice(0, 2).map((tg, idx) => (
                    <span key={idx} className="bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)]/80 text-[8px] font-mono-ui font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {tg}
                    </span>
                  ))}
                </div>
                <h3 className="font-extrabold text-base text-foreground group-hover:text-[color:var(--brand-orange)] transition-colors duration-200">
                  {tpl.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tpl.desc}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-5 border-t border-dashed border-[color:var(--brand-ink)]/10 mt-4">
                <a title="Acessar link" href={tpl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-background hover:bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 text-foreground hover:border-[color:var(--brand-orange)] transition text-center py-2.5 rounded-full text-[10px] font-extrabold flex items-center justify-center gap-1.5 no-underline decoration-none"
                >
                  Visualizar Tema <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
                <button
                  onClick={openModal}
                  className="flex-1 bg-[color:var(--brand-ink)] hover:bg-[color:var(--brand-orange)] text-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition text-center py-2.5 rounded-full text-[10px] font-extrabold cursor-pointer border-none"
                >
                  Quero este Tema
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==========================================
   CUSTOM COMPONENT 3: SITES V8 SUBSECTION
   ========================================== */
interface V8Client {
  name: string;
  url: string;
  desc: string;
  perf: { mobile: number; desktop: number; seo: number };
  tags: string[];
}

const v8Clients: V8Client[] = [
  {
    name: "Attila Imóveis",
    url: "https://attilaimoveis.com.br/",
    desc: "Referência em locação e vendas no litoral paulista, com navegação fluida e buscas complexas por mapa.",
    perf: { mobile: 98, desktop: 100, seo: 100 },
    tags: ["Litoral SP", "Busca por Mapa", "Filtro Rápido"]
  },
  {
    name: "O Pioneiro",
    url: "https://opioneiro.com/",
    desc: "Imobiliária tradicional com foco em excelência e atendimento digital acelerado por CDN global.",
    perf: { mobile: 99, desktop: 100, seo: 100 },
    tags: ["Tradição", "CDN Edge", "Carregamento Rápido"]
  },
  {
    name: "G3 Negócios",
    url: "https://negociosg3.com.br/",
    desc: "Foco total na conversão de leads comerciais e residenciais com integração em tempo real de WhatsApp.",
    perf: { mobile: 99, desktop: 100, seo: 100 },
    tags: ["Lead Driven", "WhatsApp Sync", "Alta Conversão"]
  },
  {
    name: "Orion Imóveis",
    url: "https://orionimoveis.com/",
    desc: "Portal completo de locações definitivas e administração de condomínios com área do cliente integrada.",
    perf: { mobile: 98, desktop: 100, seo: 100 },
    tags: ["Locação", "Área Cliente", "Robustez"]
  },
  {
    name: "Scorsatto",
    url: "https://scorsatto.com.br/",
    desc: "Forte atuação regional com catálogo limpo de propriedades rurais e urbanas de alto giro.",
    perf: { mobile: 99, desktop: 99, seo: 100 },
    tags: ["Regional", "Imóveis Rurais", "Navegação Limpa"]
  },
  {
    name: "Romero Imobiliária",
    url: "https://romeroimobiliaria.com/",
    desc: "Visualização imersiva de mídias, vídeos de propriedades e fotos em altíssima fidelidade sem lentidão.",
    perf: { mobile: 97, desktop: 100, seo: 100 },
    tags: ["Vídeos Imersivos", "Imagens WebP", "Responsivo"]
  },
  {
    name: "Ita Imobiliária",
    url: "https://itaimobiliaria.com.br/",
    desc: "Grande volume de captação orgânica através de SEO local de ponta nas ferramentas do Google.",
    perf: { mobile: 98, desktop: 100, seo: 100 },
    tags: ["SEO Local", "Captação", "Google Rankings"]
  },
  {
    name: "Robles Imobiliária",
    url: "https://roblesimobiliariasp.com.br/",
    desc: "Imobiliária moderna com portfólio diversificado e experiência digital premium voltada ao cliente urbano.",
    perf: { mobile: 98, desktop: 100, seo: 100 },
    tags: ["Moderno", "Experiência Premium", "Conversão"]
  }
];

const HalfCircleDial = ({ score, label, color, maxScore = 100 }: { score: number, label: string, color: string, maxScore?: number }) => {
  const radius = 40;
  const circumference = 125.66; // Math.PI * 40
  const percentage = Math.min(Math.max(score / maxScore, 0), 1);
  const strokeDashoffset = circumference - percentage * circumference;
  
  const displayValue = maxScore === 100 ? score : `${score}/${maxScore}`;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-14 overflow-hidden flex justify-center">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" className="text-muted/20" strokeWidth="8" strokeLinecap="round" />
          <path 
            d="M 10 50 A 40 40 0 0 1 90 50" 
            fill="none" 
            stroke={color} 
            strokeWidth="8" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round" 
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }} 
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <span className="text-2xl font-bold font-mono-ui" style={{ color }}>{displayValue}</span>
        </div>
      </div>
      <span className="mt-3 text-[10px] uppercase font-bold text-muted-foreground text-center leading-tight h-8 max-w-[80px]">{label}</span>
    </div>
  );
};

const PageSpeedComparison = () => {
  const metrics = [
    { label: "Desempenho", before: 42, colorBefore: "#f87171", after: 100, colorAfter: "#10b981", max: 100 },
    { label: "Acessibilidade", before: 68, colorBefore: "#fbbf24", after: 100, colorAfter: "#10b981", max: 100 },
    { label: "Práticas recomendadas", before: 72, colorBefore: "#fbbf24", after: 100, colorAfter: "#10b981", max: 100 },
    { label: "SEO", before: 65, colorBefore: "#fbbf24", after: 100, colorAfter: "#10b981", max: 100 },
    { label: "Navegação agêntica", before: 0, colorBefore: "#f87171", after: 4, colorAfter: "#10b981", max: 4 },
  ];

  return (
    <div className="w-full mx-auto max-w-5xl px-6 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
          A diferença invisível que <span className="text-[color:var(--brand-orange)]">muda tudo</span>.
        </h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Sites comuns de imobiliárias perdem vendas antes mesmo de carregar. Veja o salto técnico que os Sites V8 da Microsistec proporcionam aos olhos do Google.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center bg-[color:var(--brand-ink)]/5 p-8 rounded-3xl border border-[color:var(--brand-ink)]/10">
        {/* Antes */}
        <div className="flex-1 flex flex-col items-center">
          <span className="bg-red-500/10 text-red-600 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider mb-8">
            Antes (Mercado Tradicional)
          </span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {metrics.map((m, i) => (
              <HalfCircleDial key={`before-${i}`} score={m.before} label={m.label} color={m.colorBefore} maxScore={m.max} />
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="hidden lg:flex w-px h-32 bg-[color:var(--brand-ink)]/10"></div>
        <div className="lg:hidden w-32 h-px bg-[color:var(--brand-ink)]/10"></div>

        {/* Depois */}
        <div className="flex-1 flex flex-col items-center relative">
          <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5">
            <Sparkles className="w-8 h-8 text-[color:var(--brand-orange)] animate-pulse" />
          </div>
          <span className="bg-emerald-500/10 text-emerald-600 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider mb-8">
            Com Microsistec V8
          </span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {metrics.map((m, i) => (
              <HalfCircleDial key={`after-${i}`} score={m.after} label={m.label} color={m.colorAfter} maxScore={m.max} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function SitesV8SubSection({ openModal }: { openModal: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      
      <PageSpeedComparison />

      <div className="space-y-6 mb-12 mt-16 text-center max-w-2xl mx-auto">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px] inline-block">
          Showcase Imobiliário Real
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Vitrine de Projetos V8 Ativos
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Nossos clientes Sites V8 experimentam velocidade de carregamento absurda no celular e nota máxima nos rankings técnicos. Veja projetos de verdade operando no mercado brasileiro:
        </p>
      </div>

      {/* Grid of clients */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {v8Clients.map((client, i) => (
          <div 
            key={i} 
            className="group bg-[color:var(--brand-sand)]/20 hover:bg-background border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)]/30 p-6 rounded-3xl transition-all duration-300 shadow-soft flex flex-col justify-between"
          >
            <div>
              {/* Header: Name and metrics info */}
              <div className="flex items-center justify-between pb-4 border-b border-dashed border-[color:var(--brand-ink)]/10 mb-4">
                <h3 className="font-extrabold text-base text-foreground group-hover:text-[color:var(--brand-orange)] transition">
                  {client.name}
                </h3>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse block" title="Site em produção estável" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {client.tags.map((tg, tIdx) => (
                  <span key={tIdx} className="bg-[color:var(--brand-ink)]/5 text-foreground text-[8px] font-mono-ui font-semibold px-2 py-0.5 rounded-full uppercase">
                    {tg}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                {client.desc}
              </p>

              {/* Technical Benchmarks */}
              <div className="p-4 bg-[color:var(--brand-sand)]/60 rounded-2xl border border-[color:var(--brand-ink)]/5 space-y-3 mb-6">
                <div className="flex items-center justify-between text-[10px] font-mono-ui font-bold">
                  <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5 text-emerald-500" /> PageSpeed Mobile</span>
                  <span className="text-emerald-600">{client.perf.mobile}/100</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono-ui font-bold">
                  <span className="flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-emerald-500" /> PageSpeed Desktop</span>
                  <span className="text-emerald-600">{client.perf.desktop}/100</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono-ui font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-indigo-500" /> SEO Ranking</span>
                  <span className="text-indigo-600">{client.perf.seo}%</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <a title="Acessar link" href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[color:var(--brand-ink)] group-hover:bg-[color:var(--brand-orange)] text-[color:var(--brand-sand)] group-hover:text-[color:var(--brand-ink)] transition text-center py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 no-underline decoration-none"
            >
              Visitar Portal Ativo <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Tech info footer bar */}
      <div className="mt-12 p-6 bg-[color:var(--brand-sand)]/40 rounded-3xl border border-[color:var(--brand-ink)]/10 grid md:grid-cols-3 gap-6 items-center text-center md:text-left">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[color:var(--brand-orange)] shrink-0 mx-auto md:mx-0" />
          <div>
            <h4 className="font-bold text-xs">Pioneirismo V8</h4>
            <p className="text-[10px] text-muted-foreground">Primeira linha brasileira de sites imobiliários SSR nativos.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-[color:var(--brand-orange)] shrink-0 mx-auto md:mx-0" />
          <div>
            <h4 className="font-bold text-xs">Segurança Extrema</h4>
            <p className="text-[10px] text-muted-foreground">Certificação HTTPS, CDN Cloudflare Edge e proteção anti-DDoS.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-[color:var(--brand-orange)] shrink-0 mx-auto md:mx-0" />
          <div>
            <h4 className="font-bold text-xs">Velocidade Crítica</h4>
            <p className="text-[10px] text-muted-foreground">Otimização automática de WebP e imagens sob demanda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   CUSTOM COMPONENT 4: CRM SUBSECTION
   ========================================== */
function CRMSubSection() {
  const crmModules = [
    { icon: "🏠", title: "Cadastro de Imóveis", desc: "Cadastre imóveis de venda e locação com fotos ilimitadas, vídeos, plantas e tour virtual. Campos personalizados para cada tipo de propriedade." },
    { icon: "🏗️", title: "Empreendimentos", desc: "Gerencie lançamentos com tabelas de preço por unidade, espelho de vendas interativo e acompanhamento de evolução da obra." },
    { icon: "🏢", title: "Condomínios", desc: "Cadastre condomínios completos com infraestrutura, taxas, localização e vincule automaticamente aos imóveis cadastrados." },
    { icon: "👥", title: "Clientes & Proprietários", desc: "Base unificada de contatos com histórico de interações, preferências de busca, documentação e controle de exclusividade." },
    { icon: "🔑", title: "Marca d'Água Automática", desc: "Proteja suas fotos profissionais com marca d'água personalizada da sua imobiliária, aplicada automaticamente no upload." },
    { icon: "🔄", title: "Integração com Portais", desc: "Publique automaticamente nos maiores portais: ZAP, VivaReal, OLX, Imovelweb, Mercado Livre, Chaves na Mão e mais de 40 portais." },
    { icon: "📱", title: "Facebook & Google Ads", desc: "Receba leads de campanhas Facebook Lead Ads, Instagram e Google diretamente no CRM com rastreamento de origem." },
    { icon: "🎯", title: "Rodízio de Atendimento", desc: "Distribuição automática e justa de leads entre corretores com regras por especialidade, plantão e tempo de resposta." },
    { icon: "👤", title: "Usuários & Permissões", desc: "Cadastre gerentes, corretores e parceiros com permissionamento granular. Controle quem vê, edita e exporta dados." },
    { icon: "📰", title: "Blog Integrado", desc: "Módulo de blog profissional para sua imobiliária produzir conteúdo SEO e atrair leads orgânicos. Vendido separadamente." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      {/* Header */}
      <div className="space-y-6 mb-14 text-center max-w-2xl mx-auto">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px] inline-block">
          Ecossistema Completo
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Tudo que sua imobiliária precisa em um só lugar
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          O CRM da Microsistec vai muito além de um simples cadastro. É uma plataforma completa de gestão imobiliária com módulos integrados que funcionam em sinergia.
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {crmModules.map((mod, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 hover:bg-background hover:border-[color:var(--brand-orange)]/30 transition duration-300 group"
          >
            <span className="text-2xl shrink-0 mt-0.5">{mod.icon}</span>
            <div>
              <h3 className="font-bold text-sm text-foreground group-hover:text-[color:var(--brand-orange)] transition mb-1">
                {mod.title}
                {mod.title === "Blog Integrado" && (
                  <span className="ml-2 text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Módulo Extra</span>
                )}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Match Inteligente Visual */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] text-xs font-mono-ui font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" /> Cruzamento de Dados
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Match Inteligente de Imóveis
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No momento em que um novo imóvel é inserido no CRM, o algoritmo varre sua carteira de leads e notifica por e-mail e WhatsApp os compradores com potencial de fechamento correspondente.
          </p>
          <ul className="space-y-3 text-xs text-foreground/80 font-mono-ui">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> Match por bairro, faixa financeira, dormitórios e vagas.
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> Disparo automático de lâminas e catálogos customizados.
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> Relatórios gerenciais de aceitação e visitas do imóvel.
            </li>
          </ul>
        </div>

        {/* Blueprint Visual mockup */}
        <div className="bg-[color:var(--brand-sand)]/60 rounded-3xl p-6 border border-[color:var(--brand-ink)]/15 relative overflow-hidden shadow-soft flex flex-col gap-4">
          <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
          
          <div className="p-4 bg-background rounded-2xl border border-[color:var(--brand-ink)]/10 shadow-sm relative">
            <div className="absolute top-2 right-2 stamp text-emerald-600 text-[8px] font-bold">DISPONÍVEL</div>
            <div className="font-mono-ui text-[10px] text-muted-foreground">CÓD: AP3290</div>
            <h4 className="font-extrabold text-sm mt-1">Apartamento Vista Mar - Gonzaga</h4>
            <div className="text-xs font-mono-ui font-semibold text-[color:var(--brand-orange)] mt-1">R$ 890.000</div>
          </div>

          <div className="flex justify-center relative py-1">
            <div className="w-[1px] h-10 bg-dashed border-l border-[color:var(--brand-ink)]/20" />
            <div className="absolute top-1/2 -translate-y-1/2 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-3 py-1 rounded-full text-[9px] font-mono-ui font-bold shadow-soft">
              MATCH 96%
            </div>
          </div>

          <div className="p-4 bg-background rounded-2xl border border-[color:var(--brand-ink)]/10 shadow-sm relative">
            <div className="absolute top-2 right-2 stamp text-indigo-600 text-[8px] font-bold">LEAD QUALIFICADO</div>
            <h4 className="font-extrabold text-sm">Jefferson Junior</h4>
            <div className="text-xs text-muted-foreground mt-1">Preferencia: Gonzaga/Boqueirão · R$ 900.000 max.</div>
          </div>
        </div>
      </div>

      {/* Central de Ajuda + Academy */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <a title="Acessar link" href="http://intercom.help/microsistec-ajuda/pt-BR"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-background hover:border-[color:var(--brand-orange)]/30 transition duration-300 group no-underline decoration-none"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-[color:var(--brand-orange)] transition">Central de Ajuda</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Base de conhecimento com mais de 200 artigos, tutoriais e vídeos de suporte.</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[color:var(--brand-orange)] ml-auto shrink-0 transition" />
        </a>

        <a title="Acessar link" href="https://microsistec-academy.memberkit.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-background hover:border-[color:var(--brand-orange)]/30 transition duration-300 group no-underline decoration-none"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-[color:var(--brand-orange)] transition">Microsistec Academy</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Cursos e treinamentos exclusivos para sua equipe dominar cada recurso da plataforma.</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[color:var(--brand-orange)] ml-auto shrink-0 transition" />
        </a>
      </div>

      {/* E muito mais CTA */}
      <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-15" />
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">E muito mais.</h3>
            <p className="text-sm text-[color:var(--brand-sand)]/70 max-w-lg">
              Marca d'água inteligente, relatórios gerenciais, exportação de dados, controle de exclusividade, histórico completo de atendimentos, fichas de visita, contratos PDF e dezenas de outros recursos prontos para usar.
            </p>
          </div>
          <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+falar+com+um+especialista+sobre+o+CRM&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-bold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none shadow-elev no-underline decoration-none shrink-0"
          >
            Fale com o Especialista <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   CUSTOM COMPONENT 5: APP SUBSECTION
   ========================================== */
function AppSubSection() {
  const appFeatures = [
    { icon: "📩", title: "Receba leads em tempo real", desc: "O app notifica instantaneamente quando um novo lead chega de qualquer portal, Facebook, Google ou site próprio direto na palma da mão." },
    { icon: "📊", title: "Funil de vendas mobile", desc: "Acompanhe toda a jornada do lead em formato visual. Mova negócios entre etapas com um simples toque no celular." },
    { icon: "🏠", title: "Catálogo de imóveis completo", desc: "Visualize todos os imóveis da carteira com fotos, valores, descrições e compartilhe lâminas profissionais no WhatsApp com 1 clique." },
    { icon: "📍", title: "Endereço e rota para visita", desc: "Abra o endereço do imóvel direto no Google Maps ou Waze. Chegue na visita sem perder tempo procurando o caminho." },
    { icon: "💬", title: "Histórico de atendimento", desc: "Todo o histórico de conversas, notas, tarefas e interações com cada cliente sempre disponível, mesmo offline." },
    { icon: "📞", title: "Ligação com registro automático", desc: "Ligue para o cliente direto do app e o sistema registra automaticamente a chamada no histórico do CRM." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Visual Phone mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-[260px] h-[520px] bg-[color:var(--brand-ink)] rounded-[40px] p-3 border-4 border-[color:var(--brand-ink)] shadow-elev relative overflow-hidden flex flex-col">
            <div className="w-32 h-5 bg-[color:var(--brand-ink)] rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-20" />
            
            {/* Screen Content */}
            <div className="bg-background w-full h-full rounded-[30px] p-4 flex flex-col overflow-hidden relative text-xs">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[color:var(--brand-ink)]/10 pt-4 mb-2">
                <span className="font-mono-ui font-extrabold text-[10px]">Microsistec App</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Screen content cards */}
              <div className="space-y-2.5 flex-grow overflow-y-auto">
                {/* New Lead notification */}
                <div className="p-2.5 bg-[color:var(--brand-orange)]/10 rounded-xl border border-[color:var(--brand-orange)]/20 space-y-1">
                  <span className="text-[8px] text-[color:var(--brand-orange)] font-mono-ui font-bold">🔔 NOVO LEAD</span>
                  <div className="font-bold text-[10px]">Carla Santos · VivaReal</div>
                  <p className="text-[9px] text-muted-foreground">Interesse: Apt. 3 quartos Gonzaga</p>
                </div>

                {/* Funnel mini */}
                <div className="p-2.5 bg-[color:var(--brand-sand)]/60 rounded-xl border border-[color:var(--brand-ink)]/5 space-y-1.5">
                  <span className="text-[8px] text-muted-foreground font-mono-ui">FUNIL DE VENDAS</span>
                  <div className="flex gap-1">
                    <div className="flex-1 h-1.5 rounded-full bg-[color:var(--brand-orange)]" />
                    <div className="flex-1 h-1.5 rounded-full bg-[color:var(--brand-orange)]/60" />
                    <div className="flex-1 h-1.5 rounded-full bg-[color:var(--brand-ink)]/10" />
                    <div className="flex-1 h-1.5 rounded-full bg-[color:var(--brand-ink)]/10" />
                  </div>
                  <div className="text-[9px] font-bold">3 em qualificação · 1 em visita</div>
                </div>

                {/* Property card with map */}
                <div className="p-2.5 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1.5">
                  <div className="font-bold text-[10px] flex items-center justify-between">
                    <span>AP Gonzaga Vista Mar</span>
                    <span className="text-[8px] text-[color:var(--brand-orange)] font-bold">R$ 890k</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                    <span>📍</span> Av. Ana Costa, 432 · Gonzaga
                  </div>
                  <button className="w-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-full text-[8px] py-1 font-bold border-none cursor-pointer">
                    Abrir rota no Maps
                  </button>
                </div>

                {/* History */}
                <div className="p-2.5 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-xl space-y-1.5">
                  <span className="text-[8px] text-[color:var(--brand-orange)] font-bold font-mono-ui">HISTÓRICO</span>
                  <div className="text-[9px] space-y-1 text-[color:var(--brand-sand)]/80">
                    <div>✓ Ligação 2min · Ontem 15:30</div>
                    <div>✓ WhatsApp lâmina · Ontem 15:32</div>
                    <div>✓ Visita agendada · Sáb 10h</div>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="pt-2 border-t border-[color:var(--brand-ink)]/5 text-center text-[8px] text-muted-foreground font-mono-ui">
                Corretor Conectado · Santos/SP
              </div>
            </div>
          </div>
        </div>

        {/* Texts */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] text-xs font-mono-ui font-bold">
            <Smartphone className="w-3.5 h-3.5" /> Mobilidade Total
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Toda a imobiliária na palma da mão do corretor
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O corretor não trabalha sentado o dia todo. Ele está na rua, visitando imóveis e fechando negócios. Nosso app coloca todos os leads, o funil de vendas completo, o catálogo de imóveis com endereço para visita e todo o histórico de atendimento sempre disponível no bolso dele.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {appFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-[color:var(--brand-ink)]/5 bg-[color:var(--brand-sand)]/20 hover:border-[color:var(--brand-orange)]/20 transition">
                <span className="text-lg shrink-0">{feat.icon}</span>
                <div>
                  <h4 className="font-bold text-xs text-foreground mb-0.5">{feat.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+App+de+Atendimento&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3 font-bold text-sm hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft no-underline decoration-none"
            >
              Fale com o Especialista <ArrowRight className="w-4 h-4" />
            </a>
            
            <a title="Acessar link" href="#"
              onClick={(e) => {
                e.preventDefault();
                const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
                if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !(window as any).MSStream) {
                  window.open("https://apps.apple.com/us/app/microsistec-leads/id1550404156", "_blank");
                } else {
                  window.open("https://play.google.com/store/apps/details?id=br.com.microsistec.mercury&hl=pt_BR", "_blank");
                }
              }}
              className="inline-flex items-center gap-2 rounded-full bg-background border border-[color:var(--brand-ink)]/20 text-[color:var(--brand-ink)] px-6 py-3 font-bold text-sm hover:bg-[color:var(--brand-ink)]/5 transition cursor-pointer shadow-soft no-underline decoration-none"
            >
              Baixar aplicativo <Smartphone className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ==========================================
   CUSTOM COMPONENT 6: FUNIL SUBSECTION
   ========================================== */
export function FunilSubSectionMulti() {
  const funnels = [
    {
      id: "alto-padrao",
      label: "🏆 Alto Padrão",
      color: "text-violet-700 bg-violet-50",
      activeColor: "bg-violet-600",
      metrics: { total: 12, conversion: "8%", avgValue: "R$ 2.1M", avgDays: 42 },
      stages: [
        { name: "Qualificação", count: 4, leads: [
          { name: "Ricardo Menezes", desc: "Cobertura Riviera - Vista Mar", value: "R$ 3.8M", tag: "" },
          { name: "Ana Carvalho", desc: "Casa em condomínio fechado", value: "R$ 2.2M", tag: "Albert MQL" },
        ]},
        { name: "Visita Técnica", count: 3, leads: [
          { name: "Fernando Lima", desc: "Triplex Ponta da Praia", value: "R$ 4.5M", tag: "Sáb 14h" },
        ]},
        { name: "Proposta", count: 2, leads: [
          { name: "Juliana Bianchi", desc: "Penthouse Gonzaga", value: "R$ 2.9M", tag: "Negociando" },
        ]},
        { name: "Assinatura", count: 1, leads: [
          { name: "Marcos Salave", desc: "Casa Alto Padrão Guarujá", value: "R$ 1.85M", tag: "CONTRATO" },
        ]},
      ],
    },
    {
      id: "mcmv",
      label: "🏠 MCMV",
      color: "text-emerald-700 bg-emerald-50",
      activeColor: "bg-emerald-600",
      metrics: { total: 58, conversion: "22%", avgValue: "R$ 280K", avgDays: 18 },
      stages: [
        { name: "Triagem", count: 18, leads: [
          { name: "Maria Santos", desc: "Apto 2q Praia Grande", value: "R$ 280K", tag: "Faixa 2" },
          { name: "José Oliveira", desc: "Casa 3q - São Vicente", value: "R$ 220K", tag: "FGTS OK" },
        ]},
        { name: "Simulação CEF", count: 14, leads: [
          { name: "Ana Pereira", desc: "Apto 2q programa MCMV", value: "R$ 190K", tag: "Faixa 1" },
        ]},
        { name: "Documentação", count: 9, leads: [
          { name: "Carlos Melo", desc: "Sobrado Cubatão", value: "R$ 250K", tag: "Aprovado CEF" },
        ]},
        { name: "Assinatura", count: 4, leads: [
          { name: "Rosa Alves", desc: "Apto 45m² Guarujá", value: "R$ 195K", tag: "ESCRITURA" },
        ]},
      ],
    },
    {
      id: "locacao",
      label: "🔑 Locação",
      color: "text-blue-700 bg-blue-50",
      activeColor: "bg-blue-600",
      metrics: { total: 34, conversion: "38%", avgValue: "R$ 2.8K/mês", avgDays: 9 },
      stages: [
        { name: "Interesse", count: 12, leads: [
          { name: "Gabriel Torres", desc: "Apto 2q Gonzaga", value: "R$ 3.200/mês", tag: "App" },
          { name: "Letícia Ramos", desc: "Sala Comercial - Centro", value: "R$ 4.500/mês", tag: "Portais" },
        ]},
        { name: "Visita", count: 8, leads: [
          { name: "Pedro Nunes", desc: "Casa 3q Boqueirão", value: "R$ 3.800/mês", tag: "Ter 10h" },
        ]},
        { name: "Análise Cadastral", count: 5, leads: [
          { name: "Sofia Lima", desc: "Studio Gonzaga", value: "R$ 2.100/mês", tag: "Crédito OK" },
        ]},
        { name: "Contrato", count: 4, leads: [
          { name: "Bruno Melo", desc: "Apto 3q Pompéia", value: "R$ 4.200/mês", tag: "ASSINADO" },
        ]},
      ],
    },
    {
      id: "lancamento",
      label: "🏗️ Lançamento",
      color: "text-amber-700 bg-amber-50",
      activeColor: "bg-amber-500",
      metrics: { total: 94, conversion: "11%", avgValue: "R$ 680K", avgDays: 30 },
      stages: [
        { name: "Pré-Lançamento", count: 31, leads: [
          { name: "Camila Rocha", desc: "Torres Riviera - Unid. 804", value: "R$ 890K", tag: "VIP lista" },
          { name: "Diego Vieira", desc: "Edifício Soleil - Unid. 1102", value: "R$ 1.2M", tag: "Reserva" },
        ]},
        { name: "Espelho Ativo", count: 22, leads: [
          { name: "Thiago Martins", desc: "Oceano Residence - 2q", value: "R$ 680K", tag: "Opção B3" },
        ]},
        { name: "Proposta Formal", count: 14, leads: [
          { name: "Patricia Lima", desc: "Grand Tower - Cobertura", value: "R$ 2.1M", tag: "Revisão" },
        ]},
        { name: "Contrato", count: 6, leads: [
          { name: "Roberto Salas", desc: "Vila Nova - Unidade 301", value: "R$ 520K", tag: "PERMUTA" },
        ]},
      ],
    },
    {
      id: "captacao",
      label: "📸 Captação",
      color: "text-rose-700 bg-rose-50",
      activeColor: "bg-rose-500",
      metrics: { total: 45, conversion: "41%", avgValue: "R$ 950K", avgDays: 14 },
      stages: [
        { name: "Prospecção", count: 21, leads: [
          { name: "Carlos Nogueira", desc: "Proprietário - Apto Gonzaga", value: "R$ 800K", tag: "Frio" },
          { name: "Mariana Costa", desc: "Casa Vila Rica", value: "R$ 1.5M", tag: "Indicação" },
        ]},
        { name: "Visita/Fotos", count: 12, leads: [
          { name: "Roberto Silva", desc: "Cobertura Boqueirão", value: "R$ 2.2M", tag: "Fotos Sex 14h" },
        ]},
        { name: "Avaliação/Doc", count: 8, leads: [
          { name: "Luciana Reis", desc: "Terreno Aparecida", value: "R$ 600K", tag: "Aguardando Matrícula" },
        ]},
        { name: "Publicado", count: 4, leads: [
          { name: "João Pedro", desc: "Apto 3q Gonzaga", value: "R$ 950K", tag: "EXCLUSIVIDADE" },
        ]},
      ],
    },
  ];

  const [activeFunnel, setActiveFunnel] = React.useState(0);
  const funnel = funnels[activeFunnel];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/8 pt-16">
      {/* Header */}
      <div className="space-y-4 mb-10 max-w-2xl">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
          Multi-Funil Interativo
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Um funil diferente para cada tipo de negócio
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Alto padrão, MCMV, locação e lançamentos têm jornadas completamente diferentes. 
          Crie funis independentes com etapas, responsáveis e métricas próprias para cada processo.
        </p>
      </div>

      {/* Funnel Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {funnels.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActiveFunnel(i)}
            className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer border-none ${
              activeFunnel === i
                ? `${f.color} ring-1 ring-inset ring-current`
                : "bg-[color:var(--brand-sand)]/40 text-muted-foreground hover:bg-[color:var(--brand-sand)] hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Metrics for active funnel */}
      <div className="grid grid-cols-4 gap-px bg-[color:var(--brand-ink)]/8 border border-[color:var(--brand-ink)]/8 rounded-xl overflow-hidden mb-6">
        {[
          { label: "Leads ativos", value: String(funnel.metrics.total) },
          { label: "Conversão", value: funnel.metrics.conversion },
          { label: "Ticket médio", value: funnel.metrics.avgValue },
          { label: "Tempo médio", value: `${funnel.metrics.avgDays}d` },
        ].map((m) => (
          <div key={m.label} className="bg-background px-4 py-3 text-center">
            <div className="text-sm font-extrabold text-[color:var(--brand-orange)]">{m.value}</div>
            <div className="text-[10px] text-muted-foreground font-mono-ui mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {funnel.stages.map((stage, si) => (
          <div key={si} className="bg-[color:var(--brand-sand)]/25 rounded-xl p-3 border border-[color:var(--brand-ink)]/6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/6">
              <span className="text-[9px] font-bold font-mono-ui uppercase text-muted-foreground truncate pr-1">{stage.name}</span>
              <span className="bg-[color:var(--brand-ink)]/8 text-[color:var(--brand-ink)] text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0">{stage.count}</span>
            </div>
            {stage.leads.map((lead, li) => (
              <div key={li} className="p-2.5 bg-background rounded-lg border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)]/40 transition cursor-pointer">
                <h4 className="font-bold text-[10px] leading-tight">{lead.name}</h4>
                <p className="text-[9px] text-muted-foreground leading-tight">{lead.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-[color:var(--brand-orange)] font-bold">{lead.value}</span>
                  {lead.tag && (
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${funnel.color}`}>
                      {lead.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {/* Add card placeholder */}
            <div className="p-2 rounded-lg border border-dashed border-[color:var(--brand-ink)]/10 text-center text-[9px] text-muted-foreground/40 cursor-pointer hover:border-[color:var(--brand-orange)]/30 hover:text-muted-foreground/60 transition">
              + Adicionar
            </div>
          </div>
        ))}
      </div>

      {/* Bottom callout */}
      <div className="mt-8 p-5 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="text-xs font-mono-ui text-[color:var(--brand-orange)] mb-1">Multi-Funil Ilimitado</div>
          <p className="text-sm text-[color:var(--brand-sand)]/80 leading-relaxed">
            Crie quantos funis precisar. Etapas, responsáveis e métricas totalmente independentes por processo de negócio.
          </p>
        </div>
        <div className="flex gap-2 shrink-0 text-[10px] font-mono-ui">
          <span className="px-3 py-1.5 rounded-full bg-white/5 text-[color:var(--brand-sand)]/70">∞ Funis</span>
          <span className="px-3 py-1.5 rounded-full bg-white/5 text-[color:var(--brand-sand)]/70">∞ Etapas</span>
        </div>
      </div>
    </section>
  );
}




export function FunilSubSection() {
  const [stages, setStages] = React.useState([
    { name: "Novo Contato", leads: [
      { id: "1", name: "Ricardo Menezes", desc: "Apto 3q Gonzaga", value: "R$ 850K", tag: "Novo" },
      { id: "2", name: "Ana Carvalho", desc: "Casa Vila Rica", value: "R$ 1.2M", tag: "Novo" },
    ]},
    { name: "Em Atendimento", leads: [
      { id: "3", name: "Fernando Lima", desc: "Apto Ponta da Praia", value: "R$ 650K", tag: "Negociando" },
    ]},
    { name: "Visita Agendada", leads: [
      { id: "4", name: "Juliana Bianchi", desc: "Studio Centro", value: "R$ 290K", tag: "Visita: Sáb" },
    ]},
    { name: "Proposta Formal", leads: [
      { id: "5", name: "Marcos Salave", desc: "Casa Guarujá", value: "R$ 1.8M", tag: "Em Análise" },
    ]},
    { name: "Fechamento", leads: [
      { id: "6", name: "Rosa Alves", desc: "Apto Embaré", value: "R$ 420K", tag: "Contrato" },
    ]},
  ]);

  const [draggedItem, setDraggedItem] = React.useState<{ stageIndex: number; leadIndex: number } | null>(null);

  const handleDragStart = (e: React.DragEvent, stageIndex: number, leadIndex: number) => {
    setDraggedItem({ stageIndex, leadIndex });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetStageIndex: number) => {
    e.preventDefault();
    if (!draggedItem) return;

    if (draggedItem.stageIndex === targetStageIndex) {
      setDraggedItem(null);
      return;
    }

    const newStages = [...stages];
    const sourceStage = [...newStages[draggedItem.stageIndex].leads];
    const targetStage = [...newStages[targetStageIndex].leads];
    
    // Remove from source
    const [movedLead] = sourceStage.splice(draggedItem.leadIndex, 1);
    // Add to target
    targetStage.push(movedLead);

    newStages[draggedItem.stageIndex].leads = sourceStage;
    newStages[targetStageIndex].leads = targetStage;

    setStages(newStages);
    setDraggedItem(null);
  };

  const parseVGV = (val: string) => {
    if (!val) return 0;
    const numStr = val.replace(/[^\d.,]/g, '').replace(',', '.');
    const num = parseFloat(numStr);
    if (isNaN(num)) return 0;
    if (val.toLowerCase().includes('m')) return num * 1000000;
    if (val.toLowerCase().includes('k')) return num * 1000;
    return num;
  };

  const formatVGV = (val: number) => {
    if (val >= 1000000) return `R$ ${(val / 1000000).toFixed(1).replace('.0', '')}M`;
    if (val >= 1000) return `R$ ${(val / 1000).toFixed(0)}K`;
    return `R$ ${val}`;
  };

  const totalLeads = stages.reduce((acc, stage) => acc + stage.leads.length, 0);
  const totalVGV = stages.reduce((acc, stage) => acc + stage.leads.reduce((sum, lead) => sum + parseVGV(lead.value), 0), 0);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/8 pt-16">
      <div className="space-y-4 mb-10 max-w-2xl">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
          Kanban Intuitivo
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Sua imobiliária num piscar de olhos
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Tenha controle absoluto do seu pipeline de vendas e locações. Movimente oportunidades de negócio em um Kanban totalmente visual e customizado para a sua operação.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-px bg-[color:var(--brand-ink)]/8 border border-[color:var(--brand-ink)]/8 rounded-xl overflow-hidden mb-6">
        {[
          { label: "Leads ativos", value: String(totalLeads) },
          { label: "Conversão", value: "18%" },
          { label: "VGV Potencial", value: formatVGV(totalVGV) },
          { label: "Tempo médio", value: "22d" },
        ].map((m) => (
          <div key={m.label} className="bg-background px-4 py-3 text-center">
            <div className="text-sm font-extrabold text-[color:var(--brand-orange)]">{m.value}</div>
            <div className="text-[10px] text-muted-foreground font-mono-ui mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 overflow-x-auto pb-4 select-none">
        {stages.map((stage, si) => {
          const columnVGV = stage.leads.reduce((sum, lead) => sum + parseVGV(lead.value), 0);
          return (
            <div 
              key={si} 
              className="bg-[color:var(--brand-sand)]/25 rounded-xl p-3 border border-[color:var(--brand-ink)]/6 space-y-2 min-w-[200px]"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, si)}
            >
              <div className="flex items-start justify-between pb-2 border-b border-[color:var(--brand-ink)]/6">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold font-mono-ui uppercase text-muted-foreground truncate pr-1">{stage.name}</span>
                  {columnVGV > 0 && <span className="text-[8px] font-mono-ui text-[color:var(--brand-orange)] font-bold">{formatVGV(columnVGV)}</span>}
                </div>
                <span className="bg-[color:var(--brand-ink)]/8 text-[color:var(--brand-ink)] text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0">{stage.leads.length}</span>
              </div>
              {stage.leads.map((lead, li) => (
                <div 
                  key={lead.id} 
                  draggable
                  onDragStart={(e) => handleDragStart(e, si, li)}
                  className={`p-2.5 bg-background rounded-lg border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)]/40 hover:shadow-md transition cursor-grab active:cursor-grabbing ${draggedItem?.stageIndex === si && draggedItem?.leadIndex === li ? 'opacity-50' : 'opacity-100'}`}
                >
                  <h4 className="font-bold text-[10px] leading-tight">{lead.name}</h4>
                  <p className="text-[9px] text-muted-foreground leading-tight pointer-events-none">{lead.desc}</p>
                  <div className="flex items-center justify-between pointer-events-none">
                    <span className="text-[9px] text-[color:var(--brand-orange)] font-bold">{lead.value}</span>
                    {lead.tag && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full text-blue-700 bg-blue-50">
                        {lead.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="p-2 rounded-lg border border-dashed border-[color:var(--brand-ink)]/10 text-center text-[9px] text-muted-foreground/40 cursor-pointer hover:border-[color:var(--brand-orange)]/30 hover:text-muted-foreground/60 transition mt-auto">
                + Adicionar
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-5 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="text-xs font-mono-ui text-[color:var(--brand-orange)] mb-1">Mais Assertividade</div>
          <p className="text-sm text-[color:var(--brand-sand)]/80 leading-relaxed">
            Cruze o perfil do seu lead com o estoque de imóveis, envie opções por WhatsApp e gere termos de visita automaticamente. Tudo no mesmo lugar.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ==========================================
   CUSTOM COMPONENT 7: RODÍZIO SUBSECTION
   ========================================== */
function RodizioSubSection() {
  const [queue, setQueue] = React.useState([
    { id: 1, name: "Mariana Silva", specialty: "Alto Padrão", status: "online", leads: 4, responseTime: "1m 20s" },
    { id: 2, name: "Diego Ferreira", specialty: "Lançamentos", status: "online", leads: 3, responseTime: "2m 05s" },
    { id: 3, name: "Paula Santos", specialty: "Locação", status: "busy", leads: 5, responseTime: "3m 40s" },
    { id: 4, name: "Rafael Moura", specialty: "Alto Padrão", status: "visiting", leads: 2, responseTime: "4m 12s" },
  ]);

  const [incomingLead, setIncomingLead] = React.useState<null | { name: string; portal: string; phone: string }>(null);
  const [distributed, setDistributed] = React.useState<null | { corretor: string; lead: string }>(null);
  const [animating, setAnimating] = React.useState(false);

  const LEADS = [
    { name: "João Mendes", portal: "Zap Imóveis", phone: "(11) 9 8765-4321" },
    { name: "Camila Rocha", portal: "Viva Real", phone: "(13) 9 9832-1122" },
    { name: "Pedro Alves", portal: "Mercado Livre", phone: "(11) 9 7654-3210" },
    { name: "Larissa Teixeira", portal: "OLX", phone: "(21) 9 6543-2109" },
  ];

  const handleDistribute = () => {
    if (animating) return;
    const lead = LEADS[Math.floor(Math.random() * LEADS.length)];
    setIncomingLead(lead);
    setDistributed(null);
  };

  const handleConfirm = () => {
    if (!incomingLead || animating) return;
    setAnimating(true);
    const first = queue[0];
    setTimeout(() => {
      setDistributed({ corretor: first.name, lead: incomingLead.name });
      setQueue((prev) => {
        const [head, ...rest] = prev;
        return [...rest, { ...head, leads: head.leads + 1 }];
      });
      setIncomingLead(null);
      setAnimating(false);
    }, 700);
  };

  const statusColor: Record<string, string> = {
    online: "#22c55e",
    busy: "#f59e0b",
    visiting: "#3b82f6",
    offline: "#6b7280",
  };

  const statusLabel: Record<string, string> = {
    online: "Online",
    busy: "Ocupado",
    visiting: "Em Visita",
    offline: "Folga",
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      {/* Header */}
      <div className="space-y-6 mb-14 max-w-2xl">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
          Fila Inteligente Round-Robin
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Simulador de Rodízio de Atendimento
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Veja como o sistema distribui leads de forma justa e automática entre os corretores disponíveis. Clique em "Novo Lead" para simular um contato entrando de um portal imobiliário.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Queue Panel */}
        <div className="md:col-span-3 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 overflow-hidden">
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono-ui font-bold uppercase tracking-widest">Fila de Corretores · Ao Vivo</span>
            </div>
            <span className="text-[10px] font-mono-ui text-[color:var(--brand-sand)]/50">{queue.length} corretores</span>
          </div>

          {/* Queue rows */}
          <ul className="divide-y divide-[color:var(--brand-ink)]/5">
            {queue.map((c, idx) => (
              <li
                key={c.id}
                className={`flex items-center gap-4 px-5 py-4 transition-all duration-500 ${idx === 0 ? "bg-[color:var(--brand-orange)]/8 border-l-2 border-[color:var(--brand-orange)]" : ""}`}
              >
                {/* Position badge */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                  style={{
                    background: idx === 0 ? "var(--brand-orange)" : "rgba(14,17,23,0.06)",
                    color: idx === 0 ? "var(--brand-ink)" : "var(--brand-ink)",
                  }}
                >
                  {idx + 1}
                </div>

                {/* Avatar initial */}
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] shrink-0">
                  {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm truncate">{c.name}</span>
                    {idx === 0 && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] uppercase tracking-wide shrink-0">
                        Vez
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{c.specialty}</div>
                </div>

                {/* Status */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: statusColor[c.status] }}
                    />
                    <span className="text-[11px] font-medium" style={{ color: statusColor[c.status] }}>
                      {statusLabel[c.status]}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-ui text-muted-foreground">{c.leads} leads · {c.responseTime}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Panel */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Incoming Lead Card */}
          <div className="rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 p-5 space-y-4">
            <h4 className="font-bold text-sm uppercase font-mono-ui tracking-wider text-muted-foreground">
              ↙ Lead Entrante
            </h4>

            {incomingLead ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-[color:var(--brand-orange)]/30 bg-[color:var(--brand-orange)]/8 space-y-1.5">
                  <div className="text-xs text-muted-foreground font-mono-ui">via {incomingLead.portal}</div>
                  <div className="font-bold text-sm">{incomingLead.name}</div>
                  <div className="text-xs text-muted-foreground">{incomingLead.phone}</div>
                </div>
                <button
                  onClick={handleConfirm}
                  disabled={animating}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-none"
                  style={{
                    background: animating ? "rgba(14,17,23,0.3)" : "var(--brand-ink)",
                    color: "var(--brand-sand)",
                  }}
                >
                  {animating ? "Distribuindo..." : "⚡ Distribuir para Mariana"}
                </button>
              </div>
            ) : (
              <button
                onClick={handleDistribute}
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-none"
                style={{ background: "var(--brand-orange)", color: "var(--brand-ink)" }}
              >
                + Novo Lead
              </button>
            )}

            {distributed && (
              <div className="p-3 rounded-xl border border-green-500/30 bg-green-50/40 text-xs text-green-700 font-medium">
                ✓ <strong>{distributed.lead}</strong> enviado para <strong>{distributed.corretor}</strong> no WhatsApp!
              </div>
            )}
          </div>

          {/* Rules cards */}
          <div className="space-y-3">
            {[
              { icon: "⚖️", title: "Round-Robin", desc: "Cada corretor recebe leads em sequência justa, nunca duplicando." },
              { icon: "⏱️", title: "Timeout Auto-skip", desc: "Se não responder em X min, o próximo da fila é acionado automaticamente." },
              { icon: "🔴", title: "Status Dinâmico", desc: "Corretor em visita ou folga é pulado sem intervenção manual." },
            ].map((rule) => (
              <div
                key={rule.title}
                className="flex gap-3 p-3.5 rounded-xl border border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-sand)]/20 hover:border-[color:var(--brand-orange)]/30 transition"
              >
                <span className="text-lg shrink-0">{rule.icon}</span>
                <div>
                  <div className="font-semibold text-xs mb-0.5">{rule.title}</div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed">{rule.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[color:var(--brand-ink)]/10 pt-10">
        {[
          { value: "< 3min", label: "Tempo médio de resposta", sub: "com rodízio ativo" },
          { value: "100%", label: "Distribuição equitativa", sub: "sem conflitos internos" },
          { value: "↑ 42%", label: "Conversão de 1º contato", sub: "por velocidade de resposta" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-[color:var(--brand-orange)]">{m.value}</div>
            <div className="text-xs font-semibold mt-1">{m.label}</div>
            <div className="text-[10px] text-muted-foreground">{m.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

