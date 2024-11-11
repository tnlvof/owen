import { getPostBySlug } from "@/lib/utils/mdx";
import { Mdx } from "@/components/mdx/mdx-components";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = await getPostBySlug(decodeURIComponent(params.slug));

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

// 정적 메타데이터 생성
export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = await getPostBySlug(decodeURIComponent(params.slug));
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}
