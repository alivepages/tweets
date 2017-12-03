const { Model } = require('objection');

class Employes extends Model {
  static get tableName () {
    return 'employes';
  }

}

module.exports = Employes;
