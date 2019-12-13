import React from 'react';
import './navbarList.scss';

import { Input, Divider } from 'antd';
import NineIcon from '../../components/nineIcon/nineIcon';

const { Search } = Input;
class navbarList extends React.Component {
    render() {
        return (
            <div className="navbarList" style={this.props.style}>
                <NineIcon style={{ float: 'left', height: '48px', lineHeight:'48px'}} avaStyle={{marginTop:'-2px'}}/>
                <div
                    className="searchBox"
                    style={{ float: 'left', height: '48px', lineHeight: '48px', marginLeft: '72px' }}>
                    <Divider type="vertical" />
                    <Search
                        placeholder="在 nine blog 中搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 180 }}
                    />
                </div>
            </div>
        )
    }
}

export default navbarList;
