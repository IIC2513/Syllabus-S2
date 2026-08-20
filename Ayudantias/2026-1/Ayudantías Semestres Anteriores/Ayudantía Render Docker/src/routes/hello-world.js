const Router = require('koa-router');
const router = new Router();

// Example new route
router.get('/hello', (ctx) => {
  ctx.body = 'Hello, World!';
});

module.exports = router;