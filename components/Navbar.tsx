"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Handle scroll shadows
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme management
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const triggerModal = () => {
    window.dispatchEvent(new Event("open-conversion-modal"));
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 shadow-md border-b border-muted/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-44 bg-white/40 dark:bg-transparent rounded-lg p-1">
                <Image
                  src="/images/logo.svg"
                  alt="Microsistec Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/#produtos"
              className="text-sm font-medium text-muted hover:text-emerald-500 transition-colors"
            >
              Soluções
            </Link>
            <Link
              href="/produtos/albert"
              className="text-sm font-medium text-muted hover:text-emerald-500 transition-colors flex items-center gap-1"
            >
              <Sparkles className="size-3.5 text-emerald-500" />
              Albert IA
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted hover:text-emerald-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#sobre"
              className="text-sm font-medium text-muted hover:text-emerald-500 transition-colors"
            >
              Sobre nós
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/10 text-muted hover:text-primary transition-all active:scale-95"
              aria-label="Alternar Tema"
            >
              {theme === "light" ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={triggerModal}
              className="btn-primary flex items-center gap-1 px-5 py-2.5 text-sm"
            >
              Demonstração
            </button>
          </nav>

          {/* Mobile hamburger menu and theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/10 text-muted transition-all"
              aria-label="Alternar Tema"
            >
              {theme === "light" ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted hover:text-primary hover:bg-muted/10 transition-all"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-muted/15 px-4 pt-2 pb-6 space-y-4 shadow-xl backdrop-blur-lg bg-background/95">
          <div className="flex flex-col space-y-3">
            <Link
              href="/#produtos"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-muted hover:text-emerald-500 hover:bg-muted/5 transition-all"
            >
              Soluções
            </Link>
            <Link
              href="/produtos/albert"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-muted hover:text-emerald-500 hover:bg-muted/5 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="size-4 text-emerald-500" />
              Albert IA
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-muted hover:text-emerald-500 hover:bg-muted/5 transition-all"
            >
              Blog
            </Link>
            <Link
              href="/#sobre"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-muted hover:text-emerald-500 hover:bg-muted/5 transition-all"
            >
              Sobre nós
            </Link>

            <button
              onClick={triggerModal}
              className="btn-primary w-full text-center py-3 text-base mt-2"
            >
              Demonstração Gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
