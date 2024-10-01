/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["cdn.sanity.io", "via.placeholder.com"],
  },
};

export default nextConfig;
