className={this.state.upwdInput ? null : 'error'}
                                value={this.state.upwd} 
                                onChange={this.handleUpwdChange} />
                            <div className="err-message">
                                {
                                    !this.state.upwdInput && 
                                        (this.state.loginCode === 0
                                            ?<p className="tips">喵，你没输入密码么？</p>
                                            :<p className="tips">账号或密码错误</p>)
                                }
                            </div>
                        </li>
                        <li className="remember">
                            <label>
                                <Checkbox className="me">记住我
                                    <span className="bigscreen" style={{ color:' #bbb' ,marginLeft:'10px'}}>不是自己的电脑上不要勾选此项</span>
                                </Checkbox>
                                <Link target="_blank" to="/">忘记密码?</Link>
                                <Link target="_blank" to="/" style={{ marginRight: '10px' }}>无法验证?</Link>
                            </label>
                        </li>
                        <li className="btn-box">
                            <Button
                                size="large" 
                                type="primary"
                                style={{ width: '45%' }} 
                                onClick={this.handleLoginClick}>
                                登录
                            </Button>
                            <Button
                                size="large"
                                style={{ width: '45%' }}
                                onClick={this.handleDirectClick}>
                                注册
                            </Button>
                        </li>
                        <li className="sns">
                            <a href="/" className="wechat-href">
                                <Icon type="wechat" />
                                微信账号登录</a>
                            <a href="/" className="qq-href">
                                <Icon type="qq" />
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
