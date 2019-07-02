import React, {Component} from 'react'
import {
  Card,
  Icon,
  List
} from 'antd'

import LinkButton from '../../components/link-button/linkButton'
import logo from '../../assets/images/logo.gif'
// import {BASE_IMG_URL} from '../../utils/constants'
import {reqCategory} from '../../api'

const Item = List.Item


/*
Product的详情子路由组件
 */
export default class ProductDetail extends Component {
  state={
    cName1:'',
    cName2:'',
  }
async componentDidMount(){
  // 拿到id判断
  const {pCategoryId,categoryId}=this.props.location.state.product
  //如果有子ID，就发送两个请求
  if(categoryId){
    //第一种方法
    // const result1=await reqCategory(pCategoryId)
    // const result2=await reqCategory(categoryId)
    // const cName1=result1.data.name
    // const cName2=result2.data.name
    //第二种方式
    const results=await Promise.all([reqCategory(pCategoryId),reqCategory(categoryId)])
    const cName1=results[0].data||'一级分类'
    const cName2=results[1].data||'二级分类'

    this.setState({
      cName1,
      cName2
    })

  }else{//如果只有父ID，就发送一个请求
    const result=await reqCategory(pCategoryId)
    const cName1=result.data.name||'一级分类'
    this.setState({
      cName1
    })
  }
}

  render() {
    const {cName1,cName2}=this.state
    //通过父组件传递的数据获取到想要的数据
    const {name,desc,price} =this.props.location.state.product

  console.log(name)
    const title = (
      <span>
        <LinkButton>
          <Icon
            type='arrow-left'
            style={{marginRight: 10, fontSize: 20}}
            //返回路由
            onClick={()=>{this.props.history.goBack()}}
          />
        </LinkButton>

        <span>商品详情</span>
      </span>
    )

    return (
      <Card title={title} className='product-detail'>
        <List>
          <Item>
            <span className="left">商品名称:</span>
            <span>{name}</span>
          </Item>
          <Item>
            <span className="left">商品描述:</span>
            <span>{desc}</span>
          </Item>
          <Item>
            <span className="left">商品价格:</span>
            <span>￥{price}</span>
          </Item>
          <Item>
            <span className="left">所属分类:</span>
            <span>{cName1}{cName2?'-->'+cName2:''}</span>
          </Item>
          <Item>
            <span className="left">商品图片:</span>
            <span>
              <img src={logo} alt="" className="product-img"/>
            </span>
          </Item>
          <Item>
            <span className="left">商品详情:</span>
            {/* {这个语法是react提供的dangerouslySetInnerHTML={{__html:'<h1>asdadadasda</h1>'}}} */}
            <span dangerouslySetInnerHTML={{__html:'<h1>asdadadasda</h1>'}}>
            </span>
          </Item>

        </List>
      </Card>
    )
  }
}