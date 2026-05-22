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
        <section className="relative overflow-hidden bg-hero py-20 md:py-28 border-b border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0" />
          
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link to="/" className="text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
              <Link to="/solucoes" className="text-xs font-mono-ui uppercase text-[color:var(--brand-orange)] font-semibold hover:underline transition">
                Soluções
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs font-mono-ui uppercase text-muted-foreground">
                {sol.title}
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-3">
                  {sol.slug === "albert-ia" ? (
                    <div className="bg-[color:var(--brand-sand)]/85 backdrop-blur-sm rounded-2xl p-2.5 border border-[color:var(--brand-ink)]/15 shadow-soft flex items-center justify-center max-w-[190px]">
                      <img src="/albert-logo.png" alt="Albert IA" className="h-9 object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex items-center justify-center shadow-soft">
                      <IconComp className="w-6 h-6 text-[color:var(--brand-orange)]" />
                    </div>
                  )}
                  <span className="stamp text-[color:var(--brand-orange)] text-xs">
                    Produto Exclusivo
                  </span>
                </div>
                
                <h1 className="font-extrabold tracking-[-0.045em] leading-[0.98] text-[clamp(2.3rem,5vw,4rem)]">
                  {sol.title}
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-serif-italic">
                  {sol.shortDesc}
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {sol.longDesc}
                </p>

                <div className="pt-2">
                  {sol.slug === "albert-ia" ? (
                    <a
                      href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft decoration-none no-underline"
                    >
                      {sol.ctaText} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : sol.slug === "app" ? (
                    <button
                      onClick={() => {
                        const ua = navigator.userAgent || "";
                        const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
                        const isMac = /Macintosh|MacIntel/.test(ua) && !isIOS;
                        if (isIOS || isMac) {
                          window.open("https://apps.apple.com/br/app/microsistec/id1035266100", "_blank");
                        } else {
                          window.open("https://play.google.com/store/apps/details?id=br.com.microsistec", "_blank");
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft"
                    >
                      {sol.ctaText} <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : sol.ctaText === "Em Breve" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)]/30 text-[color:var(--brand-sand)]/60 px-6 py-3.5 font-semibold cursor-not-allowed">
                      {sol.ctaText}
                    </span>
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

              <div className="md:col-span-4 bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-3xl p-6 shadow-soft space-y-6 md:sticky md:top-24">
                <h4 className="font-bold text-sm uppercase font-mono-ui text-foreground tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15">
                  ✦ Vantagens Comerciais
                </h4>
                <ul className="space-y-3">
                  {sol.benefits.map((b: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
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
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="space-y-3 mb-14">
            <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
              O que está incluso
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Recursos e Funcionalidades
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sol.features.map((f: string, idx: number) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-background hover:bg-[color:var(--brand-sand)]/30 hover:border-[color:var(--brand-orange)]/30 transition duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] flex items-center justify-center shrink-0 font-mono-ui text-xs font-bold">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground mb-1">
                    Funcionalidade Integrada
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

        {sol.slug === "integracoes" && (
          <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
            <div className="border-t border-[color:var(--brand-ink)]/10 pt-16 md:pt-24 space-y-8">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div className="space-y-3 max-w-lg">
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
        <section className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] py-16 relative overflow-hidden border-t border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0 opacity-15" />
          <div className="relative mx-auto max-w-4xl px-6 text-center space-y-6">
            <Sparkles className="w-10 h-10 text-[color:var(--brand-orange)] mx-auto animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Comece a usar o {sol.title} hoje mesmo
            </h2>
            <p className="text-sm text-[color:var(--brand-sand)]/70 max-w-md mx-auto">
              Experimente toda a inteligência e automação da Microsistec. Leva menos de 30 segundos para configurar sua carteira imobiliária.
            </p>
            <div className="pt-2">
              {sol.slug === "albert-ia" ? (
                <a
                  href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-elev decoration-none no-underline"
                >
                  Converse com o Albert agora mesmo <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-elev"
                >
                  Ativar Teste 14 Dias Grátis <ArrowRight className="w-4 h-4" />
                </button>
              )}
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
      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
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
                <img src="/albert-logo.png" alt="Albert" className="w-7 h-7 object-contain" />
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
      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
        <div className="space-y-4 mb-14 text-center max-w-2xl mx-auto">
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
              <img src="/albert-logo.png" alt="Albert IA" className="w-14 h-14 object-contain" />
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Conheça o Albert pessoalmente</h3>
                <p className="text-sm text-[color:var(--brand-sand)]/70 max-w-lg">
                  Converse agora mesmo com o Albert pelo WhatsApp e veja na prática como ele transforma o atendimento da sua imobiliária.
                </p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
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
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
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
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                {tpl.tags.slice(0, 2).map((tg, idx) => (
                  <span key={idx} className="bg-[color:var(--brand-ink)]/90 backdrop-blur-sm text-[color:var(--brand-sand)] text-[8px] font-mono-ui font-semibold px-2 py-0.5 rounded-full uppercase">
                    {tg}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-extrabold text-base text-foreground group-hover:text-[color:var(--brand-orange)] transition-colors duration-200">
                  {tpl.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tpl.desc}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-5 border-t border-dashed border-[color:var(--brand-ink)]/10 mt-4">
                <a 
                  href={tpl.url}
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
    name: "Isidório Imóveis",
    url: "https://isidorioimoveis.com.br/",
    desc: "Especialista em lançamentos e alto padrão, oferecendo uma experiência visual limpa e luxuosa.",
    perf: { mobile: 97, desktop: 99, seo: 100 },
    tags: ["Lançamentos", "Alto Padrão", "Aesthetics"]
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
    name: "Monaco Brokers",
    url: "https://monacobrokers.com.br/",
    desc: "Corretora boutique de investimentos imobiliários com layout executivo premium focado em investidores.",
    perf: { mobile: 99, desktop: 100, seo: 100 },
    tags: ["Investimentos", "Boutique", "Layout Executivo"]
  }
];

function SitesV8SubSection({ openModal }: { openModal: () => void }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
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
            <a
              href={client.url}
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
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      {/* Header */}
      <div className="space-y-4 mb-14 text-center max-w-2xl mx-auto">
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
        <a
          href="http://intercom.help/microsistec-ajuda/pt-BR"
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

        <a
          href="https://microsistec-academy.memberkit.com.br/"
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
          <a
            href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+falar+com+um+especialista+sobre+o+CRM&type=phone_number&app_absent=0"
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
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
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
          <div className="pt-2">
            <a
              href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+App+de+Atendimento&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3 font-bold text-sm hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft no-underline decoration-none"
            >
              Fale com o Especialista <ArrowRight className="w-4 h-4" />
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
function FunilSubSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
        <span className="stamp text-[color:var(--brand-orange)] text-[10px] inline-block">
          Pipeline Comercial Visual
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Funil de Vendas em Formato Kanban
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Tenha controle absoluto e previsibilidade sobre suas comissões de fechamento. Mova os negócios de fase com arrastar e soltar suave no CRM:
        </p>
      </div>

      {/* Simulated Kanban Columns */}
      <div className="grid md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5">
            <span className="text-[10px] font-bold font-mono-ui uppercase text-muted-foreground">1. Novo Lead</span>
            <span className="bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full">2</span>
          </div>
          
          <div className="p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition">
            <h4 className="font-bold text-xs">Carlos Eduardo</h4>
            <p className="text-[10px] text-muted-foreground">Apartamento 2 quartos Gonzaga</p>
            <div className="text-[9px] text-[color:var(--brand-orange)] font-bold">R$ 550.000</div>
          </div>
          
          <div className="p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition">
            <h4 className="font-bold text-xs">Cláudia Cruz</h4>
            <p className="text-[10px] text-muted-foreground">Cobertura duplex Ponta da Praia</p>
            <div className="text-[9px] text-[color:var(--brand-orange)] font-bold">R$ 1.200.000</div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5">
            <span className="text-[10px] font-bold font-mono-ui uppercase text-muted-foreground">2. Qualificado</span>
            <span className="bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full">1</span>
          </div>
          
          <div className="p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition">
            <h4 className="font-bold text-xs">Bruno Alves</h4>
            <p className="text-[10px] text-muted-foreground">Comprovou entrada e FGTS com Albert</p>
            <div className="text-[9px] text-emerald-600 font-bold font-mono-ui">Albert MQL</div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5">
            <span className="text-[10px] font-bold font-mono-ui uppercase text-muted-foreground">3. Visita Agendada</span>
            <span className="bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full">1</span>
          </div>
          
          <div className="p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition relative">
            <div className="absolute top-2 right-2 flex items-center gap-1 text-[8px] text-[color:var(--brand-orange)] font-bold"><Calendar className="w-2.5 h-2.5" /> Sáb 10h</div>
            <h4 className="font-bold text-xs">Juliana Costa</h4>
            <p className="text-[10px] text-muted-foreground">Sobrado em Condomínio Fechado</p>
            <div className="text-[9px] text-[color:var(--brand-orange)] font-bold">R$ 2.400.000</div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5">
            <span className="text-[10px] font-bold font-mono-ui uppercase text-muted-foreground">4. Proposta / Fechamento</span>
            <span className="bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full">1</span>
          </div>
          
          <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 shadow-sm space-y-1 relative">
            <div className="absolute top-2 right-2 flex items-center gap-0.5 text-[8px] text-indigo-600 font-bold"><DollarSign className="w-2.5 h-2.5" /> CONTRATO</div>
            <h4 className="font-bold text-xs">Marcos Paulo</h4>
            <p className="text-[10px] text-muted-foreground">Documentos aprovados em cartório</p>
            <div className="text-[9px] text-indigo-700 font-bold">COMISSÃO R$ 38.000</div>
          </div>
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
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16">
      {/* Header */}
      <div className="space-y-4 mb-14 max-w-2xl">
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
