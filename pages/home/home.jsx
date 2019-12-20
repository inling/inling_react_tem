import React from 'react';
import './home.scss';
import { Layout } from 'antd';
import IHeader from '../../parts/iHeader/iHeader';
import IContent from '../../parts/iContent/iContent';
import ISider from '../../parts/iSider/iSider';
import IFooter from '../../parts/iFooter/iFooter';


import Snow from '../../components/snow/snow';
class home extends React.Component {
    render() {
        return (
            <Layout style = {{ background: '#fff',minHeight:'100vh' }}>
                <IHeader theme="light" />
                <Layout className="contentAndSiderContainer">
                    <IContent />
                    <ISider />
                </Layout>
                <IFooter/>
                <Snow />
            </Layout>
        )
    }
}

export default home;
