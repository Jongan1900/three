import React from 'react'


export default class Messagebtn extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"hhh"
        }
    }
    render(){
        return <div>
            <h1>{this.state.msg}</h1>
            <button onClick={()=>{this.btnclick('加哈')}}>按钮</button>
            <h2>{this.state.msg}</h2>
            <input type="text" value={this.state.msg} onChange={()=>{this.txtChange()}} ref="txt" style={{width:'100%'}}/>
        </div>
    }
    txtChange=()=>{
        console.log(this.refs.txt.value);
    const newVal=this.refs.txt.value
        this.setState({
            msg:newVal
        })
    }
    btnclick=(arg)=>{
      this.setState({
          msg:"jiaha"
      })
    }
}