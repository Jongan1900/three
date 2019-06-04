
// 首先引入express这个包
var  express=require("express");

// 实例化一个对象


var app=express();

// 接受来自客户端的请求，当请求为get的时候打印
app.get("/",function(req,res){
    res.send("你哈哦啊欢迎到来");
});


// app.get("/home*home",function(req,res){
//     res.send("到底什么是home*");
// });

app.get("/homeh?ome",function(req,res){
    res.send("到底什么是homeh+ome   ");
});

app.put("/put",function(req,res){
    res.send("到底什么是put  ");
});
// 监听端口为3000;
app.listen(3000)