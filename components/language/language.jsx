import React from 'react';
import './language.scss';
import { Menu, Dropdown, Icon } from 'antd';

class language extends React.Component {
    render() {
        const en_ch = (
            <Menu>
                <Menu.Item>                  
                    English             
                </Menu.Item>
            </Menu>
        )
        return (
            <Dropdown overlay={en_ch} placement="bottomCenter">
                <span style={this.props.style}>
                    中文 <Icon type="down" />
                </span>
            </Dropdown>  
        )
    }
}

export default language;

