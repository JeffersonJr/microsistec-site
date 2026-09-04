import * as React from "react";
import { Link } from "@tanstack/react-router";
import { useDemoModal } from "@/hooks/use-demo-modal";
import {
  ArrowLeft, ArrowUpRight, ArrowRight, Sparkles, Workflow, Smartphone, Target,
  LineChart, Bot, MessageSquare, Building2, Globe, ShieldCheck, CheckCircle2,
  Quote, KeyRound, ChevronDown, Menu, X, Users, Home, Facebook, Instagram, Youtube
} from "lucide-react";
import {
  solutions, getIconComponent, blogPosts, testimonials, portalIntegrations
} from "@/lib/data";

export default function Blog() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section
      id="blog"
      data-gtm-section="blog"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32"
    >
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-2xl">
          <span
            className="font-serif-italic font-normal"
            style={{ color: "#2B5250" }}
          >
            Leitura
          </span>{" "}
          rápida pra quem vende imóvel
        </h2>
        <Link
          title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário"
          to="/blog"
          data-gtm-cta="ver_todos_blog"
          data-gtm-location="blog"
          className="inline-flex items-center gap-1.5 text-base font-medium hover:opacity-70"
          aria-label="Ver todos os artigos do blog"
        >
          Ver todos <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            title="Ler artigo no Blog"
            key={p.id}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            data-gtm-cta="ler_artigo_blog"
            data-gtm-location="blog"
            className="group flex flex-col border-t border-[color:var(--brand-ink)]/20 pt-6 transition cursor-pointer hover:border-[#2B5250]"
          >
            <div className="flex items-center justify-between mb-6 text-sm font-mono-ui text-muted-foreground">
              <span className="uppercase tracking-wider">{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <div className="aspect-[16/10] rounded-xl mb-6 overflow-hidden border border-[color:var(--brand-ink)]/10">
              <img
                src={p.imageUrl}
                alt={p.title}
                title={p.title}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <h3 className="font-bold text-2xl tracking-tight leading-snug transition group-hover:text-[#2B5250]">
              {p.title}
            </h3>
            <p className="text-base text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
