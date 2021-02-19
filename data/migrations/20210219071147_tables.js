
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name').notNullable()
            table.string('project_description').notNullable()
            table.boolean('project_completed').notNullable()
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name').notNullable().unique()
        })
        .createTable('project_resources', table => {
            table.increments('project_resource_id')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.string('task_description').notNullable()
            table.boolean('task_completed').notNullable()
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
}; 
