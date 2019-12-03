const path = require('path');
const config = {
  entry: './static/less/index.less',
  output: {
    path: path.resolve(__dirname, 'static/style'),
    filename: 'style.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /.(jpg|png)$/,
        use: ['url-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: 8888
  }
};

module.exports = config;