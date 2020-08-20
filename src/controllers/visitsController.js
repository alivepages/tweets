const Model = require('../models/tweets.js');
//const Guests = require('../models/guests.js');
const controller = require('./controller.js');

class visitsController extends controller {

  static getAll (req, res) {
    return super.getAll(Model, req, res)

    /*
    Model

      .query()
      .orderBy('id','DESC')
      .then(data => res.json(data));
      */
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


module.exports = visitsController;
