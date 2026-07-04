import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PARealty-MVP',
  assetPrefix: '/PARealty-MVP',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
