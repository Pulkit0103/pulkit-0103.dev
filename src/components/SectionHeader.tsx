interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ title, subtitle, center = false }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 animate-gradient bg-[length:200%_auto] ${
          center ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
