const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    app: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    allowedHosts: 'all',
    open: true,
    client: {
      logging: 'none',
    },
    devMiddleware: {
      stats: 'errors-only'
    },
    onListening: function (devServer) {
      const port = devServer.server.address().port;
      console.log(`BeeFramework is running at http://localhost:${port}`);
    },
    historyApiFallback: true,
  },
  infrastructureLogging: {
    level: 'none',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
		{ from: 'node_server', to: '' },
      ]
    }),
    new CleanWebpackPlugin()
  ]
};
