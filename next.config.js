/** @type {import('next').NextConfig} */
const nextConfig = {
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
