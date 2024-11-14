import { PostCard } from "@/components/blog/post-card";

import { getAllPosts, getAvailableYears } from "@/lib/utils/mdx";

import { YearFilter } from "@/components/blog/year-filter";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function BlogPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  const posts = await getAllPosts();

  const years = await getAvailableYears();

  const filteredPosts = searchParams.year
    ? posts.filter((post) => post.year === searchParams.year)
    : posts;

  return (
    <div className="w-full dark:bg-gray-900 min-h-[calc(100vh-3.5rem)]">
      <div className="w-full mx-auto p-4">
        <div className="mb-6">
          <YearFilter years={years} />
        </div>

        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <div
              key={post.slug}
              className="opacity-0 animate-fade-in w-full"
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
