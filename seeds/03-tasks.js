
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'learn itttt', task_completed: false, task_notes: 'yezzir', project_id: 1}
      ]);
    });
};
