import React, { Component } from 'react'
import './index.less'
import logo from '../../assets/images/logo.gif'
import { Link,withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;
 class LeftNav extends Component {
  //第一种方法
 //#region
  getMenuList_m=(menuList)=>{
    return menuList.map(item=>{
      // 通过判断item中是否有children进行渲染
      if(!item.children){
        return <Menu.Item key={item.key}>
        <Link to={item.key}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
      }else{
        return <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </span>
        }
      >
        {/* {使用递归函数进行子路由的渲染} */}
       {this.getMenuList(item.children)}
      </SubMenu>
      }
    })
  }
   //#endregion
  componentWillMount(){
    this.MenuList=this.getMenuList(menuList)
    // debugger
  }
  //第二种方法
  getMenuList=(menuList)=>{
    let path=this.props.location.pathname
    if(path.indexOf('/product')===0){
      path='/product'
    }

    return menuList.reduce((pre,item)=>{
      if(!item.children){
        pre.push(( <Menu.Item key={item.key}>
        <Link to={item.key}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
        ))
      }else{
        //渲染的时候把记录当前的key保存起来
        const cItem=item.children.find(cItem=>path.indexOf(cItem.key)===0)
        console.log(cItem)
        if(cItem){
          this.openKey=item.key 
        }
        pre.push((
        <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </span>
        }
      >
        {/* {使用递归函数进行子路由的渲染} */}
       {this.getMenuList(item.children)}
      </SubMenu>))
      }
      return pre
    },[])
  }
  render() {
    console.log(this);
    //得到需要打开菜单项的key
    let path= this.props.location.pathname
    if(path.indexOf('/product')===0){
      path='/product'
    }
    const openKey=this.openKey
    return (
      
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="" />
          <h1>FOLLOW ONE后台管理系统
                    </h1>
        </Link >
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}//初始展开的 SubMenu 菜单项 key 数组 
          mode="inline"
          theme="dark"
        >
        
            {/* {渲染导航栏目} */}
            {/* {this.getMenuList(menuList)} */}
            {this.MenuList}
        </Menu>
      </div>


    )
  }
}
export default  withRouter(LeftNav)