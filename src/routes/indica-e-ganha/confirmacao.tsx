import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

export const Route = createFileRoute("/indica-e-ganha/confirmacao")({
  head: () => ({
    meta: [{ title: "Indicação recebida | Microsistec" }],
  }),
  component: IndicaEGanhaConfirmacao,
});

function IndicaEGanhaConfirmacao() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F3EA] text-[#1A1A1A]">
      <header className="flex items-center justify-center bg-white px-4 md:px-8 py-4 shadow-sm relative z-10 mb-12">
        <Link
          to="/"
          className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity"
          title="Microsistec - Marca Registrada"
        >
          <img
            src="/icon.svg"
            alt="Microsistec Logo"
            title="Microsistec - Tecnologia e Inovação"
            width={32}
            height={32}
            fetchPriority="high"
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-baseline gap-0.5">
            Microsistec
            <span
              className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
              title="Marca Registrada"
            >
              ®
            </span>
          </div>
        </Link>
        <div className="absolute right-4 md:right-8">
          <Link to="/indica-e-ganha">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-neutral-100 hover:bg-neutral-200" title="Voltar">
              <X className="h-5 w-5 text-neutral-600" />
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center p-4 py-12 md:p-6">
        <Card className="w-full max-w-2xl border-none shadow-xl">
          <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#5AA6A6]/20">
              <CheckCircle2 className="h-12 w-12 text-[#5AA6A6]" />
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
              Indicação recebida!
            </h1>

            <div className="mb-8 space-y-4 text-lg text-[#6B7878]">
              <p className="font-medium text-[#2B5250]">Agora é com a gente.</p>
              <p>
                Nossa equipe poderá entrar em contato com a imobiliária indicada
                para apresentar a Microsistec.
              </p>
              <p>
                Se ela efetivar a contratação dentro das regras da campanha, sua
                imobiliária receberá{" "}
                <strong>10% de desconto em uma mensalidade</strong>.
              </p>
            </div>

            <div className="w-full rounded-xl bg-[#E8EDED] p-6">
              <h2 className="mb-2 text-xl font-bold text-[#2B5250]">
                Tem mais alguém para indicar?
              </h2>
              <p className="mb-6 text-[#2B5250]">
                Você pode realizar até 10 indicações durante a campanha.
              </p>
              <Link to="/indica-e-ganha/indicar">
                <Button
                  size="lg"
                  className="w-full bg-[#E8A14B] font-bold text-white hover:bg-[#E8A14B]/90 sm:w-auto"
                >
                  FAZER OUTRA INDICAÇÃO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
