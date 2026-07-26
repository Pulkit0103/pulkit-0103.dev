"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = siteConfig.roles;

  useEffect(() => {
    const cycle = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(cycle);
  }, [roles.length]);

  const socials = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    ...(siteConfig.twitter
      ? [{ icon: Twitter, href: siteConfig.twitter, label: "Twitter" }]
      : []),
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl animate-blob-1" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-3xl animate-blob-2" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-pink-500/5 blur-3xl animate-blob-2" style={{ animationDelay: "3s" }} />
      </div>

      {/* Grid overlay — visible in both light and dark modes */}
      <div className="pointer-events-none absolute inset-0 -z-10 hero-grid" />

      <div className="max-w-5xl mx-auto w-full animate-fade-up">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-emerald-400 font-medium">Available for opportunities</span>
        </div>

        <p className="text-sm text-blue-400 font-mono mb-4 tracking-wide flex items-center gap-2">
          <Sparkles size={14} />
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-zinc-900 dark:text-white">{siteConfig.name.split(" ")[0]} </span>
          <span className="text-gradient-strong animate-gradient bg-[length:200%_auto]">
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <div className="h-10 flex items-center mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-semibold text-gradient"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-400 font-medium transition-all hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          )}
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-blue-400 hover:-translate-y-0.5 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 animate-fade-up-delay">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}
