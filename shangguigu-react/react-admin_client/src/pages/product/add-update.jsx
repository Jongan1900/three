import React, { Component } from 'react'
import {
    Card,
    Form,
    Input,
    Icon,
    message,
    Select,
    Button,
    Cascader
} from 'antd'
import LinkButton from '../../components/link-button/linkButton'
import { reqCategorys } from '../../api/index'
import PicturesWall from './pictures-wall'
const { Item } = Form
const { Option } = Select;
const { TextArea } = Input;


/**
 * 添加和更新商品的路由
 * 
 */

class ProductAddUpdate extends Component {
    state = {
        options: [],//需要显示的列表数据的数组
        categorys: []
    };




    validatePrice = (rule, value, callback) => {
        if (value * 1 > 0) {
            callback()//这个回调的作用是用来返回正确的指令
        } else {
            callback("请输入大于0的数值")//这个回调如果有值，相应的会展示其回调内的内容
        }
    }


    getCategorys = async (parentId) => {
        const result = await reqCategorys(parentId)
        if (result.status === 0) {
            const categorys = result.data
            if (parentId === "0") {
                this.initOptions(categorys)
            } else {
                return categorys
            }
        }
    }

    initOptions = async (categorys) => {
        //第一种方法
        // const options=categorys.map(c=>({
        //         value: c._id,
        //         label: c.name,
        //         isLeaf: false,
        // }))
        //第二种种方法
        console.log(categorys);
        const options = categorys.map(c => {
            return {
                value: c._id,
                label: c.name,
                isLeaf: false,
            }
        })
        const { isupdate, product } = this
        const { categoryId, pCategoryId } = product
        //判断是否是一个二级商品的更新
        if (isupdate && pCategoryId !== "0") {
            //获取对应二级分类的列表
            const subCategorys = await this.getCategorys(pCategoryId)
            const childOptions = subCategorys.map(c => ({
                value: c._id,
                label: c.name,
                isLeaf: true,
            }))
            const targetOption=options.find(option=>option.value===pCategoryId)
            console.log(targetOption)
            if(targetOption){
                targetOption.children=childOptions
            }
        }
        this.setState({
            options
        })
    }
    //点击商品分类的时候加载数据
    loadData = async selectedOptions => {
        // console.log(selectedOptions)
        const targetOption = selectedOptions[0];
        targetOption.loading = true;

        //选中分类根据targetOption.value发送请求查找二级导航
        const subCategorys = await this.getCategorys(targetOption.value)
        targetOption.loading = false;
        // console.log(subCategorys)
        // load options lazily
        if (subCategorys && subCategorys.length > 0) {
            const childOptions = subCategorys.map(c => ({
                value: c._id,
                label: c.name,
                isLeaf: true,
            }))
            targetOption.children = childOptions
        } else {
            targetOption.isLeaf = true
        }
        //   targetOption.loading = false;
        //   targetOption.children =[...subCategorys]
        this.setState({
            options: [...this.state.options],
        });
    }


    submit = () => {

        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                message.success("成功提交")
                console.log('Received values of form: ', values);
            } else {
                message.error("信息不完全")
            }
        });
    }



    componentDidMount() {
        this.getCategorys('0')
    }
    componentWillMount() {
        // console.log(this);
        const product = this.props.location.state
        console.log("product");
        console.log(product);
        this.isupdate = !!product//这里是强制转换成布尔类型
        this.product = product || {}//保存商品。如果没有就默认为{}
    }
    render() {
        //取出product 

        let categoryIds = []
        const { product, isupdate } = this
        const { categoryId, pCategoryId } = product
        if (isupdate) {
            if (pCategoryId === "0") {
                categoryIds.push(categoryId)
            } else {
                categoryIds.push(pCategoryId)
                categoryIds.push(categoryId)
            }
        }
        //这个是布局的title
        const title =
            (<LinkButton onClick={() => { this.props.history.goBack(-1) }}>
                <Icon type="arrow-left"></Icon>
                <span>{isupdate ? '更新商品' : '添加商品'}</span>
            </LinkButton>)

        //样式调节
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 4 },
                sm: { span: 10 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        return (

            <Card title={title}>
                <Form {...formItemLayout}>
                    <Item
                        label="商品名称"
                    // validateStatus="error"
                    // help="Should be combination of numbers & alphabets"
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: "请输入商品名称" }],
                            initialValue: product.name
                        })(<Input placeholder="请输入商品名称" id="error"

                        />)}
                    </Item>
                    <Item
                        label="商品描述"
                    // validateStatus="error"
                    // help="Should be combination of numbers & alphabets"
                    >{getFieldDecorator('desc', {
                        rules: [{ required: true, message: "请输入商品的描述信息,可输入内容为120个字符" }],
                        initialValue: product.desc
                    })(<TextArea
                        placeholder="请输入商品的描述信息,可输入内容为120个字符"
                        // defaultValue=""//输入框默认内容
                        autosize={{ minRows: 2, maxRows: 4 }}//自动自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }	
                    />)}

                    </Item>
                    <Item label="商品价格">
                        {getFieldDecorator('price', {
                            rules: [
                                { required: true, message: "请输入商品的描述信息,可输入内容为120个字符" },
                                { validator: this.validatePrice }
                            ],
                            initialValue: product.price
                        })(<Input type="number" addonAfter="元" />)}

                    </Item>
                    <Item label="商品分类">
                        {getFieldDecorator('categoryIds', {
                            rules: [
                                { required: true, message: "请指定商品的类型" },
                            ],
                            initialValue: categoryIds
                        })(<Cascader
                            placeholder="请指定商品的类型"
                            options={this.state.options}//需要显示的列表数据数组
                            loadData={this.loadData}//当选择某个列表项，加载下一级列表监听回调
                        />)}


                    </Item>
                    <Item label="商品图片">
                            <PicturesWall></PicturesWall>
                    </Item>
                    <Item label="商品详情">
                        <div>商品分类商品详情</div>
                    </Item>
                    <Item >
                        <Button type="danger" onClick={this.submit}>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}
export default Form.create()(ProductAddUpdate)