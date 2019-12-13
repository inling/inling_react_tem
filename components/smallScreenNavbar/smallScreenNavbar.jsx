import React from 'react';
import './smallScreenNavbar.scss';
import NineIcon from '../../components/nineIcon/nineIcon';
import UserPopover from '../../components/userPopover/userPopover';
import UserDrawer from '../../components/userDrawer/userDrawer';

class smallScreenNavbar extends React.Component {
    render() {
        return (
            <div className="smallScreenNavbar">
                <div>
                    <UserDrawer />
                </div>
                <div>
                    <NineIcon style={{ height: '48px', lineHeight:'48px'}} avaStyle={{marginTop:'-2px'}}/>
                </div>
                <div>
                    <UserPopover
                        isVisible={false}
                        popPlacement="bottomRight"
                        popTrigger="click"
                        avaSize="small"
                        avaSrc="./user/xiao-li-qwd/avatar/20180424150900_3Erwd.jpeg"
                        avaStyle={{marginTop:'-2px'}}
                    />
                </div>
            </div>
        )
    }
}

export default smallScreenNavbar;
