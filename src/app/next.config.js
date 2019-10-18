const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  distDir: '../../dist/functions/next',
};

module.exports = withPlugins(
  [
    withCSS({
      webpack(config) {
        config.module.rules.push({
          test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/_next/static/',
              outputPath: 'static/',
              name: '[name].[ext]',
            },
          },
        });

        return config;
      },
    }),
  ],
  nextConfig,
);
