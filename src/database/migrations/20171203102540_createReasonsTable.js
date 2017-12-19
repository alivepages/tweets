
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('reasons', table => {
      table.increments();
      table.string('reason');
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('reasons');
};
