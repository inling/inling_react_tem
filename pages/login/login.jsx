import React from 'react';
import './login.scss';
import { Input, Button, Layout, message, Icon, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import API from '../../../api/user_api';
import IHeader from '../../parts/iHeader/iHeader';
import IFooter from '../../parts/iFooter/iFooter';

const { Content } = Layout;
class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            nicknameInput:true,
            upwd: '',
            upwdInput:true,
            loginCode:0
        }
    }
    handleLoginClick = async () => {
        this.setState({
            nicknameInput:this.state.nickname ? true : false,
            upwdInput:this.state.upwd ? true : false,
            loginCode:0
        })
        if(!this.state.nickname || !this.state.upwd){
            return;
        }

        let userInfo = {
            nickname: this.state.nickname,
            upwd: this.state.upwd
        }
        let pk = await API.pk(this.state.nickname,(res)=>{
            return res.pk;
        })
        
        await API.login(userInfo, res => {
            this.setState({
                loginCode: res.code
            })
            if (res.code === 0) {
                message.success('登陆成功');
                localStorage.setItem('token', res.token);
                document.cookie = `token=${res.token};expires=Sun, 31 Dec 2040 12:00:00 UTC; path=/`;
            } else {
                message.error('登陆失败');
                this.setState({
                    nicknameInput: false,
                    upwdInput: false
                })
            }
        })

    }
    handleDirectClick = ()=>{
        this.props.history.push('/register')
    }
    handleNicknameChange = e => {
        this.setState({
            nickname: e.target.value
        })
    }
    handleUpwdChange = e => {
        this.setState({
            upwd: e.target.value
        })
    }
    render() {
        return (
            <Layout className="i-bg">
                <IHeader />
                <Content className="i-content login-content">
                    <div>
                        <div className="title-line">
                            <span className="tit">登录</span>
                        </div>
                    </div>
                    <ul className="login-info">
                        <li> 
                            <Input 
                                size="large" 
                                placeholder="你的手机号/邮箱"
                                className={this.state.nicknameInput ? null : 'error'}
                                value={this.state.nickname} 
                                onChange={this.handleNicknameChange} />
                            <div className="err-message">
                                {
                                    !this.state.nicknameInput && 
                                        (this.state.loginCode === 0 
                                            ?<p className="tips">请输入注册时用的邮箱或者手机号呀</p>
                                            :'')
                                }                      
                            </div>
                        </li>
                        <li>
                            <Input.Password 
                                size="large" 
                                placeholder="密码" 
