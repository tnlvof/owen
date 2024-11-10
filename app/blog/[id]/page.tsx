import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getPost } from "@/lib/utils/mdx";


interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-10 max-w-3xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4">
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">{post.code}</div>
    </article>
  );
}
