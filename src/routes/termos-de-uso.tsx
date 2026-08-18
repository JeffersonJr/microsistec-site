import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Microsistec" },
      { name: "description", content: "Termos de Uso da Microsistec" },
    ],
  }),
  component: TermosDeUso,
});

function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[color:var(--brand-orange)]">
          Termos de Uso
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Bem-vindo aos Termos de Uso da Microsistec. Ao utilizar nossos serviços e produtos, você concorda com as diretrizes e regras aqui estabelecidas.
          </p>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar o site ou utilizar os sistemas da Microsistec, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
          </p>
          <h2>2. Uso da Licença</h2>
          <p>
            Os sistemas e softwares fornecidos pela Microsistec são licenciados para uso exclusivo conforme o plano contratado. A reprodução ou distribuição não autorizada é proibida.
          </p>
          <h2>3. Isenção de Responsabilidade</h2>
          <p>
            Os materiais no site e sistemas da Microsistec são fornecidos "como estão". A Microsistec não oferece garantias implícitas sobre a adequação para um fim específico além do contratado.
          </p>
          <h2>4. Alterações</h2>
          <p>
            A Microsistec pode revisar estes termos de serviço a qualquer momento sem aviso prévio. Ao usar este site ou nossos sistemas, você concorda em ficar vinculado à versão atual destes termos de serviço.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Última atualização: {new Date().getFullYear()}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
