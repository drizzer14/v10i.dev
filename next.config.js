const withPWA = require('next-pwa');
const compose = require('fnts/compose').default;
const runtimeCaching = require('next-pwa/cache');

const webpack = require('./webpack.config');
const logNextConfig = require('./scripts/log-next-config.middleware');

module.exports = compose(
  logNextConfig,
  withPWA
)({
  webpack,
  pwa: {
    dest: 'public',
    sw: 'service.worker.js',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    dynamicStartUrl: false,
    reloadOnOnline: false,
    buildExcludes: [/-manifest\.json$/, /chunks\/pages\/api\/.*/],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites: async () => [
    {
      source: '/',
      destination: '/posts',
    },
    {
      source: '/p/:id',
      destination: '/posts/:id',
    },
  ],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  serverRuntimeConfig: {
    gitHubAPIURL: process.env.GITHUB_API_URL,
    gitHubAPIToken: process.env.GITHUB_API_TOKEN,
    gitHubContentRepoOwner: process.env.GITHUB_CONTENT_REPO_OWNER,
    gitHubContentRepoName: process.env.GITHUB_CONTENT_REPO_NAME,
  },
  env: {
    apiURL: process.env.API_URL,
    apiRequestCacheTTL: 1000 * 60 * 60,
  },
});
