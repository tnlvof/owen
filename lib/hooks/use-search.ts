import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Post } from "@/lib/types/post";

interface SearchablePost {
  title: string;
  slug: string;
  description?: string;
}

const fuseOptions = {
  keys: ["title", "description"],
  threshold: 0.3,
};

export function useSearch(posts: Post[]) {
  const [searchResults, setSearchResults] = useState<SearchablePost[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchablePost>>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchablePosts = posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
    }));

    setFuse(new Fuse(searchablePosts, fuseOptions));
  }, [posts]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (!fuse || !searchQuery) {
      setSearchResults([]);
      return;
    }

    const results = fuse.search(searchQuery).map((result) => result.item);
    setSearchResults(results);
  };

  return {
    query,
    searchResults,
    handleSearch,
  };
}
