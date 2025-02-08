/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'localhost', 
      'storys-lab-fishing.com/',
      'www.storys-lab-fishing.com/',
      'storys-fishing-app.s3.amazonaws.com'
    ],
  },
}


export default nextConfig
