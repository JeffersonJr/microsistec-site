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

export default function Pillars() {
  const items = [
    {
      icon: LineChart,
      title: "Funil de vendas",
      desc: "Controle total dos atendimentos e a foto real da operação, sem planilha.",
    },
    {
      icon: Smartphone,
      title: "App de atendimento",
      desc: "Negociação na palma da mão do corretor. De casa, no trânsito, na visita.",
    },
    {
      icon: Workflow,
      title: "Automações",
      desc: "Fluxos pré-definidos para que nenhum lead caia no esquecimento.",
    },
    {
      icon: Target,
      title: "Gestão de leads",
      desc: "Do primeiro 'oi' até a escritura, toda a história do cliente em um lugar.",
    },
  ];
  return (
    <section
      id="produto"
      data-gtm-section="produto"
      className="relative border-y border-[color:var(--brand-ink)]/10"
      style={{ background: "#F7F3EA" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
          <h2 className="md:col-span-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.02]">
            Sistema, Site e App,{" "}
            <span className="font-serif-italic font-normal">
              em um único ecossistema
            </span>
          </h2>
          <p className="md:col-span-4 text-xl text-muted-foreground">
            Tudo o que a imobiliária precisa para vender mais e ter
            previsibilidade, sem amarrar cinco ferramentas com cuspe e arame.
          </p>
        </div>
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[color:var(--brand-ink)]/15 rounded-3xl overflow-hidden"
          style={{ background: "rgba(43,82,80,0.15)" }}
        >
          {items.map((it, i) => (
            <div
              key={it.title}
              className="p-7 md:p-8 relative group transition-colors duration-300 bg-white hover:bg-[#2B5250] hover:text-[#F7F3EA]"
            >
              <div className="flex items-start justify-between mb-8">
                <it.icon className="w-6 h-6 text-[#5AA6A6] group-hover:text-[#F7F3EA]/80 transition-colors" />
                <span className="font-mono-ui text-sm font-medium text-muted-foreground group-hover:text-[#F7F3EA]/70 transition-colors">
                  0{i + 1} / 04
                </span>
              </div>
              <h3 className="font-bold text-2xl tracking-tight mb-2 group-hover:text-[#F7F3EA] transition-colors">
                {it.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed group-hover:text-[#F7F3EA]/90 transition-colors">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
