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

function Bubble({
  who,
  children,
}: {
  who: "lead" | "albert";
  children: React.ReactNode;
}) {
  if (who === "lead") {
    return (
      <div className="flex justify-end">
        <div className="bg-[color:var(--brand-ink)]/8 text-[color:var(--brand-ink)] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] border border-[color:var(--brand-ink)]/10">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
        {children}
      </div>
    </div>
  );
}

export default function AlbertChat() {
  return (
    <div className="relative tilt-r flex-1 flex flex-col h-full">
      <div
        className="absolute -inset-3 rounded-[28px] blur-2xl pointer-events-none"
        style={{ background: "rgba(90,166,166,0.2)" }}
      />
      <div
        className="relative rounded-3xl border shadow-elev overflow-hidden flex-1 flex flex-col justify-between"
        style={{
          background: "#F7F3EA",
          borderColor: "#2B5250",
          color: "#1A1A1A",
        }}
      >
        {/* paper header */}
        <div
          className="flex items-center justify-between px-5 py-3.5 border-b"
          style={{
            background: "#2B5250",
            borderColor: "rgba(90,166,166,0.2)",
            color: "#F7F3EA",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <div className="font-semibold text-base leading-tight">
                Albert
              </div>
              <div className="font-mono-ui text-sm font-medium text-[color:var(--brand-sand)]/80">
                Assistente virtual · atende agora
              </div>
            </div>
          </div>
          <span className="font-mono-ui text-sm font-medium text-[color:var(--brand-sand)]/80">
            lead #4827 · 13s
          </span>
        </div>

        <div className="p-5 space-y-3 text-base flex-1 flex flex-col justify-between">
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <Bubble who="lead">
              Oi, vi o anúncio do 2 quartos na Av. Paulista 👋
            </Bubble>
            <Bubble who="albert">
              Oi! Que bom que chegou. Posso te perguntar se é para morar ou
              investir?
            </Bubble>
            <Bubble who="lead">
              Pra morar. Ainda não fiz aprovação de crédito.
            </Bubble>
            <Bubble who="albert">
              Tranquilo. Já te passo pra <strong>Camila</strong>, especialista
              na Paulista. Sábado às 10h pra visitar funciona?
            </Bubble>
            <Bubble who="lead">Funciona 🤝</Bubble>
          </div>

          <div className="mt-4 pt-3.5 border-t border-dashed border-[color:var(--brand-ink)]/30 flex items-center justify-between font-mono-ui text-sm text-muted-foreground font-medium">
            <span>qualificado e repassado em minutos</span>
            <span className="text-[color:var(--brand-orange)] font-bold">
              + CRM ✓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Albert() {
  const { openModal } = useDemoModal();
  const features = [
    "Clone do seu melhor atendente, treinado com seu script",
    "Atendimento omnichannel 24/7 (WhatsApp, site, portais)",
    "Qualifica e repassa o lead pro corretor certo",
    "Histórico completo conectado ao CRM Microsistec",
    "Personalizável, não é IA genérica de prateleira",
  ];
  return (
    <section
      id="albert"
      data-gtm-section="albert"
      className="relative overflow-hidden"
      style={{ background: "#2B5250", color: "#F7F3EA" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 90% 10%, rgba(90,166,166,0.4) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(43,82,80,0.6) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,166,166,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,166,166,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 mb-6">
          <span
            className="stamp text-sm"
            style={{ color: "#5AA6A6", borderColor: "#5AA6A6" }}
          >
            Albert IA · v2
          </span>
          <span
            className="font-serif-italic"
            style={{ color: "rgba(247,243,234,0.6)" }}
          >
            conheça
          </span>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6"
                style={{ color: "#F7F3EA" }}
              >
                Uma IA que{" "}
                <span
                  className="font-serif-italic font-normal"
                  style={{ color: "#5AA6A6" }}
                >
                  conhece
                </span>{" "}
                imobiliária, não uma que{" "}
                <em
                  className="font-serif-italic"
                  style={{ color: "rgba(247,243,234,0.45)" }}
                >
                  finge
                </em>{" "}
                conhecer
              </h2>
              <p className="text-xl text-[color:var(--brand-sand)]/70 mb-8 max-w-xl">
                Chega de chatbot decorando frase. O{" "}
                <strong className="text-[color:var(--brand-sand)]">
                  Albert
                </strong>{" "}
                é montado sob medida para a sua imobiliária, tecnologia de ponta
                com coração humano.
              </p>
              <ul className="space-y-3 mb-8 lg:mb-0">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3"
                    style={{ color: "rgba(247,243,234,0.85)" }}
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: "#5AA6A6" }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-6 lg:pt-8">
              <button
                title="Fale conosco pelo WhatsApp"
                onClick={openModal}
                data-gtm-cta="falar_especialista_albert"
                data-gtm-location="albert"
                data-gtm-modal-open="modal_demonstracao"
                className="btn-micro w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-semibold hover:opacity-90 decoration-none no-underline text-center border-none cursor-pointer group"
              >
                <span className="hidden sm:inline">
                  Converse com o Albert agora mesmo
                </span>
                <span className="sm:hidden">Falar com o Albert no zap</span>
                <ArrowRight className="icon-micro-nudge w-4 h-4 shrink-0" />
              </button>
              <Link
                title="Planos e Preços da IA Albert"
                to="/planos-albert"
                data-gtm-cta="ver_planos_albert"
                data-gtm-location="albert"
                className="btn-micro w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/25 px-6 py-3.5 font-medium hover:bg-[color:var(--brand-sand)]/10"
              >
                Ver planos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <AlbertChat />
          </div>
        </div>
      </div>
    </section>
  );
}
