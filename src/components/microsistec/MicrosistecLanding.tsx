import * as React from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Workflow,
  Smartphone,
  Target,
  LineChart,
  Bot,
  MessageSquare,
  Building2,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Quote,
  KeyRound,
  ChevronDown,
  Menu,
  X,
  Users,
  Home,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useDemoModal } from "@/hooks/use-demo-modal";
import {
  solutions,
  getIconComponent,
  blogPosts,
  testimonials,
  portalIntegrations,
} from "@/lib/data";

const Testimonial = React.lazy(() => import("./Testimonial"));

const StatsStrip = React.lazy(() => import('./sections/StatsStrip'));
const Pillars = React.lazy(() => import('./sections/Pillars'));
const Albert = React.lazy(() => import('./sections/Albert'));
const Funil = React.lazy(() => import('./sections/Funil'));
const Ecosystem = React.lazy(() => import('./sections/Ecosystem'));
const IntegrationsSection = React.lazy(() => import('./sections/IntegrationsSection'));
const Blog = React.lazy(() => import('./sections/Blog'));
const CTA = React.lazy(() => import('./sections/CTA'));
export const Footer = React.lazy(() => import('./sections/Footer'));


/* -------------------------------------------------------------------------- */
/*  NAV                                                                       */
/* -------------------------------------------------------------------------- */
type OpenMenu = "solucoes" | "planos" | "conteudos" | null;

