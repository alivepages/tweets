const Router = require('express').Router;
const apiRouter = Router();
const areasController = require('../controllers/areasController.js');
const employesController = require('../controllers/employesController.js');
const guestsController = require('../controllers/guestsController.js');
const reasonsController = require('../controllers/reasonsController.js');
const visitsController = require('../controllers/visitsController.js');
const statsController = require('../controllers/statsController.js');

apiRouter
  .get('/areas', areasController.getAll)
  .get('/areas/:id', areasController.getById)
  .post('/areas', areasController.create)
  .put('/areas/:id', areasController.update)
  .delete('/areas/:id', areasController.deleteById);

apiRouter
  .get('/employes', employesController.getAll)
  .get('/employes/:id', employesController.getById)
  .post('/employes', employesController.create)
  .put('/employes/:id', employesController.update)
  .delete('/employes/:id', employesController.deleteById);

apiRouter
  .get('/guests', guestsController.getAll)
  .get('/guests/:id', guestsController.getById)
  .post('/guests', guestsController.create)
  .put('/guests/:id', guestsController.update)
  .delete('/guests/:id', guestsController.deleteById);

apiRouter
  .get('/reasons', reasonsController.getAll)
  .get('/reasons/:id', reasonsController.getById)
  .post('/reasons', reasonsController.create)
  .put('/reasons/:id', reasonsController.update)
  .delete('/reasons/:id', reasonsController.deleteById);

apiRouter
  .get('/visits', visitsController.getAll)
  .get('/visits/:id', visitsController.getById)
  .post('/visits', visitsController.create)
  .put('/visits/:id', visitsController.update)
  .delete('/visits/:id', visitsController.deleteById);

  apiRouter
    .get('/stats', statsController.stats);

module.exports = apiRouter;
