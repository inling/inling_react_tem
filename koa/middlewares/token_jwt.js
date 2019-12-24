const koajwt = require('koa-jwt');
const { verToken } = require('../utils/token');
const { TOKEN_SECRET } = require('../config/token_config');
//Token 异常处理 401
exports.token_errors = async (ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: err.message
            }
        } else {
            throw err;
        }
    })
}

//Token 验证
exports.token_verify = async (ctx, next) => {
    var token = ctx.headers.authorization;
    if (token == undefined) {
        await next();
    } else {
        var userInfo = verToken(token);
        ctx.state = {
            userInfo: userInfo
        }
        await next();
    }
}

//Token 路由过滤
exports.token_filter = koajwt({ secret: TOKEN_SECRET }).unless({
    path: [/^\/login/,/^\/nickname/]
})

/**v1.0.0 */
