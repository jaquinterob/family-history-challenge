/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/backend",
        destination: "http://localhost:3001",
      },
    ];
  },
};

export default nextConfig;
