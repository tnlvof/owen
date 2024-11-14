import { Suspense } from "react";
import { getPostBySlug } from "@/lib/utils/mdx";
import { Mdx } from "@/components/mdx/mdx-components";
import { notFound } from "next/navigation";
import { PostLoading } from "@/components/blog/post-loading";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

async function BlogPost({ slug }: { slug: string }) {
  const post = await getPostBySlug(decodeURIComponent(slug));

  if (!post) {
    notFound();
  }

  return (
    <article className="p-8 mx-auto max-w-2xl min-w-full">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">{post.title}</h1>
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

// 인위적인 딜레이를 추가하는 함수
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function BlogPostPage(props: Props) {
  // 테스트를 위한 3초 딜레이
  //   await delay(3000);

  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<PostLoading />}>
      <BlogPost slug={params.slug} />
    </Suspense>
  );
}

// 정적 메타데이터 생성
export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = await getPostBySlug(decodeURIComponent(params.slug));

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}
