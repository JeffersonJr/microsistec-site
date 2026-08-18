import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { 
  Sparkles, 
  ArrowRight, 
  ListChecks, 
  BarChart3, 
  Share2, 
  Workflow, 
  CheckCircle2, 
  Building2, 
  Users, 
  TrendingUp,
  Target,
  FileText,
  Zap,
  SplitSquareHorizontal,
  ChevronRight,
  MessageCircle
} from "lucide-react";
import * as React from "react";

export const Route = createFileRoute("/novidades")({
  head: () => ({
    meta: [
      { title: "Novidades e Atualizações | Microsistec" },
      { name: "description", content: "Conheça os últimos lançamentos da Microsistec: Multifunil, Relatórios Avançados, Automações e muito mais." },
    ],
  }),
  component: NovidadesPage,
});

function NovidadesPage() {
  const funnels = [
    { id: "alto-padrao", name: "Alto Padrão", stage1: "Qualificação", stage2: "Visita Técnica", stage3: "Proposta", lead: "João Oliveira", prop: "Cobertura Riviera", tasks: ["Ficha de visita assinada", "Enviar fotos pro proprietário"] },
    { id: "locacao", name: "Locação", stage1: "Interesse", stage2: "Análise de Ficha", stage3: "Contrato", lead: "Maria Silva", prop: "Apto 2 qtos Centro", tasks: ["Fiador aprovado", "Vistoria inicial agendada"] },
    { id: "mcmv", name: "MCMV", stage1: "Simulação", stage2: "Aprovação Caixa", stage3: "Assinatura", lead: "Carlos Eduardo", prop: "Residencial Jardim", tasks: ["Documentação completa", "Simulação aprovada"] },
    { id: "lancamentos", name: "Lançamentos", stage1: "Lead Frio", stage2: "Apresentação", stage3: "Reserva", lead: "Ana Paula", prop: "Haus Studios", tasks: ["Tour virtual enviado", "Proposta assinada"] }
  ];
  const [activeFunnel, setActiveFunnel] = React.useState(funnels[0]);

  const automations = [
    { id: "lead-ads", name: "Novo Lead", trigger: "Lead se cadastra via Facebook Ads", action1: "Enviar WhatsApp de boas-vindas", action2: "Distribuir no Rodízio (Plantão Digital)", triggerIcon: Building2, action1Icon: MessageCircle, action2Icon: Users, triggerColor: "amber", action1Color: "green", action2Color: "blue" },
    { id: "baixa-preco", name: "Baixou Preço", trigger: "Imóvel favorito baixou de preço", action1: "Enviar E-mail de Oportunidade", action2: "Criar tarefa para o corretor ligar", triggerIcon: TrendingUp, action1Icon: FileText, action2Icon: ListChecks, triggerColor: "blue", action1Color: "purple", action2Color: "orange" },
    { id: "aniversario", name: "Pós-Venda", trigger: "Aniversário de contrato de locação", action1: "Enviar Mensagem Automática", action2: "Avisar time de Relacionamento", triggerIcon: Target, action1Icon: MessageCircle, action2Icon: Users, triggerColor: "rose", action1Color: "green", action2Color: "blue" }
  ];
  const [activeAutomation, setActiveAutomation] = React.useState(automations[0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 bg-grid opacity-15" />
          
          {/* Radial gradient background accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[color:var(--brand-orange)]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Link title="Página Inicial" to="/" className="text-sm font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition text-[color:var(--brand-sand)]/50">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[color:var(--brand-sand)]/30" />
              <span className="text-sm font-mono-ui uppercase text-[color:var(--brand-orange)] font-semibold">
                Novidades
              </span>
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[color:var(--brand-orange)]/15 text-[color:var(--brand-orange)] px-4 py-1.5 rounded-full font-bold text-sm">
                <Sparkles className="w-4 h-4" /> 
                Lançamento Exclusivo
              </div>
              <h1 className="font-extrabold tracking-[-0.045em] leading-[1.05] text-[clamp(2.4rem,5.5vw,4.5rem)]">
                O maior salto evolutivo na sua <span className="text-[color:var(--brand-orange)] font-serif-italic font-normal">gestão imobiliária</span>.
              </h1>
              <p className="text-xl text-[color:var(--brand-sand)]/70 leading-relaxed max-w-2xl">
                Reimaginamos a forma como você gerencia seus negócios. Conheça as novas ferramentas da Microsistec desenhadas para dar poder absoluto à sua equipe.
              </p>
            </div>
          </div>
        </section>

        {/* Atalhos / Índice */}
        <div className="bg-[color:var(--brand-ink)]/95 backdrop-blur-md border-b border-[color:var(--brand-sand)]/10 sticky top-[72px] z-40 hidden md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-8 py-4 overflow-x-auto scrollbar-hide">
              <span className="text-[color:var(--brand-orange)] font-mono-ui font-bold text-[10px] uppercase tracking-widest shrink-0">Novidades:</span>
              <button onClick={() => document.getElementById('multifunil')?.scrollIntoView({ behavior: 'smooth' })} className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2">
                <SplitSquareHorizontal className="w-4 h-4" /> Multifunil
                <span className="text-[9px] font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-1.5 py-0.5 rounded-full uppercase tracking-wider">Em breve</span>
              </button>
              <button onClick={() => document.getElementById('relatorios')?.scrollIntoView({ behavior: 'smooth' })} className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Relatórios
                <span className="text-[9px] font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-1.5 py-0.5 rounded-full uppercase tracking-wider">Em breve</span>
              </button>
              <button onClick={() => document.getElementById('integracoes')?.scrollIntoView({ behavior: 'smooth' })} className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Integrações
                <span className="text-[9px] font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-1.5 py-0.5 rounded-full uppercase tracking-wider">Em breve</span>
              </button>
              <button onClick={() => document.getElementById('automacoes')?.scrollIntoView({ behavior: 'smooth' })} className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2">
                <Zap className="w-4 h-4" /> Automações
                <span className="text-[9px] font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-1.5 py-0.5 rounded-full uppercase tracking-wider">Em breve</span>
              </button>
            </div>
          </div>
        </div>

        {/* Multifunil */}
        <section id="multifunil" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-4">
                <SplitSquareHorizontal className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Multifunil
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">Em breve</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada tipo de negociação exige um processo diferente. Agora você tem a possibilidade de <strong>criar múltiplos funis</strong> independentes para Lançamentos, Alto Padrão, Locação e MCMV.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Crie e personalize quantos funis precisar",
                  "Edite as etapas de acordo com seu modelo de negócio",
                  "Adicione checklists obrigatórios em cada etapa",
                  "Mova leads com facilidade e acompanhe a conversão"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-[color:var(--brand-ink)]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Mockup Multifunil */}
            <div className="bg-[color:var(--brand-sand)]/40 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft">
              <div className="flex gap-2 mb-6 border-b border-[color:var(--brand-ink)]/10 pb-4 overflow-x-auto scrollbar-hide">
                {funnels.map((f) => (
                  <button 
                    key={f.id}
                    onClick={() => setActiveFunnel(f)}
                    className={`px-4 py-2 font-bold rounded-lg shadow-sm border text-sm whitespace-nowrap transition-all cursor-pointer ${activeFunnel.id === f.id ? "bg-white text-[color:var(--brand-ink)] border-[color:var(--brand-ink)]/5" : "bg-transparent text-muted-foreground border-transparent hover:bg-white/50"}`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-xl border border-[color:var(--brand-ink)]/5 p-4 shadow-sm opacity-60">
                  <h4 className="font-bold text-sm mb-3">{activeFunnel.stage1}</h4>
                  <div className="h-16 bg-gray-50 rounded-lg mb-2" />
                  <div className="h-16 bg-gray-50 rounded-lg" />
                </div>
                <div className="flex-1 bg-white rounded-xl border border-[color:var(--brand-orange)]/40 p-4 shadow-md relative scale-105 z-10 ring-4 ring-[color:var(--brand-orange)]/10 transition-all duration-300">
                  <h4 className="font-bold text-sm mb-3 flex items-center justify-between">
                    {activeFunnel.stage2} <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">3</span>
                  </h4>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                    <p className="font-semibold text-sm">{activeFunnel.lead}</p>
                    <p className="text-xs text-muted-foreground mb-3">{activeFunnel.prop}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-green-700 font-medium">
                        <CheckCircle2 className="w-3 h-3" /> {activeFunnel.tasks[0]}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-3 h-3 border border-gray-300 rounded-full" /> {activeFunnel.tasks[1]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-[color:var(--brand-ink)]/5 p-4 shadow-sm opacity-60 hidden md:block">
                  <h4 className="font-bold text-sm mb-3">{activeFunnel.stage3}</h4>
                  <div className="h-16 bg-gray-50 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relatórios */}
        <section id="relatorios" className="scroll-mt-32 bg-[color:var(--brand-ink)] text-white py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="w-12 h-12 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-[color:var(--brand-sand)] flex items-center justify-center gap-3 flex-wrap">
                Visão 360º em Tempo Real
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-3 py-1 rounded-full uppercase tracking-wider">Em breve</span>
              </h2>
              <p className="text-lg text-[color:var(--brand-sand)]/70 leading-relaxed">
                Novos relatórios gerenciais focados em dados analíticos e de desempenho. Saiba exatamente o que está acontecendo na sua imobiliária com clareza absoluta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Analíticos */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[color:var(--brand-orange)]">
                  <FileText className="w-6 h-6" /> Dados Analíticos
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-lg border-b border-white/10 pb-2 mb-4 text-[color:var(--brand-sand)]">Imóveis</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Desatualizados</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Captados</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Atualizados</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Corretores inativos</li>
                      <li className="flex items-center gap-2 text-sm text-white/80 col-span-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cancelados / Suspensos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg border-b border-white/10 pb-2 mb-4 text-[color:var(--brand-sand)]">Negócios</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Novos (Leads)</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Visitas</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Estagnados</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Desatualizados</li>
                      <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Perdidos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Desempenho */}
              <div className="bg-[color:var(--brand-orange)]/10 border border-[color:var(--brand-orange)]/20 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[color:var(--brand-orange)]">
                  <TrendingUp className="w-6 h-6" /> Desempenho (Performance)
                </h3>
                
                <div className="space-y-6 mt-8">
                  {[
                    { title: "Performance do Corretor", desc: "Meça conversão, tempo de resposta e engajamento." },
                    { title: "Performance da Equipe", desc: "Visão global de metas e fechamentos do time." },
                    { title: "Ranking dos Corretores", desc: "Gamificação baseada em resultados reais." },
                    { title: "Desempenho por Funil", desc: "Identifique gargalos em Lançamentos vs Prontos." },
                    { title: "Qualidade dos Leads", desc: "Analise a origem que traz o melhor ROI." },
                    { title: "Qualidade dos Anúncios", desc: "Fotos e descrições que geram mais cliques." },
                  ].map((perf, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[color:var(--brand-orange)]/20 text-[color:var(--brand-orange)] flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-sand)]">{perf.title}</h4>
                        <p className="text-sm text-white/60">{perf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integração com Portais */}
        <section id="integracoes" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-32">
          
          {/* Integração Multi-Corretor */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[color:var(--brand-sand)]/40 p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[color:var(--brand-ink)]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[color:var(--brand-ink)] rounded-full flex items-center justify-center text-white font-bold">ZAP</div>
                    <div>
                      <p className="font-bold text-sm">Plano ZAP 500 Anúncios</p>
                      <p className="text-xs text-muted-foreground">Distribuição Multi Corretor ATIVADA</p>
                    </div>
                  </div>
                  <span className="text-emerald-600 bg-emerald-100 px-2 py-1 rounded text-xs font-bold">Ativo</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-[color:var(--brand-ink)]/5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><Users className="w-4 h-4 text-blue-600"/></div>
                      <span className="font-semibold text-sm">Corretor A (João)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Cota</p>
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[80%] h-full bg-blue-500" />
                      </div>
                      <p className="text-[10px] font-bold mt-1">40 / 50 Anúncios</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[color:var(--brand-ink)]/5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"><Users className="w-4 h-4 text-purple-600"/></div>
                      <span className="font-semibold text-sm">Corretor B (Maria)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Cota</p>
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[30%] h-full bg-purple-500" />
                      </div>
                      <p className="text-[10px] font-bold mt-1">15 / 50 Anúncios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Integração com Portais: Multi Corretor
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">Em breve</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Remodelamos a experiência de publicação em portais. Agora você tem a opção <strong>Multi Corretor</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando ativado, <strong>cada corretor recebe a própria cota</strong> em cada tipo de anúncio contratado no portal (Zap, VivaReal, etc). Fim das brigas por destaque!
              </p>
            </div>
          </div>
        </section>

        {/* Automações */}
        <section id="automacoes" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Automações de Fluxo
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">Em breve</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhe menos, feche mais. Cada fluxo é composto por um <strong>gatilho</strong> e uma sequência de <strong>ações</strong> que o sistema executa sozinho — sem ninguém precisar lembrar.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base text-[color:var(--brand-ink)]">Gatilhos Inteligentes</h4>
                    <p className="text-sm text-muted-foreground">"Quando um imóvel mudar de preço", "Quando um lead chegar de madrugada".</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base text-[color:var(--brand-ink)]">Ações Sequenciais</h4>
                    <p className="text-sm text-muted-foreground">"Envie um WhatsApp", "Atribua ao corretor de plantão", "Adicione a tag 'Urgente'".</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual Automação */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-inner relative flex flex-col items-center">
              
              <div className="flex gap-2 mb-8 bg-white p-1.5 rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm overflow-x-auto w-full scrollbar-hide">
                {automations.map((a) => (
                  <button 
                    key={a.id}
                    onClick={() => setActiveAutomation(a)}
                    className={`flex-1 min-w-[120px] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border-none whitespace-nowrap ${activeAutomation.id === a.id ? "bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)]" : "bg-transparent text-muted-foreground hover:bg-gray-50"}`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>

              {/* Trigger */}
              <div className={`bg-white border-2 border-${activeAutomation.triggerColor}-400 p-4 rounded-xl shadow-md w-full max-w-sm flex items-center gap-4 z-10 transition-all duration-300`}>
                <div className={`w-10 h-10 bg-${activeAutomation.triggerColor}-100 rounded-full flex items-center justify-center shrink-0`}>
                  <activeAutomation.triggerIcon className={`w-5 h-5 text-${activeAutomation.triggerColor}-600`} />
                </div>
                <div>
                  <p className={`text-xs font-bold text-${activeAutomation.triggerColor}-600 uppercase tracking-wider mb-1`}>GATILHO</p>
                  <p className="font-semibold text-sm">{activeAutomation.trigger}</p>
                </div>
              </div>

              {/* Line */}
              <div className="w-0.5 h-8 bg-gray-300 transition-all duration-300" />

              {/* Action 1 */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex items-center gap-4 z-10 transition-all duration-300">
                <div className={`w-8 h-8 bg-${activeAutomation.action1Color}-100 rounded-full flex items-center justify-center shrink-0`}>
                  <activeAutomation.action1Icon className={`w-4 h-4 text-${activeAutomation.action1Color}-600`} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">AÇÃO 1</p>
                  <p className="font-semibold text-sm">{activeAutomation.action1}</p>
                </div>
              </div>

              {/* Line */}
              <div className="w-0.5 h-8 bg-gray-300 transition-all duration-300" />

              {/* Action 2 */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex items-center gap-4 z-10 transition-all duration-300">
                <div className={`w-8 h-8 bg-${activeAutomation.action2Color}-100 rounded-full flex items-center justify-center shrink-0`}>
                  <activeAutomation.action2Icon className={`w-4 h-4 text-${activeAutomation.action2Color}-600`} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">AÇÃO 2</p>
                  <p className="font-semibold text-sm">{activeAutomation.action2}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA CTA CTA */}
        <section className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-t border-white/5 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="mx-auto max-w-4xl px-6 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Pronto para elevar o nível da sua imobiliária?
            </h2>
            <p className="text-xl text-[color:var(--brand-sand)]/70 max-w-2xl mx-auto">
              Todas essas novidades já estão prontas para transformar seus resultados. Fale conosco e veja na prática.
            </p>
            <a title="Falar com Especialista" href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+quero+saber+mais+sobre+as+Novidades+da+Microsistec&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-elev no-underline decoration-none cursor-pointer"
            >
              Falar com um Especialista <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
