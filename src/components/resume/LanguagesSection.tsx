interface LanguagesSectionProps {
  title: string;
  languages: string[];
}

export default function LanguagesSection({
  title,
  languages,
}: LanguagesSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        {languages.map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>
    </section>
  );
}
