import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { MessageSquare, Play, Calendar, Clock } from "lucide-react";
import podcastsData from "@/data/podcasts.json";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast Microsistec - Gestão e Vendas Imobiliárias" },
      {
        name: "description",
        content:
          "Ouça nosso podcast com dicas sobre vendas consultivas, liderança, tecnologia e gestão imobiliária.",
      },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pb-24">
        {/* Hero Section */}
        <section
          id="hero_podcast"
          className="relative overflow-hidden bg-hero pt-20 pb-8 md:pt-36 md:pb-24 border-b border-[color:var(--brand-ink)]/10"
        >
          <div className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-6 text-center space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto text-left">
              <div className="flex-1 space-y-6">
                <span className="stamp text-[#2B5250] text-sm inline-flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Podcast Oficial
                </span>
                <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.2rem,5vw,4rem)]">
                  Gestão Comercial
                  <br />
                  <span className="font-serif-italic font-normal text-[#2B5250]">
                    Imobiliária
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nosso podcast com dicas e bate-papo sobre gestão comercial
                  imobiliária. Como ter um maior controle, rendimento,
                  resultados e muito mais. Conteúdo top e convidados
                  excepcionais.
                </p>
                <div className="pt-2 flex flex-col md:flex-row items-start gap-4">
                  <a
                    href="https://open.spotify.com/show/0ekpVPzmBBqrI50Ai5Lj0t?si=499a3afa8b2244ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1DB954] text-white px-6 py-3 font-bold hover:bg-[#1ed760] transition-colors border-none no-underline shadow-md"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.72 12.9c.36.181.54.78.241 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Ouvir no Spotify
                  </a>
                  <p className="text-sm text-muted-foreground/80 max-w-[240px] leading-snug">
                    <strong className="text-foreground">Não perca nenhum episódio!</strong> Siga no Spotify e garanta insights valiosos para a sua imobiliária em primeira mão.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-xs md:max-w-md shrink-0 rounded-[2.5rem] overflow-hidden shadow-elev border-[4px] border-[color:var(--brand-sand)]">
                <img
                  src="/podcast-thumb.webp"
                  alt="Podcast Microsistec"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Podcast List */}
        <section className="mx-auto max-w-5xl px-6 mt-12 mb-8">
          <div className="space-y-6">
            {podcastsData.map((podcast, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row bg-[color:var(--brand-sand)] border border-[color:var(--brand-ink)]/10 hover:border-[#2B5250]/40 rounded-3xl p-6 md:p-8 gap-6 md:gap-8 transition duration-300"
              >
                {/* Thumb do episódio */}
                {podcast.thumbnail && (
                  <div className="w-full md:w-56 shrink-0 aspect-square rounded-2xl overflow-hidden border border-[color:var(--brand-ink)]/10">
                    <img
                      src={podcast.thumbnail}
                      alt={podcast.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex-1 space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-mono-ui text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1.5 uppercase text-[#2B5250]">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(podcast.pubDate).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {podcast.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[color:var(--brand-ink)] group-hover:text-[#2B5250] transition">
                    {podcast.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {podcast.description}
                  </p>

                  <div className="pt-4 w-full max-w-2xl">
                    <audio
                      controls
                      className="w-full rounded-full bg-[color:var(--brand-ink)]/5 h-12"
                      src={podcast.localAudioUrl}
                    >
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
