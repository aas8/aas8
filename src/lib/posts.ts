import fs from "fs";
import path from "path";

export type Lang = "en" | "br";

export interface PostFile {
  slug: string;
  lang: Lang;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface PostGroup {
  slug: string;
  en: PostFile | null;
  br: PostFile | null;
}

function parseFrontmatter(content: string) {
  const titleMatch = content.match(/^title:\s*["'](.+?)["']/m);
  const dateMatch = content.match(/^date:\s*["'](.+?)["']/m);
  const descMatch = content.match(/^description:\s*["'](.+?)["']/m);
  const tagsMatch = content.match(/^tags:\s*\[(.*?)\]/m);

  const tags = tagsMatch
    ? tagsMatch[1]
        .split(",")
        .map((t) => t.trim().replace(/["']/g, ""))
    : [];

  return {
    title: titleMatch?.[1] ?? "",
    date: dateMatch?.[1] ?? "Unknown",
    description: descMatch?.[1] ?? "",
    tags,
  };
}

export function getAllPosts(): PostFile[] {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((name) => /\.mdx?$/.test(name))
    .map((filename) => {
      const nameWithoutExt = filename.replace(/\.mdx?$/, "");
      const ext = filename.match(/\.mdx?$/)?.[0] || "";

      let slug: string;
      let lang: Lang;

      if (nameWithoutExt.endsWith("_br")) {
        slug = nameWithoutExt.slice(0, -3);
        lang = "br";
      } else if (nameWithoutExt.endsWith("_en")) {
        slug = nameWithoutExt.slice(0, -3);
        lang = "en";
      } else {
        slug = nameWithoutExt;
        lang = "en";
      }

      const fullPath = path.join(postsDirectory, filename);
      const content = fs.readFileSync(fullPath, "utf-8");
      const meta = parseFrontmatter(content);

      return {
        slug,
        lang,
        title: meta.title || slug,
        date: meta.date,
        description: meta.description,
        tags: meta.tags,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function groupPostsBySlug(): PostGroup[] {
  const posts = getAllPosts();
  const map = new Map<string, { en: PostFile | null; br: PostFile | null }>();

  for (const post of posts) {
    if (!map.has(post.slug)) {
      map.set(post.slug, { en: null, br: null });
    }
    map.get(post.slug)![post.lang] = post;
  }

  return Array.from(map.entries())
    .map(([slug, langs]) => ({ slug, ...langs }))
    .sort((a, b) => {
      const dateA = a.en?.date ?? a.br?.date ?? "";
      const dateB = b.en?.date ?? b.br?.date ?? "";
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
}

export function getPost(slug: string, lang: Lang): PostFile | null {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  const possibleFiles = [
    `${slug}_${lang}.mdx`,
    `${slug}_${lang}.md`,
  ];

  if (lang === "en") {
    possibleFiles.push(`${slug}.mdx`, `${slug}.md`);
  }

  for (const file of possibleFiles) {
    const filePath = path.join(postsDirectory, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const meta = parseFrontmatter(content);
      return {
        slug,
        lang,
        title: meta.title || slug,
        date: meta.date,
        description: meta.description,
        tags: meta.tags,
      };
    }
  }

  return null;
}

export function getPostContent(slug: string, lang: Lang): { content: string; lang: Lang } | null {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  const possibleFiles = [
    `${slug}_${lang}.mdx`,
    `${slug}_${lang}.md`,
  ];

  if (lang === "en") {
    possibleFiles.push(`${slug}.mdx`, `${slug}.md`);
  }

  for (const file of possibleFiles) {
    const filePath = path.join(postsDirectory, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return { content, lang };
    }
  }

  return null;
}

export function stripFrontmatter(content: string): string {
  return content.replace(/^---[\s\S]*?---\n?/, "");
}
