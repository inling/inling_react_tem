</li>
                        <li>
                            <Input.Password
                                size="large"
                                placeholder="密码（6-16个字符组成，区分大小写）"
                                visibilityToggle={false}
                                value={this.state.upwd}
                                onChange={this.handleUpwdChange} />
                            <div className="err-message"></div>
                        </li>
                        <li>
                            <InputGroup compact>
                                <Select size="large"
                                    defaultValue="CN"
                                    style={{ width: '30%', fontSize: '14px' }} >
                                    {
                                        location_cn.map((item, id) => (
                                            <Option value={item[0]} key={id}>{item[1]}</Option>
                                        ))
                                    }
                                </Select>
                                <Input
                                    size="large"
                                    placeholder="填写常用手机号"
                                    style={{ width: '70%', textAlign: 'left' }} />
                            </InputGroup>
                            <div className="err-message"></div>
                        </li>
                        <li>
                            <InputGroup compact>
                                <Input
                                    size="large"
                                    placeholder="请输入短信验证码"
                                    style={{ width: '70%', textAlign: 'left' }} />
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{ width: '30%', fontSize: '14px' }} >
                                    点击获取
                                </Button>
                            </InputGroup>
                        </li>
                        <li className="register-agree">
                            <Checkbox className="agree"
                                checked={this.state.registerAgree}
                                onChange={this.handleAgreeChange}>
                                我已同意
                            </Checkbox>
                            <Link target="_blank" to="/">《NINE博客使用协议》</Link>
                                和
                            <Link target="_blank" to="/" style={{ marginRight: '10px' }}>《NINE隐私政策》</Link>
                        </li>
                        <li>
                            <Button
                                block
                                size="large"
                                type="primary"
                                disabled={!this.state.registerAgree}
                                onClick={this.handleClick}>
                                注册
                            </Button>
                        </li>
                        <li className="register_direct_login">
                            <Link  to="/login">已有账号，直接登录&gt;</Link>
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
