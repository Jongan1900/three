var db=require('./pool');

// console.log(db);
db('select * from checkname where psw=? ',['asdasd'],(data)=>{
    var ii=decodeURI(data[1]["name"]);
    console.log(ii);
})







