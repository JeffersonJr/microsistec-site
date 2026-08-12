import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { CheckCircle2, ArrowRight, Building2, HelpCircle } from "lucide-react";
import React from "react";

export const Route = createFileRoute("/planos")({
  component: PlanosPage,
});

function PlanosPage() {
  const { openModal } = useDemoModal();
  const [isAnnual, setIsAnnual] = React.useState(false);

  const plans = [
    {
      id: "essencial",
      name: "Essencial",
      desc: "Pequenas imobiliárias e autônomos",
      price: isAnnual ? "252" : "315",
      users: "2 usuários",
      limit: "Até 600 imóveis",
      features: [
        "Site Imobiliário Otimizado",
        "Sistema Imobiliário Completo",
        "3 contas de e-mail",
        "Analista de Sucesso do Cliente",
        "Integração com Portais",
        "Treinamentos Online",
        "App Leads"
      ]
    },
    {
      id: "profissional",
      name: "Profissional",
      isPopular: true,
      desc: "Imobiliárias de médio porte",
      price: isAnnual ? "574" : "718",
      users: "5 usuários",
      limit: "Até 1.500 imóveis",
      features: [
        "Site Imobiliário Otimizado",
        "Sistema Imobiliário Completo",
        "6 contas de e-mail",
        "Analista de Sucesso do Cliente",
        "Integração com Portais",
        "Treinamentos Online",
        "App Leads"
      ]
    },
    {
      id: "avancado",
      name: "Avançado",
      desc: "Imobiliárias de grande porte",
      price: isAnnual ? "1.006" : "1.258",
      users: "10 usuários",
      limit: "Até 5.000 imóveis",
      features: [
        "Site Imobiliário Otimizado",
        "Sistema Imobiliário Completo",
        "11 contas de e-mail",
        "Analista de Sucesso do Cliente",
        "Integração com Portais",
        "Treinamentos Online",
        "App Leads"
      ]
    },
    {
      id: "corporativo",
      name: "Corporativo",
      desc: "Grandes imobiliárias e redes",
      price: isAnnual ? "1.880" : "2.350",
      users: "20 usuários",
      limit: "Imóveis Ilimitados",
      features: [
        "Site Imobiliário Otimizado",
        "Sistema Imobiliário Completo",
        "21 contas de e-mail",
        "Analista de Sucesso do Cliente",
        "Integração com Portais",
        "Treinamentos Online",
        "App Leads"
      ]
    },
    {
      id: "infinity",
      name: "Infinity",
      desc: "Enterprise e grandes operações",
      price: "Sob consulta",
      isCustom: true,
      users: "Usuários Ilimitados",
      limit: "Imóveis Ilimitados",
      features: [
        "Site Imobiliário Otimizado",
        "Sistema Imobiliário Completo",
        "E-mails Ilimitados",
        "Analista de Sucesso Exclusivo",
        "Integração com Portais",
        "Treinamentos VIP",
        "App Leads (Ilimitado)"
      ]
    }
  ];

  const faqs = [
    {
      q: "Existe alguma taxa de implantação?",
      a: "Temos opções flexíveis. Consulte nosso time comercial para entender os pacotes de implantação que melhor se adequam à complexidade da sua operação."
    },
    {
      q: "Posso cancelar quando eu quiser?",
      a: "Nossos planos não possuem multa por cancelamento após o período mínimo de permanência estabelecido em contrato (geralmente 12 meses para garantir o sucesso da operação)."
    },
    {
      q: "O suporte técnico está incluso?",
      a: "Sim! Todos os planos contam com suporte técnico especializado por chat, e-mail e telefone, além de uma base de conhecimento completa."
    },
    {
      q: "Como funciona o bônus do ciclo anual?",
      a: "Optando pelo faturamento anual, você recebe 10% de desconto no valor final da sua licença, garantindo a previsibilidade do seu fluxo de caixa."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        {/* Header Section */}
        <section className="relative overflow-hidden bg-hero pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-5xl px-6 text-center space-y-6">
            <span className="stamp text-[color:var(--brand-orange)] text-xs inline-block">
              Preços e Planos
            </span>
            <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Invista no futuro
              <br />
              da sua{" "}
              <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
                imobiliária
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta ao momento do seu negócio. Comece pequeno ou escale com poder total.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mx-auto max-w-[1400px] px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          {/* Toggle Billing */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-[color:var(--brand-ink)]' : 'text-muted-foreground'}`}>Mensal</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-[color:var(--brand-ink)]/10 rounded-full relative p-1 transition-colors cursor-pointer hover:bg-[color:var(--brand-ink)]/20"
            >
              <div className={`w-6 h-6 bg-[color:var(--brand-orange)] rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-[color:var(--brand-ink)]' : 'text-muted-foreground'}`}>
              Anual <span className="ml-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">-10%</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${plan.isPopular
                    ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] shadow-elev border-2 border-[color:var(--brand-orange)]"
                    : "bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 hover:border-[color:var(--brand-orange)]/50 hover:shadow-soft text-[color:var(--brand-ink)]"
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                    Mais Escolhido
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-extrabold tracking-tight leading-tight">{plan.name}</h3>
                  <p className={`text-sm leading-relaxed min-h-[40px] ${plan.isPopular ? "text-[color:var(--brand-sand)]/70" : "text-muted-foreground"}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-8 h-[48px] flex items-center">
                  {!plan.isCustom ? (
                    <div className="flex items-end gap-1 flex-wrap">
                      <span className="text-sm font-bold mb-1">R$</span>
                      <span className="text-4xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-extrabold tracking-tighter leading-none">{plan.price}</span>
                      <span className={`text-sm mb-1 ${plan.isPopular ? "text-[color:var(--brand-sand)]/70" : "text-muted-foreground"}`}>/mês</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-extrabold tracking-tighter leading-none">{plan.price}</div>
                  )}
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="pb-4 mb-4 border-b border-current/10">
                    <div className="flex items-center gap-2 mb-2 font-semibold text-sm">
                      <Building2 className={`w-4 h-4 ${plan.isPopular ? "text-[color:var(--brand-orange)]" : ""}`} />
                      {plan.limit}
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${plan.isPopular ? "text-[color:var(--brand-orange)]" : ""}`}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      {plan.users}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-tight">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? "text-[color:var(--brand-orange)]" : "text-[color:var(--brand-ink)]/50"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://api.whatsapp.com/send/?phone=5513997591781&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%20imobili%C3%A1rio&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full inline-flex items-center justify-center py-4 rounded-xl font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98] no-underline ${plan.isPopular
                      ? "bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] hover:brightness-110"
                      : "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] hover:bg-[color:var(--brand-ink)]/90"
                    }`}
                >
                  Falar com especialista
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Tudo que você precisa saber antes de assinar.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/10">
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 shrink-0 text-[color:var(--brand-orange)]" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Ainda não tem certeza?
            </h2>
            <p className="text-lg text-[color:var(--brand-sand)]/70 max-w-2xl mx-auto">
              Fale com nosso especialista agora e monte a solução ideal para a sua imobiliária, tirando todas as suas dúvidas operacionais.
            </p>
            <div className="pt-4">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:brightness-110 transition cursor-pointer border-none shadow-elev"
              >
                Falar com especialista <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
