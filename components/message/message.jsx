import React from 'react';
import './message.scss';
import { Popover, Tabs, Icon, List, Typography, Empty, Button } from 'antd';
import IconBadge from '../iconBadge/iconBadge';

const { TabPane } = Tabs;
class message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
                'Los Angeles battles huge wildfires.',
                'Los Angeles battles huge wildfires.',
                'Los Angeles battles huge wildfires.'
            ]
        }
    }
    render() {
        let content = (
            <Tabs tabBarGutter={0}>
                <TabPane tab={<span><Icon type="bars" /></span>} key="1">
                    <List
                        footer={
                            <div>
                                <Button type="link" icon="setting" style={{ padding: 0 }}>设置</Button>
                                <Button type="link">查看全部信息</Button>
                            </div>
                        }
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </TabPane>
                <TabPane tab={<span><Icon type="message" /></span>} key="2">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </TabPane>
                <TabPane tab={<span><Icon type="team" /></span>} key="3">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </TabPane>
            </Tabs>
        )
        let mesPopover = {
            placement: this.props.mesPlacement ? this.props.mesPlacement : 'bottom',
            trigger: this.props.mesTrigger ? this.props.mesTrigger : 'click',
            arrowPointAtCenter: this.props.mesArrowPointAtCenter ? this.props.mesArrowPointAtCenter : true
        }
        return (
            <Popover overlayClassName="messageCard" content={content} {...mesPopover} >
                <IconBadge dot={true} type="bell" style={{marginRight:'5px'}} />
                <span style={this.props.mesStyle}>消息</span>
            </Popover>
        )
    }
}
export default message;
