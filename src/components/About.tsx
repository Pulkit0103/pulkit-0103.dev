import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";
import { MapPin, Briefcase } from "lucide-react";

export default function About() {
  const { about } = siteConfig;
  return (
    <SectionWrapper id="about">
      <SectionHeader title="About Me" />
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-4">
          {about.bio.map((para, i) => (
            <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {para}
            </p>
          ))}
          <div className="flex flex-wrap gap-5 mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            {about.location && (
              <span className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={13} className="text-blue-400" />
                {about.location}
              </span>
            )}
            {about.availability && (
              <span className="flex items-center gap-2 text-sm text-zinc-500">
                <Briefcase size={13} className="text-blue-400" />
                {about.availability}
              </span>
            )}
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            <span className="text-6xl font-bold text-gradient select-none">
              {siteConfig.initials}
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
