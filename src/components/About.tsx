import Image from "next/image";
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
            <p
              key={i}
              className="stagger-item text-zinc-600 dark:text-zinc-400 leading-relaxed"
              style={{ animationDelay: `${i * 100}ms` }}
            >
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
          <div className="relative group">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-400 via-violet-400 to-pink-400 opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500 animate-gradient bg-[length:200%_200%]" />

            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              {siteConfig.photo ? (
                <Image
                  src={siteConfig.photo}
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 768px) 208px, 240px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-violet-400 to-pink-400 animate-gradient bg-[length:200%_200%] select-none">
                    {siteConfig.initials}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
