import React, { Component } from 'react'
import {
    Table,
    Select,
    Card,
    Icon,
    Input,
    Button,
    message,

} from 'antd'
import LinkButton from '../../components/link-button/linkButton'
import {PAGE_SIZE} from '../../utils/constants'
import {reqProducts,reqSearch,reqUpdateStatus} from '../../api/index'
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
                // dataIndex: 'status',
                render:(product)=>{
                    const {status,_id}=product
                    // console.log(product)
                    return (
                        <span>
                        <Button 
                        size="small" 
                        type="primary"
                        onClick={()=>{this.updateStatus(_id,status===1?2:1)}}
                        >{status===1?'下架':'上架'}</Button>
                        <LinkButton>{status===1?'在售':'已下架'}</LinkButton>
                        </span>
                    )
                }
            },
            {
                width:100,
                title: '操作', 
                render:(product)=>{
                    return (
                        <span>
                        <LinkButton onClick={()=>{this.props.history.push('/product/detail',{product})}} >详情</LinkButton>
                        <LinkButton onClick={()=>{this.props.history.push('/product/addupdate',product)}}>修改</LinkButton>
                        </span>
                    )
                }
            },
        ];
    }
    //根据商品的页数发请求获取数据
    getproducts=async (pageNum)=>{
        //存储pageNum
        this.pageNum=pageNum
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
        //  console.log(result)
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
    updateStatus=async (productId,status)=>{
       const result=await reqUpdateStatus({productId,status});
    //    console.log(result);
       if(result.status===0){
           message.success('更新商品成功')
           this.getproducts(this.pageNum)
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
            <Button type="danger" onClick={()=>this.props.history.push('/product/addupdate')}>
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
