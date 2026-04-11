/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ye build ke waqt ESLint errors ko ignore kar dega
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig