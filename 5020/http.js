var http=require("http");
// http.createServer();创建一个服务器的
var server=http.createServer();


server.on("request",function(request,response){
    console.log("接受到客户端的请求了"+request.url);
    response.write("jajajaj");






    if(request.url=="/"){
       
        response.write("adsasdasd");
    }else if(request.url=="/aaa"){
        response.write("aaaaaa");
    }
    response.end();


})


server.listen(3000,function(){
    console.log("服务器启动了，可以通过http://127.0.0.1:3000/ 来进行访问")

})