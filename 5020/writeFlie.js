var fs=require('fs');

fs.writeFile("./66.txt","你是不成功了啊",function(error){
        
   if(error){
       console.log("写入失败");
   }else{
       console.log("写入成功");
       console.log(data.toString());
   }
});