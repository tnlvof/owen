import { PostCard } from "@/components/blog/post-card";

import { getAllPosts } from "@/lib/utils/mdx";

// import { YearFilter } from "@/components/blog/year-filter";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function BlogPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  const posts = await getAllPosts();

  // const years = await getAvailableYears();

  const filteredPosts = searchParams.year
    ? posts.filter((post) => post.year === searchParams.year)
    : posts;

  return (
    <div className="w-full  ">
      <div className="max-w-[672px] mx-auto py-6">
        {/* <div className="mb-8">
          <YearFilter years={years} />
        </div> */}

        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.slug}
              className="opacity-0 animate-fade-in"
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
