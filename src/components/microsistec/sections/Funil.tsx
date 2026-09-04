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

function FunnelVisual() {
  const stages = [
    { label: "Leads recebidos", value: 4820, w: "100%" },
    { label: "Qualificados pelo Albert", value: 3210, w: "67%" },
    { label: "Em atendimento", value: 1980, w: "41%" },
    { label: "Propostas enviadas", value: 740, w: "15%" },
    { label: "Vendas fechadas", value: 218, w: "5%" },
  ];
  return (
    <div className="relative rounded-3xl border border-[color:var(--brand-ink)] bg-background shadow-elev p-6 md:p-8 tilt-l flex-1 flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-[color:var(--brand-ink)]/30">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="font-mono-ui text-base font-medium">
            imob.online / funil{" "}
            <span className="text-xs text-muted-foreground font-normal">
              (exemplo ilustrativo)
            </span>
          </span>
        </div>
        <span className="font-mono-ui text-base text-emerald-700 font-bold">
          +24% MoM
        </span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        {stages.map((s, i) => (
          <div key={s.label}>
            <div className="flex items-center justify-between text-base mb-1.5">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-semibold tabular-nums">
                {s.value.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="h-9 rounded-md bg-[color:var(--brand-sand)] overflow-hidden border border-[color:var(--brand-ink)]/20">
              <div
                className={`h-full flex items-center px-3 text-base font-bold font-mono-ui transition-all ${
                  i === stages.length - 1
                    ? "text-[color:var(--brand-ink)]"
                    : "text-[color:var(--brand-sand)]"
                }`}
                style={{
                  width: s.w,
                  background:
                    i === stages.length - 1
                      ? "var(--brand-orange)"
                      : "var(--brand-ink)",
                }}
              >
                {s.w}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Funil() {
  const features = [
    "Histórico de atendimento completo",
    "Rodízio de atendimento e equipes",
    "Secretaria de vendas (MQL)",
    "Controle de atividades por atendimento",
    "Processo de vendas imobiliária ponta-a-ponta",
  ];
  return (
    <section
      id="funil"
      data-gtm-section="funil"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <span
        className="font-serif-italic text-2xl mb-4 block"
        style={{ color: "#2B5250" }}
      >
        sobre tempo
      </span>
      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Você está perdendo lead enquanto procura ele no caderno
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Controle do atendimento + script bem executado = mais vendas. A
              gente organiza o primeiro pra você poder focar no segundo.
            </p>
          </div>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "#2B5250" }}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 flex flex-col">
          <FunnelVisual />
        </div>
      </div>
    </section>
  );
}
