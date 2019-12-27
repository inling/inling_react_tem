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
            <Layout className="i-bg">
                <IHeader theme="light" />
                <Layout className="i-content">
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
/**v1.0.0 */
