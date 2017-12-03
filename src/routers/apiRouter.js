const Router = require('express').Router;
const apiRouter = Router();
const Areas = require('../models/Areas.js');
const Employes = require('../models/Employes.js');

apiRouter
  .get('/areas', (req, res) => {
    Areas
      .query()
      .eager('Employes')
      .then(data => res.json(data));
});

apiRouter
  .get('/employes', (req, res) => {
    Employes
      .query()
      .then(data => res.json(data));
});

module.exports = apiRouter;
