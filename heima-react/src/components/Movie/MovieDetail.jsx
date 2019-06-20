import React, { Component } from 'react'
import { Button, Icon,Spin, Alert  } from 'antd';
export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading:true,
            list:[]
        }
    }

    componentWillMount(){

        const url ="https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/coming_soon_copy_1561024003291"
        fetch(url).then(response=>response.json()).then(data=>{
                data.subjects.forEach(item=>{
                    if(item.id==this.props.match.params.id){
                    console.log(item);
                    setTimeout(()=>{
                        this.setState({
                            isloading:false,
                            list:item
                            
                        })
                        console.log("我两秒后执行完成了");
                     },1000)}
                })
            
        })
        //  setTimeout(()=>{
        //     this.setState({
        //         isloading:false,

                
        //     })
        //     console.log("我两秒后执行完成了");
        //  },3000)
    }
    componentDidMount(){
        
      
    }
    render() {
        return (
            <div>
               {this.renderList()}
            </div>
        )
    }
    renderList=()=>{
        if(this.state.isloading){
            return <Spin tip="Loading..." delay={3000} size={"large"}>
            <Alert
                message="正在加载电影数据"
                description="please wait some time loading"
                type="info"

            />
        </Spin>
    } else {
        return <div><Button type="primary"  onClick={this.goBack}>
                 <Icon type="left" />
                        Go back
                </Button>
                    <h1>{this.state.list.title}||{this.state.list.original_title}</h1>
                    <img src={this.state.list.images.large} alt=""/>
                   
                    {this.state.list.directors.map(item=>{
                        return  <img src={item.avatars.large} key={item}/>
                    })}
                    {this.state.list.directors.map(item=>{
                        return   <h2 key={item.name}>导演：{item.name}</h2>
                    })}
                  
                   <h3>假装这是一条很长的详情数据</h3>
                     </div>


    }
        
    }
    goBack=()=>{
        // console.log(this)
        this.props.history.go(-1)
    }
}
