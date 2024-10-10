const Router = require("koa-router");
const router = new Router();

const cells = require("../models/cell.js")

router.get("/", async ctx => {
    ctx.body = cells;
});

router.get( "/move", async ctx => {
    const { id, cantidad } = ctx.params.id;
    ctx.body = cells.find(cell => cell.id == id);
});


module.exports = router;