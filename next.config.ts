/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
