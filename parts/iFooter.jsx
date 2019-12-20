import React from 'react';
import './iFooter.scss';
import { Layout } from 'antd';

const { Footer } = Layout;

class iFooter extends React.Component{
    render(){
        return (
            <Footer className="myFooter" style={{background:'#F0F2F5',    marginTop: '20px'}}>
               
                <div>
                    <div style={{textAlign:'center'}}>&copy;2018&nbsp;-&nbsp;2019&nbsp;Copyright&nbsp;Nine</div>
                    <div style={{textAlign:'center'}}>
                        <a href="http://www.beian.miit.gov.cn" >
                            <span style={{color:'gray',fontSize: '12px'}}>
                            浙ICP备18039541
                            </span>
                        </a>
                    </div>
                </div>
            </Footer>
        )
    }
}

export default iFooter;
