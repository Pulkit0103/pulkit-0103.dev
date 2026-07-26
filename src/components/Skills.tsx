import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";

const categoryColors: Record<string, string> = {
  Languages:
    "bg-violet-500/10 text-violet-500 dark:text-violet-400 border border-violet-500/20",
  "Backend & Frameworks":
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  Messaging:
    "bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20",
  Databases:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20",
  "Cloud & DevOps":
    "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20",
  Frontend:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
};

const fallbackColor =
  "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader title="Skills" />
      <div className="space-y-7">
        {Object.entries(siteConfig.skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    categoryColors[category] ?? fallbackColor
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
