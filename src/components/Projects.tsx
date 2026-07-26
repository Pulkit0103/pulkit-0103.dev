import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-zinc-100/60 dark:bg-zinc-900/30">
      <SectionHeader title="Projects" subtitle="Things I've built" />
      <div className="grid sm:grid-cols-2 gap-5">
        {siteConfig.projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {project.name}
              </h3>
              <div className="flex gap-2 flex-shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={15} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
