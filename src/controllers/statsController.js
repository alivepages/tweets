const Visits = require('../models/visits.js');
const Guests = require('../models/guests.js');
const controller = require('./controller.js');
const { raw } = require('objection');

class statsController {

  static total () {
    return Visits
      .query()
      .count('id as count')
      .then(data => {
          return data[0].count;
        }
      );
  }

  static byHour () {
    return Visits
      .query()
      .select(raw('hour(entryTime) as hour'))
      .count('id as count')
      .groupBy('hour')
      .then(data => {
          var count = [];
          for (var i = 0; i < data.length; i++) {
            var h = data[i].hour;
            count[h] = data[i].count;
          }
          var result = [];
          for (var i = 9; i < 20; i++) {
            result.push({
              pv: count[i] ? count[i] : 0
            });
          }
          return result;
        }
      );
  }

  static byMonth () {
    return Visits
      .query()
      .select(raw('month(entryTime) as month'))
      .count('id as count')
      .groupBy('month')
      .then(data => {
          var names = [
            '', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
          ]
          var count = [];
          for (var i = 0; i < data.length; i++) {
            var m = data[i].month;
            count[m] = data[i].count;
          }
          var result = [];
          for (var i = 1; i < 13; i++) {
            result.push({
              name: names[i],
              uv: count[i] ? count[i] : 0
            });
          }
          return result;
        }
      );
  }

 static byArea () {
   let colors = ['cyan600', 'pink600', 'purple600'];
   return Visits
      .query()
      .select('areas.area')
      .count('visits.id as count')
      .join('areas', 'visits.areaId', 'areas.id')
      .groupBy('visits.areaId')
      .then(data => {
        var result = [];
        for (var i = 0; i < data.length; i++) {
          var k = i % 3;
          result[i] = {
            name: data[i].area,
            value: data[i].count,
            color: colors[k]
          }
        }
        return result;
      });
  }

  static byCompany () {
    return Visits
      .query()
      .select('guests.company')
      .count('visits.id as count')
      .join('guests', 'visits.guestId', 'guests.id')
      .groupBy('guests.company')
      .orderBy('count', 'DESC')
      .limit(4)
      .then(data => {
          var result = [];
          for (var i = 0; i < data.length; i++) {
            result[i] = {
              id: (i + 1),
              title: data[i].company,
              text: data[i].count + ((data[i].count == '1') ? 'visita' : ' visitas')
            };
          }
          return result;
        }
      );
  }

  static async stats (req, res) {
    let stats = {
      total: await statsController.total(),
      byCompany: await statsController.byCompany(),
      byArea: await statsController.byArea(),
      byMonth: await statsController.byMonth(),
      byHour: await statsController.byHour()
    }
    res.json(stats);
  }

}

module.exports = statsController;
