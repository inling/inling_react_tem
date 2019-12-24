<Content className="i-content login-content">
                    <div>
                        <div className="title-line">
                            <span className="tit" style={{ fontSize: '38px' }}>登录</span>
                        </div>
                    </div>
                    <ul className="login-info" style={{ margin: '60px auto 0', textAlign: 'center', listStyle: 'none', padding: 0 }}>
                        <li>
                            <Input className="error" size="large" placeholder="你的手机号/邮箱" value={this.state.nickname} onChange={this.handleNicknameChange} />
                            <div style={{ height: '20px', margin: '6px 0' }}></div>
                        </li>
                        <li>
                            <Input.Password size="large" placeholder="密码" value={this.state.upwd} onChange={this.handleUpwdChange} />
                            <div style={{ height: '20px', margin: '6px 0' }}></div>
                        </li>
                        <li className="remember">
                            <label>
                                <input type="checkbox" />记住我
						        <span>不是自己的电脑上不要勾选此项</span>
                                <a target="_blank" href="/" className="forget-password">忘记密码?</a>
                                <a target="_blank" href="/" className="not-checkout" style={{ marginRight: '10px' }}>无法验证?</a>
                            </label>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button style={{ width: '45%' }} size="large" type="primary" onClick={this.handleClick}>登陆</Button>
                            <Button style={{ width: '45%' }} size="large">注册</Button>
                        </li>
                        <li className="sns">
                            <a href="/" style={{ marginRight: "20px", color: '#717171' }}>
                                <Icon type="wechat" style={{ color: '#2EBB4F', fontSize: '18px', verticalAlign: 'middle', marginRight: '5px' }} />
                                微信账号登录</a>
                            <a href="/" style={{ color: '#717171' }}>
                                <Icon type="qq" style={{ color: '#1890ff', fontSize: '18px', verticalAlign: 'middle', marginRight: '4px' }} />
                                QQ账号登录</a>
                        </li>
                    </ul>
                </Content>
                <IFooter />
            </Layout>
        )
    }
}

export default login;

/**v1.0.0 */
