import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/lib/types/post";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { components } from "@/components/mdx/mdx-components";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getPost(id: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const { content: compiledContent } = await compileMDX({
      source: content,
      components,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [[remarkGfm, {}]],
          rehypePlugins: [
            [rehypeSlug, {}],
            [rehypeHighlight, { ignoreMissing: true }],
          ],
        },
      },
    });

    return {
      id,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags,
      content: content,
      code: compiledContent,
    };
  } catch (error) {
    console.error(`Error getting post ${id}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const id = file.replace(/\.mdx$/, "");
        const post = await getPost(id);
        return post;
      })
  );

  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}
