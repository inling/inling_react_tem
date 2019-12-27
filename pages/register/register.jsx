import React from 'react';
import './register.scss';
import { Input, Button, Layout, Select, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import API from '../../../api/user_api';
import IHeader from '../../parts/iHeader/iHeader';
import IFooter from '../../parts/iFooter/iFooter';
import { location_cn } from '../../../assets/location/location';

const { Content } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;
class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            nicknameInput:true,
            nicknameMes:'',
            upwd: '',
            upwdInput:true,
            registerAgree: false
        }
    }
    handleClick = () => {
        this.setState({
            nicknameInput:this.state.nickname ? true : false,
            nicknameMes:this.state.nickname ?'':'请告诉我你的昵称吧'
        })
        if(!this.state.nickname){
            return;
        }
        let userInfo = {
            nickname: this.state.nickname,
            upwd: this.state.upwd
        }
        API.register(userInfo, res => {
            console.log(res)
        })
    }
    handleNicknameChange = e => {
        let cur_val = e.target.value;
        this.setState({
            nickname: cur_val,
            nicknameInput: cur_val ? true : false,
            nicknameMes: cur_val ? '' : '请告诉我你的昵称吧'
        })
        if (!cur_val) {
            return;
        }
        API.nickname(cur_val, res => {
            this.setState({
                nicknameInput: res.code === 0 ? true : false,
                nicknameMes: res.code === 0 ? '' : res.message
            })
        })
    }
    handleUpwdChange = e => {
        this.setState({
            upwd: e.target.value
        })
    }
    handleAgreeChange = () => {
        this.setState({
            registerAgree: !this.state.registerAgree
        })
    }
    //查询昵称是否被占用
    queryNicknameIsExist(nickname) {
        API.nickname(nickname, res => {
            this.setState({
                nicknameInput: res.code === 0 ? true : false,
                nicknameMes: res.code === 0 ? '' : res.message
            })
        })
    }
    render() {
        return (
            <Layout className="i-bg">
                <IHeader />
                <Content className="i-content register-content">
                    <div>
                        <div className="title-line">
                            <span className="tit">注册</span>
                        </div>
                    </div>
                    <ul className="register-info">
                        <li>
                            <Input
                                size="large"
                                placeholder="昵称"
                                value={this.state.nickname}
                                onChange={this.handleNicknameChange} />
                            <div className="err-message">
                                {
                                    !this.state.nicknameInput&&
                                        <p className="tips">{this.state.nicknameMes}</p>
                                }
                                
                            </div>
