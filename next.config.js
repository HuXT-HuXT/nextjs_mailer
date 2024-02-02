/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  experimental: {
    serverComponentsExternalPackages: [
     '@react-email/components',
     '@react-email/render',
     '@react-email/tailwind'
    ],
    externalDir: true // compile files that are located next to the .react-email directory
  },
}

module.exports = nextConfig
