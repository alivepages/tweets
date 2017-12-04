const { Model } = require('objection');

class Visits extends Model {
  static get tableName () {
    return 'visits';
  }
}

module.exports = Visits;
