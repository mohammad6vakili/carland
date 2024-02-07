/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // useFileSystemPublicRoutes: false,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.carland.ir",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["zaman"],
  reactStrictMode: false,
};

module.exports = nextConfig;