export function Nav() {
  const { openModal } = useDemoModal();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<OpenMenu>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const toggleMenu = (menu: OpenMenu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 pointer-events-none">
      <div
        ref={navRef}
        className={`relative mx-auto max-w-7xl pointer-events-auto nav-pill ${scrolled ? "nav-pill-scrolled" : ""}`}
      >
        <div className="flex items-center justify-between px-5 py-2.5 w-full gap-4">
          {/* Logo à esquerda */}
          <Link
            to="/"
            data-gtm-cta="home_logo_header"
            data-gtm-location="header"
            className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity shrink-0"
            title="Microsistec - Marca Registrada"
            onClick={() => setOpenMenu(null)}
          >
            <img
              src="/icon.svg"
              alt="Microsistec Logo"
              title="Microsistec - Tecnologia e Inovação"
              width={32}
              height={32}
              fetchPriority="high"
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

          {/* Links no meio (apenas Desktop) */}
          <nav className="hidden xl:flex items-center justify-center gap-1 text-base flex-1">
            {/* Soluções */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("solucoes")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-base font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "solucoes" ? "bg-[#2B5250]/8" : "text-muted-foreground hover:text-foreground hover:bg-[#2B5250]/6"}`}
                style={openMenu === "solucoes" ? { color: "#2B5250" } : {}}
              >
                Soluções
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{
                    transform:
                      openMenu === "solucoes"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>
            </div>

            {/* Planos */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("planos")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-base font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "planos" ? "bg-[#2B5250]/8" : "text-muted-foreground hover:text-foreground hover:bg-[#2B5250]/6"}`}
                style={openMenu === "planos" ? { color: "#2B5250" } : {}}
              >
                Planos
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{
                    transform:
                      openMenu === "planos" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </div>

            <Link
              title="Novidades e Lançamentos"
              to="/novidades"
              onClick={() => setOpenMenu(null)}
              data-gtm-cta="nav_novidades"
              data-gtm-location="header"
              className="px-3 py-2 rounded-full text-base font-semibold text-muted-foreground hover:bg-[#2B5250]/6 transition"
              style={{} as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#2B5250";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "";
              }}
            >
              Novidades
            </Link>
            <Link
              title="Sobre a Microsistec"
              to="/empresa"
              onClick={() => setOpenMenu(null)}
              data-gtm-cta="nav_sobre"
              data-gtm-location="header"
              className="px-3 py-2 rounded-full text-base font-semibold text-muted-foreground hover:bg-[#2B5250]/6 transition"
              style={{} as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#2B5250";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "";
              }}
            >
              Sobre
            </Link>
            {/* Conteúdos */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("conteudos")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-base font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "conteudos" ? "bg-[#2B5250]/8" : "text-muted-foreground hover:text-foreground hover:bg-[#2B5250]/6"}`}
                style={openMenu === "conteudos" ? { color: "#2B5250" } : {}}
              >
                Conteúdos
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{
                    transform:
                      openMenu === "conteudos"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>
            </div>
          </nav>

          {/* CTAs à direita */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <a
              title="Acessar o Sistema Imob Online"
              href="https://imob.online/"
              target="_blank"
              rel="noreferrer"
              data-gtm-cta="entrar_imobonline_header"
              data-gtm-location="header"
              className="hidden xl:inline text-base font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-full hover:bg-[color:var(--brand-ink)]/4"
            >
              Entrar
            </a>
            <button
              title="Falar com especialista"
              onClick={openModal}
              data-gtm-cta="falar_especialista_header"
              data-gtm-location="header"
              data-gtm-modal-open="modal_demonstracao"
              className="btn-micro hidden xl:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-base font-semibold px-4 py-2 hover:opacity-90 cursor-pointer border-none no-underline group"
            >
              Falar com especialista{" "}
              <ArrowUpRight className="icon-micro-nudge w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setIsMobileOpen(!isMobileOpen);
                setOpenMenu(null);
              }}
              data-gtm-cta="menu_mobile_toggle"
              data-gtm-location="header"
              className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)]/8 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Panels — Tesla Style */}
        {openMenu === "solucoes" && (
          <div className="absolute top-full left-0 right-0 mt-3 w-full bg-[color:var(--brand-sand)]/98 backdrop-blur-xl border border-[color:var(--brand-ink)]/12 rounded-[24px] p-8 shadow-elev animate-fadeIn z-50 pointer-events-auto">
            <div className="grid grid-cols-4 gap-8 text-left">
              {/* Col 1: Operação */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Operação & Vendas
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      slug: "crm",
                      title: "CRM Imobiliário",
                      desc: "Gestão operacional e base unificada",
                      icon: Building2,
                    },
                    {
                      slug: "app",
                      title: "App de Atendimento",
                      desc: "Mobilidade e agilidade na rua",
                      icon: Smartphone,
                    },
                    {
                      slug: "funil",
                      title: "Multi-Funil Kanban",
                      desc: "Pipelines separados por processo",
                      icon: LineChart,
                    },
                    {
                      slug: "rodizio",
                      title: "Rodízio de Leads",
                      desc: "Distribuição automática e justa",
                      icon: Users,
                    },
                  ].map((item) => (
                    <Link
                      title="Conhecer solução"
                      key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="mega-item-stagger flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#2B5250]/5 transition group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition"
                        style={{ background: "rgba(43,82,80,0.08)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(43,82,80,0.16)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(43,82,80,0.08)";
                        }}
                      >
                        <item.icon
                          className="icon-micro-rotate w-4 h-4"
                          style={{ color: "#2B5250" }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-ink)] group-hover:text-[#2B5250] transition-colors leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 2: Presença Digital */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Presença Digital
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      slug: "sites-template",
                      title: "Sites premium",
                      desc: "Templates otimizados em 1 dia",
                      icon: Globe,
                    },
                    {
                      slug: "sites-v8",
                      title: "Sites personalizados",
                      desc: "Design exclusivo de alta performance",
                      icon: Sparkles,
                    },
                    {
                      slug: "integracoes",
                      title: "Integrações",
                      desc: "WhatsApp API e portais integrados",
                      icon: Workflow,
                    },
                  ].map((item) => (
                    <Link
                      title="Conhecer solução"
                      key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="mega-item-stagger flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#2B5250]/5 transition group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition"
                        style={{ background: "rgba(43,82,80,0.08)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(43,82,80,0.16)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(43,82,80,0.08)";
                        }}
                      >
                        <item.icon
                          className="icon-micro-rotate w-4 h-4"
                          style={{ color: "#2B5250" }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-ink)] group-hover:text-[#2B5250] transition-colors leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 3: Inteligência Artificial */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Inteligência Artificial
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      slug: "albert-ia",
                      title: "Albert IA",
                      desc: "Conversa e agenda no WhatsApp 24/7",
                      icon: Bot,
                    },
                  ].map((item) => (
                    <Link
                      title="Conhecer solução"
                      key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="mega-item-stagger flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#2B5250]/5 transition group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition"
                        style={{ background: "rgba(43,82,80,0.08)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(43,82,80,0.16)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(43,82,80,0.08)";
                        }}
                      >
                        <item.icon
                          className="icon-micro-rotate w-4 h-4"
                          style={{ color: "#2B5250" }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-ink)] group-hover:text-[#2B5250] transition-colors leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 4: Financeiro */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Financeiro
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl text-[color:var(--brand-ink)]/35 cursor-not-allowed">
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-ink)]/5 flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4 text-muted-foreground/45" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <h4 className="font-bold text-base leading-none">
                          Sistema de Locação
                        </h4>
                        <span className="badge-pulse text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 leading-none">
                          Em breve
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground/50 leading-normal">
                        Contratos, reajustes e repasses imobiliários digitais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 pt-6 border-t border-[#2B5250]/10 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Tem alguma dúvida operacional ou deseja integrar canais
                específicos?
              </span>
              <button
                title="Falar com especialista"
                onClick={openModal}
                data-gtm-cta="falar_especialista_mega_menu"
                data-gtm-location="mega_menu"
                data-gtm-modal-open="modal_demonstracao"
                className="inline-flex items-center gap-1 font-bold hover:underline border-none bg-transparent cursor-pointer p-0"
                style={{ color: "#2B5250" }}
              >
                Falar com especialista <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {openMenu === "planos" && (
          <div className="absolute top-full left-0 right-0 mt-3 w-full bg-[color:var(--brand-sand)]/98 backdrop-blur-xl border border-[color:var(--brand-ink)]/12 rounded-[24px] p-8 shadow-elev animate-fadeIn z-50 pointer-events-auto">
            <div className="grid grid-cols-3 gap-8 text-left">
              {/* CRM */}
              <div className="space-y-4">
                <div className="border-b border-[#2B5250]/10 pb-2 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(43,82,80,0.1)" }}
                  >
                    <Building2
                      className="w-4 h-4"
                      style={{ color: "#2B5250" }}
                    />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    CRM Imobiliário
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Planos desenhados para corretores independentes, imobiliárias
                  em crescimento ou grandes redes com dezenas de filiais.
                </p>
                <div>
                  <Link
                    title="Planos e Preços do CRM"
                    to="/planos"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_planos_crm"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
                    style={{ color: "#2B5250" }}
                  >
                    Ver tabela de preços do CRM{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Albert IA */}
              <div className="space-y-4">
                <div className="border-b border-[#2B5250]/10 pb-2 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(43,82,80,0.1)" }}
                  >
                    <Bot className="w-4 h-4" style={{ color: "#2B5250" }} />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Albert IA
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Automatize o primeiro contato dos portais e Meta Ads no
                  WhatsApp 24/7 com inteligência e qualificação financeira.
                </p>
                <div>
                  <Link
                    title="Planos e Preços da IA Albert"
                    to="/planos-albert"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_planos_albert"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
                    style={{ color: "#2B5250" }}
                  >
                    Conhecer planos do Albert IA{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Promo Banner — verde escuro */}
              <div
                className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #2B5250 0%, #1e3a38 100%)",
                  color: "#F7F3EA",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(90,166,166,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(90,166,166,0.08) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.6,
                  }}
                />
                <div>
                  <span
                    className="text-[10px] font-mono-ui font-bold uppercase tracking-widest mb-1 block"
                    style={{ color: "#5AA6A6" }}
                  >
                    Atendimento
                  </span>
                  <h4
                    className="font-extrabold text-lg mb-2"
                    style={{ color: "#F7F3EA" }}
                  >
                    Fale com um Especialista
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(247,243,234,0.7)" }}
                  >
                    Fale com nosso especialista agora e tire suas dúvidas ou
                    solicite uma simulação customizada para o tamanho da sua
                    imobiliária.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setOpenMenu(null);
                    openModal();
                  }}
                  data-gtm-cta="falar_especialista_promo_banner"
                  data-gtm-location="mega_menu"
                  data-gtm-modal-open="modal_demonstracao"
                  className="btn-micro w-full mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-sm font-bold py-2.5 cursor-pointer border-none"
                >
                  Falar com especialista agora
                </button>
              </div>
            </div>
          </div>
        )}

        {openMenu === "conteudos" && (
          <div className="absolute top-full left-0 right-0 mt-3 w-full bg-[color:var(--brand-sand)]/98 backdrop-blur-xl border border-[color:var(--brand-ink)]/12 rounded-[24px] p-8 shadow-elev animate-fadeIn z-50 pointer-events-auto">
            <div className="grid grid-cols-3 gap-8 text-left">
              {/* Blog */}
              <div className="space-y-4">
                <div className="border-b border-[#2B5250]/10 pb-2 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(43,82,80,0.1)" }}
                  >
                    <Quote className="w-4 h-4" style={{ color: "#2B5250" }} />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Blog
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Artigos sobre gestão imobiliária, marketing, vendas e as
                  melhores práticas do mercado.
                </p>
                <div>
                  <Link
                    title="Acessar o Blog"
                    to="/blog"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_blog"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
                    style={{ color: "#2B5250" }}
                  >
                    Acessar o Blog <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Materiais */}
              <div className="space-y-4">
                <div className="border-b border-[#2B5250]/10 pb-2 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(43,82,80,0.1)" }}
                  >
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "#2B5250" }}
                    />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Materiais Ricos
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  E-books, planilhas e guias práticos gratuitos para alavancar
                  os resultados da sua imobiliária.
                </p>
                <div>
                  <Link
                    title="Acessar Materiais"
                    to="/materiais"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_materiais"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
                    style={{ color: "#2B5250" }}
                  >
                    Ver Materiais Ricos <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Podcast */}
              <div className="space-y-4">
                <div className="border-b border-[#2B5250]/10 pb-2 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(43,82,80,0.1)" }}
                  >
                    <MessageSquare
                      className="w-4 h-4"
                      style={{ color: "#2B5250" }}
                    />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Podcast
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Acompanhe nosso podcast e fique por dentro das principais
                  novidades e estratégias do mercado.
                </p>
                <div>
                  <Link
                    title="Acessar Podcast"
                    to="/podcast"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_podcast"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
                    style={{ color: "#2B5250" }}
                  >
                    Ouvir Episódios <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu — bottom sheet pattern */}
      {isMobileOpen && (
        <>
          {/* Backdrop — tap to close */}
          <div
            className="xl:hidden fixed inset-0 bg-[color:var(--brand-ink)]/30 backdrop-blur-sm z-30 animate-fadeIn pointer-events-auto"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Bottom sheet */}
          <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 animate-fadeIn pointer-events-auto">
            <div className="bg-[color:var(--brand-sand)] rounded-t-[28px] shadow-2xl border-t border-[color:var(--brand-ink)]/8">
              {/* Header com pull bar e botão de fechar */}
              <div className="relative flex justify-center pt-3.5 pb-2">
                {/* Pull bar */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full flex justify-center border-none bg-transparent cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <span className="w-10 h-1.5 rounded-full bg-[color:var(--brand-ink)]/20 block" />
                </button>

                {/* Close 'X' Button */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="absolute right-4 top-3.5 w-8 h-8 flex items-center justify-center rounded-full bg-[color:var(--brand-ink)]/5 text-[color:var(--brand-ink)]/60 hover:bg-[color:var(--brand-ink)]/10 hover:text-[color:var(--brand-ink)] transition-colors border-none cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div
                className="overflow-y-auto px-4 pb-2"
                style={{ maxHeight: "60vh" }}
              >
                {/* Soluções */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mt-1 mb-0.5">
                  Soluções
                </p>
                {solutions.map((sol) => {
                  const IconComp = getIconComponent(sol.iconName);
                  if (sol.ctaText === "Em Breve") return null;
                  return (
                    <Link
                      title="Conhecer solução"
                      key={sol.slug}
                      to="/solucoes/$slug"
                      params={{ slug: sol.slug }}
                      onClick={() => setIsMobileOpen(false)}
                      data-gtm-cta={`mobile_nav_solucao_${sol.slug.replace(/-/g, "_")}`}
                      data-gtm-location="mobile_menu"
                      className="flex items-center gap-3.5 px-2 rounded-2xl hover:bg-[#2B5250]/5 active:bg-[#2B5250]/10 transition no-underline text-[color:var(--brand-ink)]"
                      style={{ minHeight: 52 }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(90,166,166,0.12)" }}
                      >
                        <IconComp
                          className="w-[18px] h-[18px]"
                          style={{ color: "#2B5250" }}
                        />
                      </div>
                      <span className="text-[15px] font-semibold flex-1">
                        {sol.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[color:var(--brand-ink)]/25 shrink-0" />
                    </Link>
                  );
                })}

                {/* Divider */}
                <div className="h-px bg-[color:var(--brand-ink)]/8 mx-1 my-2" />

                {/* Outras páginas */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mb-0.5">
                  Páginas
                </p>
                {(
                  [
                    { label: "Planos CRM", to: "/planos" },
                    { label: "Albert IA", to: "/planos-albert" },
                    { label: "Novidades", to: "/novidades" },
                    { label: "Sobre nós", to: "/empresa" },
                  ] as {
                    label: string;
                    to:
                      | "/planos"
                      | "/planos-albert"
                      | "/novidades"
                      | "/empresa";
                  }[]
                ).map((item) => (
                  <Link
                    title="Acessar link"
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
                    data-gtm-cta={`mobile_nav_${item.to.replace(/\//g, "").replace(/-/g, "_")}`}
                    data-gtm-location="mobile_menu"
                    className="flex items-center gap-3.5 px-2 rounded-2xl text-[15px] font-semibold text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)]/5 active:bg-[color:var(--brand-ink)]/10 transition no-underline"
                    style={{ minHeight: 52 }}
                  >
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[color:var(--brand-ink)]/25 shrink-0" />
                  </Link>
                ))}

                {/* Divider */}
                <div className="h-px bg-[color:var(--brand-ink)]/8 mx-1 my-2" />

                {/* Conteúdos */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mb-0.5">
                  Conteúdos
                </p>
                {(
                  [
                    { label: "Blog", to: "/blog" },
                    { label: "Materiais gratuitos", to: "/materiais" },
                    { label: "Podcast", to: "/podcast" },
                  ] as {
                    label: string;
                    to: "/blog" | "/materiais" | "/podcast";
                  }[]
                ).map((item) => (
                  <Link
                    title="Acessar link"
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
                    data-gtm-cta={`mobile_nav_${item.to.replace(/\//g, "").replace(/-/g, "_")}`}
                    data-gtm-location="mobile_menu"
                    className="flex items-center gap-3.5 px-2 rounded-2xl text-[15px] font-semibold text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)]/5 active:bg-[color:var(--brand-ink)]/10 transition no-underline"
                    style={{ minHeight: 52 }}
                  >
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[color:var(--brand-ink)]/25 shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Sticky CTAs — always in thumb zone */}
              <div className="px-4 pt-3 pb-8 border-t border-[color:var(--brand-ink)]/8 flex flex-col gap-2.5">
                <button
                  title="Falar com especialista"
                  onClick={openModal}
                  data-gtm-cta="falar_especialista_mobile_sticky"
                  data-gtm-location="mobile_menu"
                  data-gtm-modal-open="modal_demonstracao"
                  className="btn-micro w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-[15px] font-bold no-underline border-none cursor-pointer group hover:opacity-90"
                  style={{ minHeight: 56 }}
                >
                  Falar com especialista{" "}
                  <ArrowUpRight className="icon-micro-nudge w-4 h-4" />
                </button>
                <div className="flex gap-2.5">
                  <a
                    title="Acessar o Sistema Imob Online"
                    href="https://imob.online/"
                    target="_blank"
                    rel="noreferrer"
                    data-gtm-cta="entrar_imobonline_mobile"
                    data-gtm-location="mobile_menu"
                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-transparent text-[color:var(--brand-ink)] text-[15px] font-semibold no-underline active:scale-[0.98] transition border border-[color:var(--brand-ink)]/15"
                    style={{ minHeight: 52 }}
                  >
                    Entrar no sistema
                  </a>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-[color:var(--brand-ink)]/5 text-[color:var(--brand-ink)] text-[15px] font-semibold no-underline active:scale-[0.98] transition border border-transparent hover:bg-[color:var(--brand-ink)]/10 cursor-pointer"
                    style={{ minHeight: 52 }}
                  >
                    Fechar menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO — editorial / blueprint                                              */
/* -------------------------------------------------------------------------- */
function Hero() {
  const { openModal } = useDemoModal();

  return (
    <section
      id="hero"
      data-gtm-section="hero_dobra_1"
      className="relative overflow-hidden bg-hero min-h-screen flex flex-col justify-between lg:h-auto"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-14 md:pt-36 md:pb-20 flex-grow flex flex-col justify-center">
        {/* eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-base">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-ink)]/[0.03] px-3.5 py-1 text-[13px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B5250] animate-pulse" />
              Mais de 30 anos de pioneirismo em tecnologia imobiliária
            </span>
          </div>
          <span className="font-serif-italic text-muted-foreground/60 hidden md:inline text-base">
            cap. 01: uma carta para quem ainda vende imóvel no caderninho
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* headline */}
          <h1 className="lg:col-span-9 font-extrabold tracking-[-0.045em] leading-[0.95] text-[clamp(2.6rem,6.5vw,5.2rem)]">
            O CRM Imobiliário
            <br />
            que muda{" "}
            <span className="font-serif-italic font-normal text-[#2B5250]">
              o jogo
            </span>
            <br />
            Para quem já{" "}
            <span className="underline decoration-[#2B5250] decoration-[6px] underline-offset-[8px]">
              vive
            </span>{" "}
            o futuro
          </h1>

          {/* proof badge */}
          <div className="flex lg:col-span-3 justify-start lg:justify-end mt-8 lg:mt-0 relative z-10">
            <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-3xl px-6 py-5 max-w-[280px] shadow-[0_15px_40px_-10px_rgba(43,82,80,0.25)] select-none border border-[#2B5250]/40 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-default">
              <div className="font-mono-ui text-[10px] font-bold text-[#5AA6A6] uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5AA6A6] animate-pulse"></span>
                Há mais de 30 anos
              </div>
              <p className="font-serif-italic text-2xl leading-[1.3] text-[color:var(--brand-sand)]">
                "feito por gente que conhece imobiliária de verdade"
              </p>
            </div>
          </div>
        </div>

        {/* sub + CTAs */}
        <div className="mt-8 lg:mt-12 grid md:grid-cols-12 gap-8 lg:gap-10 items-start md:items-center">
          <p className="md:col-span-7 text-lg md:text-xl text-foreground/75 leading-relaxed">
            Somos pioneiros em tecnologia imobiliária no Brasil. Hoje nossa
            empresa é focada em <strong>inteligência artificial</strong>.
            Entregamos CRM completo, site personalizado, aplicativo de
            atendimento e automações. Conheça também o{" "}
            <strong className="text-foreground">Albert IA</strong>, o seu novo
            assistente de vendas. Tenha tudo em um só lugar. Validado por 30
            anos de experiência real.
          </p>
          <div className="md:col-span-5 flex flex-col sm:flex-row flex-wrap gap-4 md:justify-end mt-2 md:mt-0">
            <button
              title="Falar com especialista"
              onClick={openModal}
              data-gtm-cta="falar_especialista_hero"
              data-gtm-location="hero_dobra_1"
              data-gtm-modal-open="modal_demonstracao"
              className="cta-shimmer btn-micro w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-5 py-3 md:px-6 md:py-3.5 font-bold hover:opacity-90 cursor-pointer border-none no-underline group"
            >
              Falar com especialista{" "}
              <ArrowRight className="icon-micro-nudge w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  TICKER                                                                    */
/* -------------------------------------------------------------------------- */
function Ticker() {
  const items = [
    "CRM imobiliário",
    "App de atendimento",
    "Site para imobiliária",
    "Albert IA",
    "Funil de vendas",
    "Automações",
    "Rodízio de leads",
    "Secretaria de vendas",
    "Integração com portais",
  ];
  const row = [...items, ...items];
  return (
    <div
      className="relative border-y border-[#5AA6A6]/30"
      style={{ background: "#5AA6A6", color: "#081716" }}
    >
      <div className="overflow-hidden">
        <div className="marquee flex gap-10 py-3.5 whitespace-nowrap text-base">
          {row.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span
                className="font-serif-italic font-bold"
                style={{ color: "#2B5250" }}
              >
                ✦
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  STATS strip — horizontal, not numbered grid                               */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  PILLARS                                                                   */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  ALBERT — warm dark, "terminal" with personality                           */
/* -------------------------------------------------------------------------- */






/* -------------------------------------------------------------------------- */
/*  FUNNEL                                                                    */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*  ECOSYSTEM                                                                 */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  TESTIMONIAL                                                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  BLOG                                                                      */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  FOOTER                                                                    */
/* -------------------------------------------------------------------------- */


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

/* -------------------------------------------------------------------------- */
export function MicrosistecLanding() {
  const { openModal } = useDemoModal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <React.Suspense fallback={<div className="w-full h-32" />}>
          <StatsStrip />
          <Pillars />
          <Albert />
          <Funil />
          <IntegrationsSection />
          <Ecosystem />
          <Testimonial />
          <Blog />
          <CTA />
        </React.Suspense>
      </main>
      <React.Suspense fallback={<div className="w-full h-32" />}>
        <Footer />
      </React.Suspense>
      <StickyCTA />
      <ExitModal openDemoModal={openModal} />
    </div>
  );
}

function StickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { openModal } = useDemoModal();

  React.useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden animate-in slide-in-from-bottom-4 duration-300 pointer-events-auto">
      <div className="bg-background/80 backdrop-blur-md border-t border-[color:var(--brand-ink)]/10 p-4 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)] pb-8">
        <button
          title="Falar com especialista"
          onClick={openModal}
          data-gtm-cta="falar_especialista_sticky"
          data-gtm-location="sticky_mobile"
          data-gtm-modal-open="modal_demonstracao"
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 text-base font-semibold hover:opacity-90 transition shadow-lg border-none cursor-pointer"
        >
          Falar com especialista
          <ArrowRight className="w-5 h-5 shrink-0" />
        </button>
      </div>
    </div>
  );
}

export function ExitModal({ openDemoModal }: { openDemoModal: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        if (!sessionStorage.getItem("exitModalShown")) {
          setIsOpen(true);
          sessionStorage.setItem("exitModalShown", "true");
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[color:var(--brand-ink)]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-[color:var(--brand-ink)] rounded-3xl w-full max-w-lg p-8 md:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors p-1 bg-transparent border-none cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <div className="w-20 h-20 bg-[color:var(--brand-clay)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">👋</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-[color:var(--brand-clay)] leading-tight">
            Vai mesmo sair agora?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Continuar perdendo leads por falta de organização não é a solução.
            Fale com nosso especialista agora e descubra como o CRM definitivo
            pode dobrar suas vendas.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                openDemoModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-lg font-bold px-6 py-4 hover:opacity-90 cursor-pointer border-none shadow-elev"
            >
              Falar com especialista agora
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2 mt-2 bg-transparent border-none cursor-pointer"
            >
              Não, prefiro continuar perdendo leads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SimpleNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-[color:var(--brand-ink)]/10">
      <div className="mx-auto max-w-7xl flex items-center justify-center py-4">
        <Link
          to="/"
          className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity"
        >
          <img
            loading="lazy"
            src="/icon.svg"
            alt="Microsistec Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-baseline gap-0.5 text-foreground">
            microsistec
            <span className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal">
              ®
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export function SimpleFooter() {
  return (
    <footer className="bg-background py-8 border-t border-[color:var(--brand-ink)]/10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-bold text-lg text-foreground tracking-[-0.03em]">
          <img
            loading="lazy"
            src="/icon.svg"
            alt="Microsistec Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <div className="flex items-baseline gap-0.5">microsistec</div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/politica-de-privacidade"
            className="hover:text-foreground transition"
          >
            Política de Privacidade
          </Link>
          <Link
            to="/termos-de-uso"
            className="hover:text-foreground transition"
          >
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}




