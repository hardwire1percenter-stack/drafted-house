/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false,  // ← This disables Turbopack and fixes the styled-jsx error
  },
};

module.exports = nextConfig;
