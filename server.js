var cool = require('cool-ascii-faces');
const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { Model } = require('objection');
const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');
const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');

const PORT = 3001;
const app = express();
//const appDb = connectToDb(dbConfigObj.development);

let dbConnectionConfig

if( process.env.NODE_ENV === 'production' ){
  dbConnectionConfig = dbConfigObj.production
} else {
  dbConnectionConfig = dbConfigObj.development
}

const appDb = connectToDb(dbConnectionConfig)


Model.knex(appDb);
app.locals.db = appDb;

app.use(bodyParser.json({limit: 1000000, parameterLimit: 1000000}));
app.use(bodyParser.urlencoded({
    extended: false,
    parameterLimit: 1000000
}));

//app.use('/', pageRouter);
app.use('/api/v1', apiRouter);

// Configure EJS templatte engine
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.render('reactApp.ejs')
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
