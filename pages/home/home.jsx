import React from 'react';
import './home.scss';
import { Layout } from 'antd';
import IHeader from '../../parts/iHeader/iHeader';
import IContent from '../../parts/iContent/iContent';
import ISider from '../../parts/iSider/iSider';
class home extends React.Component {
    render() {
        return (
            <Layout style = {{ background: '#fff' }}>
                <IHeader theme="light" />
                <Layout className="contentAndSiderContainer">
                    <IContent />
                    <ISider />
                </Layout>
            </Layout>
        )
    }
}

export default home;
