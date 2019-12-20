import React from 'react';
import './iSider.scss';
import {Layout,Card, Icon, Avatar} from 'antd';
const { Meta } = Card;
const {Sider} = Layout;
class iSider extends React.Component{
    render(){
        return (
            <Sider className="slider" 
                style={{
                        background:'#fff',
                        border:'1px solid red'
            }}>     

                <Card
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Sider>
        )
    }
}
export default iSider;
