/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: !debug ? "/meta" : "",
  basePath: !debug ? "/meta" : "",
};

module.exports = nextConfig;
