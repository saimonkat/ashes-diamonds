const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  reactStrictMode: false,
  swcMinify: true,
  forceSwcTransforms: true,
  optimizeFonts: true,
  env: {
    BASE_API_URL: "https://dashboard.ashesdiamond.com/api",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "conexwest-doors.opserver.store",
      },
      {
        protocol: "https",
        hostname: "admin.ashes-diamonds.opserver.store",
      },
    ],
  },
  syntax: "postcss-scss",
  distDir: "_next",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
});
