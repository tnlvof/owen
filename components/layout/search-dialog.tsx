"use client";

import { Post } from "@/lib/types/post";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/lib/hooks/use-search";
import Link from "next/link";

interface SearchDialogProps {
  posts: Post[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ posts, open, onOpenChange }: SearchDialogProps) {
  const { searchResults, handleSearch } = useSearch(posts);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] overflow-hidden p-0">
        <DialogHeader className="px-4 pt-5">
          <DialogTitle>블로그 검색</DialogTitle>
        </DialogHeader>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput
            placeholder="블로그 글 검색하기... (⌘ + K)"
            className="border-none focus:ring-0"
            onValueChange={handleSearch}
          />
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
            <CommandGroup heading="검색 결과">
              {searchResults.map((post) => (
                <CommandItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col w-full"
                  >
                    <span className="text-sm font-medium">{post.title}</span>
                    {post.description && (
                      <span className="text-xs text-muted-foreground">
                        {post.description}
                      </span>
                    )}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
