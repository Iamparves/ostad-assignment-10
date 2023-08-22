/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "roar.media",
      },
    ],
  },
};

module.exports = nextConfig;
