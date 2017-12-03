const { Model } = require('objection');

class Areas extends Model {
  static get tableName () {
    return 'areas';
  }

  //----
  static get relationMappings () {
    const Employes = require('./Employes.js');

    return {
      Employes: {
        relation: Model.HasManyRelation,
        modelClass: Employes,
        join: {
          from: 'areas.id',
          to: 'employes.areaId'
        }
      }
    };
  }
  //----

}

module.exports = Areas;
