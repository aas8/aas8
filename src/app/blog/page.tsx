import Link from "next/link";
import { groupPostsBySlug } from "@/lib/posts";

export default async function BlogIndex() {
  const postGroups = groupPostsBySlug();

  if (postGroups.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thoughts, tutorials, and updates.
        </p>
        <p className="mt-8 text-zinc-500 dark:text-zinc-400">
          No posts yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Blog
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Thoughts, tutorials, and updates.
      </p>

      <ul className="mt-10 space-y-8">
        {postGroups.map((group) => {
          const en = group.en;
          const br = group.br;

          return (
            <li key={group.slug}>
              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${group.slug}`}
                    className="group block flex-1"
                  >
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      <time dateTime={en?.date ?? br?.date ?? ""}>
                        {en?.date ?? br?.date}
                      </time>
                    </div>
                    <h2 className="mt-2 text-lg font-medium text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                      {en?.title ?? br?.title}
                    </h2>
                    {(en?.description ?? br?.description) && (
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {en?.description ?? br?.description}
                      </p>
                    )}
                    {(en?.tags ?? br?.tags ?? []).length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(en?.tags ?? br?.tags ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-col gap-2">
                    {en && (
                      <Link
                        href={`/blog/${group.slug}`}
                        className="rounded-md px-2 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      >
                        🇺🇸 EN
                      </Link>
                    )}
                    {br && (
                      <Link
                        href={`/blog/${group.slug}/br`}
                        className="rounded-md px-2 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      >
                        🇧🇷 BR
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
