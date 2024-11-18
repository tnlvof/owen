import Link from "next/link";
import { Post } from "@/lib/types/post";
import { Eye } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  // 연도만 추출하는 함수
  const getYear = (dateString: string) => new Date(dateString).getFullYear();

  return (
    <Link href={`/posts/${post.slug}`} className="group block w-full">
      <article className="flex items-center justify-between py-4 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-50">
        <div className="flex items-center space-x-4">
          <time
            dateTime={post.date}
            className="text-sm font-medium text-gray-500 w-12"
          >
            {getYear(post.date)}
          </time>
          <h2 className="text-sm  text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h2>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Eye className="w-4 h-4 mr-1" />
          {/* <span>{post.views || 0}</span> */}
        </div>
      </article>
    </Link>
  );
}
