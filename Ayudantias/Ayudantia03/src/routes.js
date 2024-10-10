const koaRouter = require('koa-router');
const players = require('./routes/players');
const properties = require('./routes/properties');
const cell = require('./routes/cells');
const board = require('./routes/boards');

const router = new koaRouter();

router.use('/players', players.routes());
router.use('/properties', properties.routes());
router.use('/cell', cell.routes());
router.use('/board', board.routes());

module.exports = router;