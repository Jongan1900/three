import React, { Component } from 'react'

//引入蚂蚁金服的组件模块
import { Layout, Menu } from 'antd';

//引入蚂蚁金服侧边栏的组件
const {  Content, Sider } = Layout;
import {Link,Route,Switch} from 'react-router-dom'

//引入电影列表页的组件
import Movielist from 'myc/Movie/Movielist'
import MovieDetail from 'myc/Movie/MovieDetail'
export default class MovieContainer extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    componentWillMount(){
        console.log(window.location.hash.split('#/')[1])
    }
    render() {
        return (
            <Layout style={{height:"100%"}}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu mode="inline" defaultSelectedKeys={[window.location.hash.split('/')[2]]}  style={{ height: '100%', borderRight: 0 }}>
                  <Menu.Item key="in_theaters">
                      <Link to="/movie/in_theaters/1">正在热映</Link>
                      </Menu.Item>
                  <Menu.Item key="coming_soon">
                  <Link to="/movie/coming_soon/1">即将上映</Link>
                      </Menu.Item>
                  <Menu.Item key="top250">
                  <Link to="/movie/top250/1">Top250</Link>
                     </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{paddingLeft:"1px"}}>
              <Content style={{  background: '#fff',padding: 10,margin: 0, minHeight: 280, }}>
                  {/* {//电影内容的匹配路由规则} */}
              <Switch>
              <Route path="/movie/detail/:id" component={MovieDetail}></Route>
              <Route path="/movie/:type/:id" component={Movielist}></Route>
              </Switch>
            
              </Content>
            </Layout>
          </Layout>
        )
    }
}
