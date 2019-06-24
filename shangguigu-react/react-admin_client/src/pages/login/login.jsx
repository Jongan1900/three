import React, { Component } from 'react'
// import {BrowserRouter,Route} from 'react-router-dom'
import { Form, Icon, Input, Button,message } from 'antd';
import './login.less'
import {Redirect} from 'react-router-dom'
import logo from '../../assets/images/logo.gif'
import {reqLogin} from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils' 
const Item = Form.Item//不能写在import之前
//登录的路由组件
class Login extends Component {


    //这个是点击提交的时候进行验证
    handleSubmit = e => {
        //阻止事件的默认行为
        e.preventDefault();
        //通过getFieldsValue()方法够获取到自定义标识符上所有的值，并且返回一个对象
        // var value=this.props.form.getFieldsValue()
        // console.log(value);

        //这是antd自带的验证
this.props.form.validateFields(async (err, values) => {
        if (!err) {
        const {username,password}=values
            const result=await reqLogin(username,password)
            if(result.status===0){//登录成功

                message.success('登录成功')
                const user=result.data
                // console.log(user);
                memoryUtils.user=user
                storageUtils.saveUser(user)
                this.props.history.push('/') //跳转路由
            }else{//登录失败
                message.error(result.msg)
            }
        }else{
            alert('验证不通过，请验证您的个人信息')
        }
});
    };
    render() {
        const user =memoryUtils.user
        if(user._id&&user){
            return <Redirect to='/admin'></Redirect>
        }


        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="" />
                    <h1>FOLLOW ONE 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('username', {//配置对象：属性名是特定的一些名称
                                //声明式验证：直接使用别人封装好的验证规则去进行验证
                                 rules: [
                                     { required: true, message: 'Please input your username!' },
                                     { max: 12, message: '用户名最大长度为12个字符' },
                                     { min: 4, message: '用户名最小长度为4个字符' },
                                     { pattern: /^[a-zA-Z0-9]+$/, message: '用户名必须是英文，数字或下划线组成' }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                               rules: [
                                { required: true, message: 'Please input your username!' },
                                { max: 12, message: '密码最大长度为12个字符' },
                                { min: 6, message: '密码最小长度为6个字符' },
                                { pattern: /^[a-zA-Z0-9]+$/, message: '密码必须是英文，数字或下划线组成' }
                           ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

//高阶函数
//高阶组件
//通过Form.create()
let a=Form.create();
// console.log(typeof a);//function
// console.log(Login)
const WrapLogin =a(Login)
//const WrapLogin= Form.create()(Login)


export default WrapLogin


// const WrapLogin = (Login) => {
//     return class extends Component {
//         render() {
//             const newProps = {
//                 text: newText
//             };
//             return (
//                 <Login
//                     {...form}
//                     
//                 />
//             )
//         }
//     }
// }

// export default WrapLogin;

