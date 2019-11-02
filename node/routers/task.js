const Router = require('koa-router');
const { exec } = require('child_process');

const taskRouter = new Router();

taskRouter.get('/api/fetch-folder', async ctx => {
  const {
    query: { path },
  } = ctx;
  function readDir(readPath) {
    return new Promise((resolve, reject) => {
      exec(`ls ${readPath} |sort -n`, (err, files) => {
        if (err) {
          reject(err);
        }
        // 命令行输出为字符串，需要根据回车切割
        const filesArr = files.split(/[\n]/);
        resolve(filesArr);
      });
    });
  }
  if (!path) {
    ctx.body = {
      code: -1,
      msg: '路径不能为空',
    };
  } else {
    const result = await readDir(path);
    ctx.body = {
      code: 0,
      msg: ' ',
      data: result,
    };
  }
});

module.exports = taskRouter;
