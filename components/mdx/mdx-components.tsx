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
          className="font-medium underline underline-offset-4"
        />
      );
    }
    return (
      <Link
        href={href}
        {...props}
        className="font-medium underline underline-offset-4"
      />
    );
  },
  h1: ({ ...props }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="mt-8 mb-4 text-xl font-bold" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  ul: ({ ...props }) => <ul className="my-6 ml-6 list-disc" {...props} />,
  ol: ({ ...props }) => <ol className="my-6 ml-6 list-decimal" {...props} />,
  li: ({ ...props }) => <li className="mt-2" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
      {...props}
    />
  ),
  code: ({ ...props }) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    />
  ),
};

interface MdxProps {
  source: string;
}

export function Mdx({ source }: MdxProps) {
  return (
    <div className="mdx">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
