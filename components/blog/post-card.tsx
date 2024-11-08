import Link from "next/link";
import { Post } from "@/lib/types/post";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </div>
        <p className="text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </Link>
  );
}
