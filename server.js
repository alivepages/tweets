
const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');
const pageRouter = require('./src/routers/pageRouter.js');
const apiRouter = require('./src/routers/apiRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use(express.static(__dirname + '/public'));

// Configure EJS templatte engine
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

// error 404
app.use((req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
