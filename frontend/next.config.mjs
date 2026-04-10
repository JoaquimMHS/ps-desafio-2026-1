/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',

      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
      },
    ]
    //domains: [process.env.NEXT_PUBLIC_API_DOMAIN, 'via.placeholder.com'],
  },
}

export default nextConfig
