/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/your-repo-name", // Replace with your repository name
  //   assetPrefix: "/your-repo-name/", // Replace with your repository name
  output: "export", // Ensure static export
  images: { unoptimized: true },
};

export default nextConfig;
