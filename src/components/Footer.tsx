import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <a
          href={siteConfig.sourceRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-1.5"
        >
          <Github size={13} />
          Source
        </a>
      </div>
    </footer>
  );
}
