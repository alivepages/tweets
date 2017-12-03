const dataRows = [
  {
    reason: 'Personal'
  },
  {
    reason: 'Entrevista'
  },
  {
    reason: 'Publicidad'
  },
  {
    reason: 'Seguimiento de Proyecto'
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reasons')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reasons').insert(dataRows);
    });
};
