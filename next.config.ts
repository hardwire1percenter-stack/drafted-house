/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false,  // Disables Turbopack for builds (fixes styled-jsx false positive)
  },
};

module.exports = nextConfig;
