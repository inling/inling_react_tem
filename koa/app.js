const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const response_header = require('./middlewares/response_header');
const { token_errors, token_verify, token_filter } = require('./middlewares/token_jwt');
const api = require('./routes/api');
const app = new Koa();
app.use(bodyParser());

//设置响应头 Response Header-跨域
app.use(response_header);

//Token 异常处理401
app.use(token_errors);
//Token 验证
app.use(token_verify);
//Token 路由过滤
app.use(token_filter);

//应用路由模块
app.use(api.routes(), api.allowedMethods())

app.listen(3001, () => {
  console.log('启动成功')
});

/**v1.0.0 */
