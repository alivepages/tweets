const { Model } = require('objection');

class Guests extends Model {
  static get tableName () {
    return 'guests';
  }
}

module.exports = Guests;
