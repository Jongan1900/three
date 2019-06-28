import React, { Component } from 'react'
import {
    Table,
    Select,
    Card,
    Icon,
    Input,
    Button,

} from 'antd'
import LinkButton from '../../components/link-button/linkButton'
import {PAGE_SIZE} from '../../utils/constants'
import {reqProducts,reqSearch} from '../../api/index'
const Option = Select.Option
/*

*/
export default class ProductHome extends Component {
    state={
        products:[],
        total:0,
        loading:false,
        searchType:'productName',
        searchName:'',
            }
                
    initColumns=()=>{
        this.columns= [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品信息',
                dataIndex: 'desc',
            },
            {
                title: '商品价格',
                dataIndex: 'price',
                render:(price)=>'￥'+price
            },
            {
                width:100,
                title: '状态',
                dataIndex: 'status',
                render:(status)=>{
                    return (
                        <span>
                        <Button size="small" type="primary">下架</Button>
                        <LinkButton>在售</LinkButton>
                        </span>
                    )
                }
            },
            {
                width:100,
                title: '操作',
                dataIndex: 'product',
                render:(product)=>{
                    return (
                        <span>
                        <LinkButton>详情</LinkButton>
                        <LinkButton>修改</LinkButton>
                        </span>
                    )
                }
            },
        ];
    }
    getproducts=async (pageNum)=>{
        //发送请求之前，显示loading
        const {searchName,searchType} =this.state
        let result
        this.setState({
            loading:true
        })
        if(searchName){
            // console.log(pageNum,PAGE_SIZE,productName,searchType)
            result =await reqSearch({pageNum,pageSize:PAGE_SIZE,searchName,searchType})
            // console.log(result.data)
        }else{
        result=await reqProducts(pageNum,PAGE_SIZE)
    }
         //发送请求拿到数据之后，关闭loading
        this.setState({
            loading:false
        })
        if(result.status===0){
            this.setState({
                total:result.data.total,
                products:result.data.list,
            })
        }
    }
    componentWillMount(){
        this.initColumns()
    }
    componentDidMount(){
        this.getproducts(1)
    }
    render() {
       const {products,total,loading,searchType}=this.state
        

        const title = (
            <span>
                <Select value={searchType} style={{ width: 120 }} onChange={value=>this.setState({searchType:value})}>
                    <Option value='productName'>按名称搜索</Option>
                    <Option value='productDesc'>按描述搜索</Option>
                </Select>
                <Input placeholder="关键字" style={{ width: 150, margin: "0 15px" }} onChange={e=>this.setState({searchName:e.target.value})}></Input>
                <Button type="primary" size="default" style={{ fontSize: "12px" }} onClick={()=>this.getproducts(1)}>搜索</Button>
            </span>
        )
        const extra = (
            <Button type="danger" >
                <Icon type="plus"></Icon>
                添加商品
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table 
                rowKey='_id'
                loading={loading}
                dataSource={products} 
                columns={this.columns} 
                pagination={{
                    defaultCurrent:1,
                    pageSize:PAGE_SIZE,
                    total:total,

                    // onChange:(pageNum,pageSize)=>{return this.getproducts(pageNum,pageSize)}
                    onChange:this.getproducts
                }}
                />;      
                  
           </Card>
        )
    }
}
