
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('guests', table => {
      table.increments();
      table.string('name');
      table.string('company');
      table.string('identifyNumber');
      table.string('identifyType');
      table.text('pictureFile');
      table.boolean('inside');
      table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('guests');
};
