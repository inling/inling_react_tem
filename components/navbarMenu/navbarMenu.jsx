import React from 'react';
import './navbarMenu.scss';
import UserPopover from '../userPopover/userPopover';
import Language from '../language/language';
import Message from '../message/message';

import { Button } from 'antd';

function WriteBtn(props) {
    return (
        <span style={props.style}>
            <Button icon="book">
                写文章
            </Button>
        </span>
    )
}
class navbarMenu extends React.Component {
    render() {
        return (
            <div className="navbarMenu" style={this.props.style}>
                <WriteBtn style={{ marginRight: '48px' }} />
                <Message
                    mesPlacement="bottomRight"
                    mesTrigger="click"
                    mesStyle={{ marginRight: '24px', cursor: 'pointer' }} />
                <Language style={{ marginRight: '24px', cursor: 'pointer' }} />
                <UserPopover
                    popPlacement="bottomRight"
                    popTrigger="click"
                    avaSize="small"
                    avaSrc="./user/xiao-li-qwd/avatar/20180424150900_3Erwd.jpeg"
                    avaStyle={{marginTop:'-2px'}}
                />
            </div>
        )
    }
}

export default navbarMenu;
