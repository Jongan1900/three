import React, { Component } from 'react'
import { Form, Select, Input } from 'antd'
import PropTypes from 'prop-types'
const Item = Form.Item
const Option = Select.Option
class AddForm extends Component {
    static propTypes={
        setForm:PropTypes.func.isRequired,//传递From的函数
        categorys:PropTypes.array.isRequired,//一级分类的列表
        parentId:PropTypes.string.isRequired,//父分类的ID
      }
      
      componentWillMount() {
          this.props.setForm(this.props.form)
      }
      
    render() {
        const {categorys,parentId}=this.props
        const { getFieldDecorator } = this.props.form;
        console.log(parentId)
        // console.log(categorys)
        return (

            <Form>
                <Item>
                    {
                        getFieldDecorator('parentId', {
                            initialValue:parentId,
                           
                        })(
                            <Select>
                                <Option value='0'>一级分类</Option>
                                {categorys.map(c=> <Option value={c._id} key={c._id}>{c.name}</Option>)}
                            </Select>
                        )
                    }

                </Item>
                <Item>
                {
                        getFieldDecorator('categoryName', {
                            initialValue: '' ,rules:[
                                {required:true,message:'请输入要添加的内容'}
                            ]
                        })(
                            <Input placeholder="请输入需要添加的分类"></Input>
                        )
                    }
                 
                </Item>
            </Form>
        )
    }
}
export default Form.create()(AddForm)