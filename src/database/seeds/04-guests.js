const dataRows = [
  {
    name: 'Maria Hernandez',
    company: 'Telmex',
    identifyNumber: '12346789',
    identifyType: 'Pasaporte',
    pictureFile: ''
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guests')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('guests').insert(dataRows);
    });
};
