import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    onChange=(date, dateString) =>{
        console.log(date, dateString);
      }
    render() {
        return (
            <div>
                Homes
            </div>
        )
    }
}

