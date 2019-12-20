const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const response_header = require('./middlewares/response_header');
const token_errors = require('./middlewares/token_errors');
const api = require('./routes/api');
const app = new Koa();
app.use(bodyParser());

//设置响应头 Response Header-跨域
app.use(response_header);

//异常处理 Token-401
app.use(token_errors);

app.use(api.routes(), api.allowedMethods())

app.listen(3001, () => {
  console.log('启动成功')
});
