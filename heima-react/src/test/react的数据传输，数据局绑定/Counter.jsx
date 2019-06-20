import React from 'react'
import ReactT from 'prop-types'
export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:props.num
        }
    }
    static defaultProps={
        num:0
    }
    static propTypes={
        num:ReactT.number
    }
    render(){
        return <div>
           <h1> Counter </h1>
            <input type="button" value="+1" onClick={this.add}/> 
            <h2>当前的值是:
            <span>{this.state.msg}</span> </h2>
            </div>
    }
    add=()=>{
        this.setState({
            msg:this.state.msg+1
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState.msg);
        return true
    }
}