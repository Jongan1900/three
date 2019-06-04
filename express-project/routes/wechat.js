// 引入这个express包
var express=require('express');
// 使用express.Rputer()这个方法
var router=express.Router();
var fs=require('fs');

// 定义进入的路由
router.get("/",(req,res,next)=>{
      
        let {
                message
        }=req.query;
        fs.appendFile('./public/liaotianjilu.html',`
        <p>${message}</p>`,(err)=>{
                console.log('成功追加信息')
        })
        res.send(`<p>wechat微信端口已经成功接入</p>`)
        res.end();
})

// 使用module.exports导出
module.exports=router;


