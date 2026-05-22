import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight, Check, Circle, ArrowLeft, ArrowRight, ChevronDown, ArrowUpRight, KeyRound, Sparkles, LineChart, Smartphone, Workflow, Target, CheckCircle2, Globe, MessageSquare, ShieldCheck, Quote, Building2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { c as cn, B as Button, u as useDemoModal, s as solutions, g as getIconComponent, t as testimonials, b as blogPosts } from "./router-BdRThgdY.js";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import useEmblaCarousel from "embla-carousel-react";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
function Nav() {
  const { openModal } = useDemoModal();
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-baseline gap-0.5 font-extrabold text-xl tracking-[-0.02em] hover:opacity-90", title: "Microsistec - Marca Registrada", children: [
      "microsistec",
      /* @__PURE__ */ jsx("span", { className: "font-serif-italic text-[color:var(--brand-orange)] text-2xl leading-none", children: "." }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-muted-foreground self-start mt-1 select-none font-sans font-medium", title: "Marca Registrada", children: "®" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm", children: [
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "flex items-center gap-1.5 hover:text-[color:var(--brand-orange)] transition cursor-pointer outline-none border-none bg-transparent", children: [
          "Soluções ",
          /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5 opacity-60" })
        ] }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "w-64 bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/15 rounded-xl p-2 shadow-elev", children: solutions.map((sol) => {
          const IconComp = getIconComponent(sol.iconName);
          return /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/solucoes/$slug",
              params: { slug: sol.slug },
              className: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition duration-200 cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(IconComp, { className: "w-4 h-4 shrink-0 text-[color:var(--brand-orange)]" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold leading-none", children: sol.title }),
                sol.ctaText === "Em Breve" && /* @__PURE__ */ jsx("span", { className: "ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 shrink-0", children: "Em Breve" })
              ]
            }
          ) }, sol.slug);
        }) })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/empresa", className: "hover:text-[color:var(--brand-orange)] transition", children: "Sobre" }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-[color:var(--brand-orange)] transition", children: "Blog" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: "https://imob.online/", target: "_blank", rel: "noreferrer", className: "hidden md:inline text-sm hover:opacity-70 px-3 py-2", children: "Entrar" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: openModal,
          className: "inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] text-sm font-medium px-4 py-2.5 hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none",
          children: [
            "Testar grátis ",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] })
  ] }) });
}
function Hero() {
  const { openModal } = useDemoModal();
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative overflow-hidden bg-hero lg:h-[calc(100vh-4rem)] lg:flex lg:flex-col lg:justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-grid absolute inset-0" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pt-8 pb-12 md:pt-12 md:pb-16 flex-grow flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-sm", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/15 px-3 py-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)]" }),
          "pioneira em tecnologia imobiliária desde 1994"
        ] }) }),
        /* @__PURE__ */ jsx("span", { className: "font-serif-italic text-muted-foreground hidden md:inline", children: "cap. 01: uma carta para quem ainda vende imóvel no caderninho" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 lg:gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "lg:col-span-9 font-extrabold tracking-[-0.045em] leading-[0.95] text-[clamp(2.4rem,6.5vw,5rem)]", children: [
          "Vender imóvel",
          /* @__PURE__ */ jsx("br", {}),
          "virou",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal text-[color:var(--brand-orange)]", children: "outra coisa" }),
          ".",
          /* @__PURE__ */ jsx("br", {}),
          "E a gente já ",
          /* @__PURE__ */ jsx("span", { className: "underline decoration-[color:var(--brand-orange)] decoration-[6px] underline-offset-[8px]", children: "vive" }),
          " aqui."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 flex lg:justify-end", children: /* @__PURE__ */ jsxs("div", { className: "sticker px-5 py-4 max-w-[220px] shadow-elev", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono-ui text-[10px] opacity-70 mb-1", children: "selo do dono" }),
          /* @__PURE__ */ jsx("div", { className: "font-serif-italic text-lg leading-tight", children: '"feito por gente que conhece imobiliária de verdade"' })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 lg:mt-10 grid md:grid-cols-12 gap-6 items-center", children: [
        /* @__PURE__ */ jsxs("p", { className: "md:col-span-7 text-base md:text-lg text-foreground/75 leading-relaxed", children: [
          "Como pioneiros em trazer tecnologia para o setor imobiliário brasileiro, unimos CRM completo, site, app de atendimento, automações e o",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Albert IA" }),
          ", uma inteligência artificial que age como um clone do seu melhor SDR. Tudo num ecossistema só, validado por mais de 30 anos de experiência real."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 flex flex-wrap gap-3 md:justify-end", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: openModal,
              className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] px-5 py-3 md:px-6 md:py-3.5 font-medium hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition cursor-pointer border-none",
              children: [
                "Testar 14 dias grátis ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#albert",
              className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/20 px-5 py-3 md:px-6 md:py-3.5 font-medium hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition",
              children: [
                "Conhecer o Albert ",
                /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Ticker, {})
  ] });
}
function Ticker() {
  const items = [
    "CRM imobiliário",
    "App de atendimento",
    "Site para imobiliária",
    "Albert IA · SDR",
    "Funil de vendas",
    "Automações",
    "Rodízio de leads",
    "Secretaria de vendas",
    "Integração com portais"
  ];
  const row = [...items, ...items];
  return /* @__PURE__ */ jsx("div", { className: "relative border-y border-[color:var(--brand-ink)]/15 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "marquee flex gap-10 py-3.5 whitespace-nowrap text-sm", children: row.map((t, i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "font-serif-italic text-[color:var(--brand-orange)]", children: "✦" }),
    t
  ] }, i)) }) }) });
}
function StatsStrip() {
  const stats = [
    { n: "30+", label: "anos no mercado" },
    { n: "1.2K", label: "imobiliárias" },
    { n: "15K", label: "corretores ativos/mês" },
    { n: "R$8bi", label: "em negócios geridos" },
    { n: "3M+", label: "leads/ano" }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "resultados", className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6 mb-10", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight max-w-xl", children: [
        "Fomos pioneiros ao trazer a tecnologia para as imobiliárias brasileiras. Três décadas de estrada",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal text-[color:var(--brand-orange)]", children: "provam que sabemos" }),
        " ",
        "o que fazemos."
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "font-mono-ui text-xs text-muted-foreground", children: [
        "últ. atualização · operação ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[color:var(--brand-ink)]/15 border-y border-[color:var(--brand-ink)]/15", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "py-6 md:py-8 px-4 md:px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-extrabold tracking-tight", children: s.n }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.label })
    ] }, s.label)) })
  ] });
}
function Pillars() {
  const items = [
    {
      icon: LineChart,
      title: "Funil de vendas",
      desc: "Controle total dos atendimentos e a foto real da operação, sem planilha."
    },
    {
      icon: Smartphone,
      title: "App de atendimento",
      desc: "Negociação na palma da mão do corretor. De casa, no trânsito, na visita."
    },
    {
      icon: Workflow,
      title: "Automações",
      desc: "Fluxos pré-definidos para que nenhum lead caia no esquecimento."
    },
    {
      icon: Target,
      title: "Gestão de leads",
      desc: "Do primeiro 'oi' até a escritura, toda a história do cliente em um lugar."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "produto", className: "relative bg-[color:var(--brand-sand)] border-y border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 mb-14 items-end", children: [
      /* @__PURE__ */ jsxs("h2", { className: "md:col-span-8 text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]", children: [
        "Sistema, site e app,",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal", children: "numa coisa só" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-4 text-lg text-muted-foreground", children: "Tudo o que a imobiliária precisa para vender mais e ter previsibilidade, sem amarrar cinco ferramentas com cuspe e arame." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--brand-ink)]/15 border border-[color:var(--brand-ink)]/15 rounded-3xl overflow-hidden", children: items.map((it, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-background p-7 md:p-8 relative group hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition-colors duration-300",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-8", children: [
            /* @__PURE__ */ jsx(it.icon, { className: "w-6 h-6 text-[color:var(--brand-orange)]" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono-ui text-[10px] text-muted-foreground group-hover:text-[color:var(--brand-sand)]/60", children: [
              "0",
              i + 1,
              " / 04"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl tracking-tight mb-2", children: it.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground group-hover:text-[color:var(--brand-sand)]/70 leading-relaxed", children: it.desc })
        ]
      },
      it.title
    )) })
  ] }) });
}
function Albert() {
  const features = [
    "Clone do seu melhor SDR, treinado com seu script",
    "Atendimento omnichannel 24/7 (WhatsApp, site, portais)",
    "Qualifica e repassa o lead pro corretor certo",
    "Histórico completo conectado ao CRM Microsistec",
    "Personalizável, não é IA genérica de prateleira"
  ];
  return /* @__PURE__ */ jsxs("section", { id: "albert", className: "relative overflow-hidden bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-40 pointer-events-none",
        style: {
          background: "radial-gradient(60% 50% at 90% 10%, oklch(0.7 0.19 45 / 0.4), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.55 0.1 195 / 0.35), transparent 60%)"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-grid absolute inset-0 opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-xs", children: "Albert IA · v2" }),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic text-[color:var(--brand-sand)]/60", children: "conheça" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6", children: [
          "Uma IA que ",
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal text-[color:var(--brand-orange)]", children: "conhece" }),
          " imobiliária, não uma que ",
          /* @__PURE__ */ jsx("em", { className: "font-serif-italic text-[color:var(--brand-sand)]/50", children: "finge" }),
          " conhecer."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-[color:var(--brand-sand)]/70 mb-8 max-w-xl", children: [
          "Chega de chatbot decorando frase. O ",
          /* @__PURE__ */ jsx("strong", { className: "text-[color:var(--brand-sand)]", children: "Albert" }),
          " é montado sob medida para a sua imobiliária, tecnologia de ponta com coração humano."
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-10", children: features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[color:var(--brand-sand)]/85", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 mt-0.5 text-[color:var(--brand-orange)] shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-semibold hover:opacity-90 transition decoration-none no-underline",
              children: [
                "Converse com o Albert agora mesmo ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#demo",
              className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/25 px-6 py-3.5 font-medium hover:bg-[color:var(--brand-sand)]/10 transition",
              children: "Ver planos"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsx(AlbertChat, {}) })
    ] }) })
  ] });
}
function AlbertChat() {
  return /* @__PURE__ */ jsxs("div", { className: "relative tilt-r", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-[28px] bg-[color:var(--brand-orange)]/15 blur-2xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-[color:var(--brand-sand)] text-[color:var(--brand-ink)] rounded-3xl border border-[color:var(--brand-ink)] shadow-elev overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-[color:var(--brand-ink)]/15 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] flex items-center justify-center font-bold", children: "A" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm leading-tight", children: "Albert" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono-ui text-[10px] text-[color:var(--brand-sand)]/60", children: "SDR · atende agora" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-mono-ui text-[10px] text-[color:var(--brand-sand)]/60", children: "lead #4827 · 13s" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsx(Bubble, { who: "lead", children: "Oi, vi o anúncio do 2 quartos na Av. Paulista 👋" }),
        /* @__PURE__ */ jsx(Bubble, { who: "albert", children: "Oi! Que bom que chegou. Posso te perguntar se é para morar ou investir?" }),
        /* @__PURE__ */ jsx(Bubble, { who: "lead", children: "Pra morar. Ainda não fiz aprovação de crédito." }),
        /* @__PURE__ */ jsxs(Bubble, { who: "albert", children: [
          "Tranquilo. Já te passo pra ",
          /* @__PURE__ */ jsx("strong", { children: "Camila" }),
          ", especialista na Paulista. Sábado às 10h pra visitar funciona?"
        ] }),
        /* @__PURE__ */ jsx(Bubble, { who: "lead", children: "Funciona 🤝" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-4 border-t border-dashed border-[color:var(--brand-ink)]/20 flex items-center justify-between font-mono-ui text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: "qualificado e repassado em 38s" }),
          /* @__PURE__ */ jsx("span", { className: "text-[color:var(--brand-orange)] font-semibold", children: "+ CRM ✓" })
        ] })
      ] })
    ] })
  ] });
}
function Bubble({ who, children }) {
  if (who === "lead") {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "bg-[color:var(--brand-ink)]/8 text-[color:var(--brand-ink)] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] border border-[color:var(--brand-ink)]/10", children }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]", children }) });
}
function Funil() {
  const features = [
    "Histórico de atendimento completo",
    "Rodízio de atendimento e equipes",
    "Secretaria de vendas (MQL)",
    "Controle de atividades por atendimento",
    "Processo de vendas imobiliária ponta-a-ponta"
  ];
  return /* @__PURE__ */ jsx("section", { id: "funil", className: "mx-auto max-w-7xl px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("span", { className: "font-serif-italic text-[color:var(--brand-orange)] text-xl mb-3 block", children: "sobre tempo" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6", children: "Você está perdendo lead enquanto procura ele no caderno." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "Controle do atendimento + script bem executado = mais vendas. A gente organiza o primeiro pra você poder focar no segundo." }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 mt-0.5 text-[color:var(--brand-orange)] shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: f })
      ] }, f)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx(FunnelVisual, {}) })
  ] }) });
}
function FunnelVisual() {
  const stages = [
    { label: "Leads recebidos", value: 4820, w: "100%" },
    { label: "Qualificados pelo Albert", value: 3210, w: "82%" },
    { label: "Em atendimento", value: 1980, w: "62%" },
    { label: "Propostas enviadas", value: 740, w: "38%" },
    { label: "Vendas fechadas", value: 218, w: "18%" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl border border-[color:var(--brand-ink)] bg-background shadow-elev p-6 md:p-8 tilt-l", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 pb-4 border-b border-dashed border-[color:var(--brand-ink)]/20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono-ui text-xs", children: "imob.online / funil" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-mono-ui text-xs text-[color:var(--brand-teal)] font-semibold", children: "+24% MoM" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: stages.map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm mb-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold tabular-nums", children: s.value.toLocaleString("pt-BR") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-9 rounded-md bg-[color:var(--brand-sand)] overflow-hidden border border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full flex items-center px-3 text-xs font-mono-ui text-[color:var(--brand-sand)] transition-all",
          style: {
            width: s.w,
            background: i === stages.length - 1 ? "var(--brand-orange)" : "var(--brand-ink)"
          },
          children: s.w
        }
      ) })
    ] }, s.label)) })
  ] });
}
function Ecosystem() {
  const items = [
    { icon: Globe, title: "Sites para imobiliária", desc: "Templates rápidos, prontos pra ranquear no Google da sua cidade." },
    { icon: MessageSquare, title: "Portais e WhatsApp", desc: "Viva Real, ZAP, OLX e WhatsApp integrados, publica uma vez, aparece em tudo." },
    { icon: ShieldCheck, title: "LGPD e segurança", desc: "Infra robusta, 99.9% de uptime, backups diários, você dorme tranquilo." }
  ];
  return /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--brand-sand)] border-y border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "rounded-2xl bg-background border border-[color:var(--brand-ink)]/15 p-8 shadow-soft",
      style: { transform: `rotate(${(i - 1) * 0.7}deg)` },
      children: [
        /* @__PURE__ */ jsx(it.icon, { className: "w-6 h-6 text-[color:var(--brand-orange)] mb-6" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl tracking-tight mb-2", children: it.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: it.desc })
      ]
    },
    it.title
  )) }) }) });
}
function Testimonial() {
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-24 border-y border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(Quote, { className: "w-14 h-14 text-[color:var(--brand-orange)]" }) }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-10", children: /* @__PURE__ */ jsxs(Carousel, { opts: { loop: true }, className: "w-full", children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: testimonials.map((t) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("blockquote", { className: "text-2xl md:text-4xl font-serif-italic leading-[1.2] tracking-[-0.01em]", children: [
        '"',
        t.quote,
        '"',
        /* @__PURE__ */ jsxs("footer", { className: "not-italic mt-6 flex items-center gap-3 text-sm font-sans text-muted-foreground", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: t.avatarUrl,
              alt: t.author,
              className: "w-10 h-10 rounded-full object-cover border border-[color:var(--brand-ink)]/10 shrink-0",
              onError: (e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: t.author }),
            /* @__PURE__ */ jsxs("div", { children: [
              t.role,
              ", ",
              t.company,
              " · ",
              t.location
            ] })
          ] })
        ] })
      ] }) }, t.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-end mt-4", children: [
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "static translate-y-0" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "static translate-y-0" })
      ] })
    ] }) })
  ] }) });
}
function Blog() {
  const posts = blogPosts.slice(0, 3);
  return /* @__PURE__ */ jsxs("section", { id: "blog", className: "mx-auto max-w-7xl px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal text-[color:var(--brand-orange)]", children: "Leitura" }),
        " ",
        "rápida pra quem vende imóvel."
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70", children: [
        "Ver todos ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/blog/$slug",
        params: { slug: p.slug },
        className: "group flex flex-col border-t border-[color:var(--brand-ink)]/20 pt-6 hover:border-[color:var(--brand-orange)] transition cursor-pointer",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 text-xs font-mono-ui text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "uppercase tracking-wider", children: p.tag }),
            /* @__PURE__ */ jsx("span", { children: p.date })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] rounded-xl mb-6 overflow-hidden border border-[color:var(--brand-ink)]/10", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: p.imageUrl,
              alt: p.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition duration-500",
              onError: (e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
              }
            }
          ) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl tracking-tight leading-snug group-hover:text-[color:var(--brand-orange)] transition", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed", children: p.excerpt })
        ]
      },
      p.id
    )) })
  ] });
}
function CTA() {
  const { openModal } = useDemoModal();
  return /* @__PURE__ */ jsx("section", { id: "demo", className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-[color:var(--brand-ink)] bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-10 md:p-16 shadow-elev", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-grid absolute inset-0 opacity-25" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -top-20 -right-10 w-80 h-80 rounded-full opacity-30",
        style: { background: "var(--brand-orange)", filter: "blur(80px)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("span", { className: "stamp text-[color:var(--brand-orange)] text-xs mb-6 inline-block", children: "teste 14 dias · sem cartão" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6", children: [
          "Bora vender mais, ",
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic font-normal text-[color:var(--brand-orange)]", children: "de verdade" }),
          "?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[color:var(--brand-sand)]/70 max-w-xl", children: "Preenche em 30 segundos. A gente liga, mostra o sistema, libera o Albert. Você decide depois, sem pressão." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: openModal,
            className: "inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 font-semibold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none",
            children: [
              "Testar grátis ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://wa.me/5513997591781",
            className: "inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-sand)]/30 px-6 py-4 font-medium hover:bg-[color:var(--brand-sand)]/10 transition",
            children: "Falar no WhatsApp"
          }
        )
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-[color:var(--brand-ink)]/15 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-baseline gap-0.5 font-extrabold text-2xl tracking-[-0.02em] mb-4 hover:opacity-90", title: "Microsistec - Marca Registrada", children: [
          "microsistec",
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic text-[color:var(--brand-orange)] text-3xl leading-none", children: "." }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground self-start select-none font-sans font-medium", title: "Marca Registrada", children: "®" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "Proptech brasileira desde 1994. CRM, sites, app de atendimento e o Albert IA em um ecossistema só, pensado pra imobiliária de verdade." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://imob.online/",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-sm hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition shadow-soft no-underline decoration-none group",
            children: [
              /* @__PURE__ */ jsx(KeyRound, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "imob.online: área do cliente" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        FooterCol,
        {
          title: "Soluções",
          links: [
            { label: "CRM Imobiliário", to: "/solucoes/$slug", params: { slug: "crm" } },
            { label: "Albert IA", to: "/solucoes/$slug", params: { slug: "albert-ia" } },
            { label: "App de Atendimento", to: "/solucoes/$slug", params: { slug: "app" } },
            { label: "Rodízio de Atendimento", to: "/solucoes/$slug", params: { slug: "rodizio" } },
            { label: "Sites Customizados V8", to: "/solucoes/$slug", params: { slug: "sites-v8" } }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        FooterCol,
        {
          title: "Empresa",
          links: [
            { label: "Sobre", to: "/empresa" },
            { label: "Blog", to: "/blog" },
            { label: "Falar no WhatsApp", to: "https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+tudo+bem%3F+Vi+o+site+e+gostaria+de+saber+mais+sobre+o+Albert+e+suas+funcionalidades&type=phone_number&app_absent=0" }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-dashed border-[color:var(--brand-ink)]/20 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Microsistec · feito no Brasil ✦"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-serif-italic", children: "com Albert IA dentro" })
    ] })
  ] }) });
}
function FooterCol({
  title,
  links
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-muted-foreground text-sm", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: link.to.startsWith("http") || link.to.startsWith("#") || link.to.startsWith("/#") ? /* @__PURE__ */ jsx("a", { href: link.to, className: "hover:text-[color:var(--brand-orange)] transition", children: link.label }) : /* @__PURE__ */ jsx(Link, { to: link.to, params: link.params, className: "hover:text-[color:var(--brand-orange)] transition cursor-pointer", children: link.label }) }, link.label)) })
  ] });
}
function MicrosistecLanding() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(StatsStrip, {}),
      /* @__PURE__ */ jsx(Pillars, {}),
      /* @__PURE__ */ jsx(Albert, {}),
      /* @__PURE__ */ jsx(Funil, {}),
      /* @__PURE__ */ jsx(Ecosystem, {}),
      /* @__PURE__ */ jsx(Testimonial, {}),
      /* @__PURE__ */ jsx(Blog, {}),
      /* @__PURE__ */ jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Footer as F,
  MicrosistecLanding as M,
  Nav as N
};
