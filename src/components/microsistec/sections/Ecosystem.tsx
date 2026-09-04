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

export default function Ecosystem() {
  const items = [
    {
      icon: Globe,
      title: "Sites para imobiliária",
      desc: "Templates rápidos, prontos pra ranquear no Google da sua cidade.",
    },
    {
      icon: MessageSquare,
      title: "Portais e WhatsApp",
      desc: "Viva Real, ZAP, OLX e WhatsApp integrados, publica uma vez, aparece em tudo.",
    },
    {
      icon: ShieldCheck,
      title: "LGPD e segurança",
      desc: "Infra robusta, 99.9% de uptime, backups diários, você dorme tranquilo.",
    },
  ];
  return (
    <section
      id="ecosystem"
      data-gtm-section="ecosistema"
      className="border-y border-[color:var(--brand-ink)]/8"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl p-7 hover:bg-background hover:shadow-soft transition-all duration-300"
              style={{
                background: "rgba(90,166,166,0.08)",
                border: "1px solid rgba(43,82,80,0.12)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(43,82,80,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(43,82,80,0.12)";
              }}
            >
              <it.icon className="w-5 h-5 mb-5" style={{ color: "#2B5250" }} />
              <h3 className="font-bold text-xl tracking-tight mb-2">
                {it.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
