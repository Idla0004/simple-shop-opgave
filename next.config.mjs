/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
        search: "",
      },
    ],
    /* config options here */
  },
};

export default nextConfig;
