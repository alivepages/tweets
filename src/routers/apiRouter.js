const Router = require('express').Router;
const apiRouter = Router();
const Areas = require('../models/Areas.js');
const Employes = require('../models/Employes.js');

function getAllAreas (req, res) {
  Areas
    .query()
    .then(data => res.json(data));
}

function getAreaById (req, res) {
  Areas
    .query()
    .findById(req.params.id)
    .then(areaData => {
      return res.json(areaData).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function createArea (req, res) {
  Areas
    .query()
    .insert(req.body)
    .then(newArea => {
      return res.json(newArea).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function updateArea (req, res) {
  Areas
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(areaUpdated => {
      return res.json(areaUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

function deleteAreaById (req, res) {
  Areas
    .query()
    .deleteById(req.params.id)
    .then(areaDeleted => {
      return res.json({
        rowsDeleted: areaDeleted
      }).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

// apiRouter
//   .get('/areas', (req, res) => {
//     Areas
//       .query()
//       .eager('Employes')
//       .then(data => res.json(data));
// });
//
// apiRouter
//   .get('/employes', (req, res) => {
//     Employes
//       .query()
//       .then(data => res.json(data));
// });

apiRouter
  .get('/areas', getAllAreas)
  .get('/areas/:id', getAreaById)
  .post('/areas', createArea)
  .put('/areas/:id', updateArea)
  .delete('/areas/:id', deleteAreaById);

module.exports = apiRouter;
