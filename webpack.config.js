const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/App.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
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
  }
};
