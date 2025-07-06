/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mari-father-homepage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mari-father-homepage' : '',
}

module.exports = nextConfig