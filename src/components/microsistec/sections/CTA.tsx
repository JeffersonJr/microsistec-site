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

export default function CTA() {
  const { openModal } = useDemoModal();

  return (
    <section
      id="demo"
      data-gtm-section="cta_demonstracao"
      className="mx-auto max-w-7xl px-6 pb-16 md:pb-24"
    >
      <div
        className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-elev"
        style={{
          background: "linear-gradient(135deg, #2B5250 0%, #1e3a38 100%)",
          border: "1px solid rgba(90,166,166,0.25)",
          color: "#F7F3EA",
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,166,166,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(90,166,166,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -top-20 -right-10 w-80 h-80 rounded-full opacity-25"
          style={{ background: "#5AA6A6", filter: "blur(80px)" }}
        />
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <span className="stamp text-[color:var(--brand-orange)] text-sm mb-6 inline-block">
              feito por gente que conhece de imobiliária de verdade
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
              Bora vender mais,{" "}
              <span
                className="font-serif-italic font-normal"
                style={{ color: "#5AA6A6" }}
              >
                de verdade
              </span>
              ?
            </h2>
            <p className="text-xl text-[color:var(--brand-sand)]/70 max-w-xl leading-relaxed">
              Surpreenda-se com o atendimento da nossa Inteligência Artificial.
              Experimente na prática e decida no seu tempo como ela pode
              acelerar as vendas da sua imobiliária.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 w-full">
            <button
              title="Falar com especialista"
              onClick={openModal}
              data-gtm-cta="falar_especialista_rodape"
              data-gtm-location="cta_demonstracao"
              data-gtm-modal-open="modal_demonstracao"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 font-semibold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none no-underline"
            >
              Falar com especialista <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
