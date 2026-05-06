type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {subtitle ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-yellow-600">{subtitle}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{title}</h2>
    </div>
  );
}
