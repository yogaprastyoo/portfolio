import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSanitize)
  .use(rehypeShiki, {
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  })
  .use(rehypeStringify);

export async function renderMarkdown(md: string): Promise<string> {
  const file = await processor.process(md);
  return String(file);
}
