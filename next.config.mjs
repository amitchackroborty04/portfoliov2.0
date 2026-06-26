/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    webpackBuildWorker: false,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;