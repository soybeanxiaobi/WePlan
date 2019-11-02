const router = require('koa-router')();
const demo = require('./task');

// 装载所有路由
router.use(demo.routes(), demo.allowedMethods());
module.exports = router;
