const query = require('../utils/query');
const { setToken } = require('../utils/token');
//用户注册
exports.register = async (ctx, next) => {
    try {
        let { nickname, upwd } = ctx.request.body;
        let sql = `INSERT INTO user VALUES (NULL, ?, ?, NULL, NULL, 0)`;
        let res = await query(sql, [nickname, upwd], res => {
            if (res.affectedRows > 0) {
                return { code: 0, text: '成功' }
            } else {
                return { code: 0, text: '失败' }
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
                return { code: 0, text: '登陆成功', token: token }
            } else {
                return { code: 1, text: '登录失败' }
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
            if(res.length>0){
                return {
                    code:101,
                    text:'用户已存在'
                }
            }else{
                return {
                    code:100,
                    text:'允许注册'
                }
            }
        })
        ctx.body = res;
    } catch (err) {
        ctx.body = err;
    }
}


/**v1.0.0 */
