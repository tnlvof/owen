import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/utils/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">블로그</h1>
        <p className="text-xl text-muted-foreground">
          개발, 기술, 그리고 경험을 공유합니다
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
