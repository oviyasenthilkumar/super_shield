/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   turbopack: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "my-wp-site.local",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

