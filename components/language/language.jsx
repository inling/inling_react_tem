import React from 'react';
import './language.scss';
import { Menu, Dropdown, Icon } from 'antd';

class language extends React.Component {
    render() {
        var s=this.props.style;
        s.color='white';
        const en_ch = (
            <Menu>
                <Menu.Item style={{color:'#90A4AE'}}>                  
                    English             
                </Menu.Item>
            </Menu>
        )
        return (
            <Dropdown overlay={en_ch} placement="bottomCenter">
                <span style={s}>
                    中文 <Icon type="down" />
                </span>
            </Dropdown>  
        )
    }
}

export default language;



