/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Automatically optimize images using Next.js built-in image optimization
    images: {
      remotePatterns: [{protocol: 'https',
        hostname: 'cg-website-storage.s3.ap-south-1.amazonaws.com',
      }], // Add domains you load images from (replace 'example.com' with your actual domains)
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/webp'], // Serve modern image format like WebP for better performance
    },
  
    // Use SWC for faster builds and minification
    swcMinify: true,
  
    // Enable production-level optimizations
    productionBrowserSourceMaps: false, // Disable source maps in production for smaller builds
  
    // Enable compression for better performance
    compress: true,
  
    // Custom headers for better caching and security
    async headers() {
      return [
        {
          source: '/(.*)', // Apply to all routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache static assets efficiently
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff', // Prevent MIME-type sniffing
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY', // Prevent clickjacking attacks
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block', // Enable XSS protection in browsers
            },
          ],
        },
      ];
    },
  
    // Enable Webpack 5 (default in Next.js 12+)
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
        };
      }
  
      // Enable advanced optimizations
      return config;
    },
  };
  
  export default nextConfig;
  