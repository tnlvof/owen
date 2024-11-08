import { posts } from "@/lib/data/posts";
import { PostCard } from "@/components/blog/post-card";

export default function BlogPage() {
  return (
    <div className="container py-10 space-y-10">
      <div className="space-y-4">
        <p className="text-xl text-muted-foreground">경험을 공유합니다</p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
