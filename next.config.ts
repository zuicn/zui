import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["www.baidu.com"],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
