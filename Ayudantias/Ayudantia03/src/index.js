const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const dotenv = require('dotenv');
const router = require('./routes');

dotenv.config();

const app = new Koa();


app.use(KoaLogger());
app.use(koaBody());
app.use(router.routes());

app.use((ctx, next) => {
    ctx.body = 'Hello Worldddd';
    next();
});

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
})