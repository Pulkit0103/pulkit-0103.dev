import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { companyIcons } from "@/lib/icons";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-zinc-100/60 dark:bg-zinc-900/30">
      <SectionHeader title="Experience" subtitle="Where I've worked and what I've built" />
      <div className="relative">
        {/* Gradient timeline */}
        <div className="absolute left-[19px] top-2 bottom-0 w-px bg-gradient-to-b from-blue-400/60 via-violet-400/40 to-transparent" />

        <div className="space-y-6">
          {siteConfig.experience.map((exp, i) => {
            const logo = companyIcons[exp.company];
            return (
              <div
                key={i}
                className="pl-16 relative stagger-item"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Company logo bubble */}
                {logo && logo.type === "icon" ? (
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 rounded-xl border flex items-center justify-center ${logo.bg}`}
                  >
                    <logo.Icon size={20} style={{ color: logo.color }} />
                  </div>
                ) : logo && logo.type === "letter" ? (
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 rounded-xl bg-gradient-to-br ${logo.from} ${logo.to} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {logo.letter}
                  </div>
                ) : (
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                    <Briefcase size={18} />
                  </div>
                )}

                <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 card-glow transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">
                        {exp.role}
                      </h3>
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
                      <li
                        key={j}
                        className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2.5"
                      >
                        <span className="text-blue-400 flex-shrink-0 mt-0.5">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
