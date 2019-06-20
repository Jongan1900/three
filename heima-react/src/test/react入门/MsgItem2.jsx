import React from 'react'
import Stylecss from '@/css/Style2.css'
console.log(Stylecss);

export default function MsgItem(props){
    return <div>
           <div className={Stylecss.title}>{props.user} </div><p>评论内容:{props.content}</p>
        </div>
    
}
