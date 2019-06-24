import React, { Component } from 'react'
// import {BrowserRouter,Route} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils.js'
//这是后台管理的路由组件
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Header from '../../components/header/header'
import LeftNav from '../../components/left-nav/left-nav'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
const { Footer, Sider, Content } = Layout;
export default class admin extends Component {

    render() {
        const user = memoryUtils.user
        //验证用户是否登录以后
        if (!user || !user._id) {
            //如果验证没有用户的信息，就会返回一个标签跳转到登录的页面
            return <Redirect to="/login"></Redirect>
        }
        return (
            <Layout style={{ height: "100%" }}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{ backgroundColor: "#fff" ,margin:20}}>
                        <Switch>
                            {/* <Redirect from='/' exact to='/home' /> */}
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path="/charts/bar" component={Bar} />
                            <Route path="/charts/pie" component={Pie} />
                            <Route path="/charts/line" component={Line} />
                            <Redirect to="/home"></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
