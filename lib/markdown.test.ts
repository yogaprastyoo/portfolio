import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./markdown";

describe("renderMarkdown", () => {
  it("renders GFM (tables)", async () => {
    const html = await renderMarkdown("| a |\n| - |\n| b |");
    expect(html).toContain("<table>");
  });
  it("allows raw HTML while stripping script tags (sanitization)", async () => {
    const html = await renderMarkdown("Press <kbd>Ctrl</kbd> <script>alert(1)</script>");
    expect(html).toContain("<kbd>Ctrl</kbd>");
    expect(html).not.toContain("<script>");
  });
  it("strips dangerous attributes from raw HTML", async () => {
    const html = await renderMarkdown('<b onclick="alert(1)">hi</b>');
    expect(html).toContain("<b>hi</b>");
    expect(html).not.toContain("onclick");
  });
  it("syntax-highlights fenced code", async () => {
    const html = await renderMarkdown("```ts\nconst a = 1;\n```");
    expect(html).toContain("shiki");
    expect(html).toContain("--shiki-dark");
  });
});
