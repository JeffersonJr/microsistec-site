import { createFileRoute } from "@tanstack/react-router";
import { MicrosistecLanding } from "@/components/microsistec/MicrosistecLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Microsistec - Tecnologia Pioneira para Imobiliárias" },
      {
        name: "description",
        content:
          "Microsistec une CRM, site, app e o Albert IA, a inteligência artificial sob medida para imobiliárias que querem vender mais e atender melhor.",
      },
      {
        property: "og:title",
        content: "Microsistec - Tecnologia + IA para Imobiliárias",
      },
      {
        property: "og:description",
        content:
          "CRM imobiliário, app de atendimento, sites e o Albert IA num só lugar. Vendas com contexto, automação e velocidade.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <MicrosistecLanding />;
}
