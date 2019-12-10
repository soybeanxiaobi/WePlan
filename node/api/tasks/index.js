const Router = require('koa-router');
const fetchTaskList = require('./fetchTask');
const fetchPanel = require('./fetchPanel');

const taskRouter = new Router();

// 根据任务类型返回日常任务
taskRouter.get('/api/fetch-task', async ctx => {
  const {
    query: { type },
  } = ctx;
  const result = await fetchTaskList(type);
  ctx.body = {
    code: 0,
    msg: '',
    data: result,
  };
});

// 获取任务看版
taskRouter.get('/api/fetch-panel', async ctx => {
  const result = await fetchPanel();
  ctx.body = {
    code: 0,
    msg: '',
    data: result,
  }
})

module.exports = taskRouter;
