// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

const build = {
  env: require('./prod.env'),
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: true,
  productionGzipExtensions: ['js', 'css', 'html'],
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report
}

const dev = {
  env: require('./dev.env'),
  host: 'localhost',
  port: 8080,
  autoOpenBrowser: true,
  errorOverlay: true,
  poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {},
  // CSS Sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the CSS-Loader README
  // (https://github.com/webpack/css-loader#sourcemaps)
  // In our experience, they generally work as expected,
  // just be aware of this issue when enabling this option.
  cssSourceMap: false
}

const workbox = {
  swDest: 'service-worker.js',
  clientsClaim: true,
  skipWaiting: true
}

const manifest = {
  filename: 'static/manifest.json',
  ios: true,
  fingerprints: false,
  name: 'App',
  short_name: 'App',
  theme_color: '#384148',
  background_color: '#384148',
  display: 'standalone',
  start_url: build.assetsPublicPath,
  orientation: undefined,
  icons: [
    {
      src: path.resolve(__dirname, '../assets/icon.svg'),
      sizes: [16, 32, 72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
      destination: path.join(build.assetsSubDirectory, './img/icons'),
      ios: true
    },
    {
      src: path.resolve(__dirname, '../assets/icon.svg'),
      size: '1024x1024', // you can also use the specifications pattern
      ios: 'startup',
      destination: path.join(build.assetsSubDirectory, './img/icons')
    }
  ]
}

module.exports = { build, dev, workbox, manifest }
