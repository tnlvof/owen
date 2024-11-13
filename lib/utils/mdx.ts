import fs from "fs";

import path from "path";

import matter from "gray-matter";

import { Post } from "@/lib/types/post";



export async function getAllPosts(): Promise<Post[]> {

  const postsDirectory = path.join(process.cwd(), "content/posts");

  const years = fs.readdirSync(postsDirectory).filter(file => 

    fs.statSync(path.join(postsDirectory, file)).isDirectory()

  );



  const posts: Post[] = [];



  for (const year of years) {

    const yearPath = path.join(postsDirectory, year);

    const files = fs.readdirSync(yearPath).filter((file) => file.endsWith(".mdx"));



    for (const file of files) {

      const filePath = path.join(yearPath, file);

      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);



      posts.push({

        slug: file.replace(".mdx", ""),

        title: data.title,

        description: data.description || "",

        date: data.date,

        tags: data.tags,

        content: content,

        year: year

      });

    }

  }



  // 날짜 기준 내림차순 정렬

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

}



export async function getAvailableYears(): Promise<string[]> {

  const postsDirectory = path.join(process.cwd(), "content/posts");

  return fs.readdirSync(postsDirectory)

    .filter(file => fs.statSync(path.join(postsDirectory, file)).isDirectory())

    .sort((a, b) => b.localeCompare(a)); // 연도 내림차순 정렬

}



export async function getPostBySlug(slug: string): Promise<Post | undefined> {

  const posts = await getAllPosts();

  // URL 디코딩된 slug를 정규화하여 비교

  const normalizedSlug = decodeURIComponent(slug).normalize("NFC");

  return posts.find((post) => decodeURIComponent(post.slug) === normalizedSlug);

}


