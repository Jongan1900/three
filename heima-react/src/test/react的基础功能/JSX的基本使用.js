import React from 'react';
import ReactDom from 'react-dom'

// const myh1=React.createElement('h1',{id:"myh1"},'这个h1');
// const myimg =React.createElement('img',{id:"myimg",src:'../src/img/menu1.png'})


let a=1;
let b=false;
let title="asdasd";
const h1=<h1>hahahah</h1>;

const arr=["1123","asd","xcxx"];
let arrstr=[];

arr.forEach(item=>{
    const temp=<h4 key={item}>{item}</h4>
    arrstr.push(temp)
});

// ReactDom.render(myh1,document.getElementById('app'))
ReactDom.render(<div>
{a+2}
{b?'yes':'no'}

<h2 title={title}>asd</h2>
{h1}
{arrstr}
</div>
    
    
    ,document.getElementById('app'))
