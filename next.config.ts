import type { NextConfig } from "next";

const supabaseHost = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co").hostname;

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: supabaseHost }] },
};

export default nextConfig;
