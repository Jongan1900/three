var http=require("http");
var fs=require('fs');

var server=http.createServer();

server.on("request",function(req,res){

    
    // console.log(req.url);
    // console.log(req.socket.remotePort);
    // console.log(req.ip);
    var url=req.url;
    var filepath='/index.html';
    // var wwwdir='D:/HTML5ZhuanYong/wamp64/www';
    var wwwdir='C:/Users/Administrator/Desktop/0507-0519/site/src';
    if(url!=="/"){
       filepath=url;
        fs.readFile(wwwdir+filepath,(err,data)=>{
            if(err){
                return res.end('404 Not Found.')
            }
            res.end(data);
        });
    }
//   console.log(filepath,wwwdir+filepath);
})


server.listen(3000,function(){
    console.log("服务器启动了, 通过http://127.0.0.1:3000/ 访问")
})






