const Model = require('../models/visits.js');
const Guests = require('../models/guests.js');
const controller = require('./controller.js');

class areasController extends controller {

  static getAll (req, res) {
    //return super.getAll(Model, req, res)
    Model
      .query()
      .orderBy('id','DESC')
      .eager('guests')
      .then(data => res.json(data));
  }

  static getById (req, res) {
    return super.getById(Model, req, res)
  }

  static create (req, res) {
    return super.create(Model, req, res)
  }

  static update (req, res) {
    return super.update(Model, req, res)
  }

  static deleteById (req, res) {
    return super.deleteById(Model, req, res)
  }


}


module.exports = areasController;
