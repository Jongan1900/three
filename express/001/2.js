const fs = require('fs');
const path = require('path');





function f1(fp, cg, sb) {
    fs.readFile(fp, 'utf-8', (err, data) => {
        if (err) return sb(err);
        cg(data);
    })
}
f1(path.join(__dirname, './1.txt'), (data) => {
    console.log(data);
    f1(path.join(__dirname, './2.txt'), (data) => {
        console.log(data);
        f1(path.join(__dirname, './3.txt'), (data) => {
            console.log(data);

        })
    })
}, (err) => {
    console.log(err);
})