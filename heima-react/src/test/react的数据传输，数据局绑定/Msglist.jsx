import React from 'react'


import Msgitem from '@/Components/MsgItem'
import Msgbtn from '@/Components/Msgbtn'
export default class Msglist extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                { name: "hah", text: "haahahahah" },
                { name: "xxx", text: "xxxxxxxx" },
                { name: "dddd", text: "dddddddd" },
            ],
            style:
                { color: "red", "textAlign": 'center', "border": "1px dashed #ccc" }

        }
    }
    componentWillMount() {
        this.loader()
    }


    render() {
        return <div>
            <h1 style={this.state.style} >这是评论组件</h1>
            <Msgbtn reload={this.loader}></Msgbtn>
            {this.state.list.map(item => {
                return <Msgitem key={item.text} {...item} ></Msgitem>
            })}
        </div>
    }
    loader=()=> {
        var list = JSON.parse(localStorage.getItem('cmts') || "[]");
        this.setState({
            list
        })
        // console.log(this.state.list);

    }
}