/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "build",
  // images: {
  //   unoptimized: true,
  // },
  reactStrictMode: false,
  transpilePackages: [
    "antd",
    "@ant-design/colors",
    "kitchen-flow-editor",
    "@ant-design/pro-editor",
    "zustand",
    "leva",
  ],
};

module.exports = nextConfig;
