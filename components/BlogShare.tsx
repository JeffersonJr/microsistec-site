"use client";

import { useState, useEffect } from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type ShareProps = {
  title: string;
};

export default function BlogShare({ title }: ShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareText = encodeURIComponent(`${title} - Leia no blog da Microsistec: `);
  const encodedUrl = encodeURIComponent(currentUrl);

  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 py-6 my-10 border-y border-muted/10 justify-between">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
        <Share2 className="size-4 text-emerald-500" />
        Compartilhe esse artigo:
      </span>

      <div className="flex gap-2 w-full sm:w-auto justify-end">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 border border-muted/15 rounded-lg text-xs font-bold text-muted hover:text-emerald-500 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all w-1/3 sm:w-auto justify-center select-none"
        >
          WhatsApp
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 border border-muted/15 rounded-lg text-xs font-bold text-muted hover:text-blue-500 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all w-1/3 sm:w-auto justify-center select-none"
        >
          <Linkedin className="size-3.5 fill-current" />
          LinkedIn
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-4 py-2 border border-muted/15 rounded-lg text-xs font-bold text-muted hover:text-primary hover:border-primary/20 hover:bg-muted/5 transition-all w-1/3 sm:w-auto justify-center cursor-pointer select-none"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-500" />
              Copiado!
            </>
          ) : (
            <>
              <LinkIcon className="size-3.5" />
              Copiar
            </>
          )}
        </button>
      </div>
    </div>
  );
}
