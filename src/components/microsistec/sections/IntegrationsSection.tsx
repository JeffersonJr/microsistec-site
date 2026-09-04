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

function IntegrationPill({ portal }: { portal: any }) {
  return (
    <div className="flex items-center justify-center gap-3 bg-[color:var(--brand-sand)] px-6 py-4 rounded-full min-w-[200px] border border-[color:var(--brand-ink)]/5 shadow-sm">
      {portal.logoImg ? (
        <img loading="lazy" src={portal.logoImg} alt={portal.name} className="w-8 h-8 object-contain bg-white rounded-full p-1" />
      ) : (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${portal.logoBg} ${portal.logoTextColor}`}>
          {portal.logoText}
        </div>
      )}
      <span className="font-semibold text-[color:var(--brand-ink)] text-sm whitespace-nowrap">
        {portal.name}
      </span>
    </div>
  );
}

export default function IntegrationsSection() {
  const { openModal } = useDemoModal();
  
  // Use all integrations for the marquee
  const allIntegrations = portalIntegrations;
  
  // We double the list to make the marquee loop seamless
  const duplicatedTop = [...allIntegrations.slice(0, 8), ...allIntegrations.slice(0, 8)];
  const duplicatedBottom = [...allIntegrations.slice(8, 16), ...allIntegrations.slice(8, 16)];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-[color:var(--brand-ink)]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text */}
          <div className="w-full lg:w-5/12 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] leading-[1.1]">
              Integramos com
              <br />
              seus sistemas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Possuímos <strong>APIs e webhooks</strong> para integrarmos com qualquer
              solução que esteja preparada para enviar ou consumir dados
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center rounded-xl bg-[#2B5250] text-white px-8 py-4 font-bold text-lg hover:bg-[#1f3b39] transition-colors shadow-lg cursor-pointer border-none"
              >
                Solicite um contato
              </button>
              <Link
                to="/solucoes/$slug"
                params={{ slug: "integracoes" }}
                className="inline-flex items-center justify-center text-[color:var(--brand-ink)] font-bold text-lg hover:underline transition-colors cursor-pointer group"
                aria-label="Ver todas as integrações"
              >
                Ver todas as integrações
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Marquee */}
          <div className="w-full lg:w-7/12 relative">
            <div 
              className="flex flex-col gap-6 relative overflow-hidden" 
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
              }}
            >
              <div className="flex w-max animate-marquee gap-6">
                {duplicatedTop.map((portal, i) => (
                  <IntegrationPill key={i} portal={portal} />
                ))}
              </div>
              <div className="flex w-max animate-marquee-reverse gap-6 ml-[-20%]">
                {duplicatedBottom.map((portal, i) => (
                  <IntegrationPill key={i} portal={portal} />
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground font-medium mt-8">
              Veja algumas das soluções que já integramos para nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
