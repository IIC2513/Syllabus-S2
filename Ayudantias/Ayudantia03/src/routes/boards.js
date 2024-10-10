const Router = require("koa-router");
const router = new Router();

const board = require("../models/board.js")

router.get("board.show", "/", async ctx => {
    ctx.body = board
});

module.exports = router;