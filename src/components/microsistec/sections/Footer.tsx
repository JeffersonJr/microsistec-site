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

function FooterCol({
  className,
  title,
  links,
}: {
  className?: string;
  title: string;
  links: {
    label: React.ReactNode;
    to?: string;
    params?: any;
    onClick?: () => void;
    gtmCta?: string;
  }[];
}) {
  return (
    <div className={className}>
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      <ul className="space-y-2 text-muted-foreground text-base">
        {links.map((link, idx) => (
          <li key={idx}>
            {link.onClick ? (
              <button
                onClick={link.onClick}
                data-gtm-cta={link.gtmCta}
                data-gtm-location="rodape"
                className="hover:text-[color:var(--brand-orange)] transition cursor-pointer bg-transparent border-none p-0 text-left font-[inherit] text-[inherit]"
              >
                {link.label}
              </button>
            ) : link.to?.startsWith("http") ||
              link.to?.startsWith("#") ||
              link.to?.startsWith("/#") ? (
              <a
                title="Acessar link"
                href={link.to}
                data-gtm-cta={link.gtmCta}
                data-gtm-location="rodape"
                className="hover:text-[color:var(--brand-orange)] transition"
              >
                {link.label}
              </a>
            ) : link.to ? (
              <Link
                title="Acessar link"
                to={link.to}
                params={link.params}
                data-gtm-cta={link.gtmCta}
                data-gtm-location="rodape"
                className="hover:text-[color:var(--brand-orange)] transition cursor-pointer"
              >
                {link.label}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function Footer() {
  const { openModal } = useDemoModal();
  return (
    <footer
      data-gtm-location="rodape"
      className="border-t border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-sand)]/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              to="/"
              data-gtm-cta="home_logo_rodape"
              data-gtm-location="rodape"
              className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] mb-4 hover:opacity-85 transition-opacity"
              title="Microsistec - Marca Registrada"
            >
              <img
                src="/icon.svg"
                alt="Microsistec Logo"
                title="Microsistec - Soluções em Tecnologia"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-8 h-8 object-contain"
              />
              <div className="flex items-baseline gap-0.5">
                microsistec
                <span
                  className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
                  title="Marca Registrada"
                >
                  ®
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Proptech brasileira há mais de 30 anos. CRM, sites, app de atendimento e
              Albert IA num ecossistema só para imobiliárias de verdade.
            </p>
            <a
              title="Acessar o Sistema Imob Online"
              href="https://imob.online/"
              target="_blank"
              rel="noreferrer"
              data-gtm-cta="entrar_imobonline_rodape"
              data-gtm-location="rodape"
              className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-base hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition shadow-soft no-underline decoration-none group"
            >
              <KeyRound className="w-4 h-4" />
              <span>Entrar</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <FooterCol
            className="sm:col-span-1 lg:col-span-2"
            title="Soluções"
            links={[
              {
                label: "CRM Imobiliário",
                to: "/solucoes/$slug",
                params: { slug: "crm" },
                gtmCta: "nav_rodape_crm",
              },
              {
                label: "Albert IA",
                to: "/solucoes/$slug",
                params: { slug: "albert-ia" },
                gtmCta: "nav_rodape_albert_ia",
              },
              {
                label: "Planos Albert IA",
                to: "/planos-albert",
                gtmCta: "nav_rodape_planos_albert_ia",
              },
              {
                label: "App de Atendimento",
                to: "/solucoes/$slug",
                params: { slug: "app" },
                gtmCta: "nav_rodape_app",
              },
              {
                label: "Rodízio de Atendimento",
                to: "/solucoes/$slug",
                params: { slug: "rodizio" },
                gtmCta: "nav_rodape_rodizio",
              },
              {
                label: "Sites Customizados V8",
                to: "/solucoes/$slug",
                params: { slug: "sites-v8" },
                gtmCta: "nav_rodape_sites_v8",
              },
            ]}
          />
          <FooterCol
            className="sm:col-span-1 lg:col-span-2"
            title="Empresa"
            links={[
              { label: "Sobre", to: "/empresa", gtmCta: "nav_rodape_sobre" },
              {
                label: "Novidades",
                to: "/novidades",
                gtmCta: "nav_rodape_novidades",
              },
              { label: "Planos", to: "/planos", gtmCta: "nav_rodape_planos" },
              { label: "Blog", to: "/blog", gtmCta: "nav_rodape_blog" },
              {
                label: "Materiais",
                to: "/materiais",
                gtmCta: "nav_rodape_materiais",
              },
              {
                label: "Falar no WhatsApp",
                onClick: openModal,
                gtmCta: "nav_rodape_falar_whatsapp",
              },
              {
                label: "Política de Privacidade",
                to: "/politica-de-privacidade",
                gtmCta: "nav_rodape_politica_privacidade",
              },
              {
                label: "Política de Cookies",
                to: "/politica-de-cookies",
                gtmCta: "nav_rodape_politica_cookies",
              },
              {
                label: "Termos de Uso",
                to: "/termos-de-uso",
                gtmCta: "nav_rodape_termos_uso",
              },
            ]}
          />
          <FooterCol
            className="sm:col-span-1 lg:col-span-3"
            title="Contato"
            links={[
              {
                label: "Fale Conosco",
                to: "/contato",
                gtmCta: "nav_rodape_fale_conosco",
              },
              {
                label: "financeiro@microsistec.com.br",
                to: "mailto:financeiro@microsistec.com.br",
                gtmCta: "nav_rodape_email_financeiro",
              },
              {
                label: "suporte@microsistec.com.br",
                to: "mailto:suporte@microsistec.com.br",
                gtmCta: "nav_rodape_email_suporte",
              },
            ]}
          />
          <FooterCol
            className="sm:col-span-1 lg:col-span-2"
            title="Redes sociais"
            links={[
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" /> Facebook
                  </span>
                ),
                to: "https://www.facebook.com/Microsistec/",
                gtmCta: "nav_rodape_facebook",
              },
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4" /> Youtube
                  </span>
                ),
                to: "https://www.youtube.com/c/microsistec",
                gtmCta: "nav_rodape_youtube",
              },
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram
                  </span>
                ),
                to: "https://www.instagram.com/microsistec.com.br",
                gtmCta: "nav_rodape_instagram",
              },
            ]}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[color:var(--brand-ink)]/8 text-sm text-muted-foreground font-mono-ui">
          <span>
            © {new Date().getFullYear()} Microsistec · feito no Brasil
          </span>
          <span className="font-serif-italic font-sans text-base">
            com Albert IA dentro
          </span>
        </div>
      </div>
      <div style={{ display: "none" }} aria-hidden="true">
        <a href="/empresa">About</a>
        <a href="/contato">Contact</a>
        <a href="/politica-de-privacidade">Privacy</a>
        <a href="/termos-de-uso">Terms</a>
      </div>
    </footer>
  );
}
