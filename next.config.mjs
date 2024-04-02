/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_DOCKER && { output: 'standalone' }),
  eslint: {
    ...(process.env.SKIP_LINTING && { ignoreDuringBuilds: true }),
  },
  typescript: {
    ...(process.env.SKIP_TYPE_CHECKING && { ignoreBuildErrors: true }),
  },
}

export default nextConfig
