import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { Check, ArrowRight, Minus } from "lucide-react";
import React from "react";

export const Route = createFileRoute("/planos-albert")({
  component: PlanosAlbertPage,
});

function PlanosAlbertPage() {
  const { openModal } = useDemoModal();

  const tiers = [
    { name: "500", volume: "500" },
    { name: "1000", volume: "1000" },
    { name: "1500", volume: "1500" },
    { name: "2000", volume: "2000" },
  ];

  const features = [
    {
      label: "Preço",
      values: ["Sob consulta", "Sob consulta", "Sob consulta", "Sob consulta"],
      isString: true
    },
    {
      label: "Fidelidade",
      values: ["Flexível", "Flexível", "Flexível", "Flexível"],
      isString: true
    },
    {
      label: "Busca de imóveis",
      values: [true, true, true, true],
    },
    {
      label: "Agendamento de visitas",
      values: [true, true, true, true],
    },
    {
      label: "Envio de leads para o CRM",
      values: [true, true, true, true],
    },
    {
      label: "Suporte",
      values: [true, true, true, true],
    },
    {
      label: "Marca personalizada",
      values: [true, true, true, true],
    },
    {
      label: "CRM Próprio",
      values: [true, true, true, true],
    },
    {
      label: "Reunião Estratégica (consultor)",
      values: ["2 reuniões", "2 reuniões", "1 reunião mensal", "Sob demanda"],
      isString: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <main>
        {/* Header Section */}
        <section className="relative overflow-hidden bg-hero py-20 border-b border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-5xl px-6 text-center space-y-6">
            <span className="stamp text-[color:var(--brand-orange)] text-xs inline-block">
              Albert IA
            </span>
            <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Planos desenhados para
              <br />
              escalar seu{" "}
              <span className="font-serif-italic font-normal text-emerald-700">
                atendimento
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Escolha o volume ideal de atendimentos mensais. O Albert cuida de toda a triagem e qualificação, sem limite de corretores.
            </p>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="bg-white rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[color:var(--brand-ink)]/10">
                    <th className="py-8 px-6 lg:px-10 font-extrabold text-xl lg:text-2xl text-[color:var(--brand-ink)] w-1/3">
                      Atendimento Mensal
                    </th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="py-8 px-6 text-center font-extrabold text-3xl lg:text-5xl text-[color:var(--brand-ink)]">
                        {tier.volume}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--brand-ink)]/5">
                  {features.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-6 px-6 lg:px-10 font-bold text-sm lg:text-base text-[color:var(--brand-ink)]">
                        {feature.label}
                      </td>
                      {feature.values.map((val, vIdx) => (
                        <td key={vIdx} className="py-6 px-6 text-center">
                          {feature.isString ? (
                            <span className="text-sm font-semibold text-[color:var(--brand-ink)]/80">
                              {val}
                            </span>
                          ) : val === true ? (
                            <Check className="w-5 h-5 text-emerald-600 mx-auto" strokeWidth={3} />
                          ) : (
                            <Minus className="w-5 h-5 text-[color:var(--brand-ink)]/30 mx-auto" strokeWidth={3} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 lg:p-10 bg-slate-50 border-t border-[color:var(--brand-ink)]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-sm text-muted-foreground max-w-xl">
                O Albert atende clientes de forma 100% autônoma, capturando informações chave e enviando o lead enriquecido direto para o seu funil de vendas.
              </div>
              <button
                onClick={openModal}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:brightness-110 transition cursor-pointer border-none shadow-elev"
              >
                Solicitar Orçamento <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
