// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('tasks').where('task_completed', true || false)
}

function add(task) {
    return db('tasks').insert(task).where('task_completed', true || false)
}