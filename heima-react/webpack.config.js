const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [ // 插件
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]-[hash:5]'] }, // 如果想要启用 CSS 模块化，可以为 css-loader 添加 modules 参数即可
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
      { test: /\.js|.jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve:{
    //表示这几个文件的后缀名都可以不加
    extensions:['.js', '.json','.jsx'],//省略后缀为js。json。jsx的文件
    alias: {
      '@':path.join(__dirname,'./src'),// 配置路径标识符，代表   项目录中src这一层路径，
      'myc':path.join(__dirname,'./src/components/')

    }
  }
}