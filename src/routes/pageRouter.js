const Router = require('express').Router;
const pageRouter = Router();

pageRouter
  .get('/', (req, res) => {
    res.send('<h1>Tweets</h1>')
  });

module.exports = pageRouter;
