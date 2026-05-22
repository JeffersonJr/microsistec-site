"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

type Post = {
  title: string;
  date: string; // ISO string
  readTime: number; // minutos
  category: string;
  slug: string;
};

const posts: Post[] = [
  {
    title: "Como reduzir o CAC de sua imobiliária em 30%",
    date: "2024-09-10",
    readTime: 5,
    category: "Marketing",
    slug: "/blog/reducir-cac",
  },
  {
    title: "Automação de follow‑up: o segredo para não perder leads",
    date: "2024-08-25",
    readTime: 7,
    category: "Vendas",
    slug: "/blog/automacao-followup",
  },
  {
    title: "SEO para sites imobiliários: checklist 2024",
    date: "2024-08-12",
    readTime: 6,
    category: "SEO",
    slug: "/blog/seo-imobiliario",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogSection() {
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

  return (
    <section id="blog" className="pt-28 pb-24 bg-background relative border-t border-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
              Últimos artigos do nosso blog
            </h2>
            <p className="mt-2 text-muted font-medium text-base sm:text-lg">
              Tendências de mercado, estratégias de vendas e novidades em tecnologia imobiliária.
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-outline flex items-center gap-1.5 px-6 py-3 shrink-0"
          >
            Acessar Blog Completo
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.div
              key={p.slug}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col h-full bg-background/50 backdrop-blur-sm rounded-2xl border border-muted/15 overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-500/20 transition-all"
            >
              {/* Card visual decorative accent */}
              <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-80" />

              <div className="flex-grow p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  {/* Category Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                      p.category
                    )} mb-4`}
                  >
                    {p.category}
                  </span>

                  <h3 className="mb-4 text-xl font-bold text-primary leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2">
                    <Link href={p.slug}>
                      {p.title}
                    </Link>
                  </h3>
                </div>

                <div className="space-y-4">
                  <Link
                    href={p.slug}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    Ler artigo completo
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <div className="pt-6 border-t border-muted/10 flex items-center justify-between text-xs text-muted font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      <span>{new Date(p.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      <span>{p.readTime} min de leitura</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
