import React from 'react';
import { Popover } from 'antd';
import IconBadge from '../iconBadge/iconBadge';
class phoneApp extends React.Component {
    render(){
        let content = (
            <div style={{height: '150px' ,width: '150px'}}></div>
        )
        let pAppPopover = {
            placement: this.props.pAppPlacement ? this.props.pAppPlacement : 'bottom',
            trigger: this.props.pAppTrigger ? this.props.pAppTrigger : 'click',
            arrowPointAtCenter: this.props.pAppArrowPointAtCenter ? this.props.pAppArrowPointAtCenter : true
        }
        return (
            <Popover content={content} {...pAppPopover} >
                <IconBadge dot={true} count={0} type="mobile" style={{marginRight:'5px'}} />
                <span style={this.props.pAppStyle}>下载App</span>
            </Popover>
        )
    }
}

export default phoneApp;
