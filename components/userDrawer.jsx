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
