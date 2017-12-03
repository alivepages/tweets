
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('areas', table => {
      table.increments();
      table.string('area');
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('areas');
};
