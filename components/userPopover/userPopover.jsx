import React from 'react';
import { Popover, Avatar, Icon, Menu } from 'antd';

import './userPopover.scss';

/**用户气泡卡片
 * @param popPlacement 气泡位置 Enum{'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'}
 * @param popArrowPointAtCenter 箭头是否指向元素中心 Boolean
 * @param popTrigger 触发行为，可选 hover/focus/click/contextMenu 
 * @param avaShape 头像形状 Enum{ 'circle', 'square' }
 * @param avaSize 头像尺寸 number | Enum{ 'large', 'small', 'default' }
 * @param avaSrc 头像路径
 * @param avaStyle 头像样式
 */
class userPopover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                id: 1,
                name: '小里QWD'
            },
            userMenu: [
                { mid: '0', name: '收藏列表', icon: 'heart', twoToneColor: '#eb2f96' },
                { mid: '1', name: '笔记本', icon: 'book', twoToneColor: '#9E7D52' },
                { mid: '2', name: '提交记录', icon: 'clock-circle', twoToneColor: '#90D2FB' },
                { mid: '3', name: '退出', icon: 'logout', twoToneColor: null }
            ]
        }
    }
    render() {
        let isVisible = this.props.isVisible !== undefined ? this.props.isVisible : true ;

        let popTitle = (
            <a href="/" style={{ display:'block', width: '270px', padding: '5px 0' }} >
                <Icon type="user" style={{ marginRight: '10px' }} />
                <span style={{ fontSize: '12px', color: 'gray' }} >
                    {this.state.userInfo.name}
                </span>
                <Icon type="right" style={{ float: 'right', marginTop: '5px' }} />
            </a>
        )

        let popContent = (
            <Menu
                theme="light"
                selectable={false}
                className="popContent"
            >
                {this.state.userMenu.map(item => (
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
        )

        const popProps = {
            placement: this.props.popPlacement ? this.props.popPlacement : 'bottom',
            arrowPointAtCenter: this.props.popArrowPointAtCenter ? this.props.popArrowPointAtCenter : true,
            trigger: this.props.popTrigger ? this.props.popTrigger : 'hover',
            title: popTitle,
            content: popContent,
        }
        const avaProps = {
            shape: this.props.avaShape ? this.props.avaShape : 'circle',
            size: this.props.avaSize ? this.props.avaSize : 'small',
            src: this.props.avaSrc ? this.props.avaSrc : '',
            style: this.props.avaStyle ? this.props.avaStyle : {}
        }
        avaProps.style.cursor="pointer";
        return isVisible ? (
            <Popover {...popProps}>
                <Avatar {...avaProps} icon="user" />
            </Popover>
        ): (
            <Avatar {...avaProps} icon="user" /> 
        )   
    }

}

export default userPopover;
