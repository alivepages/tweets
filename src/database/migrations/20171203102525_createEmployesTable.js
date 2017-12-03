
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('employes', table => {
      table.increments();
      table.string('name');
        table
        .integer('areaId')
        .unsigned()
        .index()
        .references('id')
        .inTable('areas');
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('employes');
};
