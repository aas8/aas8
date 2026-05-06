import { getPost, getPostContent, stripFrontmatter, groupPostsBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string; lang: string }>;
}

export async function generateStaticParams() {
  return groupPostsBySlug()
    .filter((group) => group.br !== null)
    .map((group) => ({ slug: group.slug, lang: "br" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, "br");

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostBr({ params }: Props) {
  const { slug } = await params;

  const postContent = getPostContent(slug, "br");

  if (!postContent) {
    notFound();
  }

  const hasEn = getPost(slug, "en") !== null;

  const title = postContent.content
    .match(/^title:\s*["'](.+?)["']/m)?.[1] ?? slug;
  const date = postContent.content
    .match(/^date:\s*["'](.+?)["']/m)?.[1] ?? "";

  const content = stripFrontmatter(postContent.content);

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {title}
            </h1>
            <time className="mt-2 block text-sm text-zinc-500 dark:text-zinc-400">
              {date}
            </time>
          </div>
          {hasEn && (
            <Link
              href={`/blog/${slug}`}
              className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              🇺🇸 Read in English
            </Link>
          )}
        </div>
      </header>
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          &larr; Voltar para o blog
        </Link>
      </div>
    </article>
  );
}
