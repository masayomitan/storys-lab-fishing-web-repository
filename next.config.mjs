/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'localhost', 
      'www.storys-lab-fishing.com/'
    ],
  },
};


export default nextConfig;
