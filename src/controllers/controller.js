class Controller {

  static getAll (Model, req, res) {
    Model
      .query()
      .orderBy('id','DESC')
      .limit(500)
      .then(data => res.json(data));
  }

  static getById (Model, req, res) {
    Model
      .query()
      .findById(req.params.id)
      .then(areaData => {
        return res.json(areaData).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      });
  }

  static create (Model, req, res) {
    Model
      .query()
      .insert(req.body)
      .then(newArea => {
        return res.json(newArea).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      });
  }

  static update (Model, req, res) {
    Model
      .query()
      .updateAndFetchById(req.params.id, req.body)
      .then(areaUpdated => {
        return res.json(areaUpdated).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      })
  }

  static deleteById (Model, req, res) {
    Model
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

}

module.exports = Controller;
