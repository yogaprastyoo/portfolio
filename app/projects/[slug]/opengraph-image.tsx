import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/queries";
import { SITE } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background: "#0f0f0f",
        color: "#fff",
      }}
    >
      <div style={{ fontSize: 28 }}>YogaPras. / projects</div>
      <div style={{ fontSize: 64, fontWeight: 600 }}>{project?.title ?? SITE.name}</div>
      <div style={{ fontSize: 28, color: "#a3a3a3" }}>{SITE.url.replace("https://", "")}</div>
    </div>,
    size,
  );
}
