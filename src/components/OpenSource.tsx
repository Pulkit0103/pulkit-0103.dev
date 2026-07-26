import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { GitPullRequest, ExternalLink } from "lucide-react";

export default function OpenSource() {
  if (siteConfig.openSource.length === 0) return null;

  return (
    <SectionWrapper id="open-source">
      <SectionHeader title="Open Source" subtitle="Contributions to the community" />
      <div className="space-y-3">
        {siteConfig.openSource.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-blue-400 mt-0.5 flex-shrink-0">
              <GitPullRequest size={15} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-zinc-900 dark:text-white text-sm font-mono">
                  {item.repo}
                </span>
                <ExternalLink
                  size={11}
                  className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                {item.description}
              </p>
            </div>
            <span className="text-xs text-zinc-400 flex-shrink-0 mt-0.5">{item.date}</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
