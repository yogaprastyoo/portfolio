import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./markdown";

describe("renderMarkdown", () => {
  it("renders GFM (tables)", async () => {
    const html = await renderMarkdown("| a |\n| - |\n| b |");
    expect(html).toContain("<table>");
  });
  it("strips script tags (sanitization)", async () => {
    const html = await renderMarkdown('hello <script>alert(1)</script>');
    expect(html).not.toContain("<script>");
    expect(html).toContain("hello");
  });
  it("syntax-highlights fenced code", async () => {
    const html = await renderMarkdown("```ts\nconst a = 1;\n```");
    expect(html).toContain("shiki");
  });
});
