const query = require('../utils/query');
const { setToken, verToken } = require('../utils/token');
const { CODE_ARRAY } = require('../config/code_config');
const { createKey } = require('../utils/key');
//用户注册
exports.register = async (ctx, next) => {
    try {
        let { nickname, upwd } = ctx.request.body;
        let { publicKey, privateKey } = createKey();
        let sql = `INSERT INTO user VALUES (NULL, ?, ?, NULL, NULL, 0, ?, ?)`;
        let res = await query(sql, [nickname, upwd, publicKey, privateKey], res => {
            if (res.affectedRows > 0) {
                return CODE_ARRAY.REGISTER_SUCCESS;
            } else {
                return CODE_ARRAY.REGISTER_FAIL;
            }
        })
        ctx.body = res;
    } catch (err) {
        ctx.body = err;
    }
}

//用户登陆
exports.login = async (ctx, next) => {
    try {
        let { nickname, upwd } = ctx.request.body;
        let sql = `SELECT * FROM user WHERE nickname=? AND upwd=?`;
        let res = await query(sql, [nickname, upwd], res => {
            if (res.length > 0) {
                let token = setToken({ nickname: nickname, id: res[0].id });
                return { ...CODE_ARRAY.LOGIN_SUCCESS, token: token }
            } else {
                return CODE_ARRAY.LOGIN_FAIL
            }
        })
        ctx.body = res
    } catch (err) {
        ctx.body = err;
    }
}

//验证昵称是否存在
exports.nickname = async (ctx, next) => {
    try {
        let { nickname } = ctx.query;
        let sql = `SELECT id FROM user WHERE nickname=?`;
        let res = await query(sql, [nickname], res => {
            if (res.length > 0) {
                return CODE_ARRAY.NICKNAME_REPEAT
            } else {
                return CODE_ARRAY.REGISTER_ADDMIT
            }
        })
        ctx.body = res;
    } catch (err) {
        ctx.body = err;
    }
}

/**
 * 获取用户信息
 */
exports.getUserInfo = async (ctx, next) => {
    var token = ctx.headers.authorization;
    if (token == undefined) {
        ctx.body = CODE_ARRAY.USERINFO_GET_FAIL;
        await next();
    } else {
        var userInfo = verToken(token);
        ctx.state = {
            userInfo: userInfo
        }
        ctx.body = {
            ...CODE_ARRAY.USERINFO_GET_SUCCESS,
            userInfo: userInfo
        };
        await next();
    }
}

/**
 * 获取公钥
 */
exports.pk = async (ctx, next) => {
    try {
        let { nickname } = ctx.request.body;
        let sql = `SELECT publicKey FROM user WHERE nickname=?`;
        let res = await query(sql, [nickname], res => {
            if (res.length > 0) {
                return { ...CODE_ARRAY.DEFAULT, pk: res[0].publicKey }
            } else {
                return CODE_ARRAY.KEY_GET_ERR
            }
        })
        ctx.body = res;
    } catch (err) {
        ctx.body = err;
    }
}

/**v1.0.0 */
