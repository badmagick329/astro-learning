// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const posts = defineCollection({
  loader: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data.map((post: any) => ({
      id: String(post.id),
      userId: post.userId,
      title: post.title,
      body: post.body,
    }));
  },
  schema: z.object({
    userId: z.number(),
    title: z.string(),
    body: z.string(),
  }),
});

export const collections = { blog, posts };
