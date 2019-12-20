import React from 'react';
import { Input,Button,Layout } from 'antd';
import IHeader from '../../parts/iHeader/iHeader';
import IFooter from '../../parts/iFooter/iFooter';
class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uname:'',
            upwd:''
        }
    }
    handleClick=()=>{
        let userInfo = {
            uname:this.state.uname,
            upwd:this.state.upwd
        }
        fetch('http://127.0.0.1:3001/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode:'cors',
            body:JSON.stringify(userInfo)        
        }).then(response=>response.json()).then(res=>{
            console.log(res);
            localStorage.setItem('token',res.token)
        })
    }
    handleUnameChange=(e)=>{
        this.setState({
            uname:e.target.value
        })
    }
    handleUpwdChange=(e)=>{
        this.setState({
            upwd:e.target.value
        })
    }
    render(){
        return (
            <Layout>
                <IHeader />
                <div style={{width:'200px'}}>
                    <Input value={this.state.uname} onChange={this.handleUnameChange}/>
                    <Input value={this.state.upwd} onChange={this.handleUpwdChange}/>
                    <Button onClick={this.handleClick}>登陆</Button>
                </div>
                <IFooter/>
            </Layout>

            
        )

    }
}

export default login;
