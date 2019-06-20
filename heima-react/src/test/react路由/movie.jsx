import React, { Component } from 'react'
import { Select } from 'antd';

export default class Movie extends Component {
    constructor(props){
        super(props)
        this.state={
            RouteParams:props.match.params
        }
    }
    render() {
        console.log(this)
        return (
            <div>
                <Select></Select>
                <br/>
                Movietype+++++{this.state.RouteParams.type}
            </div>
        )
    }
}

