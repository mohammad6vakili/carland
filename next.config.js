/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  reactStrictMode: true,
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
