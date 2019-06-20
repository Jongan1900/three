import React from 'react'

// const divObj={paddingLeft:"10px",border:'1px dashed #ccc',marginBottom:"10px"}
// const divFw={fontWeight:"900"}
// const divColor={fontSize:"20px",color:"#66ccff"}
//二次封装函数
// const StyleObj={
//     divObj:{paddingLeft:"10px",border:'1px dashed #ccc',marginBottom:"10px"},
//     divFw:{fontWeight:"900"},
//     divColor:{fontSize:"20px",color:"#66ccff"}
// }
//引入自己创建的模块
import StyleObj from 'myc/StyleObj'

export default function MsgItem(props){
    return <div style={StyleObj.divObj}>
           <div style={StyleObj.divFw}>{props.user} </div><p style={StyleObj.divColor}>评论内容:{props.content}</p>
        </div>
    
}
