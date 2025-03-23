/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wolffcar-vitrine' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wolffcar-vitrine' : '',
}

module.exports = nextConfig 