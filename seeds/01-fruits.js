
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {name: 'banana', avgWeightOz: 16.7, delicious: true},
        {name: 'apple', avgWeightOz: 6.7, delicious: true},
        {name: 'peach', avgWeightOz: 16, delicious: true}
      ]);
    });
};
