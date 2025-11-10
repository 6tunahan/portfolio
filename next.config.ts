import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  assetPrefix: '.',
  basePath: '',
};

export default nextConfig;
