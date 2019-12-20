import React from 'react';
import { Input , Button} from 'antd'
class register extends React.Component{
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
        return(
            <div style={{width:'200px'}}>
                <Input value={this.state.uname} onChange={this.handleUnameChange}/>
                <Input value={this.state.upwd} onChange={this.handleUpwdChange}/>
                <Button onClick={this.handleClick}>注册</Button>
            </div>
        )
    }
}

export default register;
