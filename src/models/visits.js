const { Model } = require('objection');

class Visits extends Model {
  static get tableName () {
    return 'visits';
  }

  static get relationMappings() {
    const Guests = require('./guests');
    return {
      guests: {
        relation: Model.BelongsToOneRelation,
        modelClass: Guests,
        join: {
          from: 'visits.guestId',
          to: 'guests.id'
        }
      }
    };
  }

}

module.exports = Visits;
