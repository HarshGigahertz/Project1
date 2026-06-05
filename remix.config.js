/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: 'app',
  assetsBuildDirectory: 'build/client/assets',
  publicPath: '/assets/',
  serverBuildPath: 'build/index.js',
  serverMainFields: ['module', 'main'],
  serverMinVersion: '16.13.0',
  serverModuleFormat: 'esm',
  serverPlatform: 'node',
  tailwind: false,
  postcss: false,
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_lazyRouteDiscovery: true,
  },
};
