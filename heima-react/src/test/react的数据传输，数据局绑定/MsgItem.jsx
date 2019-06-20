import React from 'react'
export default class Msgitem extends React.Component {
    


    render() {
        return <div style={{color:"#66ccff","border":"1px solid #000"}}>
           {/* <h3>评论人：</h3>
           <h5>评论内容：</h5> */}
           <h3>评论人：{this.props.name}</h3>
           <h5>评论内容：{this.props.text}</h5>
        </div>
    }
}