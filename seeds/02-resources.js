
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Stack Overflow'}
      ]);
    });
};
