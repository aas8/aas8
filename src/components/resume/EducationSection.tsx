interface EducationSectionProps {
  title: string;
  items: {
    degree: string;
    institution: string;
    year: string;
  }[];
}

export default function EducationSection({
  title,
  items,
}: EducationSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-4 space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="font-medium text-zinc-800 dark:text-zinc-200">
                {item.degree}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {item.institution}
              </p>
            </div>
            <span className="text-sm text-zinc-500">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
