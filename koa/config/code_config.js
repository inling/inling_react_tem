/**
 * 0 : 通过
 * 4000-4099 :身份凭证
 * 4100-4199 :注册相关
 * 4200-4299 :用户信息
 * 5000 :token相关
 */

exports.CODE_ARRAY = {
    DEFAULT:{
        code:0
    },
    /**成功code */
    /**身份验证相关 */
    LOGIN_SUCCESS: {
        code: 0, message: '登录成功'
    },
    LOGIN_FAIL: {
        code: 4000, message: '登录失败'
    },
    LOGIN_ERROR: {
        code: 4001, message: '账号或密码错误'
    },

    /**token相关 */
    TOKEN_OVERTIME: {
        code: 5000, message: '登录凭证已失效'
    },

    /**注册相关 */
    REGISTER_SUCCESS: {
        code: 0, message: '注册成功'
    },
    REGISTER_ADDMIT: {
        code: 0, message: '允许注册'
    },
    REGISTER_FAIL: {
        code: 4100, message: '注册失败'
    },
    NICKNAME_REPEAT: {
        code: 4101, message: '昵称已存在'
    },
    PHONE_REPEAT: {
        code: 4102, message: '手机号已被注册'
    },

    /**OPTION */
    OPTION: {
        code: 200, message: '预检通过'
    },

    /**用户信息 */
    USERINFO_GET_SUCCESS: {
        code: 0, message: '获取用户信息成功'
    },
    USERINFO_GET_FAIL: {
        code: 4200, message: '获取用户数据异常'
    },

    /**key相关 */
    KEY_GET_ERR:{
        code: 0, message: '获取PK信息失败'
    }
}

/**v1.0.0 */
