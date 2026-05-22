import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { N as Nav, F as Footer } from "./MicrosistecLanding-DldveeAA.js";
import { b as blogPosts, I as Input } from "./router-BdRThgdY.js";
import { Link } from "@tanstack/react-router";
import { Search, ArrowUpRight } from "lucide-react";
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
function BlogIndex() {
  const [search, setSearch] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState("Todas");
  const tags = ["Todas", ...new Set(blogPosts.map((p) => p.tag))];
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === "Todas" || post.tag === selectedTag;
    return matchesSearch && matchesTag;
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { className: "pb-24", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-hero py-16 md:py-24 border-b border-[color:var(--brand-ink)]/10", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-grid absolute inset-0" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center space-y-4", children: [
          /* @__PURE__ */ jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-xs inline-block", children: "Conteúdo de Valor" }),
          /* @__PURE__ */ jsxs("h1", { className: "font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.2rem,5vw,4rem)]", children: [
            "Leitura rápida pra quem",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal text-[color:var(--brand-orange)]", children: "vende imóvel de verdade" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base max-w-lg mx-auto leading-relaxed", children: "Descubra estratégias práticas de SEO local, inteligência artificial, gestão comercial e vendas com o olhar de quem tem trinta anos de mercado." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-5xl px-6 mt-12 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-[color:var(--brand-ink)]/10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 w-full md:w-auto", children: tags.map((tag) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedTag(tag), className: `px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer border ${selectedTag === tag ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-[color:var(--brand-ink)]" : "bg-background text-muted-foreground border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)] hover:text-foreground"}`, children: tag }, tag)) }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full md:w-64 shrink-0", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(Input, { type: "text", placeholder: "Buscar matérias...", value: search, onChange: (e) => setSearch(e.target.value), className: "pl-9 bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-full text-xs py-5" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-5xl px-6", children: filteredPosts.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredPosts.map((post) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: post.slug
      }, className: "group flex flex-col border-t border-[color:var(--brand-ink)]/10 pt-6 hover:border-[color:var(--brand-orange)] transition duration-300 cursor-pointer", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4 text-[10px] font-mono-ui text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "uppercase tracking-wider text-[color:var(--brand-orange)] font-semibold", children: post.tag }),
          /* @__PURE__ */ jsx("span", { children: post.date })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] rounded-2xl mb-5 overflow-hidden border border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsx("img", { src: post.imageUrl, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500", onError: (e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
        } }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg tracking-tight leading-snug group-hover:text-[color:var(--brand-orange)] transition", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-3 line-clamp-3 leading-relaxed", children: post.excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-6 flex items-center justify-between text-[11px] font-mono-ui text-foreground/80 group-hover:text-[color:var(--brand-orange)] transition", children: [
          /* @__PURE__ */ jsx("span", { children: post.readTime }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-0.5", children: [
            "Ler Artigo ",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] }, post.id)) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-20 border border-dashed border-[color:var(--brand-ink)]/15 rounded-3xl space-y-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-foreground", children: "Nenhuma matéria encontrada" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Tente redefinir sua busca ou filtrar por outra categoria." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BlogIndex as component
};
