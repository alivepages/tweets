
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('visits', table => {
      table.increments();
      table.timestamp('entryTime').defaultTo(knex.fn.now());
      table.timestamp('exitTime').nullable();
      table
        .integer('guestId')
        .unsigned()
        .index()
        .references('id')
        .inTable('guests');
      table
        .integer('areaId')
        .unsigned()
        .index()
        .references('id')
        .inTable('areas');
      table
        .integer('employeId')
        .unsigned()
        .index()
        .references('id')
        .inTable('employes');
      table
        .integer('reasonId')
        .unsigned()
        .index()
        .references('id')
        .inTable('reasons');
      table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('visits');
};
