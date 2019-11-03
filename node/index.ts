const Koa = require('koa');
const cors = require('koa2-cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const routers = require('./routers');
// const taskRouter = require('./routers/task');
const app = new Koa();
// 跨域
app.use(cors());
// 加载路由中间件
app.use(bodyParser());
app.use(routers.routes()).use(routers.allowedMethods());
const port = 3001;
app.listen(port, () => {
  console.log(`app started at port ${port}...`);
});
