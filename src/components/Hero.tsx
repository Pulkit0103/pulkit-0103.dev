"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const roles = siteConfig.roles;

  useEffect(() => {
    // Small delay so the CSS transition plays after mount
    const show = setTimeout(() => setVisible(true), 80);
    const cycle = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => {
      clearTimeout(show);
      clearInterval(cycle);
    };
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
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      {/* Hero content — CSS transition, no Framer Motion dependency for initial paint */}
      <div
        className={`max-w-5xl mx-auto w-full transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm text-blue-400 font-mono mb-4 tracking-wide">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
          {siteConfig.name}
        </h1>

        {/* Animated cycling role — Framer Motion only after mount */}
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
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
          >
            View Projects
          </a>
          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-400 font-medium transition-all"
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
              className="p-2.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 transition-opacity duration-500 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
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
