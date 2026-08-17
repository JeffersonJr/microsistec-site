import * as React from "react";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  
  const [formData, setFormData] = React.useState({
    nome: "",
    email: "",
    cargo: "",
    usuarios: "1"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Gostaria de falar com um especialista sobre as soluções da Microsistec.

Aqui estão minhas informações:
- Nome: ${formData.nome}
- E-mail: ${formData.email}
- Cargo: ${formData.cargo}
- Quantidade de Usuários: ${formData.usuarios}

Gostaria de receber mais informações e agendar uma demonstração.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5513997591781&text=${encoded}`;
    
    // Open in a new tab/window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Close the modal
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="z-[55] sm:max-w-[450px] p-0 bg-[#f5f0e8] border-[#1c1a17]/15 overflow-hidden rounded-[24px]">
        
        {/* Unconditional elements for Accessibility */}
        <DialogTitle className="sr-only">Falar com Especialista</DialogTitle>
        <DialogDescription className="sr-only">Preencha o formulário para falar com o nosso time de especialistas.</DialogDescription>

        {/* Header / Banner */}
        <div className="bg-[#1c1a17] text-[#f5f0e8] p-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="relative flex items-center justify-between z-10">
            <div>
              <span className="text-[#f97316] text-sm font-bold uppercase tracking-widest bg-[#f97316]/10 px-2.5 py-1 rounded-full">Atendimento</span>
              <h2 className="font-extrabold text-2xl tracking-tight mt-2">
                Falar com Especialista
              </h2>
            </div>
            <Sparkles className="w-8 h-8 text-[#f97316]" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-base text-[#1c1a17]/80 leading-relaxed mb-2">
            Insira suas informações abaixo para falar conosco no WhatsApp com atendimento direcionado para sua equipe.
          </p>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-bold uppercase tracking-wider text-[#1c1a17]/90 block mb-1">Nome Completo</label>
              <input 
                required 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Jefferson Junior" 
                className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#f97316]" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-[#1c1a17]/90 block mb-1">Cargo</label>
                <input 
                  required 
                  type="text" 
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Ex: Diretor" 
                  className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#f97316]" 
                />
              </div>
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-[#1c1a17]/90 block mb-1">Qtd. Usuários</label>
                <select 
                  name="usuarios"
                  value={formData.usuarios}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#f97316] cursor-pointer"
                >
                  <option value="1">1 usuário</option>
                  <option value="2-5">2 a 5 usuários</option>
                  <option value="6-10">6 a 10 usuários</option>
                  <option value="11-20">11 a 20 usuários</option>
                  <option value="Mais de 20">Mais de 20 usuários</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold uppercase tracking-wider text-[#1c1a17]/90 block mb-1">E-mail Corporativo</label>
              <input 
                required 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jefferson@suaimobiliaria.com.br" 
                className="w-full h-10 px-3 rounded-lg border border-[#1c1a17]/15 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#f97316]" 
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#1c1a17] hover:bg-[#f97316] text-[#f5f0e8] hover:text-[#1c1a17] transition-colors rounded-xl py-4 font-bold text-base mt-6 flex items-center justify-center gap-2 cursor-pointer shadow-md">
            Iniciar Conversa no WhatsApp <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
