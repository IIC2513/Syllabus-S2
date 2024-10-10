const Router = require("koa-router");
const router = new Router();

const players = require("../models/player.js");

router.get("players.show", "/", async ctx => {
    ctx.body = players
});

module.exports = router;