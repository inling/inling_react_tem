import React from 'react';
import './iSider.scss';
import {Layout,Divider} from 'antd';

const {Sider} = Layout;
class iSider extends React.Component{
    render(){
        return (
            <Sider className="slider" style={{background:'#fff',border:'1px solid red'}}>
                <Divider type="vertical"/>
            </Sider>
        )
    }
}
export default iSider;
