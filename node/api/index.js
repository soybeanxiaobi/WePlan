const router = require('koa-router')();
const courses = require('./courses');
const tasks = require('./tasks');

// 装载所有路由
router.use(tasks.routes(), tasks.allowedMethods());
router.use(courses.routes(), courses.allowedMethods());
module.exports = router;
