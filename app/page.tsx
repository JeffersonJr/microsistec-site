"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlbertSection from "@/components/AlbertSection";
import ProductGrid from "@/components/ProductGrid";
import BlogSection from "@/components/BlogSection";
import ConversionModal from "@/components/ConversionModal";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Home() {
  const triggerModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-conversion-modal"));
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AlbertSection />
        <ProductGrid />
        
        {/* Extra Premium CTA Section */}
        <section id="sobre" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-3.5" />
              Impulsione sua equipe
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-3xl mx-auto leading-tight text-white">
              Pronto para liderar o mercado imobiliário da sua região?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
              Junte-se a mais de 1.200 imobiliárias de alta performance que já utilizam a Microsistec V8 para qualificar leads e fechar mais negócios.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={triggerModal}
                className="w-full sm:w-auto btn-primary px-8 py-4 text-base font-semibold shadow-lg shadow-emerald-500/25 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-all active:scale-95"
              >
                Solicitar Demonstração Gratuita
              </button>
            </div>
          </div>
        </section>

        <BlogSection />
      </main>

      {/* Modern High-Aesthetic Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <div className="relative h-10 w-44 filter brightness-0 invert opacity-90">
              <Image
                src="/images/logo.png"
                alt="Microsistec Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Tecnologia de ponta a ponta desenvolvida exclusivamente para acelerar os resultados do mercado imobiliário brasileiro.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/produtos/crm" className="hover:text-emerald-500 transition-colors">
                  CRM Imobiliário
                </Link>
              </li>
              <li>
                <Link href="/produtos/app" className="hover:text-emerald-500 transition-colors">
                  Aplicativo Mobile
                </Link>
              </li>
              <li>
                <Link href="/produtos/sites-v8" className="hover:text-emerald-500 transition-colors">
                  Sites de Alta Conversão
                </Link>
              </li>
              <li>
                <Link href="/produtos/albert" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
                  Albert IA
                  <Sparkles className="size-3 text-emerald-500" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">
              Recursos
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/blog" className="hover:text-emerald-500 transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-emerald-500 transition-colors">
                  Quem somos
                </Link>
              </li>
              <li>
                <a href="#" onClick={triggerModal} className="hover:text-emerald-500 transition-colors">
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">
              Contato & Suporte
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li className="text-xs font-semibold leading-relaxed">
                Suporte Técnico:
                <br />
                <a
                  href="#"
                  onClick={triggerModal}
                  className="text-slate-300 hover:text-emerald-500 flex items-center gap-0.5 mt-0.5"
                >
                  suporte@microsistec.com.br
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
              <li className="text-xs font-semibold leading-relaxed">
                Atendimento Comercial:
                <br />
                <a
                  href="#"
                  onClick={triggerModal}
                  className="text-slate-300 hover:text-emerald-500 flex items-center gap-0.5 mt-0.5"
                >
                  contato@microsistec.com.br
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-semibold gap-4">
          <p>© {new Date().getFullYear()} Microsistec. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>

      <ConversionModal />
    </>
  );
}
