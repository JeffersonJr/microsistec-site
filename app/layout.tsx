import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microsistec V8 | CRM Imobiliário e Inteligência Artificial",
  description: "Acelere suas vendas de imóveis com o CRM Microsistec, sites V8 de alta velocidade, e o Albert, a IA imobiliária que atende seus leads 24h por dia.",
  metadataBase: new URL("https://microsistec.com.br"),
  openGraph: {
    title: "Microsistec V8 | CRM Imobiliário e Inteligência Artificial",
    description: "Acelere suas vendas de imóveis com o CRM Microsistec, sites V8 de alta velocidade, e o Albert, a IA imobiliária que atende seus leads 24h por dia.",
    url: "https://microsistec.com.br",
    siteName: "Microsistec",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Microsistec CRM Imobiliário V8",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsistec V8 | CRM Imobiliário e Inteligência Artificial",
    description: "Acelere suas vendas de imóveis com o CRM Microsistec, sites V8 de alta velocidade, e o Albert, a IA imobiliária que atende seus leads 24h por dia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
