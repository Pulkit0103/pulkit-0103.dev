import SectionWrapper from "./SectionWrapper";
import { siteConfig } from "@/config/site";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: Github, label: "GitHub", href: siteConfig.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin },
    ...(siteConfig.twitter
      ? [{ icon: Twitter, label: "Twitter", href: siteConfig.twitter }]
      : []),
  ];

  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Get In Touch
        </h2>
        <div className="h-1 w-10 bg-blue-400 rounded-full mx-auto mb-6" />
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          Whether you have a question, an opportunity, or just want to say hi — feel free to reach out.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
        >
          <Mail size={16} />
          {siteConfig.email}
        </a>

        <div className="flex items-center justify-center gap-3 mt-8">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
