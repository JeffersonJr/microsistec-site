import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights Imobiliários | Microsistec V8",
  description: "Aprenda a reduzir o CAC, automatizar o follow-up e dominar o SEO de imóveis com o conteúdo técnico dos nossos especialistas.",
  openGraph: {
    title: "Blog & Insights Imobiliários | Microsistec V8",
    description: "Aprenda a reduzir o CAC, automatizar o follow-up e dominar o SEO de imóveis com o conteúdo técnico dos nossos especialistas.",
    images: ["/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
