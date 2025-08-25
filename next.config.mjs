/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',                 // <— important
  // If deploying to https://USER.github.io/REPO, also set:
  // basePath: '/REPO',
  // assetPrefix: '/REPO/',
};
export default nextConfig;
