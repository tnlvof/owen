import Link from "next/link";
import { Post } from "@/lib/types/post";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block w-full ">
      <article className="bg-card rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md w-full">
        <div className="p-6 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </div>
          <p className="text-sm text-card-foreground line-clamp-2">
            {post.content.slice(0, 150).replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g, "")}
          </p>
          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs dark:text-blue-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
