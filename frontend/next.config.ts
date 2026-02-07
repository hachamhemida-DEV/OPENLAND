import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/openland",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
