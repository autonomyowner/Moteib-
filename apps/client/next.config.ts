import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Payload CMS configuration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(__dirname, './payload.config.ts'),
    };
    return config;
  },
  // Enable server components
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Vercel serverless optimization
  output: 'standalone',
};

export default nextConfig;
