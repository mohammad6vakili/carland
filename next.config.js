/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   unoptimized: true,
  // },
  images: {
    // domains: ["www.dextools.io"],
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
