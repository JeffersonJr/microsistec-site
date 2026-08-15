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
import { solutions, getIconComponent, blogPosts, testimonials } from "@/lib/data";

const Testimonial = React.lazy(() => import('./Testimonial'));

/* -------------------------------------------------------------------------- */
/*  NAV                                                                       */
/* -------------------------------------------------------------------------- */
type OpenMenu = "solucoes" | "planos" | null;

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
    setOpenMenu(prev => prev === menu ? null : menu);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 pointer-events-none">
      <div
        ref={navRef}
        className={`relative mx-auto max-w-6xl pointer-events-auto nav-pill ${scrolled ? "nav-pill-scrolled" : ""}`}
      >
        <div className="flex h-[54px] items-center justify-between px-5">
          <Link
            to="/"
            className="flex items-center gap-2 font-extrabold text-xl tracking-[-0.03em] hover:opacity-85 transition-opacity"
            title="Microsistec - Marca Registrada"
            onClick={() => setOpenMenu(null)}
          >
            <img src="/icon.svg" alt="Microsistec Logo" title="Microsistec - Tecnologia e Inovação" width={32} height={32} fetchPriority="high" className="w-8 h-8 object-contain" />
            <div className="flex items-baseline gap-0.5">
              microsistec
              <span className="font-serif-italic text-[color:var(--brand-orange)] text-2xl leading-none">.</span>
              <span className="text-[10px] text-muted-foreground self-start mt-1 select-none font-sans font-normal" title="Marca Registrada">®</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">

            {/* Soluções */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("solucoes")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "solucoes" ? "text-[color:var(--brand-orange)] bg-[color:var(--brand-ink)]/5" : "text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4"}`}
              >
                Soluções
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: openMenu === "solucoes" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
            </div>

            {/* Planos */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("planos")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "planos" ? "text-[color:var(--brand-orange)] bg-[color:var(--brand-ink)]/5" : "text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4"}`}
              >
                Planos
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: openMenu === "planos" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
            </div>

            <Link title="Sobre a Microsistec" to="/empresa"
              onClick={() => setOpenMenu(null)}
              className="px-3 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Sobre
            </Link>
            <Link title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário" to="/blog"
              onClick={() => setOpenMenu(null)}
              className="px-3 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Blog
            </Link>
            <Link title="Materiais Ricos e Gratuitos" to="/materiais"
              onClick={() => setOpenMenu(null)}
              className="px-3 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Materiais
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a title="Acessar o Sistema Imob Online" href="https://imob.online/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-full hover:bg-[color:var(--brand-ink)]/4"
            >
              Entrar
            </a>
            <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%20imobili%C3%A1rio&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] text-sm font-semibold px-4 py-2 hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none no-underline"
            >
              Falar com especialista <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => { setIsMobileOpen(!isMobileOpen); setOpenMenu(null); }}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)]/8 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">Operação & Vendas</span>
                </div>
                <div className="space-y-2">
                  {[
                    { slug: "crm", title: "CRM Imobiliário", desc: "Gestão operacional e base unificada", icon: Building2 },
                    { slug: "app", title: "App de Atendimento", desc: "Mobilidade e agilidade na rua", icon: Smartphone },
                    { slug: "funil", title: "Multi-Funil Kanban", desc: "Pipelines separados por processo", icon: LineChart },
                    { slug: "rodizio", title: "Rodízio de Leads", desc: "Distribuição automática e justa", icon: Users }
                  ].map(item => (
                    <Link title="Conhecer solução" key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[color:var(--brand-ink)]/4 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 group-hover:bg-[color:var(--brand-orange)]/20 flex items-center justify-center shrink-0 transition">
                        <item.icon className="w-4 h-4 text-[color:var(--brand-orange)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors leading-none mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-normal">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 2: Presença Digital */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">Presença Digital</span>
                </div>
                <div className="space-y-2">
                  {[
                    { slug: "sites-template", title: "Sites Express", desc: "Templates otimizados em 1 dia", icon: Globe },
                    { slug: "sites-v8", title: "Sites Custom V8", desc: "Design exclusivo de alta performance", icon: Sparkles },
                    { slug: "integracoes", title: "Integrações", desc: "WhatsApp API e portais integrados", icon: Workflow }
                  ].map(item => (
                    <Link title="Conhecer solução" key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[color:var(--brand-ink)]/4 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 group-hover:bg-[color:var(--brand-orange)]/20 flex items-center justify-center shrink-0 transition">
                        <item.icon className="w-4 h-4 text-[color:var(--brand-orange)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors leading-none mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-normal">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 3: Inteligência Artificial */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">Inteligência Artificial</span>
                </div>
                <div className="space-y-2">
                  {[
                    { slug: "albert-ia", title: "Albert IA (SDR)", desc: "Conversa e agenda no WhatsApp 24/7", icon: Bot }
                  ].map(item => (
                    <Link title="Conhecer solução" key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[color:var(--brand-ink)]/4 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 group-hover:bg-[color:var(--brand-orange)]/20 flex items-center justify-center shrink-0 transition">
                        <item.icon className="w-4 h-4 text-[color:var(--brand-orange)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors leading-none mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-normal">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 4: Financeiro */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">Financeiro</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl text-[color:var(--brand-ink)]/35 cursor-not-allowed">
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-ink)]/5 flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4 text-muted-foreground/45" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <h4 className="font-bold text-sm leading-none">Sistema de Locação</h4>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 leading-none">Em breve</span>
                      </div>
                      <p className="text-xs text-muted-foreground/50 leading-normal">Contratos, reajustes e repasses imobiliários digitais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 pt-6 border-t border-[color:var(--brand-ink)]/8 flex items-center justify-between text-xs text-muted-foreground">
              <span>Tem alguma dúvida operacional ou deseja integrar canais específicos?</span>
              <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%20imobili%C3%A1rio&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[color:var(--brand-orange)] hover:underline"
              >
                Falar com especialista <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {openMenu === "planos" && (
          <div className="absolute top-full left-0 right-0 mt-3 w-full bg-[color:var(--brand-sand)]/98 backdrop-blur-xl border border-[color:var(--brand-ink)]/12 rounded-[24px] p-8 shadow-elev animate-fadeIn z-50 pointer-events-auto">
            <div className="grid grid-cols-3 gap-8 text-left">
              {/* CRM */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-[color:var(--brand-orange)]" />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">CRM Imobiliário</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                  Planos desenhados para corretores independentes, imobiliárias em crescimento ou grandes redes com dezenas de filiais.
                </p>
                <div>
                  <Link title="Planos e Preços do CRM" to="/planos"
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--brand-orange)] hover:underline"
                  >
                    Ver tabela de preços do CRM <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Albert IA */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-[color:var(--brand-orange)]" />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">Albert IA (SDR)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                  Automatize o primeiro contato dos portais e Meta Ads no WhatsApp 24/7 com inteligência e qualificação financeira.
                </p>
                <div>
                  <Link title="Planos e Preços da IA Albert" to="/planos-albert"
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--brand-orange)] hover:underline"
                  >
                    Conhecer planos do Albert IA <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>


              {/* Promo Banner */}
              <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                <div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-orange)] mb-1 block">Atendimento</span>
                  <h4 className="font-extrabold text-base mb-2">Fale com um Especialista</h4>
                  <p className="text-xs text-[color:var(--brand-sand)]/70 leading-relaxed">
                    Fale com nosso especialista agora e tire suas dúvidas ou solicite uma simulação customizada para o tamanho da sua imobiliária.
                  </p>
                </div>
                <button
                  onClick={() => { setOpenMenu(null); openModal(); }}
                  className="w-full mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-xs font-bold py-2.5 hover:scale-[1.02] transition cursor-pointer border-none"
                >
                  Falar com especialista agora
                </button>
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
            className="md:hidden fixed inset-0 bg-[color:var(--brand-ink)]/30 backdrop-blur-sm z-30 animate-fadeIn pointer-events-auto"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Bottom sheet */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 animate-fadeIn pointer-events-auto">
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
              <div className="overflow-y-auto px-4 pb-2" style={{ maxHeight: "60vh" }}>

                {/* Soluções */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mt-1 mb-0.5">Soluções</p>
                {solutions.map((sol) => {
                  const IconComp = getIconComponent(sol.iconName);
                  if (sol.ctaText === "Em Breve") return null;
                  return (
                    <Link title="Conhecer solução" key={sol.slug}
                      to="/solucoes/$slug"
                      params={{ slug: sol.slug }}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-3.5 px-2 rounded-2xl hover:bg-[color:var(--brand-ink)]/5 active:bg-[color:var(--brand-ink)]/10 transition no-underline text-[color:var(--brand-ink)]"
                      style={{ minHeight: 52 }}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[color:var(--brand-orange)]/10 flex items-center justify-center shrink-0">
                        <IconComp className="w-[18px] h-[18px] text-[color:var(--brand-orange)]" />
                      </div>
                      <span className="text-[15px] font-semibold flex-1">{sol.title}</span>
                      <ArrowRight className="w-4 h-4 text-[color:var(--brand-ink)]/25 shrink-0" />
                    </Link>
                  );
                })}

                {/* Divider */}
                <div className="h-px bg-[color:var(--brand-ink)]/8 mx-1 my-2" />

                {/* Outras páginas */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mb-0.5">Páginas</p>
                {([
                  { label: "Planos CRM", to: "/planos" },
                  { label: "Albert IA", to: "/planos-albert" },
                  { label: "Sobre nós", to: "/empresa" },
                  { label: "Blog", to: "/blog" },
                  { label: "Materiais gratuitos", to: "/materiais" },
                ] as { label: string; to: "/planos" | "/planos-albert" | "/empresa" | "/blog" | "/materiais" }[]).map((item) => (
                  <Link title="Acessar link" key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
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
                <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%20imobili%C3%A1rio&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] text-[15px] font-bold no-underline active:scale-[0.98] transition border-none"
                  style={{ minHeight: 56 }}
                >
                  Falar com especialista <ArrowUpRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2.5">
                  <a title="Acessar o Sistema Imob Online" href="https://imob.online/"
                    target="_blank"
                    rel="noreferrer"
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
    <section id="top" className="relative overflow-hidden bg-hero min-h-screen flex flex-col justify-between lg:h-auto">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-14 md:pt-36 md:pb-20 flex-grow flex flex-col justify-center">
        {/* eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-ink)]/[0.03] px-3.5 py-1 text-[13px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)] animate-pulse" />
              A pioneira em tecnologia imobiliária desde 1994
            </span>
          </div>
          <span className="font-serif-italic text-muted-foreground/60 hidden md:inline text-sm">
            cap. 01: uma carta para quem ainda vende imóvel no caderninho
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* headline */}
          <h1 className="lg:col-span-9 font-extrabold tracking-[-0.045em] leading-[0.95] text-[clamp(2.6rem,6.5vw,5.2rem)]">
            Vender imóvel
            <br />
            virou{" "}
            <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
              outra coisa
            </span>
            <br />
            E a gente já <span className="underline decoration-[color:var(--brand-orange)] decoration-[6px] underline-offset-[8px]">vive</span> aqui
          </h1>

          {/* proof badge */}
          <div className="flex lg:col-span-3 justify-start lg:justify-end mt-8 lg:mt-0 relative z-10">
            <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-3xl px-6 py-5 max-w-[280px] shadow-[0_15px_40px_-10px_rgba(255,107,53,0.25)] select-none border border-[color:var(--brand-orange)]/40 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-default">
              <div className="font-mono-ui text-[10px] font-bold text-[color:var(--brand-orange)] uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)] animate-pulse"></span>
                Desde 1994
              </div>
              <p className="font-serif-italic text-xl leading-[1.3] text-[color:var(--brand-sand)]">
                "feito por gente que conhece imobiliária de verdade"
              </p>
            </div>
          </div>
        </div>

        {/* sub + CTAs */}
        <div className="mt-8 lg:mt-12 grid md:grid-cols-12 gap-8 lg:gap-10 items-start md:items-center">
          <p className="md:col-span-7 text-base md:text-lg text-foreground/75 leading-relaxed">
            Como pioneiros em trazer tecnologia para o setor imobiliário brasileiro, somos uma empresa <strong>A.I. first</strong>. Unimos CRM completo, site, app de atendimento, automações e o{" "}
            <strong className="text-foreground">Albert IA</strong>, uma inteligência artificial
            que vai além de ser o seu melhor SDR. Tudo num ecossistema só, validado por mais de 30 anos de experiência real.
          </p>
          <div className="md:col-span-5 flex flex-col sm:flex-row flex-wrap gap-4 md:justify-end mt-2 md:mt-0">
            <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%20imobili%C3%A1rio&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-5 py-3 md:px-6 md:py-3.5 font-medium hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none no-underline"
            >
              Falar com especialista <ArrowRight className="w-4 h-4" />
            </a>
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
    "Albert IA · SDR",
    "Funil de vendas",
    "Automações",
    "Rodízio de leads",
    "Secretaria de vendas",
    "Integração com portais",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-[color:var(--brand-ink)]/15 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]">
      <div className="overflow-hidden">
        <div className="marquee flex gap-10 py-3.5 whitespace-nowrap text-sm">
          {row.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="font-serif-italic text-[color:var(--brand-orange)]">✦</span>
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
function StatsStrip() {
  const stats = [
    { n: "30+", label: "Anos no inovação" },
    { n: "15 mil+", label: "Corretores já atendidos" },
    { n: "500 mil+", label: "Leads qualificados" },
    { n: "1.200+", label: "Imobiliárias atendidas" },
  ];
  return (
    <section id="resultados" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl leading-snug">
          Pioneiros em trazer tecnologia para imobiliárias. Três décadas de estrada{" "}
          <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
            provam que sabemos
          </span>{" "}
          o que fazemos.
        </h2>
        <span className="font-mono-ui text-xs text-muted-foreground/60">
          operação · {new Date().getFullYear()}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--brand-ink)]/8 border-y border-[color:var(--brand-ink)]/8">
        {stats.map((s) => (
          <div key={s.label} className="bg-background py-7 md:py-9 px-5 md:px-6 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--brand-ink)]">{s.n}</div>
            <div className="text-xs text-muted-foreground mt-1.5 font-mono-ui">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  PILLARS                                                                   */
/* -------------------------------------------------------------------------- */
function Pillars() {
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
    <section id="produto" className="relative bg-[color:var(--brand-sand)] border-y border-[color:var(--brand-ink)]/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
          <h2 className="md:col-span-8 text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
            Sistema, site e app,{" "}
            <span className="font-serif-italic font-normal">em um único ecosistema</span>
          </h2>
          <p className="md:col-span-4 text-lg text-muted-foreground">
            Tudo o que a imobiliária precisa para vender mais e ter previsibilidade, sem amarrar
            cinco ferramentas com cuspe e arame.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--brand-ink)]/15 border border-[color:var(--brand-ink)]/15 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="bg-background p-7 md:p-8 relative group hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <it.icon className="w-6 h-6 text-[color:var(--brand-orange)]" />
                <span className="font-mono-ui text-xs font-medium text-muted-foreground group-hover:text-[color:var(--brand-sand)]/80">
                  0{i + 1} / 04
                </span>
              </div>
              <h3 className="font-bold text-xl tracking-tight mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-[color:var(--brand-sand)]/70 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ALBERT — warm dark, "terminal" with personality                           */
/* -------------------------------------------------------------------------- */
function Albert() {
  const features = [
    "Clone do seu melhor SDR, treinado com seu script",
    "Atendimento omnichannel 24/7 (WhatsApp, site, portais)",
    "Qualifica e repassa o lead pro corretor certo",
    "Histórico completo conectado ao CRM Microsistec",
    "Personalizável, não é IA genérica de prateleira",
  ];
  return (
    <section id="albert" className="relative overflow-hidden bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 90% 10%, oklch(0.7 0.19 45 / 0.4), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.55 0.1 195 / 0.35), transparent 60%)",
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="stamp text-[color:var(--brand-orange)] text-xs">Albert IA · v2</span>
              <span className="font-serif-italic text-[color:var(--brand-sand)]/60">
                conheça
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6">
              Uma IA que <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">conhece</span> imobiliária,
              não uma que <em className="font-serif-italic text-[color:var(--brand-sand)]/50">finge</em> conhecer
            </h2>
            <p className="text-lg text-[color:var(--brand-sand)]/70 mb-8 max-w-xl">
              Chega de chatbot decorando frase. O <strong className="text-[color:var(--brand-sand)]">Albert</strong> é
              montado sob medida para a sua imobiliária, tecnologia de ponta com coração humano.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[color:var(--brand-sand)]/85">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[color:var(--brand-orange)] shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-semibold hover:opacity-90 transition decoration-none no-underline text-center"
              >
                <span className="hidden sm:inline">Converse com o Albert agora mesmo</span>
                <span className="sm:hidden">Falar com o Albert no zap</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <Link title="Planos e Preços da IA Albert" to="/planos-albert"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/25 px-6 py-3.5 font-medium hover:bg-[color:var(--brand-sand)]/10 transition"
              >
                Ver planos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <AlbertChat />
          </div>
        </div>
      </div>
    </section>
  );
}

function AlbertChat() {
  return (
    <div className="relative tilt-r">
      <div className="absolute -inset-3 rounded-[28px] bg-[color:var(--brand-orange)]/15 blur-2xl" />
      <div className="relative bg-[color:var(--brand-sand)] text-[color:var(--brand-ink)] rounded-3xl border border-[color:var(--brand-ink)] shadow-elev overflow-hidden">
        {/* paper header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[color:var(--brand-ink)]/15 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <div className="font-semibold text-sm leading-tight">Albert</div>
              <div className="font-mono-ui text-xs font-medium text-[color:var(--brand-sand)]/80">
                SDR · atende agora
              </div>
            </div>
          </div>
          <span className="font-mono-ui text-xs font-medium text-[color:var(--brand-sand)]/80">
            lead #4827 · 13s
          </span>
        </div>

        <div className="p-5 space-y-3 text-sm">
          <Bubble who="lead">Oi, vi o anúncio do 2 quartos na Av. Paulista 👋</Bubble>
          <Bubble who="albert">
            Oi! Que bom que chegou. Posso te perguntar se é para morar ou investir?
          </Bubble>
          <Bubble who="lead">Pra morar. Ainda não fiz aprovação de crédito.</Bubble>
          <Bubble who="albert">
            Tranquilo. Já te passo pra <strong>Camila</strong>, especialista na Paulista. Sábado às
            10h pra visitar funciona?
          </Bubble>
          <Bubble who="lead">Funciona 🤝</Bubble>

          <div className="mt-5 pt-4 border-t border-dashed border-[color:var(--brand-ink)]/30 flex items-center justify-between font-mono-ui text-xs text-muted-foreground font-medium">
            <span>qualificado e repassado em 38s</span>
            <span className="text-[color:var(--brand-orange)] font-bold">+ CRM ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ who, children }: { who: "lead" | "albert"; children: React.ReactNode }) {
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

/* -------------------------------------------------------------------------- */
/*  FUNNEL                                                                    */
/* -------------------------------------------------------------------------- */
function Funil() {
  const features = [
    "Histórico de atendimento completo",
    "Rodízio de atendimento e equipes",
    "Secretaria de vendas (MQL)",
    "Controle de atividades por atendimento",
    "Processo de vendas imobiliária ponta-a-ponta",
  ];
  return (
    <section id="funil" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="font-serif-italic text-[#c2410c] text-xl mb-3 block">
            sobre tempo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
            Você está perdendo lead enquanto procura ele no caderno
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Controle do atendimento + script bem executado = mais vendas. A gente organiza o
            primeiro pra você poder focar no segundo.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-[color:var(--brand-orange)] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <FunnelVisual />
        </div>
      </div>
    </section>
  );
}

function FunnelVisual() {
  const stages = [
    { label: "Leads recebidos", value: 4820, w: "100%" },
    { label: "Qualificados pelo Albert", value: 3210, w: "82%" },
    { label: "Em atendimento", value: 1980, w: "62%" },
    { label: "Propostas enviadas", value: 740, w: "38%" },
    { label: "Vendas fechadas", value: 218, w: "18%" },
  ];
  return (
    <div className="relative rounded-3xl border border-[color:var(--brand-ink)] bg-background shadow-elev p-6 md:p-8 tilt-l">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-[color:var(--brand-ink)]/30">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="font-mono-ui text-sm font-medium">imob.online / funil</span>
        </div>
        <span className="font-mono-ui text-sm text-emerald-700 font-bold">
          +24% MoM
        </span>
      </div>
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div key={s.label}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-semibold tabular-nums">{s.value.toLocaleString("pt-BR")}</span>
            </div>
            <div className="h-9 rounded-md bg-[color:var(--brand-sand)] overflow-hidden border border-[color:var(--brand-ink)]/20">
              <div
                className={`h-full flex items-center px-3 text-sm font-bold font-mono-ui transition-all ${i === stages.length - 1 ? "text-[color:var(--brand-ink)]" : "text-[color:var(--brand-sand)]"
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

/* -------------------------------------------------------------------------- */
/*  ECOSYSTEM                                                                 */
/* -------------------------------------------------------------------------- */
function Ecosystem() {
  const items = [
    { icon: Globe, title: "Sites para imobiliária", desc: "Templates rápidos, prontos pra ranquear no Google da sua cidade." },
    { icon: MessageSquare, title: "Portais e WhatsApp", desc: "Viva Real, ZAP, OLX e WhatsApp integrados, publica uma vez, aparece em tudo." },
    { icon: ShieldCheck, title: "LGPD e segurança", desc: "Infra robusta, 99.9% de uptime, backups diários, você dorme tranquilo." },
  ];
  return (
    <section className="border-y border-[color:var(--brand-ink)]/8">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-[color:var(--brand-sand)]/40 border border-[color:var(--brand-ink)]/7 p-7 hover:bg-background hover:border-[color:var(--brand-orange)]/20 hover:shadow-soft transition-all duration-300"
            >
              <it.icon className="w-5 h-5 text-[color:var(--brand-orange)] mb-5" />
              <h3 className="font-bold text-lg tracking-tight mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  TESTIMONIAL                                                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  BLOG                                                                      */
/* -------------------------------------------------------------------------- */
export function Blog() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-2xl">
          <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">Leitura</span>{" "}
          rápida pra quem vende imóvel
        </h2>
        <Link title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário" to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70">
          Ver todos <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link title="Ler artigo no Blog" key={p.id}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group flex flex-col border-t border-[color:var(--brand-ink)]/20 pt-6 hover:border-[color:var(--brand-orange)] transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6 text-xs font-mono-ui text-muted-foreground">
              <span className="uppercase tracking-wider">{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <div className="aspect-[16/10] rounded-xl mb-6 overflow-hidden border border-[color:var(--brand-ink)]/10">
              <img
                src={p.imageUrl}
                alt={p.title}
                title={p.title}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <h3 className="font-bold text-xl tracking-tight leading-snug group-hover:text-[color:var(--brand-orange)] transition">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */
export function CTA() {
  const { openModal } = useDemoModal();

  return (
    <section id="demo" className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-[color:var(--brand-ink)] bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-8 md:p-16 shadow-elev">
        <div className="bg-grid absolute inset-0 opacity-25" />
        <div
          className="absolute -top-20 -right-10 w-80 h-80 rounded-full opacity-30"
          style={{ background: "var(--brand-orange)", filter: "blur(80px)" }}
        />
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <span className="stamp text-[color:var(--brand-orange)] text-xs mb-6 inline-block">
              teste 14 dias · sem cartão
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6">
              Bora vender mais, <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">de verdade</span>?
            </h2>
            <p className="text-lg text-[color:var(--brand-sand)]/70 max-w-xl">
              Preenche em 30 segundos. A gente liga, mostra o sistema, libera o Albert.
              Você decide depois, sem pressão.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 w-full">
            <a title="Fale conosco pelo WhatsApp" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%20imobili%C3%A1rio&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 font-semibold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none no-underline"
            >
              Falar com especialista <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a title="Fale conosco pelo WhatsApp" href="https://wa.me/5513997591781"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-sand)]/30 px-6 py-4 font-medium hover:bg-[color:var(--brand-sand)]/10 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FOOTER                                                                    */
/* -------------------------------------------------------------------------- */
export function Footer() {
  return (
    <footer className="border-t border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-sand)]/20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-[-0.03em] mb-4 hover:opacity-85 transition-opacity" title="Microsistec - Marca Registrada">
              <img src="/icon.svg" alt="Microsistec Logo" title="Microsistec - Soluções em Tecnologia" width={32} height={32} loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              <div className="flex items-baseline gap-0.5">
                microsistec
                <span className="font-serif-italic text-[color:var(--brand-orange)] text-2xl leading-none">.</span>
                <span className="text-[10px] text-muted-foreground/60 self-start select-none font-sans font-normal" title="Marca Registrada">®</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Proptech brasileira desde 1994. CRM, sites, app de atendimento e Albert IA
              num ecossistema só para imobiliárias de verdade.
            </p>
            <a title="Acessar o Sistema Imob Online" href="https://imob.online/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-sm hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition shadow-soft no-underline decoration-none group"
            >
              <KeyRound className="w-4 h-4" />
              <span>imob.online: área do cliente</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <FooterCol
            title="Soluções"
            links={[
              { label: "CRM Imobiliário", to: "/solucoes/$slug", params: { slug: "crm" } },
              { label: "Albert IA", to: "/solucoes/$slug", params: { slug: "albert-ia" } },
              { label: "Planos Albert IA", to: "/planos-albert" },
              { label: "App de Atendimento", to: "/solucoes/$slug", params: { slug: "app" } },
              { label: "Rodízio de Atendimento", to: "/solucoes/$slug", params: { slug: "rodizio" } },
              { label: "Sites Customizados V8", to: "/solucoes/$slug", params: { slug: "sites-v8" } },
            ]}
          />
          <FooterCol
            title="Empresa"
            links={[
              { label: "Sobre", to: "/empresa" },
              { label: "Planos", to: "/planos" },
              { label: "Blog", to: "/blog" },
              { label: "Materiais", to: "/materiais" },
              { label: "Falar no WhatsApp", to: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0" },
              { label: "Política de Privacidade", to: "/politica-de-privacidade" },
              { label: "Política de Cookies", to: "/politica-de-cookies" },
            ]}
          />
          <FooterCol
            title="Contato"
            links={[
              { label: "financeiro@microsistec.com.br", to: "mailto:financeiro@microsistec.com.br" },
              { label: "suporte@microsistec.com.br", to: "mailto:suporte@microsistec.com.br" },
            ]}
          />
          <FooterCol
            title="Redes sociais"
            links={[
              { label: <span className="flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</span>, to: "https://www.facebook.com/Microsistec/" },
              { label: <span className="flex items-center gap-2"><Youtube className="w-4 h-4" /> Youtube</span>, to: "https://www.youtube.com/c/microsistec" },
              { label: <span className="flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</span>, to: "https://www.instagram.com/microsistec.com.br" },
            ]}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[color:var(--brand-ink)]/8 text-xs text-muted-foreground font-mono-ui">
          <span>© {new Date().getFullYear()} Microsistec · feito no Brasil</span>
          <span className="font-serif-italic font-sans text-sm">com Albert IA dentro</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { label: React.ReactNode; to: string; params?: any }[]
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-base">{title}</h3>
      <ul className="space-y-2 text-muted-foreground text-sm">
        {links.map((link, idx) => (
          <li key={idx}>
            {link.to.startsWith("http") || link.to.startsWith("#") || link.to.startsWith("/#") ? (
              <a title="Acessar link" href={link.to} className="hover:text-[color:var(--brand-orange)] transition">
                {link.label}
              </a>
            ) : (
              <Link title="Acessar link" to={link.to} params={link.params} className="hover:text-[color:var(--brand-orange)] transition cursor-pointer">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
export function MicrosistecLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Pillars />
        <Albert />
        <Funil />
        <Ecosystem />
        <React.Suspense fallback={<div className="w-full h-64 md:h-96" />}>
          <Testimonial />
        </React.Suspense>
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}