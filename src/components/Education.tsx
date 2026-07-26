import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader title="Education" />
      <div className="space-y-4">
        {siteConfig.education.map((edu, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
              <GraduationCap size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-zinc-900 dark:text-white leading-snug">
                {edu.institution}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">{edu.degree}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <Calendar size={11} />
                  {edu.period}
                </span>
                <span className="text-xs font-semibold text-blue-400">{edu.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
