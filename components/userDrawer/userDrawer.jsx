import React from 'react';
import './userDrawer.scss';
import { Button, Drawer, Menu, Icon,Divider } from 'antd';
import UserPopover from '../userPopover/userPopover';

class userDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            userMenu: [
                { mid: '0', name: '收藏列表', icon: 'heart', twoToneColor: '#eb2f96' },
                { mid: '1', name: '笔记本', icon: 'book', twoToneColor: '#9E7D52' },
                { mid: '2', name: '提交记录', icon: 'clock-circle', twoToneColor: '#90D2FB' },
                { mid: '3', name: '退出', icon: 'logout', twoToneColor: null }
            ],
            maniMenu:[
                { mid: '0', name: '写文章', icon: 'edit', twoToneColor: null },
                { mid: '1', name: '消息', icon: 'bell', twoToneColor: null },
                { mid: '2', name: '切换为英文版', icon: 'swap', twoToneColor: null },
            ]
        };
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    showDrawer() {
        this.setState({
            visible: true
        });
    }

    onClose() {
        this.setState({
            visible: false
        });
    }
render() {

        return (
            <span>
                <Button icon="menu" onClick={this.showDrawer} />
                <Drawer
                    title={
                        <div style={{ cursor: 'pointer' }}>
                            <UserPopover
                                isVisible={false}
                                popPlacement="bottomRight"
                                popTrigger="click"
                                avaSize="large"
                                avaSrc="./user/xiao-li-qwd/avatar/20180424150900_3Erwd.jpeg"
                                avaStyle={{ marginTop: '-2px' }}
                            />
                            <span style={{ color: '#37474F', fontSize: '14px', marginLeft: '10px' }}>
                                小里QWD
                            </span>
                        </div>
                    }
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Menu
                        theme="light"
                        selectable={false}
                        className="popContent"
                    >
                        <Menu.Item>
                            <span>题库</span>
                        </Menu.Item>
                    </Menu>
                    <Divider />
                    <Menu
                        theme="light"
                        selectable={false}
                        className="popContent"
                    >
                        {this.state.maniMenu.map(item => (
                            <Menu.Item key={item.mid}>
                                {
                                    item.twoToneColor === null
                                        ? <Icon type={item.icon} />
                                        : <Icon type={item.icon} theme="twoTone" twoToneColor={item.twoToneColor} />
                                }
                                <span>{item.name}</span>
                            </Menu.Item>
                        ))}
                    </Menu>
                    <Divider />
                    <Menu
                        theme="light"
                        selectable={false}
                        className="popContent"
                    >
