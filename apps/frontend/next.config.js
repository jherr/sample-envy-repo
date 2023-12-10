/** @type {import('next').NextConfig} */
const { withEnvy } = require("@envyjs/nextjs");

const nextConfig = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: false,
};

const envyConfig = {
  serviceName: "frontend",
};

module.exports = withEnvy(nextConfig, envyConfig);
