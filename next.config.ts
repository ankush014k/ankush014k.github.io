/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: "/ankush014k.github.io", // Replace 'YOGAFORLIFE' with your repo name
  images: {
    unoptimized: true, // Necessary for GitHub Pages since it doesn't support Next.js image optimization
  },
};

export default nextConfig;
