import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The local Cloudflare preview has no image-optimizer fetch binding. Serve
  // the supplied image assets directly so previews and deployed pages agree.
  images: { unoptimized: true },
};

export default nextConfig;
