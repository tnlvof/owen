import { getPostBySlug } from "@/lib/utils/mdx";
import { Mdx } from "@/components/mdx/mdx-components";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
  };

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8 mx-auto max-w-2xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.description && (
          <p className="mt-2 text-xl text-muted-foreground">
            {post.description}
          </p>
        )}
      </header>
      <Mdx source={post.content} />
    </article>
  );
}
