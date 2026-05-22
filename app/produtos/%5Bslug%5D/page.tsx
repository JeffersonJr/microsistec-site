import { productsList } from "@/data/products";
import ProductCalculator from "@/components/ProductCalculator";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowLeft, Check, Quote, Building, Sparkles } from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic SEO metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = productsList.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.title} V8 | Microsistec`,
    description: `${product.subtitle}. ${product.description}`,
    openGraph: {
      title: `${product.title} V8 | Microsistec`,
      description: `${product.subtitle}. ${product.description}`,
      images: ["/og-image.png"],
    },
  };
}

// Pre-render dynamic routes
export async function generateStaticParams() {
  return productsList.map((p) => ({
    slug: p.slug,
  }));
}

// Helper to resolve icon by string dynamically
function ProductIcon({ name, className }: { name: string; className?: string }) {
  // @ts-ignore
  const IconComponent = Icons[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productsList.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Trigger modal function wrapper (handled via custom event)
  const triggerEventString = `window.dispatchEvent(new Event("open-conversion-modal"))`;

  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 bg-gradient-to-b from-background via-background to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Nav Link */}
          <div className="mb-10">
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-emerald-500 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Voltar para soluções
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start mb-16">
            {/* Title & Core Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0 shadow-inner">
                  <ProductIcon name={product.iconName} className="size-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="size-3" />
                    Solução Microsistec V8
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
                    {product.title}
                  </h1>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-muted leading-snug">
                {product.subtitle}
              </h2>
              
              <p className="text-base sm:text-lg text-muted font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Checklist */}
              <div className="pt-6 border-t border-muted/10 space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  Principais Diferenciais do Módulo
                </h3>
                <ul className="grid gap-3.5 sm:grid-cols-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-muted font-semibold">
                      <div className="mt-0.5 p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                        <Check className="size-3.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonial Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-muted/15 rounded-2xl bg-background/55 backdrop-blur-sm p-6 sm:p-8 relative shadow-sm">
                <Quote className="size-10 text-emerald-500/10 absolute top-6 left-6" />
                <div className="relative space-y-5">
                  <p className="text-sm sm:text-base text-muted italic font-medium leading-relaxed">
                    "{product.quote.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-muted/10">
                    <div className="p-2.5 rounded-full bg-muted/10 text-emerald-500">
                      <Building className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">
                        {product.quote.author}
                      </p>
                      <p className="text-xs text-muted font-semibold">
                        {product.quote.role}, {product.quote.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Section */}
          <div className="mt-16">
            <ProductCalculator calculator={product.calculator} />
          </div>

        </div>
      </main>

      {/* Footer Wrapper */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="relative h-8 w-36 mx-auto filter brightness-0 invert opacity-70">
            <Image
              src="/images/logo.png"
              alt="Microsistec Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-slate-600 font-bold">
            © {new Date().getFullYear()} Microsistec CRM V8. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
