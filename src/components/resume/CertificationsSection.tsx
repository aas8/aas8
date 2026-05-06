interface CertificationsSectionProps {
  title: string;
  items: {
    course: string;
    institution: string;
  }[];
}

export default function CertificationsSection({
  title,
  items,
}: CertificationsSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {item.course}
            </span>
            <span className="text-sm text-zinc-500">{item.institution}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
