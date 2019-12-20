import React from 'react';
import './navbarMenu.scss';
import UserPopover from '../userPopover/userPopover';
import Language from '../language/language';
import Message from '../message/message';
import PhoneApp from '../phoneApp/phoneApp';
class navbarMenu extends React.Component {
    render() {
        return (
            <div className="navbarMenu" style={this.props.style}>
                <PhoneApp 
                    pAppPlacement="bottomRight"
                    pAppTrigger="click"
                    pAppStyle={{ marginRight: '16px', cursor: 'pointer',color:'white' }} />
                <Message
                    mesPlacement="bottomRight"
                    mesTrigger="click"
                    mesStyle={{ marginRight: '16px', cursor: 'pointer',color:'white' }} />
                <Language style={{ marginRight: '24px', cursor: 'pointer' }} />
                <UserPopover
                    popPlacement="bottomRight"
                    popTrigger="click"
                    avaSrc="./user/xiao-li-qwd/avatar/20180424150900_3Erwd.jpeg"
                    avaStyle={{marginTop:'-2px'}}
                />
            </div>
        )
    }
}

export default navbarMenu;
