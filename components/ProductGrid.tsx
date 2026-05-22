"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  Globe,
  Repeat,
  Plug,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

type Product = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const products: Product[] = [
  {
    title: "CRM Imobiliário",
    description:
      "Gestão completa de leads, histórico unificado, rodízio de equipes e secretaria de vendas (MQL).",
    icon: ShieldCheck,
    href: "/produtos/crm",
  },
  {
    title: "APP Mobile",
    description:
      "Controle de atendimentos na palma da mão, em tempo real, com sincronização instantânea.",
    icon: Smartphone,
    href: "/produtos/app",
  },
  {
    title: "Sites V8",
    description:
      "Sites imobiliários de altíssima conversão, ultravelozes e otimizados para o Google.",
    icon: Globe,
    href: "/produtos/sites-v8",
  },
  {
    title: "Funil de Vendas & Automações",
    description:
      "Fluxos pré-determinados que impedem a perda de leads e nutrem até o fechamento.",
    icon: Repeat,
    href: "/produtos/funil",
  },
  {
    title: "Integrações",
    description:
      "Sincronização direta com os maiores portais imobiliários do país (Zap, VivaReal, etc.).",
    icon: Plug,
    href: "/produtos/integracao",
  },
  {
    title: "Albert (IA Imobiliária)",
    description:
      "Chatbot inteligente que qualifica leads 24/7 e os envia direto ao funil ou WhatsApp.",
    icon: Bot,
    href: "/produtos/albert",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function ProductGrid() {
  return (
    <section id="produtos" className="pt-28 pb-20 bg-background/50 border-t border-muted/5 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold text-center text-primary leading-tight">
          Nossa suíte completa para imobiliárias de alta performance
        </h2>
        <p className="mb-16 text-center text-muted max-w-2xl mx-auto text-base sm:text-lg font-medium">
          Tecnologia ponta a ponta para maximizar a conversão, gerenciar equipes e acelerar as vendas no mercado imobiliário.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col items-center p-8 bg-background/45 backdrop-blur-sm rounded-2xl border border-muted/15 shadow-sm hover:shadow-lg transition-all hover:bg-muted/10 hover:border-emerald-500/30"
            >
              <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-6 shrink-0">
                <p.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary text-center">
                {p.title}
              </h3>
              <p className="text-sm text-muted text-center leading-relaxed font-medium flex-1">
                {p.description}
              </p>
              <Link
                href={p.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors group"
              >
                Saiba mais
                <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
