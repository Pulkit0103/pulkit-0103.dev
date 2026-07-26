import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-zinc-100/60 dark:bg-zinc-900/30">
      <SectionHeader title="Experience" />
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="space-y-8">
          {siteConfig.experience.map((exp, i) => (
            <div key={i} className="pl-8 relative">
              <div className="absolute left-0 top-[7px] w-3.5 h-3.5 rounded-full border-2 border-blue-400 bg-zinc-50 dark:bg-[#0A0A0A]" />

              <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <Calendar size={10} />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="text-xs text-zinc-400 flex items-center gap-1">
                        <MapPin size={10} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.description.map((point, j) => (
                    <li key={j} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2.5">
                      <span className="text-blue-400 flex-shrink-0 mt-0.5">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
