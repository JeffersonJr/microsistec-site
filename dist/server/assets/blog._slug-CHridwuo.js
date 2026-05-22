import { J as jsxRuntimeExports } from "./server-BHksymyu.js";
import { N as Nav, b as ChevronRight, A as ArrowLeft, F as Footer } from "./MicrosistecLanding-BL0zN38N.js";
import { o as createLucideIcon, g as Route, E as useDemoModal, L as Link, B as Bot, A as ArrowRight, i as Sparkles } from "./router-BHIC0459.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function BlogLeitor() {
  const post = Route.useLoaderData();
  const {
    openModal
  } = useDemoModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-5xl px-6 py-10 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-8 border-b border-[color:var(--brand-ink)]/10 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition", children: "Blog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-ui uppercase text-muted-foreground line-clamp-1 max-w-[200px] md:max-w-xs", children: post.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs font-mono-ui", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px]", children: post.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              " ",
              post.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: post.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-extrabold tracking-[-0.04em] leading-[1.02] text-[clamp(2rem,5vw,3.2rem)] text-foreground", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3 border-y border-dashed border-[color:var(--brand-ink)]/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.author.avatarUrl, alt: post.author.name, className: "w-10 h-10 rounded-full object-cover border border-[color:var(--brand-ink)]/10", onError: (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm leading-tight text-foreground", children: post.author.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                post.author.role,
                " · Microsistec"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link do artigo copiado para a área de transferência!");
            }, className: "ml-auto p-2 rounded-full border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)] hover:bg-[color:var(--brand-sand)] transition", title: "Compartilhar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 text-muted-foreground hover:text-[color:var(--brand-orange)]" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] rounded-2xl overflow-hidden border border-[color:var(--brand-ink)]/15 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.imageUrl, alt: post.title, className: "w-full h-full object-cover", onError: (e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80";
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose max-w-none text-foreground/90 mt-8 leading-relaxed space-y-6 text-base", dangerouslySetInnerHTML: {
            __html: post.content
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-8 border-t border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-orange)] transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Voltar para o diretório de artigos"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 space-y-6 lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-3xl border border-[color:var(--brand-ink)] p-6 shadow-elev relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grid absolute inset-0 opacity-15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-[color:var(--brand-orange)]/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5 text-[color:var(--brand-orange)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-xl tracking-tight leading-snug", children: "Pare de perder leads imobiliários no WhatsApp!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[color:var(--brand-sand)]/75 leading-relaxed", children: "Deixe o **Albert IA** atender, qualificar e agendar visitas em tempo real direto no seu CRM, 24 horas por dia." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0", target: "_blank", rel: "noopener noreferrer", className: "w-full bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] text-[color:var(--brand-ink)] transition rounded-full py-3 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer border-none shadow-soft text-center justify-center decoration-none no-underline", children: [
                "Converse com o Albert agora mesmo ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-3xl p-6 shadow-soft space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase font-mono-ui tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15", children: "✦ Sobre a Microsistec" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Fomos os **pioneiros absolutos em trazer a tecnologia para o setor imobiliário brasileiro** desde **1994**. Unimos CRM robusto, sites de carregamento instantâneo, aplicativos e IA, provando em três décadas de mercado que sabemos o que fazemos." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/empresa", className: "text-xs font-semibold text-[color:var(--brand-orange)] hover:underline inline-flex items-center gap-1", children: [
              "Conhecer nossa história ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogLeitor as component
};
