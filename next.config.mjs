const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/temp-project' : '',
  assetPrefix: isProd ? '/temp-project/' : '',
  trailingSlash: true,
};

export default nextConfig;
