import React from 'react'
import ReactDom from 'react-dom'


class message extends React.Component{
    constructor(){
        super(),
        this.state={
            CommentList = [
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }
    render(){
        return 
        <div>
            <h1>这是评论的组件</h1>
            {this.state.CommentList.map((item,index)=>{
                <div key={index}>

                    <h2>{item.user}</h2>
                </div>
            })}
          
        </div>
    }
}



ReactDom.render(<div>
    <message></message>
</div>,document.getElementById('app'))


