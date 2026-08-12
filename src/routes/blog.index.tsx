import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { blogPosts } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Search } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog Microsistec - Tecnologia + IA para Imobiliárias" },
      {
        name: "description",
        content:
          "Leia artigos especializados em tecnologia imobiliária, inteligência artificial, marketing digital, e vendas para corretores e imobiliárias.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [search, setSearch] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState("Todas");

  // Extract all unique tags
  const tags = [
    "Todas",
    "Gestão Comercial",
    "Gestão imobiliária",
    "Inovação",
    "Marketing Imobiliário",
    "Mercado Imobiliário"
  ];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === "Todas" || post.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pb-24">
        {/* Blog Header Hero */}
        <section className="relative overflow-hidden bg-hero pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-6 text-center space-y-4">
            <span className="stamp text-[color:var(--brand-orange)] text-xs inline-block">
              Conteúdo de Valor
            </span>
            <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.2rem,5vw,4rem)]">
              Leitura rápida pra quem
              <br />
              <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
                vende imóvel de verdade
              </span>
            </h1>
            <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              Descubra estratégias práticas de SEO local, inteligência artificial, gestão comercial e vendas com o olhar de quem tem trinta anos de mercado.
            </p>
          </div>
        </section>

        {/* Filters and Search Strip */}
        <section className="mx-auto max-w-7xl px-6 mt-12 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-[color:var(--brand-ink)]/10">
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer border ${
                    selectedTag === tag
                      ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-[color:var(--brand-ink)]"
                      : "bg-background text-muted-foreground border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)] hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar matérias..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-full text-xs py-5"
              />
            </div>
          </div>
        </section>

        {/* Blog Post List */}
        <section className="mx-auto max-w-7xl px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col border-t border-[color:var(--brand-ink)]/10 pt-6 hover:border-[color:var(--brand-orange)] transition duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4 text-[10px] font-mono-ui text-muted-foreground">
                    <span className="uppercase tracking-wider text-[color:var(--brand-orange)] font-semibold">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="aspect-[16/10] rounded-2xl mb-5 overflow-hidden border border-[color:var(--brand-ink)]/10">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                  
                  <h3 className="font-bold text-lg tracking-tight leading-snug group-hover:text-[color:var(--brand-orange)] transition">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between text-[11px] font-mono-ui text-foreground/80 group-hover:text-[color:var(--brand-orange)] transition">
                    <span>{post.readTime}</span>
                    <span className="flex items-center gap-0.5">
                      Ler Artigo <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[color:var(--brand-ink)]/15 rounded-3xl space-y-2">
              <h3 className="font-bold text-lg text-foreground">Nenhuma matéria encontrada</h3>
              <p className="text-sm text-muted-foreground">
                Tente redefinir sua busca ou filtrar por outra categoria.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
