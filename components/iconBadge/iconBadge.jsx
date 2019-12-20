import React from 'react';
import './iconBadge.scss';
import { Badge, Icon } from 'antd';
class iconBadge extends React.Component {
    render() {
        var { type, style, ...others } = this.props;
        return (
            <span style={style}>
                <Badge {...others}>
                    <Icon type={type} style={{color:'white'}}/>
                </Badge>
            </span>
        )
    }
}

export default iconBadge;
