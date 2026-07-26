import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  if (siteConfig.blog.length === 0) return null;

  return (
    <SectionWrapper id="blog" className="section-alt">
      <SectionHeader title="Writing" subtitle="Thoughts and technical articles" />
      <div className="space-y-3">
        {siteConfig.blog.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 transition-colors group"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-zinc-900 dark:text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                {post.title}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                />
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {post.description}
              </p>
            </div>
            <span className="text-xs text-zinc-400 flex-shrink-0 mt-0.5">{post.date}</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
