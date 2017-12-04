const { Model } = require('objection');

class Reasons extends Model {
  static get tableName () {
    return 'reasons';
  }
}

module.exports = Reasons;
