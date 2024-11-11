import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Post } from "@/lib/types/post";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

// 한글 파일명을 URL-safe한 slug로 변환하는 함수
function createSlug(filename: string): string {
  return encodeURIComponent(
    filename
      .replace(/\.mdx?$/, "") // .md 또는 .mdx 확장자 제거
      .normalize("NFC") // 유니코드 정규화
  );
}

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
          slug: createSlug(file),
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
  // URL 디코딩된 slug를 정규화하여 비교
  const normalizedSlug = decodeURIComponent(slug).normalize("NFC");
  return posts.find((post) => decodeURIComponent(post.slug) === normalizedSlug);
}
