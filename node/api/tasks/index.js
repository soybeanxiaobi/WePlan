const Router = require('koa-router');
const fetchTaskList = require('./fetchTask');

const taskRouter = new Router();

// 根据任务类型返回日常任务
taskRouter.get('/api/fetch-task', ctx => {
  const {
    query: { type },
  } = ctx;
  const result = fetchTaskList(type);
  ctx.body = {
    code: 0,
    msg: '',
    data: result,
  };
});

module.exports = taskRouter;
