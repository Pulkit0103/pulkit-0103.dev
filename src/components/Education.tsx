import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { institutionIcons } from "@/lib/icons";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader title="Education" subtitle="Academic background" />
      <div className="space-y-4">
        {siteConfig.education.map((edu, i) => {
          const meta = institutionIcons[edu.institution] ?? {
            Icon: GraduationCap,
            from: "from-blue-500",
            to: "to-cyan-500",
          };
          const Icon = meta.Icon;
          return (
            <div
              key={i}
              className="stagger-item flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 card-glow transition-all"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${meta.from} ${meta.to} text-white flex-shrink-0 shadow-lg`}
              >
                <Icon size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-zinc-900 dark:text-white leading-snug">
                  {edu.institution}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                  <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
