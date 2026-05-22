import * as React from "react";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [currentStep, setCurrentStep] = React.useState(0);

  const steps = [
    "Validando informações comerciais...",
    "Configurando banco de dados no imob.online...",
    "Instanciando Albert IA...",
    "Finalizando ativação do painel..."
  ];

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setStatus("idle");
      setCurrentStep(0);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setCurrentStep(0);

    let stepIndex = 0;
    const runStep = () => {
      if (stepIndex < steps.length) {
        setTimeout(() => {
          stepIndex++;
          setCurrentStep(stepIndex);
          runStep();
        }, 800);
      } else {
        setStatus("success");
      }
    };
    runStep();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="z-[55] sm:max-w-[450px] p-0 bg-[#f5f0e8] border-[#1c1a17]/15 overflow-hidden rounded-[24px]">
        
        {/* Unconditional elements for Accessibility */}
        <DialogTitle className="sr-only">Ativar Teste Grátis</DialogTitle>
        <DialogDescription className="sr-only">Preencha o formulário para criar seu acesso gratuito ao Microsistec CRM.</DialogDescription>

        {/* Header / Banner */}
        <div className="bg-[#1c1a17] text-[#f5f0e8] p-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="relative flex items-center justify-between z-10">
            <div>
              <span className="text-[#f97316] text-[10px] font-bold uppercase tracking-widest bg-[#f97316]/10 px-2 py-1 rounded-full">Microsistec CRM</span>
              <h2 className="font-extrabold text-xl tracking-tight mt-2">
                Ativar Teste Grátis
              </h2>
            </div>
            <Sparkles className="w-8 h-8 text-[#f97316]" />
          </div>
        </div>

        {/* State: IDLE (Form) */}
        {status === "idle" && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-sm text-[#1c1a17]/80 leading-relaxed mb-4">
              Crie seu acesso administrativo em segundos. Experimente a potência do CRM imobiliário por 14 dias.
            </p>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1a17]/70 block mb-1">Nome Completo</label>
                <input required type="text" placeholder="Ex: Jefferson Junior" className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1a17]/70 block mb-1">Cargo</label>
                  <input required type="text" placeholder="Ex: Diretor" className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
                </div>
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1a17]/70 block mb-1">WhatsApp</label>
                  <input required type="tel" placeholder="(11) 99999-9999" className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1a17]/70 block mb-1">E-mail</label>
                <input required type="email" placeholder="jefferson@suaimobiliaria.com.br" className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1a17]/70 block mb-1">Senha</label>
                <input required type="password" placeholder="••••••••" className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#1c1a17] hover:bg-[#f97316] text-[#f5f0e8] hover:text-[#1c1a17] transition-colors rounded-xl py-4 font-bold text-sm mt-6 flex items-center justify-center gap-2 cursor-pointer shadow-md">
              Ativar Meu Acesso <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* State: LOADING */}
        {status === "loading" && (
          <div className="p-8 flex flex-col items-center justify-center min-h-[350px] space-y-6 text-[#1c1a17]">
            <Loader2 className="w-12 h-12 text-[#f97316] animate-spin" />
            
            <div className="text-center space-y-2">
              <h4 className="font-bold text-lg">Ativando Ambiente...</h4>
            </div>

            <div className="w-full bg-[#1c1a17]/10 rounded-full h-1.5 overflow-hidden">
              <div className="h-full bg-[#f97316] transition-all duration-300" style={{ width: `${(currentStep / steps.length) * 100}%` }} />
            </div>

            <div className="w-full space-y-2 text-xs font-mono bg-white border border-[#1c1a17]/10 rounded-xl p-4">
              {steps.map((s, idx) => (
                <div key={s} className={`flex items-center gap-2 transition-opacity ${idx < currentStep ? "text-[#f97316] font-bold" : idx === currentStep ? "text-[#1c1a17] animate-pulse" : "text-[#1c1a17]/40"}`}>
                  <span className="shrink-0">{idx < currentStep ? "✓" : idx === currentStep ? "●" : "○"}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* State: SUCCESS */}
        {status === "success" && (
          <div className="p-8 text-center min-h-[350px] flex flex-col items-center justify-center space-y-6 text-[#1c1a17]">
            <div className="w-16 h-16 rounded-full bg-[#f97316]/10 text-[#f97316] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-extrabold text-2xl tracking-tight">Plataforma Ativada!</h3>
              <p className="text-sm text-[#1c1a17]/80 max-w-xs mx-auto">
                Seu CRM e o Albert IA estão prontos. Verifique o seu e-mail para acessar o painel administrativo.
              </p>
            </div>

            <button onClick={handleClose} className="bg-[#1c1a17] text-[#f5f0e8] hover:bg-[#f97316] hover:text-[#1c1a17] rounded-full px-8 py-3 font-bold transition-colors cursor-pointer shadow-md">
              Acessar Painel
            </button>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
}
