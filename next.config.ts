import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formats modernes, bien plus légers que les JPEG/PNG d'origine
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
};

export default nextConfig;
