## 前端规范文档
> 目的：使开发流程更加规范化

#### 目录结构

* api：所有请求
* assets：主题 字体等静态资源
* components：全局公用组件
* directive：全局指令
* filters：全局过滤器
* icons：项目所有 svg icons
* router：路由
* store：全局 store管理
* styles：全局样式
* utils ：全局公用方法
* views ：所有views组件
* App.vue： 入口页面
* main.js： 入口文件 加载组件 初始化等
* permission.js：权限管理

#### 代码规范

* views以二级路由建文件夹，如有三级路由则在里面再建文件夹，所有请求写在api文件夹内，views下的每个文件夹对应api一个文件
* 以两个空格缩进

#### 需注意问题

* 第二次弹窗没有清除第一次弹窗的验证规则
* 图片路径引用公共的auth.js



