var express=require('express');
// var router=express.Router();

var router=express.Router();
var db=require('./pool');
// / login 端口
router.post('/', function(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let {
      u,
      p
    }=req.body;
    console.log(u,p);
   
    var sqlarr=[u,p];
    console.log(sqlarr);
    db('select * from login where name=? and psw=? ',sqlarr,(data)=>{
     console.log(data);
    //  console.log(err);
    if(data){
      res.send("登录成功");
    }else{
      res.send("登录失败");
    }
      

      // if(u=="123456"&&p=="asdasd"){
      //   res.send(`<p>登录成功</p>`);
      //   res.end();
      // }else{
      //   res.send(`<p>登录失败</p>`);
      //   res.end();
      // }
  })
    
    
  });

  router.get('/login', function(req, res, next) {
    // res.render('index', { title: 'Express' });

    res.append('Access-Control-Allow-Origin', '*');
  
    // res.send(`<p>login跨域已经成功接入</p>`)
  
    let {
      u,
      p
    }=req.query;
    console.log(u,p);
    if(u=="123456"&&p=="asdasd"){
      res.send(`<p>登录成功</p>`);
      res.end();
    }else{
      res.send(`<p>登录失败</p>`);
      res.end();
    }
    
  });
  module.exports = router;