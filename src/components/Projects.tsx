import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { skillIcons } from "@/lib/icons";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="section-alt">
      <SectionHeader title="Projects" subtitle="Things I've built" />
      <div className="grid sm:grid-cols-2 gap-5">
        {siteConfig.projects.map((project, i) => (
          <div
            key={i}
            className="stagger-item group relative flex flex-col p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 card-glow hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Decorative corner glow */}
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <FolderGit2 size={16} />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-zinc-400 hover:text-blue-400 hover:scale-110 transition-all"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="text-zinc-400 hover:text-blue-400 hover:scale-110 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="relative text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="relative flex flex-wrap gap-1.5">
              {project.tech.map((t) => {
                const iconData = skillIcons[t];
                return (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                  >
                    {iconData && (
                      <iconData.Icon size={11} style={{ color: iconData.color }} />
                    )}
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
