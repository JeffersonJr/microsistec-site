"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

type Role = "dono" | "gerente" | "corretor";

export default function ConversionModal() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role>("dono");
  const [success, setSuccess] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Listen for open events from other components
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-conversion-modal", handleOpen);
    return () => window.removeEventListener("open-conversion-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate lead capture API call
    setTimeout(() => {
      setSuccess(true);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
    }, 400);
  };

  const getRoleLabel = (r: Role) => {
    switch (r) {
      case "dono":
        return "Dono / Diretor";
      case "gerente":
        return "Gerente / Supervisor";
      case "corretor":
        return "Corretor de Vendas";
    }
  };

  return (
    <>
      {/* Floating CTA Button (Sticky Bottom-Right) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 border border-emerald-500/30 transition-all cursor-pointer group"
      >
        <Sparkles className="size-4.5 group-hover:rotate-12 transition-transform duration-300" /> 
        Testar Grátis V8
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md mx-auto p-6 sm:p-8 bg-background border border-muted/15 rounded-2xl shadow-2xl cursor-default overflow-hidden"
            >
              {/* Decorative top colored line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700" />

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  Solicite seu teste grátis
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-full hover:bg-muted/10 text-muted hover:text-primary transition-colors cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Success View */}
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="p-4 bg-emerald-500/10 rounded-full inline-block text-emerald-500">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <p className="text-xl font-bold text-primary">
                    Inscrição realizada!
                  </p>
                  <p className="text-sm text-muted max-w-sm mx-auto font-medium">
                    Obrigado pelo seu interesse. Um de nossos especialistas em tecnologia imobiliária entrará em contato via WhatsApp/E-mail em até 24h.
                  </p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setSuccess(false);
                    }}
                    className="w-full btn-primary py-3 text-base font-semibold mt-4"
                  >
                    Entendido
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Role Segmented Selection */}
                    <div className="space-y-2.5">
                      <label className="block text-sm font-semibold text-muted">
                        Seu cargo imobiliário
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["dono", "gerente", "corretor"] as Role[]).map((r) => (
                          <label
                            key={r}
                            className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 text-center select-none cursor-pointer transition-all ${
                              role === r
                                ? "border-emerald-500 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
                                : "border-muted/15 bg-background text-muted hover:bg-muted/5 hover:border-muted/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name="role"
                              value={r}
                              checked={role === r}
                              onChange={() => setRole(r)}
                              className="sr-only"
                            />
                            <span className="text-xs font-bold leading-none truncate w-full">
                              {getRoleLabel(r).split(" ")[0]}
                            </span>
                            <span className="text-[10px] opacity-80 mt-1 truncate w-full">
                              {getRoleLabel(r).split(" ").slice(1).join(" ") || "Imóveis"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Common Fields */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-muted">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Jefferson Silva"
                        className="w-full px-4 py-3 bg-muted/10 border border-muted/15 rounded-lg text-primary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-muted">
                        E‑mail corporativo
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: jefferson@suaimobiliaria.com"
                        className="w-full px-4 py-3 bg-muted/10 border border-muted/15 rounded-lg text-primary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-muted">
                        WhatsApp (opcional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-muted/10 border border-muted/15 rounded-lg text-primary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 transition-all"
                        placeholder="+55 (11) 99999-9999"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full btn-primary py-3.5 text-base font-semibold transition-all mt-4 cursor-pointer"
                    >
                      Enviar Solicitação V8
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
