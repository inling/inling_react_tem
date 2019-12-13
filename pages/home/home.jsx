import React from 'react';
import './home.scss';
import { Layout } from 'antd';
import IHeader from '../../parts/iHeader/iHeader';
import IContent from '../../parts/iContent/iContent';
import ISider from '../../parts/iSider/iSider';
class home extends React.Component {
    render() {
        return (
            <Layout>
                <IHeader theme="light" />
                <Layout>
                    <IContent />
                    <ISider />
                </Layout>
            </Layout>
        )
    }
}

export default home;
