const Router = require('koa-router');
const { readDir, openFile } = require('../../utils/index.ts');

const coursesRouter = new Router();

// 读取文件
coursesRouter.get('/api/fetch-folder', async ctx => {
  const {
    query: { path },
  } = ctx;

  if (!path) {
    ctx.body = {
      code: -1,
      msg: '路径不能为空',
    };
  } else {
    const result = await readDir(path);
    ctx.body = {
      code: 0,
      msg: '',
      data: result,
    };
  }
});

// 使用默认程序打开播放器
coursesRouter.post('/api/openFile-withDefault', async ctx => {
  const params = ctx.request.body;
  const { file } = params;
  openFile(file);
  ctx.body = {
    code: 0,
    msg: '',
    data: {},
  };
});

// 使用特定程序打开文件

module.exports = coursesRouter;
