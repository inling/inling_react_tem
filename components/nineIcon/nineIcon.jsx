import React from 'react';
import './nineIcon.scss';

import { Avatar } from 'antd';

class nineIcon extends React.Component{
    render(){
        return (
            <div style={this.props.style}>
                <Avatar
                    size="small"
                    shape="square"
                    src="./user/xiao-li-qwd/avatar/2019-12-06_152724.png"
                    icon="user"
                    style={this.props.avaStyle}
                />
                <span
                    style={{display:'inline-block', marginLeft: '6px',color:'white' }}>
                    小九
                </span>
            </div>
        )
    }
}

export default nineIcon;
