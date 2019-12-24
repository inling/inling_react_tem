import React from 'react';
import './login.scss';
import { Input, Button, Layout, message, Icon } from 'antd';
import IHeader from '../../parts/iHeader/iHeader';
import IFooter from '../../parts/iFooter/iFooter';

const { Content } = Layout;
class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            upwd: ''
        }
    }
    handleClick = () => {
        let userInfo = {
            nickname: this.state.nickname,
            upwd: this.state.upwd
        }
        fetch('http://127.0.0.1:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'cors',
            body: JSON.stringify(userInfo)
        }).then(response => response.json()).then(res => {
            console.log(res);
            if (res.code === 0) {
                message.success('登陆成功');
                localStorage.setItem('token', res.token)
            } else {
                message.error('登陆失败');
            }

        })
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
            <Layout style={{ background: 'white', minHeight: '100vh' }}>
                <IHeader />
                
                
    /**v1.0.0*/
