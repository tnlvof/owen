import Link from "next/link";
import { Post } from "@/lib/types/post";

import { Badge } from "../ui/badge";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  // 연도만 추출하는 함수
  const getYear = (dateString: string) => new Date(dateString).getFullYear();

  return (
    <Link href={`/${post.slug}`} className="group block w-full">
      <article className="flex items-center justify-between py-4 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-50">
        <div className="flex items-center space-x-4">
          <time
            dateTime={post.date}
            className="text-sm font-medium text-gray-500 w-12"
          >
            {getYear(post.date)}
          </time>
          <h2 className="text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h2>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs dark:text-blue-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
