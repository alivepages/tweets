
const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');
const { Model } = require('objection');
const pageRouter = require('./src/routers/pageRouter.js');
const apiRouter = require('./src/routers/apiRouter.js');
const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');

const PORT = process.env.PORT || 3000;
const app = express();
const appDb = connectToDb(dbConfigObj.development);
Model.knex(appDb);
app.locals.db = appDb;

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
