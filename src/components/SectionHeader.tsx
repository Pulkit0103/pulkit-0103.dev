interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ title, subtitle, center = false }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">{title}</h2>
      <div className={`mt-2 h-1 w-10 bg-blue-400 rounded-full ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
