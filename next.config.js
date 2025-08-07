/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      // Old vstgroup.com URLs redirecting to new internal paths
      {
        source: '/index.php/home/volkswagon',
        destination: '/manufacture',
        permanent: true,
      },
      {
        source: '/index.php/home/oeparts',
        destination: '/auto-parts',
        permanent: true,
      },
      // Add more redirects as needed for other old URLs
      {
        source: '/index.php/home/mercedes',
        destination: '/automotive-franchises/mercedes',
        permanent: true,
      },
   
    
     
    ];
  },
};

module.exports = nextConfig;
