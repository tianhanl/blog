const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : 'build.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      },
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    })
  ],
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
