const dataRows = [
  {
    area: 'Recepción'
  },
  {
    area: 'Ventas' 
  },
  {
    area: 'Producción'
  },
  {
    area: 'Dirección'
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('areas')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert(dataRows);
    });
};
