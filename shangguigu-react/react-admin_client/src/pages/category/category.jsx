import React, { Component } from 'react'

import { Card, Button, Icon, Table, message, Modal } from 'antd'
import LinkButton from '../../components/link-button/linkButton'
// import { Table, Divider, Tag } from 'antd';
/*
品类管理
*/
import AddForm from './addForm'
import UpdateForm from './update-form'
import { reqCategorys, reqAddCategory, reqUpdateCategory } from '../../api/index'
export default class Category extends Component {

  state = {
    isloading: false,//是否显示正在加载的动画
    categorys: [],//一级分类列表
    subCategorys: [],//二级分类列表
    parentId: '0',//当前需要显示的分类列表的父分类ID
    parentName: '',//当前需要显示的分类列表的父分类的名称
    showStatus: 0,//是否显示弹框的标识，0不显示，1位显示添加，2为显示更新
  }
  initColumns = () => {
    this.columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '操作',
        width: 300,
        render: (categorys) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(categorys)}>修改分类</LinkButton>
            {this.state.parentId === '0' ? <LinkButton onClick={() => { this.showSubCategory(categorys) }}>查看子分类</LinkButton> : null}

          </span>)
      },

    ];
  }
  //
  componentWillMount() {
    this.initColumns()
  }
  //发送
  componentDidMount() {
    this.getCategorys()
  }
  //点击查看子分类的时候
  showSubCategory = (categorys) => {
    // console.log(categorys)
    this.setState({
      parentId: categorys._id,
      parentName: categorys.name
    }, () => {//异步请求，等id状态更新以后再调用 this.getCategorys()
      this.getCategorys()
    })
  }

  //点击一级菜单返回
  showCategory = () => {
    //清空所有原来的二级菜单的数据
    this.setState({
      parentId: "0",
      parentName: '',
      subCategorys: []
    })
  }

  //点击添加的时候显示弹框
  isAdd = () => {
    this.setState({
      showStatus: 1
    })
  }
  //点击更新的时候显示弹框
  showUpdate = (category) => {
    // console.log(category)
    //保存分类对象
    this.setState({
      showStatus: 2
    })
    this.category = category
  }
  //点击OK添加商品分类
  addCategory = () => {
    this.form.validateFields(async (err, values) => {
      if (!err) {
        // 隐藏确认框

        this.setState({
          showStatus: 0
        })
        //收集数据并且提交请求
        const { parentId, categoryName } = values
        // console.log(parentId, categoryName);
        //清除/重置输入数据
        this.form.resetFields()
        const result = await reqAddCategory(categoryName, parentId)
        if (result.status === 0) {
          //当前的id页和表单中选中的parentId相同重新获取分类列表显示
          if (parentId === this.state.parentId)
            this.getCategorys()
        } else if (parentId === '0') {
          //在二级分类列表下添加一级分类，重新获取一级分类列，但是不需要显示一级列表
          this.getCategorys('0')
        }
      }
    })

  }
  //点击OK更新分类
  updateCategory =  () => {
    this.form.validateFields(async(err, values) => {
      if (!err) {
        //准备数据
        this.setState({
          showStatus: 0
        })
        const categoryId = this.category._id
        const {categoryName} =values
        //清除/重置输入数据
       
        const result = await reqUpdateCategory({ categoryId, categoryName })
        this.form.resetFields()
        //发送请求更新
        // console.log(result);
        if (result.status === 0) {
          this.getCategorys()
          message.success('更新成功')
        }
      }
    })
    

  }
  //关闭弹窗
  handleCancel = () => {
    //清除/重置输入数据
    this.form.resetFields()
    this.setState({
      showStatus: 0
    })
  }
  //发送ajax请求
  getCategorys = async (parentId) => {
    this.setState({
      isloading: true
    })
    //获取最新数据的parentId
    parentId = parentId || this.state.parentId
    //parentId作为参数发起请求
    const result = await reqCategorys(parentId)
    this.setState({
      //关闭加载动画的效果
      isloading: false
    })
    //判断是否成功接收到数据
    if (result.status === 0) {
      const categorys = result.data
      //判断parentId是否为0，不为0则进入到二级菜单
      if (parentId === '0') {
        this.setState({
          categorys
        })
      } else {
        this.setState({
          //二级菜单存储到subCategorys
          subCategorys: categorys
        })
      }

    } else {
      message.error('获取列表失败，请重新尝试')
    }
  }

  render() {
    const { categorys, isloading, subCategorys, parentId, parentName, showStatus } = this.state
    const category = this.category || {}
    // console.log("+++++++++++++++++++++"+category.name)
    // console.log("+++++++++++++++++++++" + parentId)
    const title = parentId === '0' ? "一级菜单" : (
      <span>
        <LinkButton onClick={this.showCategory}>一级菜单</LinkButton>
        <Icon type="arrow-right" style={{ marginRight: 10 }}></Icon>
        <span>{parentName}</span>
      </span>
    )

    const extra =
      (<Button type="danger" onClick={this.isAdd}><Icon type="plus"></Icon>添加</Button>)

    return (

      <Card title={title} extra={extra}>
        {/* {判断当前parentId的值，如果当前的值是0，那渲染categorys，否则渲染subCategorys} */}
        {/* {defaultPageSize设置一页显示多少条数据，showQuickJumper是否允许快速跳转} */}
        <Table dataSource={parentId === '0' ? categorys : subCategorys} columns={this.columns} bordered rowKey="_id"
          loading={isloading} pagination={{ "defaultPageSize": 8, showQuickJumper: true, }} />;

        <Modal
          title="添加分类"
          visible={showStatus === 1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}
        >
          <AddForm
            parentId={parentId}
            categorys={categorys}
            setForm={(form) => { this.form = form }}
          >添加分类</AddForm>
        </Modal>
        <Modal
          title="更新分类"
          visible={showStatus === 2}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}
        >
          <UpdateForm
            categoryName={category.name}
            //  {通过组件传值把setForm传递给子组件}
            setForm={(form) => { this.form = form }}
          ></UpdateForm>
        </Modal>
      </Card>
    )
  }
}
