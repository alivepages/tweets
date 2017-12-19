const dataRows = [
  {
    entryTime: '2017-12-01 09:30:01',
    exitTime: '2017-12-01 10:45:01',
    guestId: 1,
    areaId: 1,
    reasonId: 1,
    employeId: 1,
    reason: 'Entrevista',
    employe: 'Paula'
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert(dataRows);
  });
};
