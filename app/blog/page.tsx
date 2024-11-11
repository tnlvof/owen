import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/utils/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="w-full dark:bg-gray-900 min-h-[calc(100vh-3.5rem)]">
      <div className="w-full mx-auto p-4">
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className="opacity-0 animate-fade-in w-full "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
