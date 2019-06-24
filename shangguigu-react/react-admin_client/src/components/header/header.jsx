import React, { Component } from 'react'
import './index.less'
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd'
import {formateDate} from '../../utils/dateUtils.js'
import {reqWeather} from '../../api/index.js'
import menuList from '../../config/menuConfig'
import memoryUtils from '../../utils/memoryUtils.js'
import storageUtils from '../../utils/storageUtils'
import LinkButton from '../link-button/linkButton'
class Header extends Component {
  state={
    currentTime:formateDate(Date.now()),//当前时间的字符串
    dayPictureUrl:'',//天气图片的url
    weather:'',//天气的文本
  }

  getTime=()=>{
    //每隔1s获取当前的时间，并且更新状态数据currentTime
   this.timeid= setInterval(()=>{
      const currentTime=formateDate(Date.now())
      this.setState({currentTime})
    },1000)
  }
//获取当前城市的天气预报
  getWeather=async ()=>{
    const result=await reqWeather('广州')
    const {dayPictureUrl,weather}=result
    this.setState({
      dayPictureUrl,
      weather
    })
  }
  getTitle=()=>{
    const path=this.props.location.pathname
    let title
    menuList.forEach(item=>{
        if(item.key===path){//如皋单签的key和path相同
          title=item.title
        }else if(item.children){
          //通过find的方法如果找到就得到一个返回值
          const cItem=item.children.find(cItem=>cItem.key===path)
          if(cItem){
            title=cItem.title
          }
        }
    })
    // console.log(title);
    return title
  }

  //退出登录
  logout=()=>{
    Modal.confirm({
      title: '你确定要退出登录吗?',
      onOk:()=> {
        console.log('OK');
        storageUtils.removeUser()
        memoryUtils.user={}
        this.props.history.replace('/login')
      },
    
    });
  }

//第一次render()之后执行一次，一般在此执行异步操作：发ajax请求/启动定时器
  componentDidMount(){
    //获取时间
    this.getTime()
    //获取天气预报
    this.getWeather()
    
  }
  componentWillUnmount(){
    clearInterval(this.timeid)
  }
    render() {
      const {dayPictureUrl,weather,currentTime}=this.state
      const username=memoryUtils.user.username
      const title=this.getTitle()
        return (
            <div className="header">
              <div className="header-top">
                <span>欢迎,{username} </span>
                {/* {自己捣鼓出一个LinkButton} */}
                <LinkButton onClick={this.logout}>退出</LinkButton>
              </div>
              <div className="header-bottom">
                <div className="header-bottom-left">{title}</div>
                <div className="header-bottom-right">
                  <span>{currentTime}</span>
                  <img src={dayPictureUrl} alt="weather"/>
                  <span>{weather}</span>
                </div>
              </div>
            </div>
          )
    }
}


export default withRouter(Header)