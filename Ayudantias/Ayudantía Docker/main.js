const Koa = require('koa');
const app = new Koa();
const db = require('./src/models'); // Import Sequelize instance

const HelloWorldRoutes = require('./src/routes/hello-world');
app.use(HelloWorldRoutes.routes()).use(HelloWorldRoutes.allowedMethods()); 

const port = process.env.PORT || 3001;

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log('Database connected and synchronized.');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});