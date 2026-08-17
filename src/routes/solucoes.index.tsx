import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { solutions, getIconComponent } from "@/lib/data";
import { ArrowRight, ChevronRight, Users, Building2, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/")(({
  head: () => ({
    meta: [
      { title: "Soluções - Microsistec" },
      {
        name: "description",
        content:
          "Conheça todas as soluções de gestão imobiliária da Microsistec: CRM, App, Albert IA, Sites, Integrações, Rodízio e muito mais.",
      },
    ],
  }),
  component: SolucoesIndex,
}));

const categoryBadge: Record<string, { label: string; color: string }> = {
  crm:              { label: "CRM",         color: "bg-blue-50 text-blue-700" },
  app:              { label: "Mobile",      color: "bg-violet-50 text-violet-700" },
  funil:            { label: "Pipeline",    color: "bg-indigo-50 text-indigo-700" },
  integracoes:      { label: "Integrações", color: "bg-emerald-50 text-emerald-700" },
  "albert-ia":      { label: "IA",          color: "bg-amber-50 text-amber-700" },
  "sites-template": { label: "Sites",       color: "bg-rose-50 text-rose-700" },
  "sites-v8":       { label: "Sites Pro",   color: "bg-rose-50 text-rose-700" },
  rodizio:          { label: "Atendimento", color: "bg-cyan-50 text-cyan-700" },
  locacao:          { label: "Locação",     color: "bg-orange-50 text-orange-700" },
};

function SolucoesIndex() {
  const activeSolutions = solutions.filter((s) => s.ctaText !== "Em Breve");
  const comingSoon = solutions.filter((s) => s.ctaText === "Em Breve");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[color:var(--brand-ink)]/8">
          <div className="bg-grid absolute inset-0" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Link title="Página Inicial da Microsistec" to="/"
                className="text-sm font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition text-muted-foreground"
              >
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              <span className="text-sm font-mono-ui uppercase text-[color:var(--brand-orange)] font-semibold">
                Soluções
              </span>
            </div>

            <div className="max-w-3xl space-y-5">
              <span className="stamp text-[color:var(--brand-orange)] text-sm">
                Ecossistema Completo
              </span>
              <h1 className="font-extrabold tracking-[-0.045em] leading-[0.97] text-[clamp(2.4rem,5.5vw,4.2rem)]">
                Tudo que sua imobiliária<br />
                precisa, <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">num só lugar</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/65 leading-relaxed max-w-xl">
                Tecnologia pioneira para o mercado imobiliário brasileiro desde 1994.
                Conheça cada solução do nosso ecossistema integrado.
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-ink)]">
          <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 divide-x divide-[color:var(--brand-sand)]/10">
            {[
              { icon: Building2, value: `${activeSolutions.length}`, label: "Soluções integradas" },
              { icon: Users,     value: "1.2K",                      label: "Imobiliárias ativas" },
              { icon: Zap,       value: "30+",                       label: "Anos de experiência" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 px-4 text-center">
                <Icon className="w-4 h-4 text-[color:var(--brand-orange)] mb-1" />
                <span className="text-2xl font-extrabold text-[color:var(--brand-sand)] tracking-tight">{value}</span>
                <span className="text-[11px] text-[color:var(--brand-sand)]/50 font-mono-ui">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10">
            <p className="text-sm font-mono-ui uppercase tracking-widest text-muted-foreground">
              {activeSolutions.length} soluções disponíveis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeSolutions.map((sol) => {
              const IconComp = getIconComponent(sol.iconName);
              const badge = categoryBadge[sol.slug];

              return (
                <Link title="Conhecer solução" key={sol.slug}
                  to="/solucoes/$slug"
                  params={{ slug: sol.slug }}
                  className="group relative flex flex-col rounded-2xl border border-[color:var(--brand-ink)]/8 bg-background hover:border-[color:var(--brand-orange)]/25 hover:shadow-card transition-all duration-300 overflow-hidden no-underline decoration-none"
                >
                  {/* Top accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[color:var(--brand-orange)] transition-all duration-300" />

                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[color:var(--brand-ink)] text-[color:var(--brand-orange)] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      {badge && (
                        <span className={`text-[10px] font-mono-ui font-bold px-2.5 py-1 rounded-full ${badge.color}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h2 className="font-bold text-lg tracking-tight mb-2 group-hover:text-[color:var(--brand-orange)] transition-colors duration-200">
                        {sol.title}
                      </h2>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {sol.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[color:var(--brand-ink)]/6 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors duration-200 flex items-center gap-1.5">
                        Conhecer solução
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </span>
                      <span className="text-[10px] font-mono-ui text-muted-foreground/50">
                        {sol.features.length} recursos
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Coming Soon */}
          {comingSoon.length > 0 && (
            <div className="mt-12 pt-10 border-t border-[color:var(--brand-ink)]/8">
              <p className="text-sm font-mono-ui uppercase tracking-widest text-muted-foreground mb-5">
                Em breve
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {comingSoon.map((sol) => {
                  const IconComp = getIconComponent(sol.iconName);
                  return (
                    <div
                      key={sol.slug}
                      className="flex flex-col rounded-2xl border border-[color:var(--brand-ink)]/6 bg-[color:var(--brand-sand)]/30 opacity-60 overflow-hidden cursor-default p-6 gap-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[color:var(--brand-ink)]/8 text-muted-foreground flex items-center justify-center">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 font-mono-ui">
                          Em Breve
                        </span>
                      </div>
                      <div>
                        <h2 className="font-bold text-lg tracking-tight mb-1.5 text-muted-foreground">
                          {sol.title}
                        </h2>
                        <p className="text-base text-muted-foreground/70 leading-relaxed">
                          {sol.shortDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* CTA band */}
        <section className="bg-[color:var(--brand-ink)] border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-sand)] tracking-tight">
                Pronto para explorar o ecossistema?
              </h2>
              <p className="text-base text-[color:var(--brand-sand)]/60">
                Teste 14 dias grátis, sem cartão de crédito.
              </p>
            </div>
            <a title="Página Inicial da Microsistec" href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-7 py-3.5 font-bold text-base hover:bg-[color:var(--brand-sand)] transition shrink-0 no-underline decoration-none"
            >
              Começar teste grátis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
