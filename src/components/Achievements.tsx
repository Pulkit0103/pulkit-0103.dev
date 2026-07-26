import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { Trophy, Award, Star, ExternalLink } from "lucide-react";

const platformColors: Record<string, string> = {
  CodeChef: "border-yellow-500/30 bg-yellow-500/5 text-yellow-500",
  LeetCode: "border-orange-500/30 bg-orange-500/5 text-orange-400",
  Codeforces: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  "Google Kick Start 2022": "border-green-500/30 bg-green-500/5 text-green-400",
  "Meta Hacker Cup 2022": "border-violet-500/30 bg-violet-500/5 text-violet-400",
};

const fallbackPlatformColor = "border-zinc-500/30 bg-zinc-500/5 text-zinc-400";

export default function Achievements() {
  const { competitive, certifications, scholarships } = siteConfig.achievements;

  return (
    <SectionWrapper id="achievements" className="bg-zinc-100/60 dark:bg-zinc-900/30">
      <SectionHeader title="Achievements" />

      {/* Competitive Programming */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
          Competitive Programming
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {competitive.map((item, i) => {
            const colorClass = platformColors[item.platform] ?? fallbackPlatformColor;
            return (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 transition-colors`}
              >
                <div className={`p-2 rounded-lg border flex-shrink-0 ${colorClass}`}>
                  <Trophy size={14} />
                </div>
                <div className="min-w-0">
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
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.title}</p>
                  <p className="text-xs font-semibold text-blue-400 mt-0.5">{item.metric}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
            Certifications
          </h3>
          <div className="flex flex-col gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex-shrink-0">
                  <Award size={15} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">{cert.name}</p>
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
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
            Scholarships
          </h3>
          <div className="flex flex-col gap-3">
            {scholarships.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                  <Star size={15} />
                </div>
                <div>
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">{s.name}</p>
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
