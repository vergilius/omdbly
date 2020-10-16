const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = (env) => {
  const isDev = env === 'development';

  return {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    mode: isDev ? 'development' : 'production',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        'brainly-style-guide': path.resolve(__dirname, 'node_modules/brainly-style-guide/commonjs/'),
      }
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [{loader: 'ts-loader'}]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [{
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'public/img'),
        }] 
      }),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 3333,
      historyApiFallback: true
    }
  };
};
