/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(process.env.NEXT_DOCKER ?? '0' === '1' ? { output: 'standalone' } : {}),
}

export default nextConfig
