/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://randomfox.ca/images/*.jpg"], //make it 'your-domain.com'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomfox.ca",
        port: "",
        pathname: "/images/*.jpg",
      },
    ],
  },
};

export default nextConfig;
