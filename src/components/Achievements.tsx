import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { platformIcons } from "@/lib/icons";
import { Trophy, Award, Star, ExternalLink } from "lucide-react";

export default function Achievements() {
  const { competitive, certifications, scholarships } = siteConfig.achievements;

  return (
    <SectionWrapper id="achievements" className="bg-zinc-100/60 dark:bg-zinc-900/30">
      <SectionHeader title="Achievements" subtitle="Recognition and milestones" />

      {/* Competitive Programming */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="h-px w-6 bg-blue-400/60" />
          Competitive Programming
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {competitive.map((item, i) => {
            const platformData = platformIcons[item.platform];
            return (
              <div
                key={i}
                className="stagger-item-scale group relative flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 card-glow hover:-translate-y-1 transition-all overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Rating badge glow */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800/60 group-hover:scale-110 transition-transform">
                  {platformData ? (
                    <platformData.Icon
                      size={20}
                      style={{ color: platformData.color }}
                    />
                  ) : (
                    <Trophy size={16} className="text-blue-400" />
                  )}
                </div>

                <div className="relative min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="font-medium text-sm text-zinc-900 dark:text-white truncate">
                      {item.platform}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-blue-400 flex-shrink-0"
                      >
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.title}
                  </p>
                  <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mt-0.5">
                    {item.metric}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-blue-400/60" />
            Certifications
          </h3>
          <div className="flex flex-col gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="stagger-item flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 card-glow transition-all"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white flex-shrink-0 shadow-lg shadow-sky-500/20">
                  <Award size={16} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">
                    {cert.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{cert.detail}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-blue-400 transition-colors"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scholarships */}
      {scholarships.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-blue-400/60" />
            Scholarships
          </h3>
          <div className="flex flex-col gap-3">
            {scholarships.map((s, i) => (
              <div
                key={i}
                className="stagger-item flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 card-glow transition-all"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex-shrink-0 shadow-lg shadow-emerald-500/20">
                  <Star size={16} />
                </div>
                <div>
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">
                    {s.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {s.detail} · {s.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
