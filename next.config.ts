/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false,  // Disables Turbopack (fixes styled-jsx false positive bug)
  },
};

module.exports = nextConfig;
