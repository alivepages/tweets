const dataRows = [
  {
    email: 'joel@gmail.com',
    password: 'clave'
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert(dataRows);
  });
};
