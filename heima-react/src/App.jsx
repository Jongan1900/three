
import React, { Component } from 'react'
//导入路由的必备
import { HashRouter, Link, Route } from 'react-router-dom'

//导入我们想要使用的组件 
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from './css/app.scss'
// 引入组件
import Home from 'myc/Home/HomeContainer'
import Movie from 'myc/Movie/MovieContainer'
import About from 'myc/About/AboutContainer'

export default class App extends Component {





    componentWillMount(){
        console.log(window.location.hash.split('/')[1])
    }
    render() {
        return (
            <HashRouter>
                <Layout className="layout" style={{ height: "100%" }}>


                    {/* {这是头部} */}
                    <Header>
                        <div className={styles.logo} />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home">
                                <Link to="/home" >首页</Link>
                            </Menu.Item>
                            <Menu.Item key="movie">
                                <Link to="/movie/in_theaters/1">电影</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about" >关于</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>

                    {/* {中间组件} */}
                    <Content style={{ backgroundColor: "#fff" ,flex:"1"}}>
                       <Route path="/home" component={Home}></Route>
                       <Route path="/movie" component={Movie}></Route>
                       <Route path="/about" component={About}></Route>
                    </Content>


                    {/* {这是底部} */}
                    <Footer style={{ textAlign: 'center' }}>CCCG ©2018 蠢蠢蠢古</Footer>
                </Layout>
            </HashRouter>
        )
    }
}
