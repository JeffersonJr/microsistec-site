"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Check } from "lucide-react";
import Image from "next/image";

export default function AlbertSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="albert" className="pt-28 pb-20 bg-background border-t border-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-3xl sm:text-4xl font-extrabold text-center text-primary leading-tight">
          Albert – A IA imobiliária que nunca dorme
        </h2>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Texto explicativo */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed font-medium">
              Albert é o nosso chatbot inteligente de última geração, treinado exclusivamente para
              atuação no mercado imobiliário. Ele integra-se nativamente ao CRM e atende em tempo real:
            </p>
            
            <ul className="space-y-4 text-left text-muted">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="font-medium text-base">
                  <strong>Qualificação ativa 24/7:</strong> Identifica o estágio de compra, orçamento e preferências automaticamente.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="font-medium text-base">
                  <strong>Respostas imediatas:</strong> Tira dúvidas técnicas e comerciais sobre imóveis cadastrados em seu CRM.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="font-medium text-base">
                  <strong>Distribuição inteligente:</strong> Envia o lead qualificado diretamente para a roleta ou para o WhatsApp do corretor de plantão.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="font-medium text-base">
                  <strong>Aprendizado contínuo:</strong> Analisa histórico de interações para otimizar a linguagem e impulsionar taxas de conversão de leads (MQL).
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Mockup do chat */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Background glowing aura */}
            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-20 blur-2xl rounded-2xl -z-10" />

            <div className="relative border border-muted/15 rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <Image
                src="/mockup-crm-albert.png"
                alt="Chat do Albert integrado ao CRM"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Badge “IA” corrigido com absolute */}
            <div className="absolute -top-3 -right-3 flex items-center gap-1 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20 select-none animate-bounce">
              <Sparkles className="size-3.5 fill-current" />
              IA INTEGRADA
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
