import React, { Component } from 'react'

import {Card,Button,Icon,Table} from 'antd'
import LinkButton from '../../components/link-button/linkButton'
// import { Table, Divider, Tag } from 'antd';
/*
品类管理
*/
export default class Category extends Component {
    render() {
        const title="这是默认的一级菜单"
        const extra=
           ( <Button type="danger"><Icon type="plus"></Icon>添加</Button>)
           const dataSource = [
              {
                "parentId": "0",
                "_id": "5c2ed631f352726338607046",
                "name": "分类001",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5c2ed647f352726338607047",
                "name": "分类2",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5c2ed64cf352726338607048",
                "name": "1分类3",
                "__v": 0
              }
            ]
          
          
          const columns = [
            {
              title: '分类名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '操作',
              width:300,
              render: () => (
              <span>
                  <LinkButton>修改分类</LinkButton>
                  <LinkButton>查看子分类</LinkButton>
              </span>)
        
            },
            
          ];
          
        return (
            <Card title={title} extra={extra}>
                <Table dataSource={dataSource} columns={columns}   bordered rowKey="_id"/>;
          </Card>
        )
    }
}
