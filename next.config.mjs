/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // Needed for GitHub Pages project sites
  basePath: isProd ? '/temp-project' : '',
  assetPrefix: isProd ? '/temp-project/' : '',

  // optional but helps with GH Pages routing of static export
  trailingSlash: true,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
