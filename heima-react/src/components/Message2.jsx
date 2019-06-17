import React from 'react'
import MsgItem from '@/components/MsgItem2'

import bootcss from 'bootstrap/dist/css/bootstrap.css'
console.log(bootcss);
//样式表没有单独的作用域，
import stylecss from '@/css/Style.css'
console.log(stylecss)

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
            <h1 className={[stylecss.title,'cccc'].join(' ')}>这是评论的组件</h1> 
            <button className={[bootcss.btn,bootcss['btn-danger'],bootcss['btn-lg'],bootcss['btn-block']].join(' ')}>按钮</button>
        {this.state.CommentList.map(item=><MsgItem key={item.id} {...item}></MsgItem>
        
               )}</div>
    }
}