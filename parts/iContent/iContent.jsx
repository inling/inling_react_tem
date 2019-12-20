import React from 'react';
import './iContent.scss';
import { Layout,Carousel } from 'antd';

const {Content} = Layout
class iContent extends React.Component {
    render() {
        return (
            <Content style={{padding: '0 24px', minHeight:'280px',background:'white'}}>
                  <Carousel autoplay>
                    <div>
                    <h3>
                        <img src="./image/690x388.jpg" alt="" style={{width:'100%',height:'280px'}}/>
                    </h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                </Carousel>
            </Content>
        )
    }
}
export default iContent;
