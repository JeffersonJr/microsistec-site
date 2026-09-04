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

export default function StatsStrip() {
  const stats = [
    { n: "32+", label: "Anos de inovação" },
    { n: "30 mil+", label: "Corretores já atendidos" },
    { n: "5 M+", label: "Leads qualificados" },
    { n: "5 mil+", label: "Imobiliárias atendidas" },
  ];
  return (
    <section
      id="resultados"
      data-gtm-section="resultados"
      className="mx-auto max-w-7xl px-6 py-14 md:py-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl leading-snug">
          Pioneiros em trazer tecnologia para imobiliárias. Três décadas de
          estrada{" "}
          <span
            className="font-serif-italic font-normal"
            style={{ color: "#2B5250" }}
          >
            provam que sabemos
          </span>{" "}
          o que fazemos.
        </h2>
        <span className="font-mono-ui text-sm text-muted-foreground/60">
          operação · {new Date().getFullYear()}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--brand-ink)]/8 border-y border-[color:var(--brand-ink)]/8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-background py-7 md:py-9 px-5 md:px-6 text-center md:text-left"
          >
            <div
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: "#2B5250" }}
            >
              {s.n}
            </div>
            <div className="text-sm text-muted-foreground mt-1.5 font-mono-ui">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
