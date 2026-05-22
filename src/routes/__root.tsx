import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Home, MapPin, ArrowRight, Key } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden"
      style={{ background: "var(--brand-ink, #0e1117)", color: "var(--brand-sand, #f5f0e8)" }}
    >
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,currentColor,currentColor 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,currentColor,currentColor 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* Floating house icon */}
      <div
        className="mb-8 flex items-center justify-center w-20 h-20 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <Key style={{ width: 36, height: 36, color: "var(--brand-orange, #ff6b35)" }} />
      </div>

      {/* Big 404 */}
      <div
        className="font-extrabold leading-none tracking-[-0.05em] select-none"
        style={{
          fontSize: "clamp(7rem, 20vw, 14rem)",
          background: "linear-gradient(135deg, var(--brand-sand, #f5f0e8) 40%, var(--brand-orange, #ff6b35) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </div>

      {/* Main heading */}
      <h1
        className="mt-4 font-extrabold tracking-tight"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--brand-sand, #f5f0e8)" }}
      >
        Este endereço não existe no cadastro.
      </h1>

      {/* Funny sub-copy */}
      <p
        className="mt-4 max-w-lg leading-relaxed"
        style={{ color: "rgba(245,240,232,0.65)", fontSize: "1.05rem" }}
      >
        Parece que o nosso corretor saiu para uma visita e levou a página com ele.{" "}
        <span style={{ color: "var(--brand-orange, #ff6b35)", fontStyle: "italic" }}>
          Mas não se preocupe
        </span>
        , vamos te guiar até o próximo lead.
      </p>

      {/* Address-style badge */}
      <div
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
        style={{
          background: "rgba(255,107,53,0.12)",
          border: "1px solid rgba(255,107,53,0.3)",
          color: "var(--brand-orange, #ff6b35)",
          letterSpacing: "0.08em",
        }}
      >
        <MapPin style={{ width: 12, height: 12 }} />
        Imóvel não encontrado · Verifique o endereço e tente novamente
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 no-underline"
          style={{
            background: "var(--brand-orange, #ff6b35)",
            color: "var(--brand-ink, #0e1117)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          <Home style={{ width: 16, height: 16 }} />
          Me leva para a Home
          <ArrowRight style={{ width: 14, height: 14 }} />
        </Link>
      </div>

      {/* Footer joke */}
      <p
        className="mt-16 text-xs font-mono"
        style={{ color: "rgba(245,240,232,0.3)", letterSpacing: "0.06em" }}
      >
        © {new Date().getFullYear()} Microsistec · nem todos os endereços existem, mas todos os leads são bem-vindos.
      </p>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { DemoModalProvider } from "@/hooks/use-demo-modal";
import { DemoModal } from "@/components/microsistec/DemoModal";

import Intercom from "@intercom/messenger-js-sdk";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        Intercom({
          app_id: "mjj9j4fs",
        });
      } catch (err) {
        console.error("Failed to initialize Intercom:", err);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DemoModalProvider>
        <Outlet />
        <DemoModal />
      </DemoModalProvider>
    </QueryClientProvider>
  );
}
