import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { blogPosts } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogSearch = {
  q?: string;
  tag?: string;
  page?: number;
};

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): BlogSearch => {
    return {
      q: (search.q as string) || "",
      tag: (search.tag as string) || "Todas",
      page: Number(search.page) || 1,
    };
  },
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

const POSTS_PER_PAGE = 9;

function BlogIndex() {
  const { q, tag, page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  // Extract all unique tags
  const tags = [
    "Todas",
    "Gestão Comercial",
    "Gestão imobiliária",
    "Inovação",
    "Marketing Imobiliário",
    "Mercado Imobiliário",
  ];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes((q || "").toLowerCase()) ||
      post.excerpt.toLowerCase().includes((q || "").toLowerCase());
    const matchesTag = tag === "Todas" || post.tag === tag;
    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const safePage = Math.max(1, Math.min(page || 1, totalPages || 1));
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({
      search: (prev) => ({ ...prev, q: e.target.value, page: 1 }),
      replace: true,
    });
  };

  const handleTag = (newTag: string) => {
    navigate({
      search: (prev) => ({ ...prev, tag: newTag, page: 1 }),
      replace: true,
    });
  };

  const handlePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate({
        search: (prev) => ({ ...prev, page: newPage }),
        replace: true,
      });
      // scroll to top of list
      document.getElementById("filtros_blog")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pb-24">
        {/* Blog Header Hero */}
        <section
          id="hero_blog"
          data-gtm-section="hero_dobra_1"
          className="relative overflow-hidden bg-hero pt-20 pb-8 md:pt-36 md:pb-24 border-b border-[color:var(--brand-ink)]/10"
        >
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-6 text-center space-y-4">
            <span className="stamp text-[#2B5250] text-sm inline-block">
              Conteúdo de Valor
            </span>
            <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.2rem,5vw,4rem)]">
              Leitura rápida pra quem
              <br />
              <span className="font-serif-italic font-normal text-[#2B5250]">
                vende imóvel de verdade
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
              Descubra estratégias práticas de SEO local, inteligência
              artificial, gestão comercial e vendas com o olhar de quem tem
              trinta anos de mercado.
            </p>
          </div>
        </section>

        {/* Filters and Search Strip */}
        <section
          id="filtros_blog"
          data-gtm-section="filtros_blog"
          className="mx-auto max-w-7xl px-6 mt-6 md:mt-12 mb-6 md:mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-[color:var(--brand-ink)]/10">
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => handleTag(t)}
                  data-gtm-cta={`filtro_tag_blog_${t.toLowerCase().replace(/ /g, "_")}`}
                  data-gtm-location="filtros_blog"
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition cursor-pointer border ${
                    tag === t
                      ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-[color:var(--brand-ink)]"
                      : "bg-background text-muted-foreground border-[color:var(--brand-ink)]/15 hover:border-[#2B5250] hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar matérias..."
                value={q || ""}
                onChange={handleSearch}
                className="pl-9 bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[#2B5250] focus-visible:border-[#2B5250] rounded-full text-sm py-5"
              />
            </div>
          </div>
        </section>

        {/* Blog Post List */}
        <section
          id="lista_blog"
          data-gtm-section="lista_blog"
          className="mx-auto max-w-7xl px-6"
        >
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Link
                    title="Ler artigo no Blog"
                    key={post.id}
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    data-gtm-cta="ler_artigo_blog"
                    data-gtm-location="lista_blog"
                    className="group flex flex-col border-t border-[color:var(--brand-ink)]/10 pt-6 hover:border-[#2B5250] transition duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4 text-[10px] font-mono-ui text-muted-foreground">
                      <span className="uppercase tracking-wider text-[#2B5250] font-semibold">
                        {post.tag}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <div className="aspect-[16/10] rounded-2xl mb-5 overflow-hidden border border-[color:var(--brand-ink)]/10">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        title={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={500}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    </div>

                    <h3 className="font-bold text-xl tracking-tight leading-snug group-hover:text-[#2B5250] transition">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 flex items-center justify-between text-[11px] font-mono-ui text-foreground/80 group-hover:text-[#2B5250] transition">
                      <span>{post.readTime}</span>
                      <span className="flex items-center gap-0.5">
                        Ler Artigo <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-[color:var(--brand-ink)]/10">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePage(safePage - 1)}
                    disabled={safePage === 1}
                    className="rounded-full border-[color:var(--brand-ink)]/15 hover:border-[#2B5250] hover:text-[#2B5250]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground mx-4 font-mono-ui">
                    Página {safePage} de {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePage(safePage + 1)}
                    disabled={safePage === totalPages}
                    className="rounded-full border-[color:var(--brand-ink)]/15 hover:border-[#2B5250] hover:text-[#2B5250]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 border border-dashed border-[color:var(--brand-ink)]/15 rounded-3xl space-y-2">
              <h3 className="font-bold text-xl text-foreground">
                Nenhuma matéria encontrada
              </h3>
              <p className="text-base text-muted-foreground">
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
