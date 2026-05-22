import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { solutions, getIconComponent } from "@/lib/data";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/")({
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
});

function SolucoesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero py-20 md:py-28 border-b border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0" />

          <div className="relative mx-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link
                to="/"
                className="text-xs font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition"
              >
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs font-mono-ui uppercase text-muted-foreground">
                Soluções
              </span>
            </div>

            <div className="max-w-3xl space-y-5">
              <span className="stamp text-[color:var(--brand-orange)] text-xs">
                Ecossistema Completo
              </span>
              <h1 className="font-extrabold tracking-[-0.045em] leading-[0.98] text-[clamp(2.3rem,5vw,4rem)]">
                Nossas Soluções
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-serif-italic">
                Tecnologia pioneira para o mercado imobiliário brasileiro desde
                1994. Conheça cada solução do nosso ecossistema integrado.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const IconComp = getIconComponent(sol.iconName);
              const isComingSoon = sol.ctaText === "Em Breve";

              return (
                <div
                  key={sol.slug}
                  className="group relative flex flex-col rounded-2xl border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-sand)]/20 hover:bg-background hover:border-[color:var(--brand-orange)]/30 transition duration-300 overflow-hidden"
                >
                  {isComingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        Em Breve
                      </span>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-[color:var(--brand-ink)] text-[color:var(--brand-orange)] flex items-center justify-center mb-4 shadow-soft">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h2 className="font-extrabold text-lg tracking-tight mb-2 group-hover:text-[color:var(--brand-orange)] transition">
                      {sol.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {sol.shortDesc}
                    </p>

                    {isComingSoon ? (
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground/50 cursor-default">
                        Em breve disponível
                      </span>
                    ) : (
                      <Link
                        to="/solucoes/$slug"
                        params={{ slug: sol.slug }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-orange)] transition group/link no-underline decoration-none"
                      >
                        Conhecer solução
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
