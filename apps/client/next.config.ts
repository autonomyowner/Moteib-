import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Payload CMS configuration
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(__dirname, './payload.config.ts'),
    };
    
    // For monorepo: resolve modules from root node_modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
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
  // For monorepo: transpile packages
  transpilePackages: ['@payloadcms/db-mongodb', '@payloadcms/richtext-slate', 'payload'],
};

export default nextConfig;
