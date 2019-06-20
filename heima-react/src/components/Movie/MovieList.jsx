import React, { Component } from 'react'

import { Spin, Alert ,Pagination} from 'antd';
import fetchJSONP from 'fetch-jsonp'
import MovieItem from 'myc/Movie/MovieItem'



export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
            movies: [],
            count: 24,
            nowPage: parseInt(props.match.params.id) || 1,
            total: 0,
            movieType: props.match.params.type,
        }
        // console.log(data);
    }
    componentWillMount() {
        this.loadMovieList();
        // const data =require("@/components/test_data/coming_soon.json")
        // console.log(data);
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        //每当地址栏的地址发生变化，重置state中的参数项，重置完毕再次发送数据请求
        // console.log(nextProps.match,this);
        this.setState({
            isloading: true,//重新加载
            nowPage: parseInt(nextProps.match.params.id) || 1,//重新定义当前页数
            movieType: nextProps.match.params.type,//重新定义电影类型
        }, function () {//设置回调，重置参数项后执行
            this.loadMovieList()//执行数据请求
        })
    }
    componentWillUpdate(nextProps,nextState){
        // console.log(nextProps)
        // console.log(nextState)
    }
    loadMovieList = () => {
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", 'myc/Movie/top250.json');
        // xhr.send();
        // xhr.onload = function(){
        //     console.log(xhr.responseText)
        // }
        // console.log(this.state.movieType)
        //这是本地文件中模拟假数据的效果(读取不了文件)
        // var data=require('./abc.json')
        // console.log('data:',data.a);
        // const data =require('../test_data/' + this.state.movieType + '.js')
        // console.log(this);
        // setTimeout(() => {
        //     console.log(this);
        //     this.setState({
        //         isloading: false,
        //         movies: data.a.subjects,
        //         total: data.a.total
        //     })
        // }, 2000)


        //这是假数据的请求
        // fetchJSONP("https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b")
        // .then(response=>response.json()).then(data=>{ 
        //     console.log(data);
        //     this.setState({
        //             isloading:false,
        //             movies:data.subjects,
        //             total:data.total
        //            })
        //         })

        // 这个是真实请求数据，防止请求过多
                var start=this.state.count*(this.state.nowPage-1)
            const url=`https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0b2bdeda43b5688921839c8ecb20399b&count=${this.state.count}&start=${start}`
                fetchJSONP(url)
                .then(response=>response.json()).then(data=>{
                this.setState({
                    isloading:false,
                    movies:data.subjects,
                    total:data.total

                })
                })

    }
    pageChange=(page)=>{
        //手动跳转的方式不适用，
            // window.location.href='#/movie/'+this.state.movieType+'/'+page
        //使用编程式导航
        this.props.history.push('/movie/'+this.state.movieType+'/'+page)

    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
    renderList = () => {
        if (this.state.isloading) {
            //spinning,是否为加载中的状态
            return <Spin tip="Loading..." delay={3000} size={"large"}>
                <Alert
                    message="这个一个正在加载的动画效果"
                    description="please wait some time loading"
                    type="info"

                />
            </Spin>
        } else {
            return <div>
                <div style={{ "display": "flex", "flexWrap": "wrap" }}>
            {this.state.movies.map(item => {
                                                        //给子组件传一个history，作用是子组件也能够调用push的方法
                return <MovieItem {...item} key={item.id} history={this.props.history} ></MovieItem>
            })}
            
        </div>
       <Pagination defaultCurrent={this.state.nowPage} total={this.state.total}  pageSize={this.state.count} onChange={this.pageChange}/></div>
            
        }
    }
}
