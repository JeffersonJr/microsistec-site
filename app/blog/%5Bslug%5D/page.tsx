import { postsList } from "@/data/posts";
import Navbar from "@/components/Navbar";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import BlogShare from "@/components/BlogShare";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic SEO metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = postsList.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Microsistec`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Blog Microsistec`,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

// Static parameters for static generation
export async function generateStaticParams() {
  return postsList.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postsList.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other recommended articles
  const recommendations = postsList
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <ReadingProgressBar />

      <main className="flex-grow pt-24 pb-20 bg-background text-foreground transition-colors duration-200">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Back Link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-emerald-500 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Voltar para o blog
            </Link>
          </div>

          {/* Header Metadata */}
          <header className="space-y-4 mb-10 pb-8 border-b border-muted/10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 uppercase tracking-wide">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author and Date Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="relative size-11 rounded-full overflow-hidden border border-muted/15">
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">{post.author.name}</p>
                  <p className="text-xs text-muted font-bold leading-none mt-0.5">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 font-bold shrink-0">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {post.readTime} min de leitura
                </span>
              </div>
            </div>
          </header>

          {/* Rich Content Body */}
          <section
            className="prose dark:prose-invert prose-emerald max-w-none text-muted font-medium leading-relaxed space-y-6 text-base sm:text-lg border-b border-muted/10 pb-10"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Share Links */}
          <BlogShare title={post.title} />

          {/* Recommendations Block */}
          <section className="mt-16 pt-10 border-t border-muted/10 space-y-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-primary flex items-center gap-2">
              <Sparkles className="size-5 text-emerald-500" />
              Recomendamos para você
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {recommendations.map((rec) => (
                <div
                  key={rec.slug}
                  className="group flex flex-col justify-between p-6 bg-background rounded-2xl border border-muted/15 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-emerald-500/5 text-emerald-500 border-emerald-500/10 uppercase tracking-wide">
                      {rec.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-primary leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2">
                      {rec.title}
                    </h4>
                  </div>
                  <Link
                    href={`/blog/${rec.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    Ler artigo
                    <ArrowLeft className="size-3 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="relative h-8 w-36 mx-auto filter brightness-0 invert opacity-70">
            <Image
              src="/images/logo.svg"
              alt="Microsistec Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-slate-600 font-bold">
            © {new Date().getFullYear()} Microsistec. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
