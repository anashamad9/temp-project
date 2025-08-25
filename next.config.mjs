const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/temp-project" : "",
  assetPrefix: isProd ? "/temp-project/" : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/temp-project" : "",
  },
};
