interface ExperienceSectionProps {
  title: string;
  items: {
    role: string;
    company: string;
    duration: string;
    bullets: string[];
  }[];
}

export default function ExperienceSection({
  title,
  items,
}: ExperienceSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-4 space-y-6">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-zinc-800 dark:text-zinc-200">
                {item.role}
              </h3>
              <span className="text-sm text-zinc-500">{item.duration}</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {item.company}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              {item.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
