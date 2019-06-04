var config=require('./conn');
var mysql=require('mysql');
var pool=mysql.createPool({
    // 连接限制数，取决于硬件
    connectionLimit:10,
    // 解构
    ...config
});
sql='select * from checkname where name=52542 and psw="asdasd"';
pool.query(sql,function(error,results,fields){
    
    if(error) throw error;
    if(error===null){
        console.log("登录失败");
    }else{
        
    }
    
   
    // console.log(results);
// console.log(results[0]['psw']);
});
