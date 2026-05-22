import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Sobre a Microsistec - Trinta Anos de Inovação Imobiliária" },
      {
        name: "description",
        content:
          "Conheça a história da Microsistec, pioneira em tecnologia imobiliária fundada em 1994, agora impulsionando vendas com CRM e IA.",
      },
    ],
  }),
  component: Empresa,
});

function Empresa() {
  const { openModal } = useDemoModal();

  const milestones = [
    {
      year: "1994",
      title: "Fundação & Primeiros Passos",
      desc: "Nascemos em Praia Grande/SP, em uma época em que controle de imóveis era feito em fichas de papel. Nosso fundador visualizou que o futuro das imobiliárias seria impulsionado por computadores.",
    },
    {
      year: "2002",
      title: "Pioneirismo na Web",
      desc: "Desenvolvemos os primeiros sites dinâmicos para imobiliárias brasileiras, permitindo que potenciais compradores buscassem imóveis de forma interativa pela primeira vez.",
    },
    {
      year: "2015",
      title: "Ecossistema imob.online",
      desc: "Consolidamos toda a inteligência da Microsistec em uma única plataforma na nuvem, unindo o CRM avançado, templates de alta conversão e o aplicativo móvel.",
    },
    {
      year: "2025",
      title: "A Revolução do Albert IA",
      desc: "Integramos o Albert IA, nossa inteligência artificial sob medida que qualifica leads de forma autônoma e humanizada, levando a produtividade das imobiliárias ao topo.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Gente que Ouve Gente",
      desc: "Nossas ferramentas são desenhadas ouvindo as dores reais do corretor, do gerente comercial e do proprietário.",
    },
    {
      icon: Trophy,
      title: "Tradição de Inovação",
      desc: "Trinta anos de experiência no mercado brasileiro combinados com a tecnologia mais moderna e performática.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança Absoluta",
      desc: "Criptografia de dados imobiliários sensíveis e conformidade rígida com a LGPD em todos os processos.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <main>
        {/* Editorial Hero */}
        <section className="relative overflow-hidden bg-hero py-20 md:py-28 border-b border-[color:var(--brand-ink)]/10">
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-5xl px-6 text-center space-y-6">
            <span className="stamp text-[color:var(--brand-orange)] text-xs inline-block">
              Fundada em 1994
            </span>
            <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Tecnologia imobiliária
              <br />
              com{" "}
              <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
                experiência de verdade
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Como pioneiros absolutos em trazer a tecnologia para o setor imobiliário brasileiro, há mais de trinta anos ajudamos imobiliárias, construtoras e corretores a vender mais. Essa estrada sólida prova que realmente sabemos o que fazemos.
            </p>
          </div>
        </section>

        {/* Story Section & Timeline */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 md:sticky md:top-24 space-y-6">
              <span className="font-serif-italic text-[color:var(--brand-orange)] text-xl block">
                Nossa história
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Pioneiros absolutos em tecnologia imobiliária.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossa trajetória não começou ontem com slides bonitos de startup. Fomos os pioneiros em trazer computadores, banco de dados e sites dinâmicos para o setor imobiliário brasileiro desde 1994. São trinta anos de liderança comprovando que entendemos cada detalhe do dia a dia do corretor e que sabemos exatamente o que fazemos.
              </p>
              <div className="pt-2">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-6 py-3 font-semibold hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none shadow-soft"
                >
                  Testar Nosso Sistema <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8 pl-4 border-l border-[color:var(--brand-ink)]/15">
              {milestones.map((m, idx) => (
                <div key={m.year} className="relative pl-6">
                  {/* Point */}
                  <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[color:var(--brand-orange)] border-2 border-background" />
                  <div className="text-sm font-mono-ui font-bold text-[color:var(--brand-orange)] mb-1">
                    {m.year}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Block */}
        <section className="bg-[color:var(--brand-sand)] border-y border-[color:var(--brand-ink)]/10 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center space-y-3 mb-16">
              <span className="stamp text-[color:var(--brand-orange)] text-[10px]">
                Nossos valores
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none">
                O que nos move diariamente
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-background rounded-2xl border border-[color:var(--brand-ink)]/15 p-8 shadow-soft">
                  <v.icon className="w-8 h-8 text-[color:var(--brand-orange)] mb-6" />
                  <h3 className="font-bold text-xl tracking-tight mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Tags Cloud */}
        <section className="border-t border-[color:var(--brand-ink)]/10 py-20 bg-[color:var(--brand-sand)]/30 overflow-hidden">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[color:var(--brand-ink)]">
              Pioneirismo em <span className="font-serif-italic font-normal text-emerald-700">Tecnologia Imobiliária</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto px-6">
              O Albert utiliza o que há de mais moderno em IA para garantir que sua imobiliária esteja sempre um passo à frente no mercado digital.
            </p>
          </div>

          <div className="relative flex flex-col gap-4">
            <div className="flex w-[200%] animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={`row1-${i}`} className="flex gap-4 px-2 w-1/2 justify-around">
                  {["CRM Imobiliário", "Qualificação de Leads", "Follow-up Automático", "Atendimento 24/7", "Inteligência Artificial para Corretores", "SDR Digital", "PropTech"].map((tag, j) => (
                    <span key={j} className="whitespace-nowrap px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-semibold shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex w-[200%] animate-marquee-reverse">
              {[...Array(2)].map((_, i) => (
                <div key={`row2-${i}`} className="flex gap-4 px-2 w-1/2 justify-around">
                  {["Real Estate AI", "Automação de Vendas", "Gestão de Atendimento", "Inovação Imobiliária", "Agendamento de Visitas", "Nutrição de Leads", "Sistema para Imobiliárias"].map((tag, j) => (
                    <span key={j} className="whitespace-nowrap px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-semibold shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="mx-auto max-w-5xl px-6 py-20 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Pronto para impulsionar sua imobiliária?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Faça como mais de 1.200 imobiliárias em todo o Brasil. Ative seu período gratuito de testes em 30 segundos.
          </p>
          <div className="pt-2">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition cursor-pointer border-none shadow-elev"
            >
              Começar Teste Grátis <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
