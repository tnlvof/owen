import { Post } from "../types/post";

export const posts: Post[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Next.js로 시작하는 웹 개발",
    description: "Next.js의 기본 개념과 주요 기능들을 알아봅니다.",
    date: "2024-03-20",
    tags: ["Next.js", "React", "Web Development"],
    content: "# Next.js로 시작하는 웹 개발\n\nNext.js는 React 기반의...",
  },
  {
    id: "understanding-typescript",
    title: "TypeScript 완벽 가이드",
    description: "TypeScript의 핵심 개념과 실전 활용법을 다룹니다.",
    date: "2024-03-18",
    tags: ["TypeScript", "JavaScript", "Programming"],
    content: "# TypeScript 완벽 가이드\n\nTypeScript는 JavaScript의...",
  },
  {
    id: "mastering-tailwindcss",
    title: "TailwindCSS 마스터하기",
    description: "TailwindCSS를 활용한 효율적인 스타일링 방법을 알아봅니다.",
    date: "2024-03-15",
    tags: ["CSS", "TailwindCSS", "Web Design"],
    content: "# TailwindCSS 마스터하기\n\n유틸리티 우선 CSS 프레임워크인...",
  },
];
