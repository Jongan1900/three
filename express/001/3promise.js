



const fs = require('fs');
const path = require('path');





function f1(fp, cg, sb) {
    fs.readFile(fp, 'utf-8', (err, data) => {
        if (err) return sb(err);
        cg(data);
    })
}


var f1=(fp)=>{
    return new Promise(function(resolve,reject){
        fs.readFile(fp, 'utf-8', (err, data) => {
            if(err) reject(err)
                resolve(data)

        })
    })
}

f1(path.join(__dirname,'./1.txt')).then((data)=>{
    console.log(data);
    return f1(path.join(__dirname,'./2.txt'))
}).then((data)=>{
    console.log(data);
    return f1(path.join(__dirname,'./3.txt'))
}).then((data)=>{
    console.log(data);

})
.catch((err)=>{
    console.log('??????')
})