import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Microsistec" },
      { name: "description", content: "Política de Privacidade da Microsistec" },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white" style={{ background: "var(--brand-ink, #0e1117)", color: "var(--brand-sand, #f5f0e8)" }}>
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8" style={{ color: "var(--brand-orange, #ff6b35)" }}>
          Política de Privacidade
        </h1>
        <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-a:text-[#ff6b35] space-y-6">
          <p>
            Na Microsistec, levamos a sua privacidade a sério. Esta política descreve como coletamos, usamos e protegemos
            as suas informações pessoais.
          </p>
          
          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>1. Informações que Coletamos</h2>
          <p className="text-gray-300">
            Podemos coletar informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail e número
            de telefone, quando você entra em contato conosco ou se cadastra em nossos serviços.
          </p>

          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>2. Como Usamos as Informações</h2>
          <p className="text-gray-300">
            Utilizamos as informações para fornecer, manter e melhorar nossos serviços, além de nos comunicarmos com você
            sobre atualizações, ofertas e novidades da plataforma.
          </p>

          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>3. Compartilhamento de Informações</h2>
          <p className="text-gray-300">
            Não compartilhamos suas informações pessoais com terceiros, exceto quando estritamente necessário para fornecer nossos
            serviços, mediante sua autorização ou quando exigido por lei.
          </p>
          
          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>4. Segurança</h2>
          <p className="text-gray-300">
            Adotamos as melhores práticas e medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não
            autorizado, perda, alteração ou destruição.
          </p>
          
          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>5. Seus Direitos</h2>
          <p className="text-gray-300">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, a correção ou a exclusão
            das suas informações pessoais a qualquer momento.
          </p>

          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>6. Alterações nesta Política</h2>
          <p className="text-gray-300">
            Podemos atualizar esta política de privacidade periodicamente para refletir mudanças em nossas práticas ou por
            outras razões operacionais, legais ou regulatórias.
          </p>
          
          <h2 className="text-2xl mt-10 mb-4" style={{ color: "var(--brand-sand, #f5f0e8)" }}>7. Contato</h2>
          <p className="text-gray-300">
            Se você tiver alguma dúvida sobre esta política ou quiser exercer seus direitos, entre em contato conosco através do e-mail:{" "}
            <a href="mailto:contato@microsistec.com.br" className="text-[#ff6b35] hover:underline">
              contato@microsistec.com.br
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
