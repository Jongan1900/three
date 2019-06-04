// console.log(1);
// var fs=require('fs');
// console.log(fs)



// function rf(path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             };
//         });
//     });
// };

// rf('./1.txt').then((data)=>{
//     console.log(data.toString());
// }).catch(e=>{})




function test(resolve, reject) {
    var timeOut = Math.random() * 2;
   console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
};

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
//     console.log('成功：' + result);
// });
// var p3 = p2.catch(function (reason) {
//     console.log('失败：' + reason);
// });


// new Promise(test).then((result)=>{
//     console.log('成功：' + result);
// }).catch((reason)=>{
//     console.log('失败：' + reason);
// })

;(async()=>{
    const data=new Promise(test);
    console.log(data);
})()

