import React from 'react'

    import ReactTypes from 'prop-types'
export default class Com1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }
    render(){
        return <div>
            <h1>111</h1>
            <Com2></Com2>
        </div>
       
    }
    getChildContext(){
        return {
            color:this.state.color
        }
    }
    static childContextTypes={
        color:ReactTypes.string//规定了传给子组件的数据类型
    }
}

class Com2 extends React.Component{
   
    render(){
        return <div>
            <h3>222</h3>

            <Com3></Com3>
        </div>
    }
}



class Com3 extends React.Component{
   static contextTypes={//要做属性校验
    //    color:ReactTypes.string
       color:ReactTypes.string
   }
    render(){
        return <div>
            <h4 style={{color:this.context.color}}>333--{this.context.color}</h4>
        </div>
    }
}