/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ...(process.env.SKIP_LINTING ? { ignoreDuringBuilds: true } : {}),
  },
}

export default nextConfig
