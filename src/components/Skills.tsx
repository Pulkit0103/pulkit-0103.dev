import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { skillIcons } from "@/lib/icons";
import { Code2 } from "lucide-react";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader title="Skills" subtitle="Tools and technologies I work with" />
      <div className="space-y-8">
        {Object.entries(siteConfig.skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-blue-400/60" />
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {items.map((skill, i) => {
                const iconData = skillIcons[skill];
                return (
                  <div
                    key={skill}
                    className="stagger-item group light-shadow flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800/50 group-hover:scale-110 transition-transform">
                      {iconData ? (
                        <iconData.Icon
                          size={18}
                          style={{ color: iconData.color }}
                        />
                      ) : (
                        <Code2 size={16} className="text-zinc-400" />
                      )}
                    </div>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium truncate">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
