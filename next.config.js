/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.discordapp.net", "images-ext-1.discordapp.net", "cdn.discordapp.com"]
    },
    experimental: {
        serverComponentsExternalPackages: ['canvas'],
        serverActions: true
      },
}

module.exports = nextConfig
