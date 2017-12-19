const dataRows = [
  {
    name: 'Juan Perez',
    areaId: 1
  },
  {
    name: 'Ernesto Gonzalez',
    areaId: 1
  },
  {
    name: 'Pepe Rodriguez',
    areaId: 2
  },
  {
    name: 'Raul García',
    areaId: 3
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('employes').insert(dataRows);
    });
};
