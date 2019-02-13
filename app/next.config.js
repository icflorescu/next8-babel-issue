const withStylus = require('@zeit/next-stylus');

module.exports = withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]_[hash:base64:5]',
    camelCase: true
  }
});
