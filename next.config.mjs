/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // 👇 this makes Next.js output static HTML
  output: 'export',

  // 👇 required if deploying to a repo (https://username.github.io/repo)
  // replace REPO with your actual repository name
  // basePath: '/REPO',
  // assetPrefix: '/REPO/',
};

export default nextConfig;
