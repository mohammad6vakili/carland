/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   unoptimized: true,
  // },
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.carland.ir",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: false,
  // transpilePackages: ["react-leaflet"],
};

module.exports = nextConfig;
