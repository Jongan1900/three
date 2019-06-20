import React from 'react'
import MsgItem from '@/components/MsgItem'
// const h1Obj={color:"red",fontSize:"24px",textAlign:"center"}
//引入自己创建的style模块
import StyleColor from 'myc/StyleColor'

export default class Message extends React.Component{
    constructor(){
        super(),
        this.state={
            CommentList : [
                { user: '张三', content: '哈哈，沙发' ,id:1},
                { user: '张三2', content: '哈哈，板凳',id:2 },
                { user: '张三3', content: '哈哈，凉席' ,id:3},
                { user: '张三4', content: '哈哈，砖头' ,id:4},
                { user: '张三5', content: '哈哈，楼下山炮',id:5 }
            ]
        }
    }
    render(){
        console.log(this.state.CommentList);
        return <div>
            <h1 style={StyleColor.Color}>这是评论的组件</h1> 
        {this.state.CommentList.map(item=><MsgItem key={item.id} {...item}></MsgItem>

               )}</div>
           
   
    }
}