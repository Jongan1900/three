var path=require('path');
const hh=require('html-webpack-plugin');
const webpack=require('webpack');


module.exports={
  entry:path.join(__dirname,'./src/main.js'),
  //配置入口文件
  output:{
    //配置出口文件
        path:path.join(__dirname,'./dist'),
        filename:'ddd.js',
        //自定义命名
  },
  devServer:{
    open:true,//是否打开窗口
    port:3000,//端口号
    contentBase:'src',//默认打开的路径
    hot:true,//是否开启热加载
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    // 加载热更新的软件
    new hh({
      template:path.join(__dirname,'./src/index.html'),
      // 指定生成html文件的页面
      filename:'index.html',
      //自定义一个文件名字
    })
  ],
  module:{
      // 配置第三方模块的加载器
    rules:[
      // 配置加载的规则
      {
        test:/\.css$/,
        use:['style-loder','css-loader']
      },
      {
        test:'/.\less$/',
        use:['style-loader','css-loader','less-loader'],
      }

    ]
  }
}