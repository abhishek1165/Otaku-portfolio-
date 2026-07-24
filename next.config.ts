import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          
  trailingSlash: true,       
  images: {
    unoptimized: true,       
  },
  allowedDevOrigins: ["fawn-piazzaed-cleveland.ngrok-free.dev"],
};

export default nextConfig;
