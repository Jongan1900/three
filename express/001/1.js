

const fs =require('fs');
const path =require('path');



// fs.readFile(path.join(__dirname,'./1.txt'),'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

function f1(fp,callback){
    fs.readFile(fp,'utf-8',(err,data)=>{
        if(err) return callback(err);
        callback(null,data);
    })
}
f1(path.join(__dirname,'./1.txt'),(err,data)=>{
    // console.log(data+'-------------');
    if(err) return console.log(err.message);
    console.log(data);
})