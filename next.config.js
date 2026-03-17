/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/covexall-b2b-corporate.html',
      },
    ];
  },
};

module.exports = nextConfig;
