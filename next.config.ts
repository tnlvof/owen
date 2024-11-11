import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm, {}]],
    rehypePlugins: [
      [rehypeSlug, {}],
      [rehypeHighlight, { ignoreMissing: true }],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["@mdx-js/loader"],
      },
    },
  },
};

export default withMDX(nextConfig);
