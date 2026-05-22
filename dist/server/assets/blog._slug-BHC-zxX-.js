import { jsxs, jsx } from "react/jsx-runtime";
import { N as Nav, F as Footer } from "./MicrosistecLanding-DldveeAA.js";
import { a as Route, u as useDemoModal } from "./router-BdRThgdY.js";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock, Share2, ArrowLeft, Bot, ArrowRight, Sparkles } from "lucide-react";
import "react";
import "@radix-ui/react-dropdown-menu";
import "embla-carousel-react";
import "@tanstack/react-query";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@intercom/messenger-js-sdk";
function BlogLeitor() {
  const post = Route.useLoaderData();
  const {
    openModal
  } = useDemoModal();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-5xl px-6 py-10 md:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-8 border-b border-[color:var(--brand-ink)]/10 pb-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition", children: "Blog" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono-ui uppercase text-muted-foreground line-clamp-1 max-w-[200px] md:max-w-xs", children: post.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-start", children: [
        /* @__PURE__ */ jsxs("article", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs font-mono-ui", children: [
            /* @__PURE__ */ jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-[10px]", children: post.tag }),
            /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
              " ",
              post.readTime
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: post.date })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-extrabold tracking-[-0.04em] leading-[1.02] text-[clamp(2rem,5vw,3.2rem)] text-foreground", children: post.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-3 border-y border-dashed border-[color:var(--brand-ink)]/15", children: [
            /* @__PURE__ */ jsx("img", { src: post.author.avatarUrl, alt: post.author.name, className: "w-10 h-10 rounded-full object-cover border border-[color:var(--brand-ink)]/10", onError: (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
            } }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm leading-tight text-foreground", children: post.author.name }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                post.author.role,
                " · Microsistec"
              ] })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link do artigo copiado para a área de transferência!");
            }, className: "ml-auto p-2 rounded-full border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)] hover:bg-[color:var(--brand-sand)] transition", title: "Compartilhar", children: /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4 text-muted-foreground hover:text-[color:var(--brand-orange)]" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] rounded-2xl overflow-hidden border border-[color:var(--brand-ink)]/15 shadow-soft", children: /* @__PURE__ */ jsx("img", { src: post.imageUrl, alt: post.title, className: "w-full h-full object-cover", onError: (e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80";
          } }) }),
          /* @__PURE__ */ jsx("div", { className: "prose max-w-none text-foreground/90 mt-8 leading-relaxed space-y-6 text-base", dangerouslySetInnerHTML: {
            __html: post.content
          } }),
          /* @__PURE__ */ jsx("div", { className: "pt-8 border-t border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-orange)] transition", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Voltar para o diretório de artigos"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "lg:col-span-4 space-y-6 lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-3xl border border-[color:var(--brand-ink)] p-6 shadow-elev relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-grid absolute inset-0 opacity-15" }),
            /* @__PURE__ */ jsxs("div", { className: "relative space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[color:var(--brand-orange)]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5 text-[color:var(--brand-orange)]" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-extrabold text-xl tracking-tight leading-snug", children: "Pare de perder leads imobiliários no WhatsApp!" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-[color:var(--brand-sand)]/75 leading-relaxed", children: "Deixe o **Albert IA** atender, qualificar e agendar visitas em tempo real direto no seu CRM, 24 horas por dia." }),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("a", { href: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0", target: "_blank", rel: "noopener noreferrer", className: "w-full bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] text-[color:var(--brand-ink)] transition rounded-full py-3 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer border-none shadow-soft text-center justify-center decoration-none no-underline", children: [
                "Converse com o Albert agora mesmo ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-3xl p-6 shadow-soft space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-xs uppercase font-mono-ui tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15", children: "✦ Sobre a Microsistec" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Fomos os **pioneiros absolutos em trazer a tecnologia para o setor imobiliário brasileiro** desde **1994**. Unimos CRM robusto, sites de carregamento instantâneo, aplicativos e IA, provando em três décadas de mercado que sabemos o que fazemos." }),
            /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxs(Link, { to: "/empresa", className: "text-xs font-semibold text-[color:var(--brand-orange)] hover:underline inline-flex items-center gap-1", children: [
              "Conhecer nossa história ",
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BlogLeitor as component
};
