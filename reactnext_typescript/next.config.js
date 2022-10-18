/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

// module.exports = nextConfig
module.exports = {
  images:{
    domains:['openweathermap.org']
  }
}
