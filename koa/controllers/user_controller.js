const query = require('../utils/query');
const getToken = require('../utils/token');
//用户注册
exports.register = async (ctx, next) => {
    try{
        let { uname, upwd } = ctx.request.body;
        let sql = `INSERT INTO user VALUES (NULL, ?, ?, NULL, NULL, 0)`;  
        let res = await query(sql, [uname, upwd], res => {
            if (res.affectedRows > 0) {
                return { code: 0, text: '成功' }
            } else {
                return { code: 0, text: '失败' }
            }
        })
        ctx.body = res;
    }catch(err){
        ctx.body = err;
    }
}

//用户登陆
exports.login = async (ctx, next) => {
    try {
        let { uname, upwd } = ctx.request.body;
        let sql = `SELECT * FROM user WHERE uname=? AND upwd=?`;
        let res = await query(sql, [uname, upwd], res => {
            if (res.length > 0) {
                return { code: 0, text: '登陆成功' }
            } else {
                return { code: 1, text: '登录失败' }
            }
        })
        ctx.body = res
    } catch (err) {
        ctx.body = err;
    }
}
