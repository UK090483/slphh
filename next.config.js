/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");

const appConfig = require("./app.config.json");
const withPWA = require("next-pwa");
const { withSentryConfig } = require("@sentry/nextjs");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const shouldAnalyzeBundles = process.env.ANALYZE === "true";

console.log({ analyse: process.env.ANALYZE });

let nextConfig = {
  productionBrowserSourceMaps: shouldAnalyzeBundles,
  reactStrictMode: true,
  i18n: {
    locales: Object.keys(appConfig.locales),
    localeDetection: false,
    defaultLocale: Object.entries(appConfig.locales).reduce(
      (acc, [key, lang]) => (lang.isDefault ? key : acc),
      null
    ),
  },

  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
  },

  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "cdn.sanity.io", "hamburg-news.hamburg"],
  },

  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// module.exports = withSentryConfig(config, sentryWebpackPluginOptions);
if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer =
    require("next-bundle-analyzer")(/* options come there */);
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
