"use client";

import { useState } from "react";
import { postsList } from "@/data/posts";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  // Get unique categories list
  const categories = ["todos", "Marketing", "Vendas", "SEO"];

  // Filter posts
  const filteredPosts = postsList.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "todos" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "marketing":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "vendas":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "seo":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      default:
        return "bg-muted/10 text-muted border-muted/20";
    }
  };

  const spotlightPost = postsList[0]; // First post is spotlight

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 pb-20 bg-gradient-to-b from-background via-background to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
              <Sparkles className="size-3" />
              Microsistec Blog & Insights
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Aprenda a escalar sua imobiliária
            </h1>
            <p className="text-base sm:text-lg text-muted font-medium">
              Conteúdos práticos, técnicos e estratégicos escritos por especialistas no mercado imobiliário para acelerar sua geração e conversão de leads.
            </p>
          </div>

          {/* Search & Category Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 pb-6 border-b border-muted/10">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 items-center w-full md:w-auto justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat.toLowerCase())}
                  className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer select-none uppercase tracking-wider ${
                    selectedCategory === cat.toLowerCase()
                      ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/10"
                      : "bg-background border-muted/15 text-muted hover:text-primary hover:border-muted/30"
                  }`}
                >
                  {cat === "todos" ? "Ver todos" : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted">
                <Search className="size-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigos..."
                className="w-full pl-9 pr-4 py-2.5 bg-background border border-muted/15 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-primary"
              />
            </div>
          </div>

          {/* Featured Spotlight Card (Only visible when no search/filters are active for clean looks) */}
          {searchQuery === "" && selectedCategory === "todos" && spotlightPost && (
            <div className="mb-16">
              <div className="group overflow-hidden border border-muted/15 bg-background/55 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all grid lg:grid-cols-12">
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 uppercase tracking-wide">
                      Artigo em Destaque — {spotlightPost.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary group-hover:text-emerald-500 transition-colors leading-tight">
                      {spotlightPost.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted font-medium leading-relaxed">
                      {spotlightPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-muted/10">
                    <div className="flex items-center gap-3">
                      <div className="relative size-10 rounded-full overflow-hidden border border-muted/10">
                        <Image
                          src={spotlightPost.author.avatarUrl}
                          alt={spotlightPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary">{spotlightPost.author.name}</p>
                        <p className="text-[10px] text-muted font-bold">{spotlightPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${spotlightPost.slug}`}
                      className="btn-primary px-5 py-2.5 text-xs font-bold flex items-center gap-1"
                    >
                      Ler Artigo
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/og-image.png"
                    alt="Cover spotlight"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Articles Feed */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-muted/20 rounded-2xl">
              <p className="text-muted font-semibold text-lg">Nenhum artigo encontrado.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("todos");
                }}
                className="text-emerald-500 font-bold text-sm hover:underline mt-2 cursor-pointer"
              >
                Limpar filtros e busca
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {filteredPosts.map((post) => (
                  <motion.div
                    layout
                    key={post.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="group flex flex-col h-full bg-background/55 backdrop-blur-sm rounded-2xl border border-muted/15 overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-500/20 transition-all"
                  >
                    <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-80" />
                    
                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getCategoryColor(
                            post.category
                          )}`}
                        >
                          {post.category}
                        </span>

                        <h3 className="text-lg sm:text-xl font-bold text-primary leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted font-medium line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-muted/10 flex flex-col space-y-4">
                        {/* Author info */}
                        <div className="flex items-center gap-2.5">
                          <div className="relative size-7.5 rounded-full overflow-hidden border border-muted/10">
                            <Image
                              src={post.author.avatarUrl}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-primary leading-none">{post.author.name}</p>
                            <p className="text-[9px] text-muted font-semibold mt-0.5 leading-none">{post.author.role}</p>
                          </div>
                        </div>

                        {/* Read meta */}
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold">
                          <span className="flex items-center gap-1">
                            <Calendar className="size-3" />
                            {new Date(post.date).toLocaleDateString("pt-BR")}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-3" />
                            {post.readTime} min
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="w-full btn-outline py-2.5 text-xs font-bold text-center block"
                        >
                          Ler Artigo Completo
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="relative h-8 w-36 mx-auto filter brightness-0 invert opacity-70">
            <Image
              src="/images/logo.svg"
              alt="Microsistec Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-slate-600 font-bold">
            © {new Date().getFullYear()} Microsistec. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
