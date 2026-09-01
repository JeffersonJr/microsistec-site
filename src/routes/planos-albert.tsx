import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { CheckCircle2, ArrowRight, Bot, HelpCircle } from "lucide-react";
import React from "react";

export const Route = createFileRoute("/planos-albert")({
  component: PlanosAlbertPage,
});

function PlanosAlbertPage() {
  const { openModal } = useDemoModal();

  const plans = [
    {
      id: "200",
      name: "200",
      desc: "atendimentos mensais",
      price: "Sob consulta",
      isCustom: true,
      users: "Corretores Ilimitados",
      limit: "Até 200 chats",
      features: [
        "Sem Fidelidade",
        "Busca de imóveis",
        "Agendamento de visitas",
        "Envio de leads para o CRM",
        "Suporte técnico",
        "Marca personalizada",
        "CRM Próprio (Opcional)",
        "2 Reuniões Estratégicas",
      ],
    },
    {
      id: "500",
      name: "500",
      isPopular: true,
      desc: "atendimentos mensais",
      price: "Sob consulta",
      isCustom: true,
      users: "Corretores Ilimitados",
      limit: "Até 500 chats",
      features: [
        "Sem Fidelidade",
        "Busca de imóveis",
        "Agendamento de visitas",
        "Envio de leads para o CRM",
        "Suporte técnico",
        "Marca personalizada",
        "CRM Próprio (Opcional)",
        "2 Reuniões Estratégicas",
      ],
    },
    {
      id: "800",
      name: "800",
      desc: "atendimentos mensais",
      price: "Sob consulta",
      isCustom: true,
      users: "Corretores Ilimitados",
      limit: "Até 800 chats",
      features: [
        "Sem Fidelidade",
        "Busca de imóveis",
        "Agendamento de visitas",
        "Envio de leads para o CRM",
        "Suporte técnico",
        "Marca personalizada",
        "CRM Próprio (Opcional)",
        "1 Reunião Mensal",
      ],
    },
    {
      id: "Personalizado",
      name: "Personalizado",
      desc: "atendimentos mensais",
      price: "Sob consulta",
      isCustom: true,
      users: "Corretores Ilimitados",
      limit: "Volume massivo",
      features: [
        "Sem Fidelidade",
        "Busca de imóveis",
        "Agendamento de visitas",
        "Envio de leads para o CRM",
        "Suporte VIP",
        "Marca personalizada",
        "CRM Próprio (Opcional)",
        "Consultoria Sob Demanda",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        {/* Header Section */}
        <section
          id="hero_planos_albert"
          data-gtm-section="hero_dobra_1"
          className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[color:var(--brand-ink)]/10"
        >
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-6 text-center space-y-6">
            <span className="stamp text-[color:var(--brand-orange)] text-sm inline-block">
              Albert IA
            </span>
            <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Planos desenhados para
              <br />
              escalar seu{" "}
              <span className="font-serif-italic font-normal text-emerald-700">
                atendimento
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Escolha o volume ideal de atendimentos mensais. O Albert cuida de
              toda a triagem e qualificação, sem limite de corretores.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section
          id="tabela_planos_albert"
          data-gtm-section="tabela_planos_albert"
          className="mx-auto max-w-6xl px-6 py-20 md:py-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-4 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] shadow-elev lg:-mt-4 lg:mb-4 border-2 border-[color:var(--brand-orange)]"
                    : "bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)]/50 hover:shadow-soft text-[color:var(--brand-ink)]"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                    Mais Escolhido
                  </div>
                )}

                <div className="space-y-2 mb-8">
                  <h3
                    className={`font-extrabold tracking-tight leading-none ${plan.name.length > 10 ? "text-[1.75rem] lg:text-[1.35rem] xl:text-[1.65rem] break-words" : "text-6xl"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${plan.isPopular ? "text-[color:var(--brand-sand)]/70" : "text-muted-foreground"}`}
                  >
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-extrabold tracking-tighter leading-none py-2">
                    {plan.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="pb-4 mb-4 border-b border-current/10">
                    <div className="flex items-center gap-2 mb-2 font-semibold text-base">
                      <Bot
                        className={`w-4 h-4 ${plan.isPopular ? "text-[color:var(--brand-orange)]" : ""}`}
                      />
                      {plan.limit}
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 ${plan.isPopular ? "text-[color:var(--brand-orange)]" : ""}`}
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {plan.users}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base leading-tight"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? "text-[color:var(--brand-orange)]" : "text-[color:var(--brand-ink)]/50"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={openModal}
                  data-gtm-cta={`falar_consultor_plano_albert_${plan.id}`}
                  data-gtm-location="tabela_planos_albert"
                  data-gtm-modal-open="modal_demonstracao"
                  className={`w-full py-4 rounded-xl font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98] ${
                    plan.isPopular
                      ? "bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] hover:brightness-110"
                      : "bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] hover:opacity-90"
                  }`}
                >
                  Falar com Consultor
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="cta_final_albert"
          data-gtm-section="cta_final_albert"
          className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] py-20 md:py-28 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-xl text-[color:var(--brand-sand)]/70 max-w-2xl mx-auto">
              O Albert atende clientes de forma 100% autônoma, capturando
              informações chave e enviando o lead enriquecido direto para o seu
              funil de vendas.
            </p>
            <div className="pt-4">
              <button
                onClick={openModal}
                data-gtm-cta="solicitar_orcamento_cta_final_albert"
                data-gtm-location="cta_final_albert"
                data-gtm-modal-open="modal_demonstracao"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:brightness-110 transition cursor-pointer border-none shadow-elev"
              >
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
