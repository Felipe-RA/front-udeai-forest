// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/landing',
          permanent: false, // Change to `true` for a permanent redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  