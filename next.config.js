/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // useFileSystemPublicRoutes: false,
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
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
