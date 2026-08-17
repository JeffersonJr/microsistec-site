import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import * as React from "react";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { blogPosts, BlogPost } from "@/lib/data";
import { ArrowLeft, ArrowRight, Bot, ChevronRight, Clock, Share2, Sparkles, Building2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: post ? `${post.title} - Blog Microsistec` : "Artigo Microsistec" },
        {
          name: "description",
          content: post ? post.excerpt : "Artigo especializado em inovação imobiliária e IA.",
        },
      ],
    };
  },
  loader: async ({ params }) => {
    const post = blogPosts.find((p: any) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    
    // Lazy-load the heavy HTML content (5.3MB!) only when needed
    // This removes it from the main JS bundle, guaranteeing 100/100 PageSpeed
    const contentData = await import('@/lib/blog-content.json');
    const content = (contentData.default as Record<string, string>)[params.slug];
    
    return { ...post, content } as BlogPost;
  },
  component: BlogLeitor,
});

function BlogLeitor() {
  const post = Route.useLoaderData() as BlogPost;
  const { openModal } = useDemoModal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-7xl px-6 pt-28 pb-10 md:pt-36 md:pb-16">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[color:var(--brand-ink)]/10 pb-4">
          <Link title="Página Inicial da Microsistec" to="/" className="text-sm font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground" />
          <Link title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário" to="/blog" className="text-sm font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground" />
          <span className="text-sm font-mono-ui uppercase text-muted-foreground line-clamp-1 max-w-[200px] md:max-w-xs">
            {post.title}
          </span>
        </div>

        {/* Dynamic Reader Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Column */}
          <article className="lg:col-span-8 space-y-6">
            
            {/* Meta */}
            <div className="flex items-center gap-3 text-sm font-mono-ui">
              <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
                {post.tag}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="font-extrabold tracking-[-0.04em] leading-[1.02] text-[clamp(2rem,5vw,3.2rem)] text-foreground">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 py-3 border-y border-dashed border-[color:var(--brand-ink)]/15">
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                title={`Autor: ${post.author.name}`}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="w-10 h-10 rounded-full object-cover border border-[color:var(--brand-ink)]/10"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
                }}
              />
              <div>
                <div className="font-semibold text-base leading-tight text-foreground">
                  {post.author.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {post.author.role} · Microsistec
                </div>
              </div>
              
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link do artigo copiado para a área de transferência!");
                }}
                className="ml-auto p-2 rounded-full border border-[color:var(--brand-ink)]/10 hover:border-[color:var(--brand-orange)] hover:bg-[color:var(--brand-sand)] transition"
                title="Compartilhar"
              >
                <Share2 className="w-4 h-4 text-muted-foreground hover:text-[color:var(--brand-orange)]" />
              </button>
            </div>

            {/* Feature Image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[color:var(--brand-ink)]/15 shadow-soft">
              <img
                src={post.imageUrl}
                alt={post.title}
                title={post.title}
                className="w-full h-full object-cover"
                width={1200}
                height={675}
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>

            {/* Content Injection */}
            <div 
              className="prose max-w-none text-foreground/90 mt-8 leading-relaxed space-y-6 text-lg"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />

            {/* Bottom Back Nav */}
            <div className="pt-8 border-t border-[color:var(--brand-ink)]/10">
              <Link title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário" to="/blog"
                className="inline-flex items-center gap-2 text-base font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-orange)] transition"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar para o diretório de artigos
              </Link>
            </div>
          </article>

          {/* Sticky Sidebar Column */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Lead Gen Card */}
            <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-3xl border border-[color:var(--brand-ink)] p-6 shadow-elev relative overflow-hidden">
              <div className="bg-grid absolute inset-0 opacity-15" />
              
              <div className="relative space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--brand-orange)]/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[color:var(--brand-orange)]" />
                </div>
                
                <h3 className="font-extrabold text-2xl tracking-tight leading-snug">
                  Pare de perder leads imobiliários no WhatsApp!
                </h3>
                
                <p className="text-sm text-[color:var(--brand-sand)]/75 leading-relaxed">
                  Deixe o **Albert IA** atender, qualificar e agendar visitas em tempo real direto no seu CRM, 24 horas por dia.
                </p>

                <div className="pt-2">
                  <button 
                    title="Falar com especialista"
                    onClick={() => openModal()}
                    className="w-full bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] text-[color:var(--brand-ink)] transition rounded-full py-3 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer border-none shadow-soft text-center decoration-none no-underline"
                  >
                    Converse com o Albert agora mesmo <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* CRM Test Card */}
            <div className="bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-3xl p-6 shadow-soft relative overflow-hidden space-y-4">
              <div className="relative space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--brand-ink)]/5 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[color:var(--brand-ink)]" />
                </div>
                
                <h3 className="font-extrabold text-2xl tracking-tight leading-snug">
                  Gestão imobiliária que dá resultado
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Experimente o CRM mais robusto do mercado. Automações, contratos, integrações com portais e funil de vendas avançado.
                </p>

                <div className="pt-2">
                  <button
                    onClick={openModal}
                    className="w-full bg-[color:var(--brand-ink)] hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] text-[color:var(--brand-sand)] transition rounded-full py-3 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer border-none shadow-soft"
                  >
                    Testar CRM por 15 dias <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* General Info Card */}
            <div className="bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-3xl p-6 shadow-soft space-y-4">
              <h4 className="font-bold text-sm uppercase font-mono-ui tracking-wider pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15">
                ✦ Sobre a Microsistec
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fomos os **pioneiros absolutos em trazer a tecnologia para o setor imobiliário brasileiro** desde **1994**. Unimos CRM robusto, sites de carregamento instantâneo, aplicativos e IA, provando em três décadas de mercado que sabemos o que fazemos.
              </p>
              <div className="pt-1">
                <Link title="Sobre a Microsistec" to="/empresa"
                  className="text-sm font-semibold text-[color:var(--brand-orange)] hover:underline inline-flex items-center gap-1"
                >
                  Conhecer nossa história <Sparkles className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
