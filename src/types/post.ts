import type { MarkdownInstance } from "astro";

export interface PostFrontmatter {
  title: string;
  pubDate: Date;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  layout: string;
}

export type Post = MarkdownInstance<PostFrontmatter>;
