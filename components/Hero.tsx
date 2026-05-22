"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Building, BarChart, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  const triggerModal = () => {
    window.dispatchEvent(new Event("open-conversion-modal"));
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-background via-background to-muted/10">
      {/* Decorative Glowing Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="size-3.5" />
              Lançamento Versão V8
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-primary"
            >
              Acelere suas vendas de imóveis com{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              A suíte imobiliária definitiva: CRM de alta velocidade, aplicativos mobile nativos, sites ultravelozes e o <strong>Albert</strong>, seu chatbot especialista que atende e qualifica leads 24h por dia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={triggerModal}
                className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-semibold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-200"
              >
                Começar Teste Grátis
                <ArrowRight className="size-5" />
              </button>

              <a
                href="#produtos"
                className="btn-outline w-full sm:w-auto px-8 py-4 text-base font-semibold flex items-center justify-center gap-2 hover:bg-muted/10 transition-transform duration-200"
              >
                Conhecer Soluções
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-muted/10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2 text-muted">
                <Building className="size-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold leading-snug">
                  +1.200 Imobiliárias
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <BarChart className="size-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold leading-snug">
                  30% Redução de CAC
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Users className="size-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold leading-snug">
                  +10k Corretores
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Graphic Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            className="lg:col-span-5 relative w-full max-w-lg mx-auto"
          >
            {/* Glowing border decoration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl blur-xl opacity-30 animate-pulse" />

            {/* Immersive Glassmorphic Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-muted/20 bg-background/50 backdrop-blur-md shadow-2xl p-2.5">
              <div className="flex items-center gap-2 px-3 pb-3 border-b border-muted/10">
                <div className="size-3 rounded-full bg-rose-500" />
                <div className="size-3 rounded-full bg-amber-500" />
                <div className="size-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted font-mono ml-2 truncate">
                  platform.microsistec.com.br/v8
                </span>
              </div>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-950">
                {/* Embedded preview cover of the CRM platform */}
                <Image
                  src="/og-image.png"
                  alt="Microsistec CRM interface preview"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer hover:bg-black/25 transition-all">
                  <button
                    onClick={triggerModal}
                    className="p-5 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 scale-90 group-hover:scale-100 transition-all duration-300 active:scale-95"
                    aria-label="Abrir teste"
                  >
                    <Play className="size-6 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
