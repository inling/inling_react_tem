import React from 'react';
import './register.scss';
import { Input, Button, Layout } from 'antd';
import IHeader from '../../parts/iHeader/iHeader';
import IFooter from '../../parts/iFooter/iFooter';

const { Content } = Layout;
class register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nickname:'',
            upwd:''
        }
    }
    handleClick=()=>{
        let userInfo = {
            nickname:this.state.nickname,
            upwd:this.state.upwd
        }
        var token=localStorage.getItem('token')
        fetch('http://127.0.0.1:3001/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=UTF-8',
                'authorization':"Bearer "+token
            },
            mode:'cors',
            body:JSON.stringify(userInfo)        
        }).then(response=>{
           
        })
    }
    handleNicknameChange=(e)=>{
        this.setState({
            nickname:e.target.value
        })

        this.queryNicknameIsExist(e.target.value)
    }
    handleUpwdChange=(e)=>{
        this.setState({
            upwd:e.target.value
        })
    }
    queryNicknameIsExist(nickname){
        fetch('http://127.0.0.1:3001/nickname?nickname='+nickname,{
            method:'GET',
            mode:'cors'
        }).then(response => response.json()).then(res=>{
            console.log(res)
        })
    }
    render(){
        return(
            <Layout style={{ background: 'white', minHeight: '100vh' }}>
                <IHeader />
