import React from 'react'
import ReactDom from 'react-dom'
//这个myc这个指令是我自己设置的
// import Hello from 'myc/Hello'
// 这个@设置也是我自己设置的
import Hello from '@/components/Hello'

const obj ={
    age:18,
    name:"hahaha",
    color:"yellow",
    title:"父组件向子组件传送了这个title"
}




ReactDom.render(
    <Hello {...obj}></Hello>

,document.getElementById('app'))