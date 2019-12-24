<Content className="i-content register-content">
                    <div>
                        <div className="title-line">
                            <span className="tit" style={{ fontSize: '38px' }}>注册</span>
                        </div>
                    </div>
                    <ul className="login-info" style={{ margin: '60px auto 0', textAlign: 'center', listStyle: 'none', padding: 0 }}>
                        <li>
                            <Input  size="large" placeholder="昵称" value={this.state.nickname} onChange={this.handleNicknameChange} />
                            <div style={{ height: '20px', margin: '6px 0' }}></div>
                        </li>
                        <li>
                            <Input.Password size="large" placeholder="密码" visibilityToggle={false} value={this.state.upwd} onChange={this.handleUpwdChange} />
                            <div style={{ height: '20px', margin: '6px 0' }}></div>
                        </li>
                        <li className="remember">
                            <label>
                                <input type="checkbox" />记住我
						        <span>不是自己的电脑上不要勾选此项</span> 
                                <a target="_blank" href="/" className="forget-password">忘记密码?</a> 
                                <a target="_blank" href="/" className="not-checkout" style={{marginRight:'10px'}}>无法验证?</a>
                            </label>
                        </li>
                        <li style={{display:'flex',justifyContent:'space-between'}}>
                            <Button block type="primary" onClick={this.handleClick} size="large">注册</Button>
                        </li>
                    </ul>
                </Content>
                <IFooter />
            </Layout>
        )
    }
}

export default register;

/**v1.0.0 */
