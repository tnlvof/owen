import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Post } from "@/lib/types/post";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = await Promise.all(
    files
      .filter((file) => /\.mdx?$/.test(file))
      .map(async (file) => {
        const filePath = path.join(POSTS_PATH, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          title: data.title,
          description: data.description,
          date: data.date,
          slug: file.replace(/\.mdx?$/, ""),
          tags: data.tags || [],
          content: content,
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
