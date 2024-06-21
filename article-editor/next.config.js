/* eslint-disable  @typescript-eslint/no-var-requires */
const withFonts = require("next-fonts")
const withPlugins = require("next-compose-plugins")
const TerserPlugin = require("terser-webpack-plugin")
const path = require("path")

const nextConfig = {
  env: {
    BASE_URL: `${process.env.BASE_URL}`,
    API_ARTICLE_EDITOR: `${process.env.API_ARTICLE_EDITOR}`,
    API_VERSION: `${process.env.API_VERSION}`,
    API_ARTICLES: `${process.env.API_ARTICLES}`,
  },
  reactStrictMode: true,
  assetPrefix: `/${process.env.API_ARTICLE_EDITOR}`,
  images: {
    domains: ["images.ctfassets.net"],
    path: `${process.env.BASE_URL}/${process.env.API_ARTICLE_EDITOR}/_next/image`,
  },
  webpack: (config, _) => {
    config.module.rules.push({
      test: /\.ts(x)?/,
      use: "ts-loader",
      include: [path.resolve(__dirname, "../common/utils/APIRequests/"), path.resolve(__dirname, "../common/logs/")],
      exclude: [/node_modules/, path.resolve(__dirname, "../common/tests/cardsGenerator/assetsTransformer.js")],
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    }

    // Only disable function name mangling on the development environment
    if (process.env.NODE_ENV === "development") {
      const terser = config.optimization.minimizer.find((plugin) => plugin instanceof TerserPlugin)
      if (terser) {
        terser.options.terserOptions = {
          ...terser.options.terserOptions,
          keep_classnames: true,
          keep_fnames: true,
        }
      }
    }
    return config
  },
}

module.exports = withPlugins([withFonts], nextConfig)
