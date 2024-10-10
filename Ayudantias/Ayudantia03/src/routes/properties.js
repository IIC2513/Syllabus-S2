const Router = require("koa-router");
const router = new Router();

const properties = require("../models/property.js");

router.get("properties.show", "/", async ctx => {
    ctx.body = properties;
});

module.exports = router;
