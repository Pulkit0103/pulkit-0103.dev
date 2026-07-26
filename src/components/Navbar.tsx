"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/60"
          : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label={siteConfig.name}
          className="group inline-flex items-center font-bold text-lg tracking-tight"
        >
          {siteConfig.name.split(" ")[0].split("").map((letter, i) => (
            <span
              key={i}
              className="stagger-item inline-block text-zinc-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 group-hover:-translate-y-0.5 transition-[transform,color] duration-300"
              style={{ animationDelay: `${i * 70}ms`, transitionDelay: `${i * 30}ms` }}
            >
              {letter}
            </span>
          ))}
          <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-400 dark:hover:text-blue-400 transition-all"
            >
              Resume <ExternalLink size={11} />
            </a>
          )}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        <button
          className="md:hidden p-2 text-zinc-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0A0A0A]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400"
              >
                Resume ↗
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
