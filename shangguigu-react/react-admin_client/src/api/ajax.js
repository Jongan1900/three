/*
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是promise对象
*/

import axios from 'axios'
import {message} from 'antd'
export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        if(type==='GET'){//发送get请求
            promise= axios.get(url,{//配置对象，这是一个固定格式
                params:data//指定参数
            })
        }else{   
            promise= axios.post(url,data)
        }
        promise.then(response=>//如果成功了，调用resolve(value)
            resolve(response.data)
        ).catch(error=>//如果失败了了，无需调用reject，而是提示异常信息
            message.error('请求出错'+error.message)
        )
    })
}