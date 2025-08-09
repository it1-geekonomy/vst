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
        destination: '/automotive-franchises?brand=volkswagen',
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
      {
        source: '/index.php/home/social',
        destination: '/education',
        permanent: true,
      },
      {
        source: '/index.php/home/volkswagon',
        destination: '/automotive-franchises/volkswagon',
        permanent: true,
      },
      {
        source: '/index.php/home/garagebangloor',
        destination: '/automotive-franchises?brand=mahindra',
        permanent: true,
      },
   
    
     
    ];
  },
};

module.exports = nextConfig;
