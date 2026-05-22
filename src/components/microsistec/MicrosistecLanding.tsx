import {
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
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { solutions, getIconComponent, blogPosts, testimonials } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* -------------------------------------------------------------------------- */
/*  NAV                                                                       */
/* -------------------------------------------------------------------------- */
export function Nav() {
  const { openModal } = useDemoModal();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-0.5 font-extrabold text-xl tracking-[-0.02em] hover:opacity-90" title="Microsistec - Marca Registrada">
          microsistec
          <span className="font-serif-italic text-[color:var(--brand-orange)] text-2xl leading-none">.</span>
          <span className="text-[9px] text-muted-foreground self-start mt-1 select-none font-sans font-medium" title="Marca Registrada">®</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {/* Soluções Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 hover:text-[color:var(--brand-orange)] transition cursor-pointer outline-none border-none bg-transparent">
              Soluções <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-xl p-2 shadow-elev">
              {solutions.map((sol) => {
                const IconComp = getIconComponent(sol.iconName);
                const isComingSoon = sol.ctaText === "Em Breve";
                return (
                  <DropdownMenuItem key={sol.slug} asChild={!isComingSoon} disabled={isComingSoon}>
                    {isComingSoon ? (
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[color:var(--brand-ink)]/40 cursor-not-allowed">
                        <IconComp className="w-4 h-4 shrink-0 text-[color:var(--brand-orange)]/40" />
                        <span className="font-semibold leading-none">{sol.title}</span>
                        <span className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 shrink-0">Em Breve</span>
                      </div>
                    ) : (
                      <Link
                        to="/solucoes/$slug"
                        params={{ slug: sol.slug }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition duration-200 cursor-pointer"
                      >
                        <IconComp className="w-4 h-4 shrink-0 text-[color:var(--brand-orange)]" />
                        <span className="font-semibold leading-none">{sol.title}</span>
                      </Link>
                    )}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/empresa" className="hover:text-[color:var(--brand-orange)] transition">Sobre</Link>
          <Link to="/blog" className="hover:text-[color:var(--brand-orange)] transition">Blog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://imob.online/" target="_blank" rel="noreferrer" className="hidden md:inline text-sm hover:opacity-70 px-3 py-2">
            Entrar
          </a>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] text-sm font-medium px-4 py-2.5 hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none"
          >
            Testar grátis <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO — editorial / blueprint                                              */
/* -------------------------------------------------------------------------- */
function Hero() {
  const { openModal } = useDemoModal();

  return (
    <section id="top" className="relative overflow-hidden bg-hero lg:h-[calc(100vh-4rem)] lg:flex lg:flex-col lg:justify-between">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-12 md:pt-12 md:pb-16 flex-grow flex flex-col justify-center">
        {/* eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-10">
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/15 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)]" />
              A pioneira em tecnologia imobiliária desde 1994
            </span>
          </div>
          <span className="font-serif-italic text-muted-foreground hidden md:inline">
            cap. 01: uma carta para quem ainda vende imóvel no caderninho
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* headline */}
          <h1 className="lg:col-span-9 font-extrabold tracking-[-0.045em] leading-[0.95] text-[clamp(2.4rem,6.5vw,5rem)]">
            Vender imóvel
            <br />
            virou{" "}
            <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
              outra coisa
            </span>
            .
            <br />
            E a gente já <span className="underline decoration-[color:var(--brand-orange)] decoration-[6px] underline-offset-[8px]">vive</span> aqui.
          </h1>

          {/* sticker badge */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="sticker px-5 py-4 max-w-[220px] shadow-elev">
              <div className="font-mono-ui text-[10px] opacity-70 mb-1">selo do dono</div>
              <div className="font-serif-italic text-lg leading-tight">
                "feito por gente que conhece imobiliária de verdade"
              </div>
            </div>
          </div>
        </div>

        {/* sub + CTAs */}
        <div className="mt-8 lg:mt-10 grid md:grid-cols-12 gap-6 items-center">
          <p className="md:col-span-7 text-base md:text-lg text-foreground/75 leading-relaxed">
            Como pioneiros em trazer tecnologia para o setor imobiliário brasileiro, unimos CRM completo, site, app de atendimento, automações e o{" "}
            <strong className="text-foreground">Albert IA</strong>, uma inteligência artificial
            que age como um clone do seu melhor SDR. Tudo num ecossistema só, validado por mais de 30 anos de experiência real.
          </p>
          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-5 py-3 md:px-6 md:py-3.5 font-medium hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none"
            >
              Testar 14 dias grátis <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#albert"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/20 px-5 py-3 md:px-6 md:py-3.5 font-medium hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition"
            >
              Conhecer o Albert <Sparkles className="w-4 h-4" />
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
    { n: "30+", label: "anos no mercado" },
    { n: "1.2K", label: "imobiliárias" },
    { n: "15K", label: "corretores ativos/mês" },
    { n: "R$8bi", label: "em negócios geridos" },
    { n: "3M+", label: "leads/ano" },
  ];
  return (
    <section id="resultados" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl">
          Fomos pioneiros ao trazer a tecnologia para as imobiliárias brasileiras. Três décadas de estrada{" "}
          <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
            provam que sabemos
          </span>{" "}
          o que fazemos.
        </h2>
        <span className="font-mono-ui text-xs text-muted-foreground">
          últ. atualização · operação {new Date().getFullYear()}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[color:var(--brand-ink)]/15 border-y border-[color:var(--brand-ink)]/15">
        {stats.map((s) => (
          <div key={s.label} className="py-6 md:py-8 px-4 md:px-6">
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{s.n}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
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
            <span className="font-serif-italic font-normal">numa coisa só</span>.
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
                <span className="font-mono-ui text-[10px] text-muted-foreground group-hover:text-[color:var(--brand-sand)]/60">
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
              não uma que <em className="font-serif-italic text-[color:var(--brand-sand)]/50">finge</em> conhecer.
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
            <div className="flex flex-wrap gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-semibold hover:opacity-90 transition decoration-none no-underline"
              >
                Converse com o Albert agora mesmo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/25 px-6 py-3.5 font-medium hover:bg-[color:var(--brand-sand)]/10 transition"
              >
                Ver planos
              </a>
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
              <div className="font-mono-ui text-[10px] text-[color:var(--brand-sand)]/60">
                SDR · atende agora
              </div>
            </div>
          </div>
          <span className="font-mono-ui text-[10px] text-[color:var(--brand-sand)]/60">
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

          <div className="mt-5 pt-4 border-t border-dashed border-[color:var(--brand-ink)]/20 flex items-center justify-between font-mono-ui text-[11px] text-muted-foreground">
            <span>qualificado e repassado em 38s</span>
            <span className="text-[color:var(--brand-orange)] font-semibold">+ CRM ✓</span>
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
          <span className="font-serif-italic text-[color:var(--brand-orange)] text-xl mb-3 block">
            sobre tempo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
            Você está perdendo lead enquanto procura ele no caderno.
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
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-[color:var(--brand-ink)]/20">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="font-mono-ui text-xs">imob.online / funil</span>
        </div>
        <span className="font-mono-ui text-xs text-[color:var(--brand-teal)] font-semibold">
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
            <div className="h-9 rounded-md bg-[color:var(--brand-sand)] overflow-hidden border border-[color:var(--brand-ink)]/10">
              <div
                className="h-full flex items-center px-3 text-xs font-mono-ui text-[color:var(--brand-sand)] transition-all"
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
    <section className="bg-[color:var(--brand-sand)] border-y border-[color:var(--brand-ink)]/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="rounded-2xl bg-background border border-[color:var(--brand-ink)]/15 p-8 shadow-soft"
              style={{ transform: `rotate(${(i - 1) * 0.7}deg)` }}
            >
              <it.icon className="w-6 h-6 text-[color:var(--brand-orange)] mb-6" />
              <h3 className="font-bold text-xl tracking-tight mb-2">{it.title}</h3>
              <p className="text-muted-foreground">{it.desc}</p>
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
export function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-y border-[color:var(--brand-ink)]/10">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-2">
          <Quote className="w-14 h-14 text-[color:var(--brand-orange)]" />
        </div>
        <div className="md:col-span-10">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id}>
                  <blockquote className="text-2xl md:text-4xl font-serif-italic leading-[1.2] tracking-[-0.01em]">
                    "{t.quote}"
                    <footer className="not-italic mt-6 flex items-center gap-3 text-sm font-sans text-muted-foreground">
                      <img 
                        src={t.avatarUrl} 
                        alt={t.author} 
                        className="w-10 h-10 rounded-full object-cover border border-[color:var(--brand-ink)]/10 shrink-0" 
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
                        }}
                      />
                      <div>
                        <div className="font-semibold text-foreground">{t.author}</div>
                        <div>{t.role}, {t.company} · {t.location}</div>
                      </div>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 justify-end mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  BLOG                                                                      */
/* -------------------------------------------------------------------------- */
export function Blog() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-2xl">
          <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">Leitura</span>{" "}
          rápida pra quem vende imóvel.
        </h2>
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70">
          Ver todos <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.id}
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
    <section id="demo" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--brand-ink)] bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-10 md:p-16 shadow-elev">
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
          <div className="md:col-span-4 flex flex-col gap-3">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 font-semibold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none"
            >
              Testar grátis <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/5513997591781"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-sand)]/30 px-6 py-4 font-medium hover:bg-[color:var(--brand-sand)]/10 transition"
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
    <footer className="border-t border-[color:var(--brand-ink)]/15 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-baseline gap-0.5 font-extrabold text-2xl tracking-[-0.02em] mb-4 hover:opacity-90" title="Microsistec - Marca Registrada">
              microsistec
              <span className="font-serif-italic text-[color:var(--brand-orange)] text-3xl leading-none">.</span>
              <span className="text-[10px] text-muted-foreground self-start select-none font-sans font-medium" title="Marca Registrada">®</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Proptech brasileira desde 1994. CRM, sites, app de atendimento e o Albert IA
              em um ecossistema só, pensado pra imobiliária de verdade.
            </p>
            <a
              href="https://imob.online/"
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
              { label: "App de Atendimento", to: "/solucoes/$slug", params: { slug: "app" } },
              { label: "Rodízio de Atendimento", to: "/solucoes/$slug", params: { slug: "rodizio" } },
              { label: "Sites Customizados V8", to: "/solucoes/$slug", params: { slug: "sites-v8" } },
            ]}
          />
          <FooterCol
            title="Empresa"
            links={[
              { label: "Sobre", to: "/empresa" },
              { label: "Blog", to: "/blog" },
              { label: "Falar no WhatsApp", to: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0" },
            ]}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-dashed border-[color:var(--brand-ink)]/20 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Microsistec · feito no Brasil ✦</span>
          <span className="font-serif-italic">com Albert IA dentro</span>
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
  links: { label: string; to: string; params?: any }[] 
}) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-muted-foreground text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.to.startsWith("http") || link.to.startsWith("#") || link.to.startsWith("/#") ? (
              <a href={link.to} className="hover:text-[color:var(--brand-orange)] transition">
                {link.label}
              </a>
            ) : (
              <Link to={link.to} params={link.params} className="hover:text-[color:var(--brand-orange)] transition cursor-pointer">
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
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}