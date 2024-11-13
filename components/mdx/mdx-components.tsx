import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  Image,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded px-1 transition-colors"
        />
      );
    }
    return (
      <Link
        href={href}
        {...props}
        className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded px-1 transition-colors"
      />
    );
  },
  h1: ({ ...props }) => (
    <h1
      className="mt-10 mb-6 text-[1.6rem] font-bold text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="mt-8 mb-4 text-[1.4rem] font-semibold text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="mt-6 mb-4 text-[1.2rem] font-medium text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className="leading-7 [&:not(:first-child)]:mt-4 text-[0.9rem] text-gray-600 dark:text-gray-300"
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul
      className="my-4 ml-6 list-disc marker:text-gray-400 dark:marker:text-gray-500 text-[0.9rem]"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ol
      className="my-4 ml-6 list-decimal marker:text-gray-400 dark:marker:text-gray-500 text-[0.9rem]"
      {...props}
    />
  ),
  li: ({ ...props }) => (
    <li
      className="mt-2 text-[0.9rem] text-gray-600 dark:text-gray-300"
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="mt-4 border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic text-gray-500 dark:text-gray-400 text-[0.85rem] bg-gray-50 dark:bg-gray-800/50 py-2 rounded-r"
      {...props}
    />
  ),
  code: ({ ...props }) => (
    <code
      className="relative rounded bg-gray-100 dark:bg-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-[0.72rem] text-pink-500 dark:text-pink-400"
      {...props}
    />
  ),
  pre: ({ ...props }) => (
    <pre
      className="mt-4 mb-4 overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-800/80 p-4 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-gray-800 dark:[&>code]:text-gray-200"
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-8 border-gray-200 dark:border-gray-800" {...props} />
  ),
  table: ({ ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className="w-full text-[0.9rem] text-gray-600 dark:text-gray-300"
        {...props}
      />
    </div>
  ),
  th: ({ ...props }) => (
    <th
      className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-medium bg-gray-50 dark:bg-gray-800/50"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td
      className="border border-gray-200 dark:border-gray-700 px-4 py-2"
      {...props}
    />
  ),
};

interface MdxProps {
  source: string;
}

export function Mdx({ source }: MdxProps) {
  return (
    <div className="mdx prose dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
