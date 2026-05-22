import { T as reactExports, J as jsxRuntimeExports } from "./server-BHksymyu.js";
import { N as Nav, b as ChevronRight, F as Footer, C as Check, a as ArrowUpRight } from "./MicrosistecLanding-BL0zN38N.js";
import { o as createLucideIcon, f as Route, E as useDemoModal, s as portalIntegrations, q as getIconComponent, L as Link, A as ArrowRight, c as CircleCheck, i as Sparkles, h as Smartphone, Z as Zap, B as Bot } from "./router-BHIC0459.js";
import { S as Search } from "./search-C-sHOv53.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$6 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$4);
const __iconNode$3 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = createLucideIcon("gauge", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function SolucaoDetalhe() {
  const sol = Route.useLoaderData();
  const {
    openModal
  } = useDemoModal();
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("Todos");
  const filteredPortals = portalIntegrations.filter((portal) => {
    const matchesSearch = portal.name.toLowerCase().includes(searchTerm.toLowerCase()) || portal.description.toLowerCase().includes(searchTerm.toLowerCase());
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
  const renderCustomSection = () => {
    switch (sol.slug) {
      case "albert-ia":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AlbertIASubSection, { openModal });
      case "sites-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SitesTemplateSubSection, { openModal });
      case "sites-v8":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SitesV8SubSection, { openModal });
      case "crm":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CRMSubSection, {});
      case "app":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AppSubSection, {});
      case "funil":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FunilSubSection, {});
      case "rodizio":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RodizioSubSection, {});
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-hero py-20 md:py-28 border-b border-[color:var(--brand-ink)]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid absolute inset-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-ui uppercase text-[color:var(--brand-orange)] font-semibold", children: "Soluções" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-ui uppercase text-muted-foreground", children: sol.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-8 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3", children: [
                sol.slug === "albert-ia" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[color:var(--brand-sand)]/85 backdrop-blur-sm rounded-2xl p-2.5 border border-[color:var(--brand-ink)]/15 shadow-soft flex items-center justify-center max-w-[190px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/albert-logo.png", alt: "Albert IA", className: "h-9 object-contain" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex items-center justify-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { className: "w-6 h-6 text-[color:var(--brand-orange)]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-xs", children: "Produto Exclusivo" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-extrabold tracking-[-0.045em] leading-[0.98] text-[clamp(2.3rem,5vw,4rem)]", children: sol.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-foreground/80 leading-relaxed font-serif-italic", children: sol.shortDesc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: sol.longDesc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: sol.slug === "albert-ia" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft decoration-none no-underline", children: [
                sol.ctaText,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openModal, className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3.5 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft", children: [
                sol.ctaText,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-3xl p-6 shadow-soft space-y-6 md:sticky md:top-24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase font-mono-ui text-foreground tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15", children: "✦ Vantagens Comerciais" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: sol.benefits.map((b, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm leading-relaxed text-foreground/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-[color:var(--brand-orange)] shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
              ] }, idx)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 py-20 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px]", children: "O que está incluso" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight", children: "Recursos e Funcionalidades" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: sol.features.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-5 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-background hover:bg-[color:var(--brand-sand)]/30 hover:border-[color:var(--brand-orange)]/30 transition duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] flex items-center justify-center shrink-0 font-mono-ui text-xs font-bold", children: (idx + 1).toString().padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base text-foreground mb-1", children: "Funcionalidade Integrada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f })
          ] })
        ] }, idx)) })
      ] }),
      renderCustomSection(),
      sol.slug === "integracoes" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[color:var(--brand-ink)]/10 pt-16 md:pt-24 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 max-w-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px]", children: "Ecossistema Completo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight", children: "Mais de 40 portais e ferramentas integradas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Sincronize seus imóveis automaticamente com os maiores players do mercado. Sem cadastros manuais repetitivos, sem perda de tempo." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-72 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Buscar portal ou ferramenta...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-4 py-2.5 bg-background border border-[color:var(--brand-ink)]/15 focus:outline-none focus:ring-1 focus:ring-[color:var(--brand-orange)] focus:border-[color:var(--brand-orange)] rounded-full text-xs font-medium" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pb-4 border-b border-[color:var(--brand-ink)]/10", children: ["Todos", "Nacionais", "Regionais", "Marketing", "Exclusivos"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(cat), className: `px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${activeCategory === cat ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-[color:var(--brand-ink)]" : "bg-background text-muted-foreground border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)] hover:text-foreground"}`, children: cat }, cat)) }),
        filteredPortals.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: filteredPortals.map((portal) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          "--brand-accent-color": portal.officialColor
        }, className: "group relative flex flex-col p-5 bg-[color:var(--brand-sand)]/20 hover:bg-background border border-[color:var(--brand-ink)]/10 hover:border-[var(--brand-accent-color)]/30 rounded-2xl transition-all duration-300 shadow-soft overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[var(--brand-accent-color)] transition-all duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shadow-sm ${portal.logoBg} ${portal.logoTextColor}`, children: portal.logoText }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-mono-ui font-bold px-2 py-0.5 rounded-full ${portal.type === "Em Breve" ? "bg-amber-100 text-amber-800" : portal.type === "API" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`, children: portal.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground group-hover:text-[color:var(--brand-orange)] transition-colors duration-200", children: portal.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[color:var(--brand-orange)] font-mono-ui font-semibold mt-1", children: portal.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 leading-relaxed flex-grow", children: portal.description })
        ] }, portal.name)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 border border-dashed border-[color:var(--brand-ink)]/15 rounded-2xl space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-sm", children: "Nenhum portal encontrado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Tente buscar por termos diferentes ou selecione outra categoria." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] py-16 relative overflow-hidden border-t border-[color:var(--brand-ink)]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid absolute inset-0 opacity-15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-10 h-10 text-[color:var(--brand-orange)] mx-auto animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold tracking-tight", children: [
            "Comece a usar o ",
            sol.title,
            " hoje mesmo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[color:var(--brand-sand)]/70 max-w-md mx-auto", children: "Experimente toda a inteligência e automação da Microsistec. Leva menos de 30 segundos para configurar sua carteira imobiliária." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: sol.slug === "albert-ia" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-elev decoration-none no-underline", children: [
            "Converse com o Albert agora mesmo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openModal, className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-elev", children: [
            "Ativar Teste 14 Dias Grátis ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function AlbertIASubSection({
  openModal
}) {
  const [currentStep, setCurrentStep] = reactExports.useState(0);
  const [chatHistory, setChatHistory] = reactExports.useState([{
    sender: "albert",
    text: "Olá! Sou o Albert, assistente inteligente da Microsistec. Vi que se interessou pela cobertura duplex de R$ 980.000 no Gonzaga. Gostaria de agendar uma visita ou prefere simular as parcelas?",
    options: [{
      label: "Simular financiamento",
      actionStep: 1
    }, {
      label: "Agendar visita direta",
      actionStep: 4
    }]
  }]);
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const handleOptionClick = (label, nextStep) => {
    const newUserMsg = {
      sender: "user",
      text: label
    };
    setChatHistory((prev) => [...prev, newUserMsg]);
    setCurrentStep(nextStep);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let albertMsg;
      if (nextStep === 1) {
        albertMsg = {
          sender: "albert",
          text: "Excelente! Para fazermos uma simulação precisa: qual o valor aproximado que você planeja dar de entrada?",
          options: [{
            label: "R$ 200.000 de entrada",
            actionStep: 2
          }, {
            label: "R$ 300.000 ou mais",
            actionStep: 2
          }]
        };
      } else if (nextStep === 2) {
        albertMsg = {
          sender: "albert",
          text: "Perfeito! E você possui saldo de FGTS ativo que gostaria de usar para somar na entrada e reduzir as parcelas?",
          options: [{
            label: "Sim, R$ 40.000 de FGTS",
            actionStep: 3
          }, {
            label: "Não pretendo usar FGTS",
            actionStep: 3
          }]
        };
      } else if (nextStep === 3) {
        albertMsg = {
          sender: "albert",
          text: "Sensacional! Consolidei R$ 240.000 de entrada total, restando R$ 740.000 a financiar. Pela tabela SAC, as parcelas ficariam em média R$ 5.800/mês. Posso enviar a ficha formal para nossa gerência de crédito e já pré-agendar sua visita no sábado às 10h?",
          options: [{
            label: "Sim, agendar visita!",
            actionStep: 4
          }, {
            label: "Falar com corretor humano",
            actionStep: 4
          }]
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
    setChatHistory([{
      sender: "albert",
      text: "Olá! Sou o Albert, assistente inteligente da Microsistec. Vi que se interessou pela cobertura duplex de R$ 980.000 no Gonzaga. Gostaria de agendar uma visita ou prefere simular as parcelas?",
      options: [{
        label: "Simular financiamento",
        actionStep: 1
      }, {
        label: "Agendar visita direta",
        actionStep: 4
      }]
    }]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] text-xs font-mono-ui font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3.5 h-3.5" }),
        " Interatividade Real"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight", children: "Veja o Albert IA operando em tempo real" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Interaja com o simulador de WhatsApp ao lado. O Albert atende com empatia linguística, faz cruzamento de dados, qualificação bancária de crédito e agenda visitas integradas diretamente no CRM da sua imobiliária, 24 horas por dia." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase font-mono-ui text-foreground tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15", children: "Por que ele é diferente de chatbots comuns?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50/40 rounded-xl border border-red-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-700 block mb-1", children: "Chatbot Tradicional" }),
            "Menu engessado de botões, sem contexto humano e frustrante para o cliente final."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-50/40 rounded-xl border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-700 block mb-1", children: "Albert IA" }),
            "Diálogos dinâmicos livres, tom consultivo, entendimento de renda, entrada e agendamento inteligente."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetChat, className: "text-xs font-mono-ui font-bold text-[color:var(--brand-orange)] hover:underline flex items-center gap-1 cursor-pointer", children: "Reiniciar Simulação ↻" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 bg-[color:var(--brand-sand)]/60 rounded-3xl p-4 border border-[color:var(--brand-ink)]/15 shadow-soft relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-5 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-4 rounded-2xl mb-4 shadow-sm relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[color:var(--brand-sand)]/20 p-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/albert-logo.png", alt: "Albert", className: "w-7 h-7 object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-sm flex items-center gap-1", children: [
            "Albert IA ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[color:var(--brand-sand)]/70", children: "Atendimento Imobiliário Oficial" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[9px] border-[color:var(--brand-orange)]/30 font-bold", children: "24h ONLINE" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[360px] overflow-y-auto space-y-3 px-2 py-4 bg-background/50 rounded-2xl border border-[color:var(--brand-ink)]/5 flex flex-col justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto space-y-3 pr-1", children: [
        chatHistory.map((msg, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${msg.sender === "user" ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-tr-none" : "bg-[color:var(--brand-sand)] text-foreground border border-[color:var(--brand-ink)]/10 rounded-tl-none shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-line", children: msg.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground/60 mt-1 block text-right", children: [
            "Hoje, ",
            (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })
          ] })
        ] }) }, index)),
        isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)] rounded-2xl rounded-tl-none p-3 border border-[color:var(--brand-ink)]/10 flex items-center gap-1 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0.2s]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0.4s]" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-2 bg-background/80 rounded-2xl border border-[color:var(--brand-ink)]/10 min-h-[60px] flex flex-wrap items-center justify-center gap-2", children: !isTyping && chatHistory[chatHistory.length - 1]?.options && chatHistory[chatHistory.length - 1].options.length > 0 ? chatHistory[chatHistory.length - 1].options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleOptionClick(opt.label, opt.actionStep), className: "bg-background hover:bg-[color:var(--brand-sand)] text-foreground border border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)] px-4 py-2 rounded-full text-xs font-bold transition shadow-sm cursor-pointer", children: opt.label }, i)) : !isTyping && currentStep === 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openModal, className: "bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] text-[color:var(--brand-ink)] px-6 py-2.5 rounded-full text-xs font-extrabold transition shadow-elev cursor-pointer flex items-center gap-1", children: [
        "Conectar Minha Imobiliária Agora ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/60 italic font-mono-ui", children: "Albert digitando... aguarde a resposta" }) })
    ] })
  ] }) });
}
const templates = [{
  name: "ElegantHaus",
  url: "http://eleganthaus1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164147/elegant-scaled.jpg",
  desc: "Design minimalista e de altíssimo padrão, com foco em fotografias de grandes proporções e tipografia moderna.",
  tags: ["Luxo", "Minimalista", "Imagens Amplas"]
}, {
  name: "CirclesHouse",
  url: "http://circleshaus1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164326/circles-scaled.jpg",
  desc: "Elementos geométricos arredondados e transições suaves, perfeito para imobiliárias dinâmicas.",
  tags: ["Moderno", "Circular", "Transições Suaves"]
}, {
  name: "CityHouse",
  url: "http://cityhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164724/city-scaled.jpg",
  desc: "Otimizado para imóveis urbanos e metropolitanos, com filtros de busca extremamente rápidos.",
  tags: ["Urbano", "Filtro Avançado", "Rápido"]
}, {
  name: "BeachHouse",
  url: "http://beachhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164800/beach-scaled.jpg",
  desc: "Clima litorâneo e fresco, ideal para imóveis de praia, veraneio e locação de temporada.",
  tags: ["Praia", "Fresco", "Temporada"]
}, {
  name: "Landhouse",
  url: "http://landhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06164915/land-scaled.jpg",
  desc: "Especialmente desenvolvido para chácaras, sítios, fazendas e grandes lotes de terra.",
  tags: ["Rural", "Lotes", "Verde"]
}, {
  name: "DotHouse Light",
  url: "http://dothouselight1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165001/dothouse-scaled.jpg",
  desc: "Visual corporativo limpo, excelente legibilidade e estrutura focada na conversão rápida de leads.",
  tags: ["Corporativo", "Clean", "Conversão"]
}, {
  name: "DotHouse Dark",
  url: "http://dothousedark1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165035/dothouse-dark-1-scaled.jpg",
  desc: "A versão escura premium do campeão de vendas, ideal para marcas arrojadas e modernas.",
  tags: ["Dark Mode", "Premium", "Arrojado"]
}, {
  name: "CleanHouse",
  url: "http://cleanhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165100/clean-scaled.jpg",
  desc: "Interface ultra-limpa com foco absoluto no conteúdo e navegação simplificada.",
  tags: ["Ultra Clean", "Leitura", "Simples"]
}, {
  name: "CenterHouse",
  url: "http://centerhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165133/center-scaled.jpg",
  desc: "Layout simétrico e centralizado, com excelente destaque para imóveis em destaque.",
  tags: ["Simétrico", "Destaque", "Equilibrado"]
}, {
  name: "SmartHouse",
  url: "http://smarthousemicrosistec1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165328/smart-scaled.jpg",
  desc: "Foco tecnológico e automações visuais integradas, perfeito para jovens proptechs.",
  tags: ["Tech", "Automações", "Jovem"]
}, {
  name: "FlashHouse",
  url: "http://flashhousemicrosistec1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165352/flash-scaled.jpg",
  desc: "Performance ultrarrápida e design focado no público mobile e redes sociais.",
  tags: ["Performance", "Mobile First", "Social"]
}, {
  name: "LightingHouse",
  url: "http://lightninghousemicrosistec1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165418/lighting-scaled.jpg",
  desc: "Efeitos de iluminação suaves e layout dinâmico que valoriza cada pixel do imóvel.",
  tags: ["Iluminado", "Dinâmico", "Sofisticado"]
}, {
  name: "CenterCityHouse",
  url: "http://centercityhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165505/center-house-1-scaled.jpg",
  desc: "Otimizado para grandes centros urbanos e imobiliárias de alto giro comercial.",
  tags: ["Centro Urbano", "Giro Alto", "Densidade"]
}, {
  name: "BusinessHouse",
  url: "http://businesshouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165532/business-scaled.jpg",
  desc: "Abordagem corporativa e profissional, ideal para loteadoras e grandes construtoras.",
  tags: ["Loteadoras", "B2B", "Corporativo"]
}, {
  name: "MasterHouse",
  url: "http://masterhouse1.imob.online/",
  image: "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/2024/08/06165553/master-scaled.jpg",
  desc: "Nosso modelo mais completo, unindo todas as melhores práticas de SEO, conversão e velocidade.",
  tags: ["Completo", "SEO King", "Campeão"]
}];
function SitesTemplateSubSection({
  openModal
}) {
  const [selectedTheme, setSelectedTheme] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-12 text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px] inline-block", children: "Catálogo Oficial de Temas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight", children: "Nossos 15 Modelos Otimizados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Temos 15 temas de altíssima conversão integrados à nossa plataforma, prontos para rodar no seu próprio domínio com velocidade extrema e SEO avançado." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: templates.map((tpl, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-[color:var(--brand-sand)]/30 hover:bg-background border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)]/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-soft flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/10] overflow-hidden border-b border-[color:var(--brand-ink)]/5 bg-muted relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tpl.image, alt: tpl.name, className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-500", onError: (e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 flex flex-wrap gap-1", children: tpl.tags.slice(0, 2).map((tg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--brand-ink)]/90 backdrop-blur-sm text-[color:var(--brand-sand)] text-[8px] font-mono-ui font-semibold px-2 py-0.5 rounded-full uppercase", children: tg }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-grow flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-base text-foreground group-hover:text-[color:var(--brand-orange)] transition-colors duration-200", children: tpl.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: tpl.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-5 border-t border-dashed border-[color:var(--brand-ink)]/10 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: tpl.url, target: "_blank", rel: "noopener noreferrer", className: "flex-1 bg-background hover:bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 text-foreground hover:border-[color:var(--brand-orange)] transition text-center py-2.5 rounded-full text-[10px] font-extrabold flex items-center justify-center gap-1.5 no-underline decoration-none", children: [
            "Visualizar Tema ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: openModal, className: "flex-1 bg-[color:var(--brand-ink)] hover:bg-[color:var(--brand-orange)] text-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition text-center py-2.5 rounded-full text-[10px] font-extrabold cursor-pointer border-none", children: "Quero este Tema" })
        ] })
      ] })
    ] }, i)) })
  ] });
}
const v8Clients = [{
  name: "Attila Imóveis",
  url: "https://attilaimoveis.com.br/",
  desc: "Referência em locação e vendas no litoral paulista, com navegação fluida e buscas complexas por mapa.",
  perf: {
    mobile: 98,
    desktop: 100,
    seo: 100
  },
  tags: ["Litoral SP", "Busca por Mapa", "Filtro Rápido"]
}, {
  name: "O Pioneiro",
  url: "https://opioneiro.com/",
  desc: "Imobiliária tradicional com foco em excelência e atendimento digital acelerado por CDN global.",
  perf: {
    mobile: 99,
    desktop: 100,
    seo: 100
  },
  tags: ["Tradição", "CDN Edge", "Carregamento Rápido"]
}, {
  name: "Isidório Imóveis",
  url: "https://isidorioimoveis.com.br/",
  desc: "Especialista em lançamentos e alto padrão, oferecendo uma experiência visual limpa e luxuosa.",
  perf: {
    mobile: 97,
    desktop: 99,
    seo: 100
  },
  tags: ["Lançamentos", "Alto Padrão", "Aesthetics"]
}, {
  name: "G3 Negócios",
  url: "https://negociosg3.com.br/",
  desc: "Foco total na conversão de leads comerciais e residenciais com integração em tempo real de WhatsApp.",
  perf: {
    mobile: 99,
    desktop: 100,
    seo: 100
  },
  tags: ["Lead Driven", "WhatsApp Sync", "Alta Conversão"]
}, {
  name: "Orion Imóveis",
  url: "https://orionimoveis.com/",
  desc: "Portal completo de locações definitivas e administração de condomínios com área do cliente integrada.",
  perf: {
    mobile: 98,
    desktop: 100,
    seo: 100
  },
  tags: ["Locação", "Área Cliente", "Robustez"]
}, {
  name: "Scorsatto",
  url: "https://scorsatto.com.br/",
  desc: "Forte atuação regional com catálogo limpo de propriedades rurais e urbanas de alto giro.",
  perf: {
    mobile: 99,
    desktop: 99,
    seo: 100
  },
  tags: ["Regional", "Imóveis Rurais", "Navegação Limpa"]
}, {
  name: "Romero Imobiliária",
  url: "https://romeroimobiliaria.com/",
  desc: "Visualização imersiva de mídias, vídeos de propriedades e fotos em altíssima fidelidade sem lentidão.",
  perf: {
    mobile: 97,
    desktop: 100,
    seo: 100
  },
  tags: ["Vídeos Imersivos", "Imagens WebP", "Responsivo"]
}, {
  name: "Ita Imobiliária",
  url: "https://itaimobiliaria.com.br/",
  desc: "Grande volume de captação orgânica através de SEO local de ponta nas ferramentas do Google.",
  perf: {
    mobile: 98,
    desktop: 100,
    seo: 100
  },
  tags: ["SEO Local", "Captação", "Google Rankings"]
}, {
  name: "Monaco Brokers",
  url: "https://monacobrokers.com.br/",
  desc: "Corretora boutique de investimentos imobiliários com layout executivo premium focado em investidores.",
  perf: {
    mobile: 99,
    desktop: 100,
    seo: 100
  },
  tags: ["Investimentos", "Boutique", "Layout Executivo"]
}];
function SitesV8SubSection({
  openModal
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-12 text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px] inline-block", children: "Showcase Imobiliário Real" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight", children: "Vitrine de Projetos V8 Ativos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Nossos clientes Sites V8 experimentam velocidade de carregamento absurda no celular e nota máxima nos rankings técnicos. Veja projetos de verdade operando no mercado brasileiro:" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: v8Clients.map((client, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-[color:var(--brand-sand)]/20 hover:bg-background border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)]/30 p-6 rounded-3xl transition-all duration-300 shadow-soft flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-dashed border-[color:var(--brand-ink)]/10 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-base text-foreground group-hover:text-[color:var(--brand-orange)] transition", children: client.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse block", title: "Site em produção estável" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-4", children: client.tags.map((tg, tIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--brand-ink)]/5 text-foreground text-[8px] font-mono-ui font-semibold px-2 py-0.5 rounded-full uppercase", children: tg }, tIdx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-6", children: client.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-[color:var(--brand-sand)]/60 rounded-2xl border border-[color:var(--brand-ink)]/5 space-y-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] font-mono-ui font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-3.5 h-3.5 text-emerald-500" }),
              " PageSpeed Mobile"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600", children: [
              client.perf.mobile,
              "/100"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] font-mono-ui font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5 text-emerald-500" }),
              " PageSpeed Desktop"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600", children: [
              client.perf.desktop,
              "/100"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] font-mono-ui font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 text-indigo-500" }),
              " SEO Ranking"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-600", children: [
              client.perf.seo,
              "%"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: client.url, target: "_blank", rel: "noopener noreferrer", className: "w-full bg-[color:var(--brand-ink)] group-hover:bg-[color:var(--brand-orange)] text-[color:var(--brand-sand)] group-hover:text-[color:var(--brand-ink)] transition text-center py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 no-underline decoration-none", children: [
        "Visitar Portal Ativo ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5" })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 p-6 bg-[color:var(--brand-sand)]/40 rounded-3xl border border-[color:var(--brand-ink)]/10 grid md:grid-cols-3 gap-6 items-center text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-[color:var(--brand-orange)] shrink-0 mx-auto md:mx-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Pioneirismo V8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Primeira linha brasileira de sites imobiliários SSR nativos." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-[color:var(--brand-orange)] shrink-0 mx-auto md:mx-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Segurança Extrema" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Certificação HTTPS, CDN Cloudflare Edge e proteção anti-DDoS." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-[color:var(--brand-orange)] shrink-0 mx-auto md:mx-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Velocidade Crítica" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Otimização automática de WebP e imagens sob demanda." })
        ] })
      ] })
    ] })
  ] });
}
function CRMSubSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] text-xs font-mono-ui font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
        " Cruzamento de Dados"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight", children: "Match Inteligente de Imóveis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Nossa plataforma não apenas armazena cadastros; ela correlaciona dados em tempo real. No momento em que um novo imóvel é inserido no CRM, o algoritmo varre sua carteira de leads e notifica por e-mail e WhatsApp os compradores com potencial de fechamento correspondente." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-foreground/80 font-mono-ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-500" }),
          " Match por bairro, faixa financeira, dormitórios e vagas."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-500" }),
          " Disparo automático de lâminas e catálogos customizados."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-500" }),
          " Relatórios gerenciais de aceitação e visitas do imóvel."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)]/60 rounded-3xl p-6 border border-[color:var(--brand-ink)]/15 relative overflow-hidden shadow-soft flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-5 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-background rounded-2xl border border-[color:var(--brand-ink)]/10 shadow-sm relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 stamp text-emerald-600 text-[8px] font-bold", children: "DISPONÍVEL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-ui text-[10px] text-muted-foreground", children: "CÓD: AP3290" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-sm mt-1", children: "Apartamento Vista Mar - Gonzaga" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono-ui font-semibold text-[color:var(--brand-orange)] mt-1", children: "R$ 890.000" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center relative py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-10 bg-dashed border-l border-[color:var(--brand-ink)]/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-3 py-1 rounded-full text-[9px] font-mono-ui font-bold shadow-soft", children: "MATCH 96%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-background rounded-2xl border border-[color:var(--brand-ink)]/10 shadow-sm relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 stamp text-indigo-600 text-[8px] font-bold", children: "CRÉDITO PRÉ-APROVADO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-sm", children: "Jefferson Junior" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Preferencia: Gonzaga/Boqueirão · R$ 900.000 max." })
      ] })
    ] })
  ] }) });
}
function AppSubSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[260px] h-[500px] bg-[color:var(--brand-ink)] rounded-[40px] p-3 border-4 border-[color:var(--brand-ink)] shadow-elev relative overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-5 bg-[color:var(--brand-ink)] rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background w-full h-full rounded-[30px] p-4 flex flex-col justify-between overflow-hidden relative text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-5 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-[color:var(--brand-ink)]/10 pt-4 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-ui font-extrabold text-[10px]", children: "Microsistec App" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 flex-grow overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-[color:var(--brand-sand)]/60 rounded-xl border border-[color:var(--brand-ink)]/5 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground font-mono-ui", children: "CAPTURA DE LEAD" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[10px]", children: "Novo lead VivaReal às 14:02" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Carla Santos solicitou contato no Whatsapp." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-xl space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-[9px] flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enviar Lâmina" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-[color:var(--brand-orange)] font-bold", children: "1-CLIQUE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] rounded-full text-[9px] py-1.5 font-extrabold border-none cursor-pointer", children: "Compartilhar no WhatsApp" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-[color:var(--brand-ink)]/5 text-center text-[8px] text-muted-foreground font-mono-ui", children: "Corretor Conectado · Santos/SP" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] text-xs font-mono-ui font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-3.5 h-3.5" }),
        " Mobilidade Total"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight", children: "Toda a imobiliária no bolso do corretor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Esqueça planilhas ou a necessidade de sentar no computador para conferir dados. Nosso aplicativo oficial de atendimento imobiliário foi feito sob medida para o dia a dia na rua. Receba avisos instantâneos de novos leads, ligue diretamente do app e envie belas apresentações de imóveis no WhatsApp do cliente com apenas um clique." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground block", children: "Notificação Rápida" }),
          "O app apita na hora em que o lead é enviado em qualquer portal imobiliário."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground block", children: "Check-in Geolocalizado" }),
          "Acompanhe a rota e registre visitas de campo com precisão e segurança legal."
        ] })
      ] })
    ] })
  ] }) });
}
function FunilSubSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-12 text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px] inline-block", children: "Pipeline Comercial Visual" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight", children: "Funil de Vendas em Formato Kanban" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Tenha controle absoluto e previsibilidade sobre suas comissões de fechamento. Mova os negócios de fase com arrastar e soltar suave no CRM:" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold font-mono-ui uppercase text-muted-foreground", children: "1. Novo Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full", children: "2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Carlos Eduardo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Apartamento 2 quartos Gonzaga" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[color:var(--brand-orange)] font-bold", children: "R$ 550.000" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Cláudia Cruz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Cobertura duplex Ponta da Praia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[color:var(--brand-orange)] font-bold", children: "R$ 1.200.000" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold font-mono-ui uppercase text-muted-foreground", children: "2. Qualificado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full", children: "1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Bruno Alves" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Comprovou entrada e FGTS com Albert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-emerald-600 font-bold font-mono-ui", children: "Albert MQL" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold font-mono-ui uppercase text-muted-foreground", children: "3. Visita Agendada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full", children: "1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-background rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm space-y-1 hover:border-[color:var(--brand-orange)] transition relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 flex items-center gap-1 text-[8px] text-[color:var(--brand-orange)] font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-2.5 h-2.5" }),
            " Sáb 10h"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Juliana Costa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Sobrado em Condomínio Fechado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[color:var(--brand-orange)] font-bold", children: "R$ 2.400.000" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)]/30 rounded-2xl p-4 border border-[color:var(--brand-ink)]/5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-[color:var(--brand-ink)]/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold font-mono-ui uppercase text-muted-foreground", children: "4. Proposta / Fechamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--brand-ink)]/10 text-[color:var(--brand-ink)] text-[9px] font-bold px-2 py-0.5 rounded-full", children: "1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 shadow-sm space-y-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 flex items-center gap-0.5 text-[8px] text-indigo-600 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-2.5 h-2.5" }),
            " CONTRATO"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs", children: "Marcos Paulo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Documentos aprovados em cartório" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-indigo-700 font-bold", children: "COMISSÃO R$ 38.000" })
        ] })
      ] })
    ] })
  ] });
}
function RodizioSubSection() {
  const [queue, setQueue] = reactExports.useState([{
    id: 1,
    name: "Mariana Silva",
    specialty: "Alto Padrão",
    status: "online",
    leads: 4,
    responseTime: "1m 20s"
  }, {
    id: 2,
    name: "Diego Ferreira",
    specialty: "Lançamentos",
    status: "online",
    leads: 3,
    responseTime: "2m 05s"
  }, {
    id: 3,
    name: "Paula Santos",
    specialty: "Locação",
    status: "busy",
    leads: 5,
    responseTime: "3m 40s"
  }, {
    id: 4,
    name: "Rafael Moura",
    specialty: "Alto Padrão",
    status: "visiting",
    leads: 2,
    responseTime: "4m 12s"
  }]);
  const [incomingLead, setIncomingLead] = reactExports.useState(null);
  const [distributed, setDistributed] = reactExports.useState(null);
  const [animating, setAnimating] = reactExports.useState(false);
  const LEADS = [{
    name: "João Mendes",
    portal: "Zap Imóveis",
    phone: "(11) 9 8765-4321"
  }, {
    name: "Camila Rocha",
    portal: "Viva Real",
    phone: "(13) 9 9832-1122"
  }, {
    name: "Pedro Alves",
    portal: "Mercado Livre",
    phone: "(11) 9 7654-3210"
  }, {
    name: "Larissa Teixeira",
    portal: "OLX",
    phone: "(21) 9 6543-2109"
  }];
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
      setDistributed({
        corretor: first.name,
        lead: incomingLead.name
      });
      setQueue((prev) => {
        const [head, ...rest] = prev;
        return [...rest, {
          ...head,
          leads: head.leads + 1
        }];
      });
      setIncomingLead(null);
      setAnimating(false);
    }, 700);
  };
  const statusColor = {
    online: "#22c55e",
    busy: "#f59e0b",
    visiting: "#3b82f6",
    offline: "#6b7280"
  };
  const statusLabel = {
    online: "Online",
    busy: "Ocupado",
    visiting: "Em Visita",
    offline: "Folga"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 pb-20 md:pb-28 border-t border-[color:var(--brand-ink)]/10 pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-14 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px]", children: "Fila Inteligente Round-Robin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight", children: "Simulador de Rodízio de Atendimento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: 'Veja como o sistema distribui leads de forma justa e automática entre os corretores disponíveis. Clique em "Novo Lead" para simular um contato entrando de um portal imobiliário.' })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3.5 border-b border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-ui font-bold uppercase tracking-widest", children: "Fila de Corretores · Ao Vivo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono-ui text-[color:var(--brand-sand)]/50", children: [
            queue.length,
            " corretores"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[color:var(--brand-ink)]/5", children: queue.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex items-center gap-4 px-5 py-4 transition-all duration-500 ${idx === 0 ? "bg-[color:var(--brand-orange)]/8 border-l-2 border-[color:var(--brand-orange)]" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0", style: {
            background: idx === 0 ? "var(--brand-orange)" : "rgba(14,17,23,0.06)",
            color: idx === 0 ? "var(--brand-ink)" : "var(--brand-ink)"
          }, children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] shrink-0", children: c.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm truncate", children: c.name }),
              idx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded text-[9px] font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] uppercase tracking-wide shrink-0", children: "Vez" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: c.specialty })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full", style: {
                background: statusColor[c.status]
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium", style: {
                color: statusColor[c.status]
              }, children: statusLabel[c.status] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono-ui text-muted-foreground", children: [
              c.leads,
              " leads · ",
              c.responseTime
            ] })
          ] })
        ] }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase font-mono-ui tracking-wider text-muted-foreground", children: "↙ Lead Entrante" }),
          incomingLead ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl border border-[color:var(--brand-orange)]/30 bg-[color:var(--brand-orange)]/8 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-mono-ui", children: [
                "via ",
                incomingLead.portal
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: incomingLead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: incomingLead.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleConfirm, disabled: animating, className: "w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-none", style: {
              background: animating ? "rgba(14,17,23,0.3)" : "var(--brand-ink)",
              color: "var(--brand-sand)"
            }, children: animating ? "Distribuindo..." : "⚡ Distribuir para Mariana" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDistribute, className: "w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-none", style: {
            background: "var(--brand-orange)",
            color: "var(--brand-ink)"
          }, children: "+ Novo Lead" }),
          distributed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl border border-green-500/30 bg-green-50/40 text-xs text-green-700 font-medium", children: [
            "✓ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: distributed.lead }),
            " enviado para ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: distributed.corretor }),
            " no WhatsApp!"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
          icon: "⚖️",
          title: "Round-Robin",
          desc: "Cada corretor recebe leads em sequência justa, nunca duplicando."
        }, {
          icon: "⏱️",
          title: "Timeout Auto-skip",
          desc: "Se não responder em X min, o próximo da fila é acionado automaticamente."
        }, {
          icon: "🔴",
          title: "Status Dinâmico",
          desc: "Corretor em visita ou folga é pulado sem intervenção manual."
        }].map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3.5 rounded-xl border border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-sand)]/20 hover:border-[color:var(--brand-orange)]/30 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg shrink-0", children: rule.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-xs mb-0.5", children: rule.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground leading-relaxed", children: rule.desc })
          ] })
        ] }, rule.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-4 border-t border-[color:var(--brand-ink)]/10 pt-10", children: [{
      value: "< 3min",
      label: "Tempo médio de resposta",
      sub: "com rodízio ativo"
    }, {
      value: "100%",
      label: "Distribuição equitativa",
      sub: "sem conflitos internos"
    }, {
      value: "↑ 42%",
      label: "Conversão de 1º contato",
      sub: "por velocidade de resposta"
    }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-extrabold tracking-tight text-[color:var(--brand-orange)]", children: m.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold mt-1", children: m.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: m.sub })
    ] }, m.label)) })
  ] });
}
export {
  SolucaoDetalhe as component
};
