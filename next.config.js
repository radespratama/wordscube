/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    CODE_AVATAR: process.env.CODE_AVATAR,
    INFO_INSTAGRAM_URL: process.env.INFO_INSTAGRAM_URL,
    INFO_CHAT_URL: process.env.INFO_CHAT_URL,
  },
};

module.exports = nextConfig;
