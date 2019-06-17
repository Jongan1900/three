import React from 'react'
import ReactDom from 'react-dom'


const obj ={
    age:18,
    name:"hahaha",
    color:"yellow"
}

function Hello(props){
    console.log(props);
    return <h1>这是渲染付出来啊的都打我+++++{props.name}++++{props.age}</h1>
}


ReactDom.render(
    <Hello {...obj}></Hello>

,document.getElementById('app'))