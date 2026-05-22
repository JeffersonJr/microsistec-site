import * as React from "react";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Sparkles, Building2, ShieldCheck, KeyRound, ArrowRight, X } from "lucide-react";

type SetupStep = {
  label: string;
  duration: number;
};

const STEPS: SetupStep[] = [
  { label: "Validando informações comerciais...", duration: 800 },
  { label: "Configurando banco de dados no imob.online...", duration: 900 },
  { label: "Instanciando Albert IA com dados da Microsistec...", duration: 1000 },
  { label: "Finalizando ativação do painel administrativo...", duration: 700 },
];

export function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const [formData, setFormData] = React.useState({
    nome: "",
    cargo: "",
    tel: "",
    email: "",
    senha: "",
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [currentStep, setCurrentStep] = React.useState(0);

  // Form handle changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetModal = React.useCallback(() => {
    setStatus("idle");
    setCurrentStep(0);
    setFormData({ nome: "", cargo: "", tel: "", email: "", senha: "" });
  }, []);

  const handleClose = () => {
    closeModal();
    // Reset form after transition out
    setTimeout(() => {
      resetModal();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha || !formData.tel) {
      return;
    }

    setStatus("loading");
    setCurrentStep(0);

    // Sequence the loading steps
    let stepIndex = 0;
    const runStep = () => {
      if (stepIndex < STEPS.length) {
        setTimeout(() => {
          stepIndex++;
          setCurrentStep(stepIndex);
          runStep();
        }, STEPS[stepIndex].duration);
      } else {
        setStatus("success");
      }
    };
    runStep();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-md w-full sm:max-w-md bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 text-[color:var(--brand-ink)] overflow-hidden shadow-elev rounded-3xl p-0 relative">
        {/* Default close button is provided by Radix DialogContent */}
        {/* Banner with style */}
        <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-6 relative">
          <div className="bg-grid absolute inset-0 opacity-15" />
          <div className="relative flex items-center justify-between">
            <div>
              <span className="stamp text-[color:var(--brand-orange)] text-[10px]">Microsistec CRM</span>
              <DialogTitle className="font-extrabold text-xl tracking-tight mt-1">
                Ativar Teste Grátis
              </DialogTitle>
            </div>
            <Sparkles className="w-8 h-8 text-[color:var(--brand-orange)]" />
          </div>
        </div>

        {status === "idle" && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <DialogDescription className="text-sm text-foreground/75 leading-relaxed">
              Crie seu acesso administrativo em 30 segundos. Experimente a potência do CRM imobiliário e do Albert IA por 14 dias sem compromisso.
            </DialogDescription>

            <div className="space-y-3 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="nome" className="text-xs font-mono-ui font-semibold uppercase tracking-wider text-foreground/80">
                  Nome Completo
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Ex: Jefferson Junior"
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-lg text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="cargo" className="text-xs font-mono-ui font-semibold uppercase tracking-wider text-foreground/80">
                    Cargo / Função
                  </Label>
                  <Input
                    id="cargo"
                    name="cargo"
                    type="text"
                    required
                    placeholder="Ex: Diretor, Corretor"
                    value={formData.cargo}
                    onChange={handleChange}
                    className="bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-lg text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="tel" className="text-xs font-mono-ui font-semibold uppercase tracking-wider text-foreground/80">
                    WhatsApp / Tel
                  </Label>
                  <Input
                    id="tel"
                    name="tel"
                    type="tel"
                    required
                    placeholder="Ex: (13) 99759-1781"
                    value={formData.tel}
                    onChange={handleChange}
                    className="bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-mono-ui font-semibold uppercase tracking-wider text-foreground/80">
                  E-mail Corporativo
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jefferson@imobiliaria.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-lg text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="senha" className="text-xs font-mono-ui font-semibold uppercase tracking-wider text-foreground/80">
                  Senha para Acesso
                </Label>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.senha}
                  onChange={handleChange}
                  className="bg-background border-[color:var(--brand-ink)]/15 focus-visible:ring-[color:var(--brand-orange)] focus-visible:border-[color:var(--brand-orange)] rounded-lg text-sm"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[color:var(--brand-ink)] hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] text-[color:var(--brand-sand)] transition rounded-full py-5 font-semibold text-sm cursor-pointer mt-4 flex items-center justify-center gap-2"
            >
              Ativar Meu Acesso Grátis <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        )}

        {status === "loading" && (
          <div className="p-8 flex flex-col items-center justify-center min-h-[350px] space-y-6">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-[color:var(--brand-orange)]/10 blur-md animate-pulse" />
              <Loader2 className="w-12 h-12 text-[color:var(--brand-orange)] animate-spin relative" />
            </div>
            
            <div className="text-center space-y-2">
              <h4 className="font-bold text-lg tracking-tight">Ativando Ambiente Seguro</h4>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Aguarde alguns segundos enquanto configuramos sua imobiliária digital.
              </p>
            </div>

            {/* Pipeline progress bar & steps list */}
            <div className="w-full bg-[color:var(--brand-ink)]/10 rounded-full h-1.5 overflow-hidden">
              <div 
                className="h-full bg-[color:var(--brand-orange)] transition-all duration-300"
                style={{ width: `${((currentStep) / STEPS.length) * 100}%` }}
              />
            </div>

            <div className="w-full space-y-2 text-xs font-mono-ui bg-background/50 border border-[color:var(--brand-ink)]/5 rounded-xl p-3.5">
              {STEPS.map((s, idx) => (
                <div 
                  key={s.label}
                  className={`flex items-center gap-2 transition-opacity duration-300 ${
                    idx < currentStep 
                      ? "text-[color:var(--brand-orange)] font-semibold" 
                      : idx === currentStep 
                      ? "text-foreground animate-pulse" 
                      : "text-muted-foreground/50"
                  }`}
                >
                  <span className="shrink-0">
                    {idx < currentStep ? "✓" : idx === currentStep ? "●" : "○"}
                  </span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="p-8 text-center min-h-[350px] flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-extrabold text-2xl tracking-tight leading-none text-gradient">
                Plataforma Ativada!
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed max-w-xs mx-auto">
                Parabéns <strong>{formData.nome.split(" ")[0]}</strong>! Seu CRM e o Albert IA estão prontos no ambiente temporário.
              </p>
            </div>

            <div className="w-full text-left space-y-2 text-xs font-mono-ui bg-background/90 border border-[color:var(--brand-ink)]/10 rounded-2xl p-4">
              <div className="flex justify-between pb-2 border-b border-dashed border-[color:var(--brand-ink)]/15">
                <span className="text-muted-foreground">Sistema URL:</span>
                <span className="font-semibold text-foreground">imob.online/microsistec</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-muted-foreground">E-mail:</span>
                <span className="font-semibold text-foreground">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cargo:</span>
                <span className="font-semibold text-foreground">{formData.cargo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status do Albert IA:</span>
                <span className="font-semibold text-[color:var(--brand-orange)]">Ativo (Treinando)</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 pt-2">
              <a
                href="https://imob.online/"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[color:var(--brand-ink)] hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] text-[color:var(--brand-sand)] transition rounded-full py-3.5 font-bold text-sm flex items-center justify-center gap-2"
              >
                Entrar no Sistema <ArrowRight className="w-4 h-4" />
              </a>
              <Button
                variant="ghost"
                onClick={handleClose}
                className="text-xs text-muted-foreground hover:text-foreground hover:bg-transparent"
              >
                Fechar esta janela
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
